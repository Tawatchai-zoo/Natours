const linkArr = Array.from(document.getElementsByClassName('navigation__link'));
linkArr.forEach(el => el.addEventListener('click', () => {
    document.querySelector('label.navigation__button').click();
    setTimeout( () => window.scrollBy(0, 100),100);
}));