import {MainPageView} from "../views/MainPageView.js";
import {Question} from "../models/Question.js";
import EventBus from "../utils/EventBus.js";

export class MainController {
    process() {
        const view = new MainPageView();
        view.render();

        const questions = new Question();
        EventBus.emit('questions:loading');
        questions.fetchData();
    }
}
