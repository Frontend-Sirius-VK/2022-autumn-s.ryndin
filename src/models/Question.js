import EventBus from "../utils/EventBus.js";

export class Question {
    constructor(stats, title, excerp) {
        this.stats = stats;
        this.title = title;
        this.excerp = excerp;
    }

    fetchData() {
        fetch('/getQuestionsData').then((response) => response.json()).then((data) => {
            this.stats = data.stats;
            this.title = data.title;
            this.excerp = data.excerp;

            EventBus.emit('questions:got-info', data);
        })
    }
}
