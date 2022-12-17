
export class Loader {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const loaderWrap = document.createElement('div');
        loaderWrap.className = 'loader-wrapper';
        const loader = document.createElement('span');
        loader.className = 'loader-wrapper__item';
        loaderWrap.append(loader);

        this.parent.appendChild(loaderWrap);
    }
}
