import types from "../types";

// Initial State
// const initialState = [
//     {
//         id: 'post_0',
//         title: 'the quick brown fox',
//         content: 'jumps over the lazy dog',
//         author: 'Stephen Jukes',
//         date: new Date(Date.now()).toDateString(),
//         childComments: [],
//         likes: 0,
//         history: {history: 'history'}
//     }
// ];

export default function(state = [], action) {
    const payload = action.payload;
    
    switch(action.type) {
        case types.NEW_POST_ADDED:
            payload.history.push(`/posts/${payload.id}`);
            const { history, ...condensedPost } = payload;  // Removes history. For details, see: codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90
            
            return state.concat( condensedPost );

        case types.COMMENT_ADDED:
            return state.map( post => post.id === payload.parentId
                ? { ...post, childComments: [...[payload.id], ...post.childComments] }
                : post );

        case types.LIKE_ADDED:
            return state.map( post => post.id === action.payload 
                ? {...post, likes: post.likes += 1 }
                : post )

        default:
            return state;
    }
}