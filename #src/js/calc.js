const price = [
   {id: 1, name: 'Эндопротезирование молочных желез любой доступ (две стороны) без стоимости имплантатов', cost: 276000 },
   {id: 2, name: 'Эндопротезирование молочных желез при тубулярной деформации груди (две стороны) без стоимости имплантатов', cost: 300000 },
   {id: 3, name: 'Повторная маммопластика с заменой имплантатов (две стороны) без стоимости имплантатов', cost: 278900 },
   {id: 4, name: 'Эндопротезирование молочных желез с применением эндоскопической техники (две стороны) без стоимости имплантатов', cost: 333000 },
   {id: 5, name: 'Эндопротезование молочных желез с одномоментной коррекцией птоза (две стороны) без стоимости имплантатов', cost: 276000},
   {id: 6, name: 'Мастопексия (коррекция птоза) без использования имплантатов (две стороны)', cost: 265000},
   {id: 7, name: 'Редукционная маммопластика 2 стороны (уменьшение груди)', cost: 297000},
   {id: 8, name: 'Редукционная маммопластика 2 стороны при гигантомастии (уменьшение груди)', cost: 329000},
   {id: 9, name: 'Введение собственного жира с целью коррекции контуров молочных желез (3 зоны липофилинга)', cost: 156000},
   {id: 10, name: 'Введение собственного жира с целью увеличения объема молочных желез (5 зон липофилинга)', cost: 260000},
   {id: 11, name: 'Коррекция ареолы (1 сторона)', cost: 47000},
   {id: 12, name: 'Коррекция ареолы (2 стороны)', cost: 56000},
   {id: 13, name: 'Пластика втянутых сосков (2 стороны)', cost: 27000},
   {id: 14, name: 'Пластика втянутых сосков (1 сторона)', cost: 21000},
   {id: 15, name: 'Редукция соска (2 стороны)', cost: 24000 },
   {id: 16, name: 'Редукция соска (1 сторона)', cost: 20000},
   {id: 17, name: 'Радикальная мастэктомия по Маддену', cost: 90000},
   {id: 18, name: 'Радикальная резекция молочной железы', cost: 100000 },
   {id: 19, name: 'Радикальная подкожная мастэктомия с одномоментной установкой силиконового эндопротеза (без стоимости эндопротеза)', cost: 149000 },
   {id: 20, name: 'Радикальная кожесохранная мастэктомия с одномоментной установкой силиконового эндопротеза (без стоимости эндопротеза)', cost: 149000},
   {id: 21, name: 'Секторальная резекция молочной железы 1 к.с', cost: 20000 },
   {id: 22, name: 'Секторальная резекция молочной железы 2 к.с', cost: 30000 },
   {id: 23, name: 'Биопсия сигнального лимфоузла', cost: 0},
   {id: 24, name: 'Резекция молочной железы с БСЛУ', cost: 159000},
   {id: 25, name: 'Подкожная мастэктомия с БСЛУ с одномоментной установкой силиконового эндопротеза (без стоимости эндопротеза)', cost: 200000},
   {id: 26, name: 'Удаление липомы', cost: 20000 },
   {id: 27, name: 'Отсроченная микрохирургическая пластика (все виды) Отсроченная микрохирургическая реконструкция груди свободным абдоминальным трансплантатом (DIEAP) с использованием микрохирургической техники (1 сторона)', cost: 535000 },
   {id: 28, name: 'Отсроченная реконструкция молочной железы с установкой эспандера (1 сторона) без стоимости эспандера', cost: 89000 },
   { id: 29, name: 'Отсроченная реконструкция молочной железы ТДЛ-лоскутом с одномоментной установкой эспандера (1 сторона) без стоимости эспандера', cost: 209000 },
   { id: 30, name: 'Отсроченная реконструкция молочной железы (2 этап) замена эспандера на постоянный имплантат (1 сторона) без стоимости имплантата', cost: 119000 },
   { id: 31, name: 'Реконструкция соска местными тканями (1 сторона)', cost: 55000 },
   { id: 32, name: 'Эндопротезование молочных желез с одномоментной коррекцией птоза периареолярным доступом (одна сторона) без стоимости имплантатов', cost: 129000 },
   { id: 33, name: 'Эндопротезование молочных желез с одномоментной коррекцией птоза вертикальным доступом (одна сторона) без стоимости имплантатов', cost: 129000 },
   { id: 34, name: 'Эндопротезование молочных желез с одномоментной коррекцией птоза Т-инвертированным доступом (одна сторона) без стоимости имплантатов', cost: 149000 },
   { id: 35, name: 'Резекция молочной железы субтотальная с одномоментным эндопротезированием (1 сторона) (без стоимости имплантатов)', cost: 139000 },
   { id: 36, name: 'Резекция молочной железы субтотальная с одномоментным эндопротезированием (2 стороны) (без стоимости имплантатов)', cost: 220000 },
   {id: 37, name: 'Редукционная маммопластика (уменьшение груди) при гигантомастии (1 сторона)', cost: 169000},
   {id: 38, name: 'Редукционная маммопластика (уменьшение груди), (1 сторона)', cost: 139000 },
   { id: 39, name: 'Мастопексия без имплантов (1 сторона)', cost: 129000 },
   {id: 40, name: 'Удаление имплантатов (1 сторона)', cost: 60000},
   {id: 41, name: 'Удаление имплантатов (2 стороны)', cost: 110000},
   {id: 42, name: 'Миниабдоминопластика', cost: 172000},
   { id: 43, name: 'Абдоминопластика, 1 к.с', cost: 279000 },
   {id: 44, name: 'Абдоминопластика, 2 к.с', cost: 333000},
   { id: 45, name: 'Пластика пупочной грыжи', cost: 40000 },
   { id: 46, name: 'Пластика грыжи белой линии живота', cost: 60000 },
   { id: 47, name: 'Пластика плеч', cost: 306000 },
   { id: 48, name: 'Пластика бедер', cost: 352000 },
   {id: 49, name: 'Коррекция малых половых губ ', cost: 50000},
   { id: 50, name: 'Липоаспирация (1 зона)', cost: 32000 },
   { id: 51, name: 'Липофилинг (1 зона)', cost: 51000 },
   { id: 52, name: 'Коррекция рубца 1 к.с.', cost: 38000 },
   {id: 53, name: 'Коррекция рубца 2 к.с.', cost: 78000},
   { id: 54, name: 'Коррекция гинекомастии (2 стороны) – 1 категория сложности', cost: 92000 },
   {id: 55, name: 'Коррекция гинекомастии (2 стороны) – 2 категория сложности', cost: 159000}
]
const additional = [
   { id: 56, name: '30 минут наркоза', cost: 4000 },
   { id: 57, name: 'Анатомические импланты (2 шт)', cost: 95000 },
   { id: 58, name: 'Анатомический имплант (1 шт)', cost: 47500 },
   { id: 59, name: 'Гистологическое исследование', cost: 1600 },
   {id: 60, name: 'Дневной стационар, 3 часа', cost: 1500},
   { id: 61, name: 'Компрессионное бельё', cost: 5000 },
   { id: 62, name: 'Компрессионные чулки', cost: 2000 },
   {id: 63, name: 'Компрессионный топ', cost: 5000},
   { id: 64, name: 'Компрессионный бандаж', cost: 7700 },
   { id: 65, name: 'Компрессионные рукава', cost: 3950 },
   { id: 66, name: 'Компрессионные штаны (Капри, бриджи)', cost: 5750 },
   { id: 67, name: 'Компрессионный боди', cost: 8300 },
   {id: 68, name: 'Комбинезон', cost: 13800},
   {id: 69, name: 'Круглые импланты (2 шт)', cost: 70000},
   { id: 70, name: 'Круглый имплант (1 шт)', cost: 35000 },
   { id: 71, name: 'Местная анестезия', cost: 1200 },
   { id: 72, name: 'Экспандер груди (1 шт)', cost: 41600 },
   { id: 73, name: 'Ягодичные импланты (2 шт)', cost: 60000 },
   {id: 74, name: 'Ягодичный имплант (1 шт)', cost: 30000},
]

