document.addEventListener('readystatechange', (e) => {
   if (e.target.readyState === 'interactive') {
      fetchCases();
    } 
})

const $host = axios.create({
   baseURL: 'http://localhost:7000/api/'
})



async function fetchCases() {
   const { data } = await $host.get('getCases');
   const loader = document.querySelector('.portfolio__loader');
   const selectMobile = document.querySelector('.selected-case');
   function setCasesToDOM(cases) {
      document.querySelector('.portfolio').innerHTML = cases.map(item =>
         `<a href='http://localhost:3000/portfolioitem.html?id:${item.id}'>
            <div class="portfolio__item">
               <img class="portfolio__item-photo" src='http://localhost:7000/${item.photos[0]}'/>
               <label class='portfolio__item-label'>${item.type}</label>
            </div>
         </a>`).reverse().join('');
      loader.remove();
   }

   if (data && data.length > 0) { 
      if (window.innerWidth < 460) {
         document.querySelector('.selected-case').style.display = 'block';
      }
      document.querySelector('.case').innerHTML =
         [...new Set(data.map(item => item.type))].map(item => `<div class="case__item">${item}</div>`).join('');
      const SelectCaseMobile = document.querySelector('.select-case');
      setCasesToDOM(data);
      
      document.addEventListener('click', function (e) {
        
         if (e.target.classList.contains('case__item')) {
            if (!e.target.classList.contains('case__item-active')) {
               setCasesToDOM(data.filter(item => item.type == e.target.innerText));
               if (window.innerWidth < 460) {
                  document.querySelector('#selected-mobile').innerText = e.target.innerText;
                  SelectCaseMobile.classList.remove('active');
               }
            } else {
               setCasesToDOM(data);
               if (window.innerWidth < 460) {
                  document.querySelector('#selected-mobile').innerText = 'Все';
                  SelectCaseMobile.classList.toggle('active')
               }
            }
            e.target.classList.toggle('case__item-active');
            for (let caseItem of document.querySelectorAll('.case__item')) {
               if (caseItem !== e.target) {
                  caseItem.classList.remove('case__item-active');
               }
            }
         }  
         if (document.querySelector('.selected-case').contains(e.target)) {
            SelectCaseMobile.classList.toggle('active')
         }
      })
   } else {
      loader.innerHTML = 'Пока что нет кейсов';
   }
}





