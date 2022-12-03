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
        const header = document.createElement('header');

        const logo = document.createElement('a');
        logo.classList.add('header-logo');

        const img = document.createElement('img');
        img.alt = this.alt;
        img.src = this.src;

        const menu = document.createElement('ul');
        menu.classList.add('header-mnu_top');

        const buttons = document.createElement('div');
        buttons.classList.add('header-btns');

        this.menuElements.forEach((elem) => {
            const bulletElement = document.createElement('li');
            const bulletLink = document.createElement('a');
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
        header.append(logo);
        header.append(menu);
        header.append(buttons);

        this.parent.appendChild(header);
    }
}
