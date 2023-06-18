
const $host = axios.create({
   baseURL: 'http://localhost:7000/api/'
})

const $authHost = axios.create({
   baseURL: 'http://localhost:7000/api/'
})
const AuthInterceptor = config => {
   config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
   return config;
}
$authHost.interceptors.request.use(AuthInterceptor);

document.addEventListener('readystatechange', (e) => {
   if (e.target.readyState === 'interactive') {
      const token = localStorage.getItem('token');
      if (!token) {
         getForm();
      } else {
         preConect();
      } 
    } 
})

const main = document.querySelector('.body');
async function getForm() {
   const response = await $host.get('getLogin');
   main.innerHTML = response.data;
   const input = document.querySelector('.login__input');
   const error = document.querySelector('.error');
   const button = document.querySelector('.login__button');
   button.addEventListener('click', function () {
      if (!input.value) {
         input.classList.add('error');
      } else {
         fetchUser();
      } 
   })
   input.addEventListener('focus', function () {
      input.classList.remove('error');
      error.innerHTML = '';
   })
}

async function preConect() {
   try {
      const response = await $authHost.get('auth');
      if (response.data.token) {
         const { data } = await $authHost.get('getAdmin');
         main.innerHTML = data;
         logOutFunctional();
         adminFunctional();
         fetchCases();
      } else {
         main.innerHTML = response.data;
         document.querySelector('.login__button').addEventListener('click', function () {
            fetchUser();
         })
      };
      
   } catch (error) {
      console.log(error);
      const { data } = await $host.get('getLogin');
      main.innerHTML = data;
      document.querySelector('.login__button').addEventListener('click', function () {
         fetchUser();
      })
   } 
}

async function fetchUser(){
   try {
      const input = document.querySelector('.login__input');
      const response = await $host.post('login', { password: input.value });
      const error = document.querySelector('.error');
      if (response.data.token) {
         localStorage.setItem('token', response.data.token);
         const responseAdmin = await $authHost.get('getAdmin');
         main.innerHTML = responseAdmin.data;
         adminFunctional();
         logOutFunctional();
         fetchCases();
      } else {
         input.classList.add('error');
         error.innerHTML = response.data;
      }
      
   } catch (error) {
      console.log(error.message);
      error.innerHTML = error.message;
   }
   
}

function logOutFunctional() {
   document.addEventListener('click', function (e) {
      if (e.target === document.querySelector('.exit')) {
         localStorage.clear();
         location.reload();
      }
   })
}

async function fetchCases() {
   const { data } = await $host.get('getCases');

   function casesToPortfolio(cases) {
      if(cases.length === 0) return portfolioWrapper.innerHTML = '<p>Пока что нет постов</p>';
      document.querySelector('.portfolio').innerHTML = cases.map(item =>
         `<div class="portfolio__item">
            <a target="_blank" href='http://localhost:3000/portfolioitem.html?id:${item.id}'>
               <img class="portfolio__item-photo" src='http://localhost:7000/${item.photos[0]}'/>
            </a>
            <button case-id='${item.id}' title='Удалить' class='remove-case__button'>&#10006;</button>
         </div>`).reverse().join('');
   }

   document.querySelector('.case').innerHTML =
      [...new Set(data.map(item => item.type))].map(item => `<div class="case__item cases-tabs">${item}</div>`).join('');
   casesToPortfolio(data);
   const caseItems = document.querySelectorAll('.case__item');

   for (let removeCaseButton of document.querySelectorAll('.remove-case__button')) {
      removeCaseButton.addEventListener('click', function (e) {
         if (confirm('Удалить кейс?')) {
            deleteCase(removeCaseButton.getAttribute('case-id'));
         }
      })
   }

   document.addEventListener('click', function (e) {
      if (e.target === document.querySelector('.add__case')) {
          return showAddCaseMenu()
      }
      if (e.target.classList.contains('cases-tabs')) {
         if (!e.target.classList.contains('case__item-active')) {
            casesToPortfolio(data.filter(item => item.type == e.target.innerText));
         } else {
            casesToPortfolio(data);
         }
         e.target.classList.toggle('case__item-active');
         for (let caseItem of caseItems) {
            if (caseItem !== e.target) {
               caseItem.classList.remove('case__item-active');
            }
         }
      }  
   })
}

async function showAddCaseMenu(){
   try {
      const { data } = await $authHost.get('getAddCase');
      main.innerHTML = data;
      addCaseFunctional();
      logOutFunctional();
   } catch (error) {
      console.log(error.message);
   }
}

