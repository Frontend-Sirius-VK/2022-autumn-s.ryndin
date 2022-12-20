import EventBus from "../utils/EventBus.js";

export class QuestionPage {
    constructor() {
        this.title = null;
        this.excerp = null;
    }

    fetchData(id) {
        fetch(`/getQuestionData/${id}`)
            .then((response) => {
                const {status} = response;
                if (status === 404) {
                    EventBus.emit('question:not-found', {title: 'Error 404', description: 'Страница не существует'});
                    return;
                }

                if (status === 400) {
                    EventBus.emit('question:bad-request', {title: 'Error 400', description: 'Введён некорректный запрос, проверьте данные.'});
                    return;
                }

                if (status === 500) {
                    EventBus.emit('question:server-error', {title: 'Error 500', description: 'Сервер столкнулся с неожиданной ошибкой.'});
                    return;
                }

                return response.json();
            })
            .then((data) => {
                this.title = data[0].title;
                this.excerp = data[0].excerp;
                EventBus.emit('question:got-info', data);
            })
    }
}