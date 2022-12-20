import template from "./header.handlebars"
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
        const {alt, src, menuElements, buttons} = this;
        const context = {alt, src, menuElements, buttons};
        const html = template(context);

        this.parent.innerHTML += html;
    }
}
