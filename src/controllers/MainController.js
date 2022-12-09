import {QuestionPageView} from "../views/QuestionPageView.js";
import {Question} from "../models/Question.js";

export class MainController {
    process() {
        const questions = new Question();
        const view = new QuestionPageView();
        view.update(questions.fetchData());
    }
}
