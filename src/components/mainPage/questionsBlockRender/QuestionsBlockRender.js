import {QuestionBlock} from "../questionBlock/QuestionBlock.js";
import EventBus from "../../../utils/EventBus.js";
import {Loader} from "../../loader/loader.js";

export class QuestionsBlockRender {
    constructor(parent) {
        this.parent = parent;
        this.container = null;

        EventBus.on('questions:got-info', this.update.bind(this));
        EventBus.on('questions:loading', this.render.bind(this));
    }

    render(data) {
        this.container = document.createElement('div');
        this.container.classList.add('post-container');

        if (!data) {
            this.container = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.prepend(this.container);
            return;
        }

        data.forEach((post) => {
            const newPost = new QuestionBlock(this.container);
            newPost.render(post.id, post.stats, post.title, post.excerp)
        });
        this.parent.prepend(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
