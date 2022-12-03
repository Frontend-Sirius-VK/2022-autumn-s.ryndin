
export class QuestionBlock {
    constructor(parent) {
        this.parent = parent;
    }

    render(postStats, postTitle, postExcerp) {
        const container = document.createElement('div');
        container.classList.add('container');

        const summary = document.createElement('div');
        summary.classList.add('question-summary');

        const stats = document.createElement('div');
        stats.classList.add('stats');
        for (const key in postStats) {
            const span = document.createElement('span');
            span.textContent = `${postStats[key]} ${key}`;
            stats.append(span);
        }

        const post = document.createElement('div');
        post.classList.add('post');

        const title = document.createElement('div');
        title.classList.add('post-title');
        const titleLink = document.createElement('a');
        titleLink.textContent = postTitle;

        const excerp = document.createElement('div');
        excerp.classList.add('post-excerp');
        excerp.textContent = postExcerp;

        title.append(titleLink);
        post.append(title, excerp);
        summary.append(stats, post);
        container.append(summary);
        this.parent.appendChild(container);
    }
}