//checbox img change
document.addEventListener('DOMContentLoaded', function () {
    var checkbox_items = document.querySelectorAll('.row2__col2__checklist-item');
    checkbox_items.forEach(element => {
        if (element.classList.contains('is-checked'))
            element.querySelector('.row2__col2__checklist-item-img').src = "./img/icons/checkboxes/checked.svg";
    });
});