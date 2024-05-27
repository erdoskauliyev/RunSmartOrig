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


window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 1700) {
        document.querySelector('.upBtn').style.display = 'block';
    } else {
        document.querySelector('.upBtn').style.display = 'none';
    };
});
























/* 
window.addEventListener('scroll', () =>{
    const scrollPosition = window.scrollY;

    // Показываем кнопку при прокрутке страницы до 2500px
    if (scrollPosition >= 1666) {
        document.querySelector('.upBtn').style.display = 'block';
    } else {
        // Скрываем кнопку при обратном скролле
        document.querySelector('.upBtn').style.display = 'none';
    }
});  */