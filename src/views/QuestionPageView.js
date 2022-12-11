import {HeaderBlock} from "../components/header/HeaderBlock.js";
import {QuestionPageRender} from "../components/questionPage/questionPageRender/QuestionPageRender.js";
import EventBus from "../utils/EventBus.js";

export class QuestionPageView {
    constructor() {
        this.header = null;
        this.question = null;
        EventBus.on('question:got-info', this.update.bind(this));
    }

    render() {
        const body = document.querySelector('body');
        this.header = new HeaderBlock(body);
        this.question = new QuestionPageRender(body);

        this.header.render();
    }

    update(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }
        this.render();
        this.question.update(data);
    }
}