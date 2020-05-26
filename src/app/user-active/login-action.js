import types from "../types"

export default function(user) {
    return {
        type: types.LOGGED_IN,
        payload: user
    }
}