//declaring base varies
const topMenu = document.querySelector('.topMenu');
const menuPosition = topMenu.offsetTop;
const mobileMenuBtn = document.querySelector('.mobileMenuBtn');
const offerBox = document.querySelector('.offerBox');
const frontLongDesc = document.querySelector('.frontLongDesc');
const toggleOfferPosition = frontLongDesc.offsetTop;
const goTopBtn = document.querySelector('.goTopBtn');
let shortDescText = document.querySelector('.shortDescText');

const stickyMenu = () => {
    if (document.documentElement.clientWidth > 950) {
        if (window.pageYOffset >= menuPosition) {
            topMenu.classList.add('stickyMenu');
        }
        else {
            topMenu.classList.remove('stickyMenu');
        }
    }
}

const toggleOfferBox = () => {
    if (document.documentElement.clientWidth > 950) {
        if (window.pageYOffset >= toggleOfferPosition) {
            offerBox.style.display = 'flex';
            goTopBtn.classList.add('active');
        }
        else {
            offerBox.style.display = 'none';
            goTopBtn.classList.remove('active');
        }
    }
}

const mobileMenu = () => {
    if (topMenu.classList == 'topMenu'
        && document.documentElement.clientWidth < 950) {
        topMenu.classList.add('nonactive');
    }
    if (topMenu.classList.contains('nonactive')) {
        topMenu.style.display = 'flex';
        topMenu.classList.add('active');
        topMenu.classList.remove('nonactive');
    }
    else if (topMenu.classList.contains('active')) {
        topMenu.classList.remove('active');
        topMenu.classList.add('nonactive');
    }

}

const changeDescText = () => {
        if (shortDescText.textContent == 'najwyższą jakość') {
            shortDescText.textContent = 'najlepszą obsługę';
            shortDescText.classList.remove('thirdChange');
            shortDescText.classList.add('secondChange');   
        }
        else if (shortDescText.textContent == 'najlepszą obsługę') {
            shortDescText.textContent = 'konkurencyjne ceny';
            shortDescText.classList.remove('secondChange');
            shortDescText.classList.add('firstChange');              
        }
        else if (shortDescText.textContent == 'konkurencyjne ceny') {
            shortDescText.textContent = 'najwyższą jakość';
            shortDescText.classList.remove('firstChange');
            shortDescText.classList.add('thirdChange'); 
        }
}

const changeTextInterval = () => {
    setInterval(changeDescText, 3000);
}

window.onscroll = function () { stickyMenu() };
window.onscroll = function () { toggleOfferBox() };
window.onload = function () { changeTextInterval() };

mobileMenuBtn.addEventListener('click', mobileMenu);

const slideButtons = document.querySelectorAll('.operateButton');

const sliders = document.querySelectorAll('.slide');
const slidersCount = sliders.length - 1;
let i = 0;

const goRight = () => {
    clearInterval(timeoutChange);
    timeoutChange = setInterval(goRight, 5000);
    let currentSlide = sliders[i];
    let nextSlide = sliders[i + 1];
    if (i < slidersCount) {
        i += 1;
        currentSlide.classList.remove('active');
        currentSlide.classList.add('nonactive');
        nextSlide.classList.remove('nonactive');
        nextSlide.classList.add('active');
    }
    else if (i == slidersCount) {
        i = 0;
        currentSlide.classList.remove('active');
        currentSlide.classList.add('nonactive');
        nextSlide = sliders[i];
        nextSlide.classList.remove('nonactive');
        nextSlide.classList.add('active');
    }
}

let timeoutChange = setInterval(goRight, 5000);

const goLeft = () => {
    clearInterval(timeoutChange);
    timeoutChange = setInterval(goRight, 5000);
    let currentSlide = sliders[i];
    let prevSlide = sliders[i - 1];
    if (i == 0) {
        i = slidersCount;
        currentSlide.classList.remove('active');
        currentSlide.classList.add('nonactive');
        prevSlide = sliders[i];
        prevSlide.classList.remove('nonactive');
        prevSlide.classList.add('active');
    }
    else if (i <= slidersCount) {
        i -= 1;
        currentSlide.classList.remove('active');
        currentSlide.classList.add('nonactive');
        prevSlide.classList.remove('nonactive');
        prevSlide.classList.add('active');
    }
}

slideButtons.forEach(slideBtn => {
    slideBtn.addEventListener('click', () => {
        if (slideBtn.classList.contains('rightArrow')) {
            goRight();
        }
        else if (slideBtn.classList.contains('leftArrow')) {
            goLeft();
        }
    });
});

