import { combineReducers } from "redux";
import Users from './users/users-reducers';
import ActiveUser from './user-active/active-user-reducer';
import Posts from './post/post-reducer';
import Comments from './comments/comments-reducer';

export default combineReducers({
        users: Users,
        activeUser: ActiveUser,
        posts: Posts,
        comments: Comments
})