const resultOperation = [];
const resultAdditional = [];
const priceCLone = Array.from(price);
const additionalCLone = Array.from(additional);


const inputOperations = document.querySelector('.input_operations');
const inputAdditional = document.querySelector('.input_additional');

const operationsList = document.querySelector('.operations_list');
const additionalList = document.querySelector('.additional_list');

const operationsListContainer = document.querySelector('.select.operations');
const additionalListContainer = document.querySelector('.select.additional');

const selectedOperationContainer = document.querySelector('.selected_operations-container');
const selectedAdditionalContainer = document.querySelector('.selected_additional-container');

const containerOperation = document.querySelector('.container_operation');
const containerAddtitonal = document.querySelector('.container_additional');

const narcosisTimeEl = document.querySelector('.narcosis_time');
const inclinicTimeEL = document.querySelector('.inclinic_time');
const onedayCheckboxEL = document.querySelector('.inputoneday_checkbox');
const narcosisFirsthourEL = document.querySelector('.narcosis_firsthour');
const narcosisNexthoursEL = document.querySelector('.narcosis_nexthours');

let narcosisTime = narcosisTimeEl.value;
let inclinicTime = inclinicTimeEL.value;
let onedayCheckbox = onedayCheckboxEL.checked;
let narcosisFirsthour = narcosisFirsthourEL.value;
let narcosisNexthours = narcosisNexthoursEL.value;
const textArea = document.querySelector('textarea');
let formatter = new Intl.NumberFormat("ru");

