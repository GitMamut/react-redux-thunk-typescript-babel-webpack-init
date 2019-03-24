import { ADD_ARTICLE, Article, addArticleAction } from "../constants/action-types";

export function addArticle(payload: Article): addArticleAction {
    return {
        type: ADD_ARTICLE,
        payload
    }
};