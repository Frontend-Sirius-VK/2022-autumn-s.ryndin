import {HeaderBlock} from "../components/header/HeaderBlock.js";
import {QuestionsBlockRender} from "../components/mainPage/questionsBlockRender/QuestionsBlockRender.js";
import EventBus from "../utils/EventBus.js";

export class MainPageView {
    constructor() {
        this.header = null;
        this.questions = null;
        EventBus.on('questions:got-info', this.update.bind(this));
    }

    render() {
        const body = document.querySelector('body');
        this.header = new HeaderBlock(body);
        this.questions = new QuestionsBlockRender(body);

        this.header.render();
    }

    update(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }
        this.render();
        this.questions.update(data);
    }
}
