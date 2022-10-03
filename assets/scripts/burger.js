const burger = document.querySelector('.burger');
const navMenuMobile = document.querySelector('.logo_and_menu');

function navSwitcher(el) {

    let target = el.target;
    console.log(target);
    
    if (target === burger ) {

        burger.classList.toggle('burger-x')
        navMenuMobile.classList.toggle('burger-open');

    } else if ((target.closest('.nav-item') || target.closest('.designed-text')) && !target.closest('.active-page')) {

        burger.classList.remove('burger-x')
        navMenuMobile.classList.remove('burger-open');

    } else if (target != navMenuMobile && !target.closest('.nav-and-designed') && !target.closest('.nav-wrapper')) {

        burger.classList.remove('burger-x')
        navMenuMobile.classList.remove('burger-open');

    }

}

document.addEventListener('click', navSwitcher);