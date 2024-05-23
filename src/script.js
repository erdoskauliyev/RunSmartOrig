// Получаем все изображения в слайдере
const slides = document.querySelectorAll('.slides img')

// Индекс текущего слайда
let slideIndex = 0;

// Идентификатор интервала для автоматической смены слайдов
let intervalId = 0;

// Вызываем функцию инициализации слайдера после полной загрузки документа
document.addEventListener('DOMContentLoaded', initializeSlider);

// Функция инициализации слайдера
function initializeSlider(){
    // Проверяем, что в слайдере есть изображения
    if(slides.length > 0) {
        // Показываем первый слайд
        slides[slideIndex].classList.add('displaySlide')
        // Запускаем автоматическую смену слайдов
        intervalId = setInterval(nextSlide, 5000);
    }
}

// Функция для показа определенного слайда по его индексу
function showSlide(index){
    // Если индекс больше количества слайдов, переходим на первый слайд
    if(index >= slides.length) {
        slideIndex = 0;
    } 
    // Если индекс меньше нуля, переходим на последний слайд
    else if(index < 0 ) {
        slideIndex = slides.length - 1;
    }
    
    // Убираем класс 'displaySlide' у всех слайдов
    slides.forEach(slide => {
        slide.classList.remove('displaySlide')
    });
    // Показываем слайд с соответствующим индексом
    slides[slideIndex].classList.add('displaySlide');
}

// Функция для перехода к предыдущему слайду
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}

// Функция для перехода к следующему слайду
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


// Добавляем класс 'catalog-item_content_active' ко всем элементам '.catalog-item_content'
const catalogContent = document.querySelectorAll('.catalog-item_content');
catalogContent.forEach(item => {
    item.classList.add('catalog-item_content_active');
});

// Добавляем обработчики событий клика для каждой ссылки в каталоге
const catalogLinks = document.querySelectorAll('.catalog-item_link');
catalogLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        const parentItem = event.target.closest('.catalog-item');
        const content = parentItem.querySelector('.catalog-item_content');
        content.classList.remove('catalog-item_content_active');

        const list = parentItem.querySelector('.catalog-item_list');
        list.classList.add('catalog-item_list_active');
    });
});

// Добавляем обработчики событий клика для каждой кнопки "назад" в каталоге
const catalogBacks = document.querySelectorAll('.catalog-item_back');
catalogBacks.forEach(back => {
    back.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке по умолчанию
        const parentBack = event.target.closest('.catalog-item');
        const list = parentBack.querySelector('.catalog-item_list');
        list.classList.remove('catalog-item_list_active');
        
        const content = parentBack.querySelector('.catalog-item_content');
        content.classList.add('catalog-item_content_active');
    });
});

// Делаем первую вкладку и соответствующее содержимое активными
const catalogTabs = document.querySelectorAll('.catalog_tab');
const catalogContents = document.querySelectorAll('.catalog_content');
catalogTabs[0].classList.add('catalog_tab_active');
catalogContents[0].classList.add('catalog_content_active');


catalogTabs.forEach((tab, index) => { /* параметры функции обратного вызова */
    tab.addEventListener('click', function() {
        catalogTabs.forEach(t => t.classList.remove('catalog_tab_active'));/* сокращенный вариант, использующий стрелочную функцию без фигурных скобок. */
        catalogContents.forEach(c => {
            c.classList.remove('catalog_content_active');/* написанный в расширенном формате с использованием фигурных скобок {} */

            tab.classList.add('catalog_tab_active');
            catalogContents[index].classList.add('catalog_content_active');
        });
    });
});



// Получение всех элементов с атрибутом data-modal
const modalButtons = document.querySelectorAll('[data-modal]');
// Получение всех модальных окон
const modals = document.querySelectorAll('.modal');
// Получение оверлея
const overlay = document.querySelector('.overlay');

