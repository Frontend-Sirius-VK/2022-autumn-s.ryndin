import EventBus from "../utils/EventBus.js";

export class QuestionPage {
    constructor(title, excerp) {
        this.title = title;
        this.excerp = excerp;
    }

    fetchData(id) {
        fetch(`/getQuestionData/${id}`).then((response) => response.json()).then((data) => {
            this.title = data.title;
            this.excerp = data.excerp;

            EventBus.emit('question:got-info', data);
        })
    }
}