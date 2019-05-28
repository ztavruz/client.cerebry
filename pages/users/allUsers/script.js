window.onload = () => {


    let item__list_menu = document.querySelectorAll('.item__list_menu');

    item__list_menu.forEach(function (element) {
        element.onclick = function () {
            if (element.children[1].classList.contains('menu__block_hide')) {
                element.children[1].classList.remove('menu__block_hide');
                element.children[1].classList.add('menu__block_show');
            } else {
                element.children[1].classList.remove('menu__block_show');
                element.children[1].classList.add('menu__block_hide');
            }
        }

        console.log(element.children);
    });


    // item__menu[0].onclick = function () {
    //     if(menu__block[0].classList.contains('menu__block_hide')){
    //         menu__block[0].classList.remove('menu__block_hide');
    //         menu__block[0].classList.add('menu__block_show');
    //     }else{
    //         menu__block[0].classList.remove('menu__block_show');
    //         menu__block[0].classList.add('menu__block_hide');
    //     }
    // }

}