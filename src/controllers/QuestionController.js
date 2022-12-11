import {QuestionPageView} from "../views/QuestionPageView.js";
import {QuestionPage} from "../models/QuestionPage.js";

export class QuestionController {
    process(id) {
        const question = new QuestionPage();
        const view = new QuestionPageView();
        view.update(question.fetchData(id));
    }
}