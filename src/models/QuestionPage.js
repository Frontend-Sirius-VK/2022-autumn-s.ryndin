import EventBus from "../utils/EventBus.js";

export class QuestionPage {
    constructor() {
        this.title = null;
        this.excerp = null;
    }

    fetchData(id) {
        fetch(`/getQuestionData/${id}`).then((response) => response.json()).then((data) => {
            this.title = data[0].title;
            this.excerp = data[0].excerp;
            EventBus.emit('question:got-info', data);
        })
    }
}