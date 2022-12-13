
export class QuestionInfo {
    constructor(parent) {
        this.parent = parent;
    }

    render(postTitle, postBody) {
        const summary = document.createElement('div');
        summary.classList.add('question-summary');

        const title = document.createElement('div');
        title.classList.add('question-title');

        const titleHeader = document.createElement('h1');
        titleHeader.classList.add('header-post-title');
        titleHeader.textContent = postTitle;

        const body = document.createElement('div');
        body.classList.add('post-body');
        body.textContent = postBody;

        title.append(titleHeader);
        summary.append(title, body);
        this.parent.appendChild(summary);
    }
}