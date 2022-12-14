export class HeaderBlock {
    constructor(parent) {
        this.parent = parent;
        this.alt = 'StackOverflow-logo';
        this.src = '/src/img/logo.png';
        this.menuElements = ['About', 'Products', 'For Teams'];
        this.buttons = [{
            title: 'Log in',
            className: 'btn-login'
        },  {
            title: "Sign up",
            className: 'btn-sign'
        }];
    }

    render() {
        this.parent.innerHTML = '';
        const header = document.createElement('header');
        header.classList.add('header-container');

        const logo = document.createElement('a');
        logo.classList.add('header-logo');

        const hamb = document.createElement('div');
        hamb.classList.add('hamb');
        const hambField = document.createElement('div');
        hambField.classList.add('hamb-field');
        for (let i = 0; i < 3; i++) {
            const bar = document.createElement('span');
            bar.classList.add('bar');
            hambField.append(bar);
        }

        const img = document.createElement('img');
        img.classList.add('photo-logo');
        img.alt = this.alt;
        img.src = this.src;

        const shortImgContainer = document.createElement('a');
        shortImgContainer.classList.add('header-short-logo');
        const shortImg = document.createElement('img');
        shortImg.classList.add('short-photo-logo');
        shortImg.alt = 'StackOverflow-short-logo';
        shortImg.src = '/src/img/short-logo.png';

        const menu = document.createElement('ul');
        menu.classList.add('header-mnu_top');

        const buttons = document.createElement('div');
        buttons.classList.add('header-btns');

        this.menuElements.forEach((elem) => {
            const bulletElement = document.createElement('li');
            bulletElement.classList.add('header-mnu_element');
            const bulletLink = document.createElement('a');
            bulletLink.classList.add('header-mnu_link');
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
