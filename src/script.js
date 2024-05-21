const slides = document.querySelectorAll('.slides img')
let slideIndex = 0;
let intervalId = 0;
//initializeSlider();

document.addEventListener('DOMContentLoaded', initializeSlider);
 
function initializeSlider(){
    if(slides.length > 0) {
        slides[slideIndex].classList.add('displaySlide')
        //intervalId = setInterval(nextSlide,5000);
    }
}

function showSlide(index){
    if(index >= slides.length) {
        slideIndex = 0;
    } else if(index < 0 ) {
        slideIndex = slides.length - 1;
    }
    
   //console.log(slides.length);
    slides.forEach(slide => {
        slide.classList.remove('displaySlide')
    });
    slides[slideIndex].classList.add('displaySlide');
}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}


const catalogContent = document.querySelectorAll('.catalog-item_content');

catalogContent.forEach(item => {
    item.classList.add('catalog-item_content_active');
});

const catalogLinks = document.querySelectorAll('.catalog-item_link');

catalogLinks.forEach(link => {
    link.addEventListener('click', function(even) {
        even.preventDefault(); /* предотвратить переход по ссылкам  */ 
        const parentItem = even.target.closest('.catalog-item');
        const content = parentItem.querySelector('.catalog-item_content');
        content.classList.remove('catalog-item_content_active');

        const list = parentItem.querySelector('.catalog-item_list');
        list.classList.add('catalog-item_list_active');
    });
});


const catalogBacks = document.querySelectorAll('.catalog-item_back');

catalogBacks.forEach(back => {
    back.addEventListener('click', function(event) {
        event.preventDefault();/* предотвратить переход по ссылкам  */ 
        const parentBack = event.target.closest('.catalog-item');
        const list = parentBack.querySelector('.catalog-item_list');
        list.classList.remove('catalog-item_list_active');
        
        const content = parentBack.querySelector('.catalog-item_content');
        content.classList.add('catalog-item_content_active');
    });
});

const catalogTabs = document.querySelectorAll('.catalog_tab'),
      catalogContents = document.querySelectorAll('.catalog_content');

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

const modalButtons = document.querySelectorAll('[data-modal]');
const modals = document.querySelectorAll('.modal');
const overlay = document.querySelector('.overlay');
/* 
modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);

        overlay.classList.add('active');
        modal.classList.add('active');
    })
}) */


modalButtons.forEach(button => {
    button.addEventListener('click', () => {
         // Получаем значение атрибута data-modal у текущей кнопки
      const modalId = button.getAttribute('data-modal');
       // Получаем элемент модального окна по ID, который мы получили из атрибута data-modal
      const mod = document.getElementById(modalId);
      
      overlay.classList.add('active');
      mod.classList.add('active');
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







