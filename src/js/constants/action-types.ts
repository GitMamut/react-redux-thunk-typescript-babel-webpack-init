export const ADD_ARTICLE = "ADD_ARTICLE";

export type Article = {
    seo_title: string;
    id: string;
};

export type addArticleAction = {
    type: typeof ADD_ARTICLE;
    payload: Article;
}