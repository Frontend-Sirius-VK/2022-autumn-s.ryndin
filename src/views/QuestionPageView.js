import {HeaderBlock} from "../components/header/HeaderBlock.js";
import {QuestionPageRender} from "../components/questionPage/questionPageRender/QuestionPageRender.js";
import EventBus from "../utils/EventBus.js";

export class QuestionPageView {
    constructor() {
        this.header = null;
        this.question = null;
        EventBus.on('question:got-info', this.update.bind(this));
        EventBus.on('question:not-found', this.renderError.bind(this));
        EventBus.on('question:bad-request', this.renderError.bind(this));
        EventBus.on('question:server-error', this.renderError.bind(this));
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

    renderError(data) {
        const body = document.querySelector('body');
        if (body) {
            body.innerHTML = '';
        }
        this.header = new HeaderBlock(body);
        this.header.render();
        const errorWrapper = document.createElement('div');
        errorWrapper.classList.add('error-wrapper');

        const titleBlock = document.createElement('div');
        titleBlock.classList.add('title-block');

        const errorTitle = document.createElement('p');
        errorTitle.classList.add('error-title');
        errorTitle.textContent = data.title;

        const descriptionBlock = document.createElement('div');
        descriptionBlock.classList.add('description-block');

        const errorDescription = document.createElement('p');
        errorDescription.classList.add('error-description');
        errorDescription.textContent = data.description;

        titleBlock.append(errorTitle);
        descriptionBlock.append(errorDescription);
        errorWrapper.append(titleBlock, descriptionBlock);
        body.append(errorWrapper);
    }
}