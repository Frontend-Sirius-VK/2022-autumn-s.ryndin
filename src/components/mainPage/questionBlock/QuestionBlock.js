
export class QuestionBlock {
    constructor(parent) {
        this.parent = parent;
    }

    render(id, postStats, postTitle, postExcerp) {
        const summary = document.createElement('div');
        summary.classList.add('post-container__summary');

        const stats = document.createElement('div');
        stats.classList.add('post-container__stats');
        for (const key in postStats) {
            const span = document.createElement('span');
            span.classList.add('post-container__stats-elements');
            span.textContent = `${postStats[key]} ${key}`;
            stats.append(span);
        }

        const post = document.createElement('div');
        post.classList.add('post-container__post');

        const title = document.createElement('div');
        title.classList.add('post-container__post-title');
        const titleLink = document.createElement('a');
        titleLink.href = `/questions/${id}`;
        titleLink.textContent = postTitle;

        titleLink.classList.add('post-container__post-link');

        const excerp = document.createElement('div');
        excerp.classList.add('post-container__post-excerp');
        excerp.textContent = postExcerp;

        title.append(titleLink);
        post.append(title, excerp);
        summary.append(stats, post);
        this.parent.appendChild(summary);
    }
}
