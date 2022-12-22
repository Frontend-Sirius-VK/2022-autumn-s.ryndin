import template from "./header.handlebars";
import logo from "../../img/logo.png";
import shortLogo from "../../img/short-logo.png";
export class HeaderBlock {
    constructor(parent) {
        this.parent = parent;
        this.shortAlt = 'short-StackOverflow-logo';
        this.shortLogo = shortLogo;
        this.alt = 'StackOverflow-logo';
        this.src = logo;
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
        const {alt, src, shortAlt, shortLogo, menuElements, buttons} = this;
        const context = {alt, src, shortAlt, shortLogo, menuElements, buttons};
        const html = template(context);

        this.parent.innerHTML += html;
    }
}