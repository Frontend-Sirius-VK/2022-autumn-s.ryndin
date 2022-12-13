import {MainPageView} from "../views/MainPageView.js";
import {Question} from "../models/Question.js";

export class MainController {
    process() {
        const view = new MainPageView();
        view.render();
        const questions = new Question();
        questions.fetchData();
    }
}
