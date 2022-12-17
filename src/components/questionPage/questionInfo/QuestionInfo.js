
export class QuestionInfo {
    constructor(parent) {
        this.parent = parent;
    }

    render(postTitle, postBody) {
        const summary = document.createElement('div');
        summary.classList.add('question-container__summary');

        const title = document.createElement('div');
        title.classList.add('question-container__title');

        const titleHeader = document.createElement('h1');
        titleHeader.classList.add('question-container__title-header');
        titleHeader.textContent = postTitle;

        const body = document.createElement('div');
        body.classList.add('question-container__body');
        body.textContent = postBody;

        title.append(titleHeader);
        summary.append(title, body);
        this.parent.appendChild(summary);
    }
}