// Добавление обработчика событий для каждой кнопки открытия модального окна
modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Получение значения атрибута data-modal у кнопки
        const modalId = button.getAttribute('data-modal');
        // Получение модального окна по ID
        const modal = document.getElementById(modalId);

        // Добавление классов 'active' для отображения оверлея и модального окна
        overlay.classList.add('active');
        modal.classList.add('active');
    });
});

// Добавление обработчика событий для каждой кнопки закрытия модального окна
modals.forEach(modal => {
    const closeButton = modal.querySelector('.close'); // Поиск элемента с классом 'close' внутри модального окна
    if (closeButton) { // Проверка, найден ли элемент
        closeButton.addEventListener('click', () => {
            // Удаление классов 'active' для скрытия оверлея и модального окна
            overlay.classList.remove('active');
            modal.classList.remove('active');
        });
    }
});

// Добавление обработчика событий для оверлея
overlay.addEventListener('click', () => {
    // Удаление класса 'active' у оверлея для его скрытия
    overlay.classList.remove('active');
    // Удаление класса 'active' у всех модальных окон для их скрытия
    modals.forEach(modal => {
        modal.classList.remove('active');
    });
});






















/* modalButtons.forEach(button => {
    button.addEventListener('click', () => {
         // Получаем значение атрибута data-modal у текущей кнопки
         const modalId = button.getAttribute('data-modal');
        
         // Получаем элемент модального окна по ID, который мы получили из атрибута data-modal
         const modal = document.getElementById(modalId);
         
         // Добавляем класс 'active' к overlay и модальному окну для их отображения
         overlay.classList.add('active');
         modal.classList.add('active');
    });
});
 */





















/* 
document.addEventListener('DOMContentLoaded', () => {
    const modalButtons = document.querySelectorAll('[data-modal]');
    const overlay = document.querySelector('.overlay');
    const modals = document.querySelectorAll('.modal');

    modalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            overlay.classList.add('active');
            modal.classList.add('active');
        });
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
        modals.forEach(modal => {
            modal.classList.remove('active');
        });
    }); 
}); */
 


























/*  
const catalogTabs = document.querySelectorAll('.catalog_tab');

catalogTabs.forEach(tab => {
    tab.addEventListener('click', function(event) { 
        catalogTabs.forEach(t => { 
            t.classList.remove('catalog_tab_active');
        });
        const currentTab = event.target.closest('.catalog_tab');
        currentTab.classList.add('catalog_tab_active');
    });
});
  */

   /*  const catalogTabs = document.querySelectorAll('.catalog_tab');
    const catalogContents = document.querySelectorAll('.catalog_content');

    catalogTabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            // Удаляем активный класс у всех вкладок и содержимого каталога
            catalogTabs.forEach(t => t.classList.remove('catalog_tab_active'));
            catalogContents.forEach(c => c.classList.remove('catalog_content_active'));

            // Добавляем активный класс только к выбранной вкладке и соответствующему содержимому каталога
            tab.classList.add('catalog_tab_active');
            catalogContents[index].classList.add('catalog_content_active');
        });
    });
 */
































/* const catalogItemContent = document.querySelectorAll('.catalog-item_content');

catalogItemContent.forEach(item => {
    item.classList.add('catalog-item_content_active');
})

const catalogLinks =  document.querySelectorAll('.catalog-item_link');
const catalogBack = document.querySelectorAll('.catalog-item_back');

catalogLinks.forEach(link => {
    link.addEventListener('click', function(event) {
       const parentItem = event.target.closest('.catalog-item');
       const content = parentItem.querySelector('.catalog-item_content');
       content.classList.remove('catalog-item_content_active');

       const list = parentItem.querySelector('.catalog-item_list');
       list.classList.add('catalog-item_list_active');
    });
});

 catalogBack.forEach(back => {
    back.addEventListener('click', function(event) {
        const parentBack = event.target.closest('.catalog-item');
        const list = parentBack.querySelector('.catalog-item_list');
        list.classList.remove('catalog-item_list_active');

        const content = parentBack.querySelector('.catalog-item_content');
        content.classList.add('catalog-item_content_active');
    });
 });
 */