function changeToHTML(currentPrice, list) {
   if (currentPrice.length === 0) {
      return `<div class='list_item-default'>Ничего не найдено</div>`
   }
   return currentPrice.map(item => `<div item_id='${item.id}'class='list_item ${list == 'operation' ? 'operation_item' : 'additional_item'}'>${item.name}</div>`).join('');
}
function newAction() {
   const narcosisCost = narcosisTime > 60 ? Math.floor(+narcosisFirsthour + ((narcosisTime - 60) / 60 * +narcosisNexthours)) : Math.floor(narcosisTime / 60 * narcosisFirsthour);
   const inclinicTimeResult = inclinicTime > 0 ? `Пребывание в клинике ${inclinicTime} дн. — ${formatter.format(inclinicTime * 8000)}` + '₽' + '\n' : '';
   const narcosisTimeResult = narcosisTime > 0 ? `Наркоз ${Math.floor(narcosisTime / 60)} ч. ${Math.round(narcosisTime % 60)} мин. — ${formatter.format(narcosisCost)}` + '₽' + '\n' : '';
   const checkBoxResult = `${onedayCheckbox ? 'Заезд за день до операции + массаж — 8 000₽' + '\n': ''}`;
   const viewResult = resultOperation.map(item => `${item.name} — ${formatter.format(item.cost)}₽\n`).join('')
      + narcosisTimeResult + checkBoxResult + inclinicTimeResult +
       resultAdditional.map(item => `${item.name} — ${formatter.format(item.cost)}₽\n`).join('');

   textArea.innerHTML = viewResult + `\nИтого: ` + formatter.format([...resultOperation, ...resultAdditional].reduce((sum, current) => sum + current.cost, 0) + narcosisCost + inclinicTime * 8000 + (onedayCheckbox ? 8000 : 0)) + '₽';
}

function closeItem(parentNode, isOperationList) {
   selectedReturnOperationId = parentNode.getAttribute('item_id');
   parentNode.remove();
   if (isOperationList) {
      price.splice(selectedReturnOperationId - 1, 0, priceCLone[selectedReturnOperationId - 1]);
      resultOperation.splice(resultOperation.findIndex(item => item.id == selectedReturnOperationId), 1);
      operationsList.innerHTML = changeToHTML(price, 'operation');
   } else {
      additional.splice(additionalCLone.findIndex(item => item.id == selectedReturnOperationId), 0, additionalCLone[additionalCLone.findIndex(item => item.id == selectedReturnOperationId)]);
      resultAdditional.splice(resultAdditional.findIndex(item => item.id == selectedReturnOperationId), 1);
      additionalList.innerHTML = changeToHTML(additional, 'additional');
   }
   newAction();
}

function addItem(isOperation, id, elemText) {
   return `<div item_id='${id}' class='selected_operation'>
      <p>${elemText}</p>
      <button class=${isOperation ? 'close_operation' : 'close_additional'}>
      </button >
   </div>` ;
}

operationsList.innerHTML = changeToHTML(price, 'operation');
additionalList.innerHTML = changeToHTML(additional, 'additional');

