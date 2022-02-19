const topMenu = document.querySelector('.topMenu');
const menuPosition = topMenu.offsetTop;
const mobileMenuBtn = document.querySelector('.mobileMenuBtn');

const stickyMenu = () => {
    if (document.documentElement.clientWidth > 950) {
        if(window.pageYOffset >= menuPosition) {
            topMenu.classList.add('stickyMenu')
        }
        else {
            topMenu.classList.remove('stickyMenu')
        }
    }
}

const mobileMenu = () => {
    if (topMenu.classList == 'topMenu' 
    &&document.documentElement.clientWidth < 950) {
        topMenu.classList.add('nonactive');
    }
    if (topMenu.classList.contains('nonactive')) {
        topMenu.style.display = 'flex';
        topMenu.classList.add('active');
        topMenu.classList.remove('nonactive');
    }
    else if (topMenu.classList.contains('active')) {
        // topMenu.style.display = 'none';
        topMenu.classList.remove('active');
        topMenu.classList.add('nonactive');
    } 

}

window.onscroll = function(){stickyMenu()};

mobileMenuBtn.addEventListener('click', mobileMenu);