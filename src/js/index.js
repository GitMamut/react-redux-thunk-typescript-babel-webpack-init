import store from "./store/store";
import { addArticle } from "./redux/actions";

window.store = store;
window.addArticle = addArticle;