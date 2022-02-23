//declaring base varies
const topMenu = document.querySelector('.topMenu');
const menuPosition = topMenu.offsetTop;
const mobileMenuBtn = document.querySelector('.mobileMenuBtn');
const offerBox = document.querySelector('.offerBox');
const goTopBtn = document.querySelector('.goTopBtn');
let shortDescText = document.querySelector('.shortDescText');
let indexSite = document.querySelector('.indexSite');
const offerNames = document.querySelectorAll('.offerName');

const stickyMenu = () => {
    if (document.documentElement.clientWidth > 950) {
        if (window.pageYOffset >= menuPosition) {
            topMenu.classList.add('stickyMenu');
            indexSite.style.display = 'flex';
        }
        else {
            topMenu.classList.remove('stickyMenu');
            indexSite.style.display = 'none';
        }
    }
}

const toggleOfferBox = () => {
    const frontLongDesc = document.querySelector('.frontLongDesc');
    if (frontLongDesc != null) {
        const toggleOfferPosition = frontLongDesc.offsetTop;
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

const loadingSite = (() => {
    const frontLongDesc = document.querySelector('.frontLongDesc');
    const loadingLongDesc = () => {
        if (document.documentElement.clientWidth > 950) {
            if (window.pageYOffset >= frontLongDesc.offsetTop - 500) {
                frontLongDesc.classList.add('active');
            }

        }
    }
    const loadingUsageElements = () => {
        if (document.documentElement.clientWidth > 950) {
            const usageElements = document.querySelectorAll('.usageElement');
            if (window.pageYOffset >= frontLongDesc.offsetTop - 100) {
                usageElements.forEach(singleElement => {
                    singleElement.classList.add('active');
                });
            }
        }
    }
    return {
        loadingLongDesc,
        loadingUsageElements,
    }
})();

const changeTextInterval = () => {
    setInterval(changeDescText, 3000);
}

window.onscroll = function () {
    stickyMenu();
    toggleOfferBox();

    loadingSite.loadingLongDesc();
    loadingSite.loadingUsageElements();

};
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

const changeOffer = (singleName) => {
    let ldpeelements = document.querySelector('.ldpeElements');
    let hdpeelements = document.querySelector('.hdpeElements');
    let papeelements = document.querySelector('.papeElements');
    if (singleName.classList.contains('ldpe')) {
        ldpeelements.classList.add('active');
        hdpeelements.classList.add('active');
        papeelements.classList.add('active');
    }
    else if (singleName.classList.contains('hdpe')) {
        hdpeelements.classList.add('active');
        ldpeelements.classList.remove('active');
        papeelements.classList.remove('active');
    }
    else if (singleName.classList.contains('pape')) {
        papeelements.classList.add('active');
        ldpeelements.classList.remove('active');
        hdpeelements.classList.remove('active');
    }
}
let prevName;
offerNames.forEach(singleName => {
    singleName.addEventListener('click', () => {
        let ldpeelements = document.querySelector('.ldpeElements');
        let hdpeelements = document.querySelector('.hdpeElements');
        let papeelements = document.querySelector('.papeElements');

        if (singleName.classList.contains('ldpe')) {
            if (prevName != undefined) {
                prevName.classList.remove('active');
            }
            singleName.classList.add('active');
            prevName = singleName;
            ldpeelements.classList.add('active');
            hdpeelements.classList.remove('active');
            papeelements.classList.remove('active');
        }
        else if (singleName.classList.contains('hdpe')) {
            if (prevName != undefined) {
                prevName.classList.remove('active');
                singleName.classList.add('active');
                prevName = singleName;
            }
            else {
                singleName.classList.add('active');
                prevName = singleName;
            }
            hdpeelements.classList.add('active');
            ldpeelements.classList.remove('active');
            papeelements.classList.remove('active');
        }
        else if (singleName.classList.contains('pape')) {
            if (prevName != undefined) {
                prevName.classList.remove('active');
            }
            singleName.classList.add('active');
            prevName = singleName;
            papeelements.classList.add('active');
            ldpeelements.classList.remove('active');
            hdpeelements.classList.remove('active');
        }
    });
});

const form = document.querySelector('.contactForm');

const userName = document.querySelector('#userName');
const userNameError = document.querySelector('.userNameError');

const phoneNumber = document.querySelector('#phoneNumber');
const phoneNumberError = document.querySelector('.phoneNumberError');

const email = document.querySelector('#mail');
const emailError = document.querySelector('.mailError');

const message = document.querySelector('#message');
const messageError = document.querySelector('.messageError');

const submitMsg = document.querySelector('.submitMsg');

const showError = (() => {
    
    const userNameErr = () => {
        if (userName.validity.valueMissing) {
            userNameError.textContent = 'Pole nie może być puste';
        }
    }
    const phoneNumberErr = () => {
        if (phoneNumber.validity.valueMissing) {
            phoneNumberError.textContent = 'Pole nie może być puste';
        }
        else if (phoneNumber.validity.tooShort) {
            phoneNumberError.textContent = 'Numer musi mieć minimum 9 cyfr'
        }
    }
    const emailErr = () => {
        if (email.validity.valueMissing) {
            emailError.textContent = 'Pole nie może być puste';
        }
        else if (email.validity.typeMismatch) {
            emailError.textContent = 'Wprowadź poprawny adres e-mail';
        }
    }
    return {
        userNameErr,
        phoneNumberErr,
        emailErr,
    }
})();

userName.addEventListener('input', () => {
    if (userName.validity.valid) {
        userNameError.textContent = '';
    }
    else {
        showError.userNameErr();
    }
});

phoneNumber.addEventListener('input', () => {
    if (phoneNumber.validity.valid) {
        phoneNumberError.textContent = '';
    }
    else {
        showError.phoneNumberErr();
    }
});

email.addEventListener('input', () => {
    if (email.validity.valid) {
        emailError.textContent = '';
    }
    else {
        showError.emailErr();
    }
});

const clearFormInputs = () => {
        userName.value = '';
        phoneNumber.value = '';
        email.value = '';
        message.value = '';
}

form.addEventListener('submit', (e) => {
    if(!userName.validity.valid
    || !phoneNumber.validity.valid
    || !email.validity.valid) 
    {
        submitMsg.textContent = 'Wszystkie pola muszą być poprawnie wypełnione!';
        submitMsg.classList.add('error');
        e.preventDefault();
    }
    else {
        submitMsg.textContent = 'Wiadomość została wysłana!';
        submitMsg.classList.remove('error');
    }
});