inputOperations.addEventListener('input', function () {
   const sortedPrice = price.filter(item => { return item.name.toLowerCase().indexOf(inputOperations.value.toLowerCase()) > -1 })
   if (sortedPrice.length === 0) {
      operationsList.innerHTML = `<div class='list_item-default'>Ничего не найдено</div>`;
   } else {
      const sortedPriceListHTML = changeToHTML(sortedPrice, 'operation');
      operationsList.innerHTML = sortedPriceListHTML;
   }
})
inputAdditional.addEventListener('input', function () {
   const sortedPrice = additional.filter(item => { return item.name.toLowerCase().indexOf(inputAdditional.value.toLowerCase()) > -1 });
   if (sortedPrice.length === 0) {
      additionalList.innerHTML = `<div class='list_item-default'>Ничего не найдено</div>`;
   } else {
      const sortedPriceListHTML = changeToHTML(sortedPrice, 'additional');
      additionalList.innerHTML = sortedPriceListHTML;
   }
})

narcosisTimeEl.addEventListener('input', function () {
   narcosisTime = narcosisTimeEl.value;
   newAction()
})
onedayCheckboxEL.addEventListener('input', function () {
   onedayCheckbox = onedayCheckboxEL.checked;
   newAction()
})
narcosisFirsthourEL.addEventListener('input', function () {
   narcosisFirsthour = narcosisFirsthourEL.value;
   newAction()
})
narcosisNexthoursEL.addEventListener('input', function () {
   narcosisNexthours = narcosisNexthoursEL.value;
   newAction()
})
inclinicTimeEL.addEventListener('input', function () {
   inclinicTime = inclinicTimeEL.value;
   newAction()
})
document.addEventListener("click", function (e) {
   if (containerOperation.contains(e.target)) {
      operationsList.classList.add('active');
      operationsListContainer.classList.add('focus');
   } else {
      operationsList.classList.remove('active');
      operationsListContainer.classList.remove('focus');
   }
   if (containerAddtitonal.contains(e.target)) {
      additionalList.classList.add('active');
      additionalListContainer.classList.add('focus');
   } else {
      additionalList.classList.remove('active');
      additionalListContainer.classList.remove('focus');
   }
  
   if (e.target.classList.value == 'list_item operation_item') {
      const selectedOperationId = e.target.getAttribute('item_id');
      selectedOperationContainer.innerHTML = addItem(true, selectedOperationId, e.target.textContent)
         + selectedOperationContainer.innerHTML;
      resultOperation.push({ id: e.target.getAttribute('item_id'), name: e.target.textContent, cost: priceCLone[selectedOperationId - 1].cost });
      price.splice(price.findIndex(item => item.id == selectedOperationId), 1);
      operationsList.innerHTML = changeToHTML(price, 'operation');
      inputOperations.value = '';
      if (!resultAdditional.some(item => item.id == 62)) {
         selectedAdditionalContainer.innerHTML = addItem(false, 62, 'Компрессионные чулки') + selectedAdditionalContainer.innerHTML;
         resultAdditional.push({ id: 62, name: 'Компрессионные чулки', cost: 2000 });
         additional.splice(6, 1);
         additionalList.innerHTML = changeToHTML(additional, 'additional');
      }
      newAction();
   }

   if (e.target.classList.value == 'list_item additional_item') {
      let selectedOperationId = e.target.getAttribute('item_id');
      selectedAdditionalContainer.innerHTML = addItem(false, selectedOperationId, e.target.textContent)
         + selectedAdditionalContainer.innerHTML;
      const selectedIndex = additional.findIndex(item => item.id == selectedOperationId);
      resultAdditional.push({ id: e.target.getAttribute('item_id'), name: e.target.textContent, cost: additional[selectedIndex].cost });
      additional.splice(additional.findIndex(item => item.id == selectedOperationId), 1);
      additionalList.innerHTML = changeToHTML(additional, 'additional');
      newAction();
      inputAdditional.value = '';
   }

   if (e.target.classList.value === 'close_operation') {
      closeItem(e.target.parentNode, true)
   }
   if (e.target.classList.value === 'close_additional') {
      closeItem(e.target.parentNode, false)
   }
})