function addCaseFunctional() { 
   const addKindCaseWrapper = document.querySelector('.case__item-new');
   const addKindCaseInput = document.querySelector('.case__item-new_input');
   const addKindCaseButton = document.querySelector('.case__item-new_button');
   const caseItems = document.querySelectorAll('.case__item');
   const resultNewCase = {};

   document.addEventListener('click', function (e) { 
      if (e.target === document.querySelector('.return-button')) {
         location.reload();
      }
      if (addKindCaseWrapper.contains(e.target)) {
         addKindCaseWrapper.classList.add('focus');
      } else {
         addKindCaseWrapper.classList.remove('focus');
      }
      if ((e.target === addKindCaseButton) && (addKindCaseInput.value)) {
         for (let caseItem of caseItems) {
            caseItem.classList.remove('case__item-active');
         }
         addKindCaseWrapper.insertAdjacentHTML('beforebegin', `<div class="additional_case case__item case__item-active">${addKindCaseInput.value}</div>`);
         resultNewCase.type = addKindCaseInput.value;
         addKindCaseInput.value = '';
         addKindCaseWrapper.classList.remove('focus');
      }
      if (e.target.classList.contains('additional_case')) {
         e.target.remove();
         resultNewCase.type = '';
      }
      if (e.target.classList.contains('case__item')) {
         if (e.target.classList.contains('case__item-active')) resultNewCase.type = '';
         e.target.classList.toggle('case__item-active');   
         for (let caseItem of caseItems) {
            if (caseItem !== e.target) {
               caseItem.classList.remove('case__item-active');
            }
         }
      }  
   })
   for (let caseItem of caseItems) {
      caseItem.addEventListener('click', function (e) {
         resultNewCase.type = caseItem.innerHTML;
      })
   }
   
   const photoWrapper = document.querySelector('.add-case__input-wrapper');
   const outPhoto = document.querySelector('.add-case__output')
   const textArea = document.querySelector('.description-text');
   const inputContent = document.querySelector('.add-case__input-content');
   const dragText = document.querySelector('.drag-text');
   let files = [];
   
   photoWrapper.addEventListener('dragenter', function (e) {
      e.preventDefault();
      photoWrapper.classList.add('file-enter');
      inputContent.classList.add('inactive');
      dragText.classList.add('active');
   })
   photoWrapper.addEventListener('dragleave', function (e) {
      e.preventDefault();
      photoWrapper.classList.remove('file-enter');
      inputContent.classList.remove('inactive');
      dragText.classList.remove('active');
   })
   photoWrapper.addEventListener('dragover', function (e) {
      e.preventDefault();
      inputContent.classList.add('inactive');
      
   })
   function deleteOutPhotoAndChangeFiles() {
      for (let outPhotoRemoveButton of document.querySelectorAll('.remove-out__button')) {
         outPhotoRemoveButton.addEventListener('click', function () {
            const index = files.findIndex(item => item.name === outPhotoRemoveButton.getAttribute('file-name'));
            files.splice(index, 1);
            outPhotoRemoveButton.parentElement.remove();
            resultNewCase.photos = files;
          })
      }
   }
   function uploadPhoto(data) {
      files = [...files, ...data];
      const reader = [];
      for (let i in data) {
         if (data.hasOwnProperty(i)) {    
             reader[i] = new FileReader();
             reader[i].readAsDataURL(data[i]); 
            outPhoto.innerHTML += `<div class='out-photo__wrapper'>
               <button file-name='${data[i].name}' title='Удалить' class='remove-out__button'>&#10006;</button>
               <img class='out__photo' src="${URL.createObjectURL(data[i])}"/>
             </div>`;
         }
      }
      resultNewCase.photos = files;
   }
   photoWrapper.addEventListener('drop', function (e) {
      e.preventDefault();
      dragText.classList.remove('active');
      inputContent.classList.remove('inactive');
      photoWrapper.classList.remove('file-enter');
      uploadPhoto(e.dataTransfer.files);
      deleteOutPhotoAndChangeFiles();
   })
   
   document.querySelector('.input__add-img').addEventListener('change', function (e) {
      uploadPhoto(e.target.files);
      deleteOutPhotoAndChangeFiles();
   })
   
   textArea.addEventListener('change', function() {
      resultNewCase.description = textArea.value;
   })
   document.querySelector('.add-case__button').addEventListener('click', function() {
      const formData = new FormData();
      if (resultNewCase.photos){
      for (let i = 0; i < resultNewCase.photos.length; i++) {
         formData.append(`photos`, resultNewCase.photos[i])
         }
      } else {
         alert('Нужно загрузить хотя бы одну фотографию')
      }
      if(resultNewCase.type){
         formData.append('type', resultNewCase.type);
      } else {
         alert('Нужно указать тип операции')
      }
      formData.append('description', resultNewCase.description);
      if(resultNewCase.type && resultNewCase.photos) sendNewCase(formData)
   })
}

async function sendNewCase(newCase) {
   await $authHost.post('addCase', newCase, { enctype: 'multipart/form-data' });
   location.reload();
}

function adminFunctional() {
   const tabs = document.querySelectorAll('.admin__nav-item');
   const portfolio = document.querySelector('.admin__content-portfolio');
   const price = document.querySelector('.admin__content-price');
   
   document.addEventListener('click', function (e) {
      if (e.target === tabs[0]) {
         tabs[0].classList.add('active');
         tabs[1].classList.remove('active');
         portfolio.classList.add('active');
         price.classList.remove('active');
      }
      if (e.target === tabs[1]) {
         tabs[1].classList.add('active');
         tabs[0].classList.remove('active');
         portfolio.classList.remove('active');
         price.classList.add('active');
      }
   })
}
async function deleteCase(id) {
   console.log(id);
   const response = await $authHost.post('deleteCase', { id });
   if (response) alert('Кейс удалён');
   location.reload();
}







