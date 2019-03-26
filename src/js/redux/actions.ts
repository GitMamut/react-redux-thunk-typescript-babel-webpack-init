import { ADD_PARAGRAPH, Paragraph, addParagraphAction } from "../constants/action-types";

export function addParagraph(payload: Paragraph): addParagraphAction {
    return {
        type: ADD_PARAGRAPH,
        payload
    }
};