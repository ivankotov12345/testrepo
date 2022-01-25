const themeSwitcher = document.querySelector('.theme-switcher');
const bodyLight = document.querySelector ('.body');
const mainLight = document.querySelector ('.main');
const headerBg = document.querySelector('.img-header');
const logo = document.querySelector('.logo');
const links = document.querySelector('.nav-link-wrapper');
const textlink = document.querySelectorAll('.nav-link');
const textBlack = document.querySelectorAll('.theme-text');
const buttonWhite = document.querySelector('.hire-button');
const lineBlack = document.querySelectorAll('.line');
const priceBlack = document.querySelectorAll('.price-title');
const priceBlackColored = document.querySelectorAll('.price');
const textPriceBlackColored = document.querySelectorAll('.text-price');
const contactLigth = document.querySelector('.contacts-image');
const legendLigth = document.querySelector('.legend');
const fieldLigth = document.querySelectorAll('.field');
const linkBlack = document.querySelectorAll('.link');
const portfolioBtnBlack = document.querySelectorAll('.portfolio-btn');
const messageWhite = document.querySelector('.message-btn');
const langBtnActive = document.querySelectorAll('.lang-btn');
const orderBtnBlack = document.querySelectorAll('.order-shooting-btn');
const burgerBlack = document.querySelector('.line-burger');
const burgerBlackLines = document.querySelector('.burger')
const navLinkInnerWhite = document.querySelector('.nav-link-inner')


themeSwitcher.addEventListener('click', () => {
    themeSwitcher.classList.toggle('theme-switcher-actve');
    bodyLight.classList.toggle('theme');
    mainLight.classList.toggle('theme');
    headerBg.classList.toggle('light-theme-back');
    logo.classList.toggle('light-logo');
    textlink.forEach(el => el.classList.toggle('nav-color'));
    textBlack.forEach(el => el.classList.toggle('theme-color'));
    buttonWhite.classList.toggle('button-white');
    lineBlack.forEach(el => el.classList.toggle('line-black'));
    priceBlack.forEach(el => el.classList.toggle('black'));
    priceBlackColored.forEach(el => el.classList.toggle('black'));
    textPriceBlackColored.forEach(el => el.classList.toggle('black'));
    contactLigth.classList.toggle('light-theme-contacts');
    legendLigth.classList.toggle('legend-black');
    fieldLigth.forEach(el => el.classList.toggle('field-white'));
    linkBlack.forEach(el => el.classList.toggle('link-black'));
    portfolioBtnBlack.forEach(el => el.classList.toggle('portfolio-btn-black'));
    messageWhite.classList.toggle('message-btn-white');
    langBtnActive.forEach(el => el.classList.toggle('lang'));
    orderBtnBlack.forEach(el => el.classList.toggle('order-shooting-btn-black'));
    burgerBlack.classList.toggle('line-burger-black');
    burgerBlackLines.classList.toggle('line-burger-bl')
    navLinkInnerWhite.classList.toggle('white-inner')
})