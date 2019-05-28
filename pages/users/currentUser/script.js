window.onload = () => {


    let section__item_role = document.querySelectorAll('.section__item_role');

    section__item_role.forEach(function (element) {
        element.onclick = function () {
            if (element.children[2].classList.contains('role__block_menu')) {
                element.children[2].classList.remove('role__block_menu');
                element.children[2].classList.add('block_menu_show');
            } else {
                element.children[2].classList.remove('block_menu_show');
                element.children[2].classList.add('role__block_menu');
            }
        }

        console.log(element.children);
    });

}