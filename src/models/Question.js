import EventBus from "../utils/EventBus.js";

export class Question {
    constructor(stats, title, excerp) {
        this.stats = stats;
        this.title = title;
        this.excerp = excerp;
    }

    fetchData() {
        fetch(`/getQuestionsData`)
            .then((response) => {
                const {status} = response;
                if (status === 404) {
                    EventBus.emit('questions:not-found', {title: 'Error 404', description: 'Страница не существует'});
                    return;
                }

                if (status === 400) {
                    EventBus.emit('questions:bad-request', {title: 'Error 400', description: 'Введён некорректный запрос, проверьте данные.'});
                    return;
                }

                if (status === 500) {
                    EventBus.emit('questions:server-error', {title: 'Error 500', description: 'Сервер столкнулся с неожиданной ошибкой.'});
                    return;
                }

                return response.json();
            })
            .then((data) => {
                this.stats = data.stats;
                this.title = data.title;
                this.excerp = data.excerp;

                EventBus.emit('questions:got-info', data);
            })
    }
}
