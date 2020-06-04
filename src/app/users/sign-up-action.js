import types from "../types"

export default function(username, email, password) {
    const user = {
        username: username,
        email: email,
        password: password,
        profile: {}
    }
    
    return {
        type: types.NEW_USER_ADDED,
        payload: user
    }
}