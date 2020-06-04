import types from "../types";

export default function(state = null, action) {
    switch(action.type) {
        case types.LOGGED_IN: 
            return action.payload;

        case types.NEW_USER_ADDED:
            return action.payload;

        // handling this action is handled both here (for immediate effect) as well as in the users (for permanent effect)
        // Consider handling selecting the active user in such a way that a profile update does not need to be handled in both places
        case types.PROFILE_UPDATED:
            return {...state, profile: {...state.profile, ...action.payload}};

        default:
            return state;
    }
}