import types from "../types";
import defaultUsers from "../initial-state/users";

let userId = Math.max(...defaultUsers.map(u => u.user_Id));

export default function(state = [], action) {
    switch(action.type) {
        case types.NEW_USER_ADDED: 
            return state.concat({...action.payload, id: ++userId});

        case types.PROFILE_UPDATED:
            return state.map(u => u.user_Id === action.userId ? {...u, profile: action.payload} : u );
        
        default: 
            return state;   
    }
} 