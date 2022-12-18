import {MainController} from "../controllers/MainController.js";
import {QuestionController} from "../controllers/QuestionController.js";
import EventBus from "../utils/EventBus.js";

const routes = [
    {
        path: `^/$`,
        controller: MainController
    },
    {
        path: `^/questions/(\\w+)`,
        controller: QuestionController
    }
];

export class Router {
    constructor() {
        EventBus.off('questions:loading');
        EventBus.off('questions:got-info');
        EventBus.off('questions:not-found');
        EventBus.off('questions:bad-request');
        EventBus.off('questions:server-error');
        EventBus.off('question:got-info');
        EventBus.off('question:not-found');
        EventBus.off('question:bad-request');
        EventBus.off('question:server-error');
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    onDocumentClick(event) {
        const {target} = event;
        const {tagName} = target;
        const state = {page: target.href};

        if (tagName === 'A') {
            event.preventDefault();

            if (target.href !== undefined) {
                this.go(state);
            }
        }

        if (event.type === 'popstate') {
            this.updateState(state);
        }
    }

    getID() {
        const pathParser = window.location.pathname.split('/');
        let id;
        if (pathParser[1] !== undefined) {
            id = pathParser[2];
        }
        return id;
    }

    updateState(state) {
        if (!state) {
            return;
        }
        this.invokeController();
    }

    go(state) {
        window.history.pushState(state, '', state.page);
        this.invokeController();
    }

    invokeController() {
        const id = this.getID();
        const {pathname} = window.location;
        const controllerFlag = new MainController();
        const result = routes.find((route) => {
            const regexp = new RegExp(route.path);
            const matches = pathname.match(regexp);

            return Boolean(matches);
        });

        if (!result) {
            console.log(404);
        }

        const ControllerClass = result.controller;
        const controller = new ControllerClass();

        if (result.controller !== controllerFlag) {
            controller.process(id);
        } else {
            controller.process();
        }
    }

    start() {
        document.addEventListener('click', this.onDocumentClick);
        window.addEventListener('popstate', this.onDocumentClick);
        this.invokeController();
    }

    stop() {
        document.removeEventListener('click', this.onDocumentClick);
    }
}

export const router = new Router();
