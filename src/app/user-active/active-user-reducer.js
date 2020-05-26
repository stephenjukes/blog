import types from "../types";

//const initialState = 'Stephen Jukes'

export default function(state = null, action) {
    switch(action.type) {
        case types.LOGGED_IN: 
            return action.payload;

        case types.NEW_USER_ADDED:
            return action.payload;

        default:
            return state;
    }
}