/****************************************Switch active class function *************************************/
// function active() {
//     document.querySelectorAll('li a')[0].classList.remove('active');
//     document.querySelectorAll('li a')[1].classList.add('active');
// }

/*****************************************************Decleration*************************************************************** */
function removeDisabled() {
    document.querySelectorAll('.btn')[1].classList.remove('disabled');
}

function addDisabled() {
    document.querySelectorAll('.btn')[1].classList.add('disabled');
}

/*********************************NAV-SLIDE*********************************************/


/**********************************************************************Validate Form ****************************************************************/

function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone_number = document.getElementById('phone-number');
    function focus_red(var_focus_red) {
        var_focus_red.focus();
        var_focus_red.style.border = '3px solid red';    
    }
    if (name.value == '') {
        focus_red(name);
        return false;
    }

    if (email.value == '') {
        focus_red(email);
        return false;
    }
    if (phone_number.value == '') {
        focus_red(phone_number);
        return false;
    }
}

/******************************************************** Preloader ******************************************************/

window.addEventListener('load', function() {
    const preload = document.querySelector('.preload');
    preload.classList.add('preload-finish');
})

/******************************************************Animations on scroll**************************************** */
function slideIn(slideSection, slideSectionClass) {
    const slideSectionI = document.querySelector(`${slideSection}`);
    const slideSectionItop = slideSectionI.getBoundingClientRect().top;

    if(slideSectionItop < window.innerHeight/2) {
        slideSectionI.classList.add(`${slideSectionClass}`);
    } else {
        slideSectionI.classList.remove(`${slideSectionClass}`);
    }
}
/***********First Image Display Slide In *********************/
function firstImageDisplaySlideIn() {
    slideIn('.first-image-display', 'first-image-display-appear');
}

window.addEventListener('scroll', firstImageDisplaySlideIn);


/***********About Us Slide In *********************/

function aboutUsSlideIn() {
    slideIn('.about-us', 'about-us-appear');
}
window.addEventListener('scroll', aboutUsSlideIn);

/***********Why choose Us Slide In *********************/
window.addEventListener('scroll', () => slideIn('.why-choose-us', 'why-choose-us-appear'));

/***********************Contact us form h3******************** */
window.addEventListener('scroll', () => slideIn('#contact-us .contact-form-h3', 'contact-form-h3-appear'));
/**********************Contact us form appear ******/
window.addEventListener('scroll', () => slideIn('.contact-us-form', 'contact-us-form-appear'));
/**************************Footer list appear *************/
function footerListSlide() {
    const footerUl = document.querySelector('.footer-ul');
    const footerUlTop = footerUl.getBoundingClientRect().top;
    console.log(footerUlTop);
    console.log(window.innerHeight);
    if(footerUlTop < window.innerHeight) {
        footerUl.classList.add(`footer-ul-appear`);
    } else {
        footerUl.classList.remove(`footer-ul-appear`);
    }
}

window.addEventListener('scroll', ()=> footerListSlide())