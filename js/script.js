document.addEventListener('DOMContentLoaded', function () {
    //sidebar menu current page highlight
    const current_page = document.querySelector('.page').id;
    const current_page_link = document.getElementById(`sidebar__menu-link--${current_page}`);
    current_page_link.classList.add("is-active");

    //sidebar menu collapse on 1279px
    const sidebar = document.querySelector(".sidebar");
    const expand_btn = document.querySelector(".sidebar__expand-btn");
    if (expand_btn.style.display != 'none') {
        expand_btn.addEventListener("click", function () {
            sidebar.classList.toggle('is-collapsed');
            expand_btn.classList.toggle('is-active');
        });
    }

    if (window.innerWidth <= 1279) {
        sidebar.classList.add('is-collapsed');
    } else {
        sidebar.classList.remove('is-collapsed');
    }
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 1279) {
            sidebar.classList.add('is-collapsed');
        } else {
            sidebar.classList.remove('is-collapsed');
        }
    });



    //header menu language icon change
    var user_lang = navigator.language || navigator.userLanguage;
    console.log(user_lang);
    document.getElementById('header__menu-link--language').style = `background: url('./img/icons/languages/${user_lang}.svg') center / contain no-repeat;`
});
