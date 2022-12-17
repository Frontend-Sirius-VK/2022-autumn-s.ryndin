export class HeaderBlock {
    constructor(parent) {
        this.parent = parent;
        this.alt = 'StackOverflow-logo';
        this.src = '/src/img/logo.png';
        this.menuElements = ['About', 'Products', 'For Teams'];
        this.buttons = [{
            title: 'Log in',
            className: 'header__btn-login'
        },  {
            title: "Sign up",
            className: 'header__btn-sign'
        }];
    }

    render() {
        this.parent.innerHTML = '';
        const header = document.createElement('header');
        header.classList.add('header');

        const logo = document.createElement('a');
        logo.classList.add('header__logo');
        logo.href = '/';

        const hamb = document.createElement('div');
        hamb.classList.add('header__hamb');
        const hambField = document.createElement('div');
        hambField.classList.add('header__hamb-field');
        for (let i = 0; i < 3; i++) {
            const bar = document.createElement('span');
            bar.classList.add('header__hamb-field__bar');
            hambField.append(bar);
        }

        const img = document.createElement('img');
        img.classList.add('header__img');
        img.alt = this.alt;
        img.src = this.src;

        const shortImgContainer = document.createElement('a');
        shortImgContainer.classList.add('header__short-logo');
        const shortImg = document.createElement('img');
        shortImg.classList.add('header__short-img');
        shortImg.alt = 'StackOverflow-short-logo';
        shortImg.src = '/src/img/short-logo.png';

        const menu = document.createElement('ul');
        menu.classList.add('header__mnu-top');

        const buttons = document.createElement('div');
        buttons.classList.add('header__btns');

        this.menuElements.forEach((elem) => {
            const bulletElement = document.createElement('li');
            bulletElement.classList.add('header__mnu-top__element');
            const bulletLink = document.createElement('a');
            bulletLink.classList.add('header__mnu-top__link');
            bulletLink.textContent = elem;
            bulletElement.append(bulletLink);
            menu.append(bulletElement);
        })

        this.buttons.forEach((elem) => {
            const bulletLink = document.createElement('a');
            bulletLink.textContent = elem.title;
            bulletLink.classList.add(elem.className);
            buttons.append(bulletLink);
        })

        logo.append(img);
        shortImgContainer.append(shortImg);
        hamb.append(hambField);
        header.append(hamb);
        header.append(logo);
        header.append(shortImgContainer);
        header.append(menu);
        header.append(buttons);

        this.parent.appendChild(header);
    }
}
