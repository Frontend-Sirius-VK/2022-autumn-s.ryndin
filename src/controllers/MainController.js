import {MainPageView} from "../views/MainPageView.js";
import {Question} from "../models/Question.js";

export class MainController {
    process() {
        const questions = new Question();
        const view = new MainPageView();
        view.update(questions.fetchData());
    }
}
