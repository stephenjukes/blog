import types from "../types";

export default function(userId, profile) {
    return {
        type: types.PROFILE_UPDATED,
        userId: userId,
        payload: profile
    }
}