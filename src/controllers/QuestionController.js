import {QuestionPageView} from "../views/QuestionPageView.js";
import {QuestionPage} from "../models/QuestionPage.js";

export class QuestionController {
    process(id) {
        const view = new QuestionPageView();
        view.render();

        const question = new QuestionPage();
        question.fetchData(id);
    }
}