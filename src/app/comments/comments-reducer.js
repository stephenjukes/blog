import types from "../types";

export default function(state = [], action) {
    const payload = action.payload;
    
    switch(action.type) {
        case types.COMMENT_ADDED:
            return state
                .map(c => c.id === payload.parentId
                    ? { ...c, childComments: [...[payload.id], ...c.childComments] }
                    : c)
                .concat(payload);

        case types.LIKE_ADDED:
            return state.map( post => post.id === action.payload 
                ? {...post, likes: post.likes += 1 }
                : post );

        case types.REPLY_THREAD_TOGGLED:
            return state.map(c => payload.find(newComment => c.id === newComment.id) || c);

        default:
            return state;

    }
}