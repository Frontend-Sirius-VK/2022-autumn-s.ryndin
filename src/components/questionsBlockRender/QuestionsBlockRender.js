import {QuestionBlock} from "../questionBlock/QuestionBlock.js";

export class QuestionsBlockRender {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(data) {
        this.container = document.createElement('div');
        this.container.classList.add('post-container');
        data.forEach((post) => {
            const newPost = new QuestionBlock(this.container);
            newPost.render(post.stats, post.title, post.excerp)
        });
        this.parent.appendChild(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
