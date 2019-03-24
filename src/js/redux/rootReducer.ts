import {
    ADD_ARTICLE, addArticleAction, Article
} from "../constants/action-types";

export type AppState = {
    articles: Article[];
}

const initialState = {
    articles: []
};

function rootReducer(state: AppState = initialState, action: addArticleAction) {
    switch (action.type) {
        case ADD_ARTICLE:
            return {
                ...state,
                articles: [
                    ...state.articles,
                    action.payload
                ]
            };
        default:
            return state;
    }
};

export default rootReducer;