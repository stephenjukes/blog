import types from "../types";

export default function(parentId) {
    return {
        type: types.LIKE_ADDED,
        payload: parentId
    }
}