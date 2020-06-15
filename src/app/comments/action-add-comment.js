import types from "../types";
import { comments } from "../initial-state/comments";

const lastId = comments[comments.length - 1].id.match(/\d+/);
let id = parseInt(lastId) + 1;

export default function(content, user, parentId) {
    const isVisible = {
        'post': true,
        'comment': true
    }

    const comment = {
        id: `comment_${id++}`,
        content: content,
        author: user,
        date: new Date(Date.now()), //.toDateString(),
        parentId: parentId,
        likes: 0,
        childComments: [],
        isVisible: isVisible[String(parentId).match(/[A-Za-z]+/)]
    }

    return {
        type: types.COMMENT_ADDED,
        payload: comment
    }
}