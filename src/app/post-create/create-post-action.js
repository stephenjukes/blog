import types from "../types";

let id = 0;

export default function(title, content, author, history) {
    const post = {
        id: `post_${id++}`,
        title: title,
        content: content,
        author: author,
        date: new Date(Date.now()).toDateString(),
        childComments: [],
        likes: 0,
        history: history
    }

    return {
        type: types.NEW_POST_ADDED,
        payload: post
    }
}