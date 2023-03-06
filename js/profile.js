document.addEventListener('DOMContentLoaded', function () {
    var checkbox_items = document.querySelectorAll('.row2__col2__checklist-item');
    checkbox_items.forEach(element => {
        if (element.classList.contains('is-checked'))
            element.querySelector('.row2__col2__checklist-item-img').src = "./img/icons/checkboxes/checked.svg";
    });


    const checklist_slider = new Swiper('.row2__col2', {
        direction: 'horizontal',
        slidesPerView: '1',
        autoHeight: true,
        speed: 300,
        spaceBetween: 55,
        autoHeight: false,
        observer: true,
        observeParents: true,
        freeMode: true,
        pagination: {
            el: '.row2__col2-pagination',
            type: 'bullets',
            clickable: true,
        },
        scrollbar: {
            el: '.row2__col2-scrollbar',
            draggable: true,
        },
        breakpoints: {
            767: {
                slidesPerView: 'auto',
            }
        }
    });
});