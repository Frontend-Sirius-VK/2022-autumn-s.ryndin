import { HelloWorld } from "./components/HelloWorld.js";

const body = document.querySelector('body');
const helloWorld = new HelloWorld(body);
helloWorld.render();