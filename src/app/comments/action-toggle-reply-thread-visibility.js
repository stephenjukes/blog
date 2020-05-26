import types from "../types";

export default function(commentIds) {
    return {
        type: types.REPLY_THREAD_TOGGLED,
        payload: commentIds
    }
}