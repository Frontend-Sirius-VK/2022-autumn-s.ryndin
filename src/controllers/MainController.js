import {QuestionPageView} from "../views/QuestionPageView.js";
import {Question} from "../models/Question.js";

export class MainController {
    process() {
        const view = new QuestionPageView();
        view.render();

        const questions = new Question();
        questions.fetchData();
    }
}
