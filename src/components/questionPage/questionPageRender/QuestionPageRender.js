import {QuestionInfo} from "../questionInfo/QuestionInfo.js";

export class QuestionPageRender {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(data) {
        this.container = document.createElement('div')
        this.container.classList.add('container');

        const post = new QuestionInfo(this.container);
        post.render(data.title, data.excerp);

        this.parent.appendChild(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}