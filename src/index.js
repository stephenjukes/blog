import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // implements chrome redux extension
import allReducers from './app/all-reducers';
import App from './App';
import initialState from './app/initial-state';
require('./index.css');

const store = createStore(
    allReducers, 
    initialState,
    composeWithDevTools()
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// DONE


// DONE Remove nav bar from login and sign in pages
// DONE Do not allow same usernames or emails
// DONE Comments are failing again
// DONE Provide defaults and a way for a viewer to select easily (include ability to sign in)
    // DONE Comments
    // DONE Prompt to allow viewer to select a user to log in with
// DONE Vary posts in the same way that comments vary
// DONE After addition of user profile, sign up unable to convert undefined or null object
// DONE Provide a way for a user to add profile details
// DONE Ensure the avatar image renders correctly for a new user
// DONE Only the last comments have children (this is because of how comments are generated recursively)

// MINIMUM VIABLE PRODUCT


// Allow users to view others' home pages by clicking on their names
// Disable editing and various sections if viewing someone else's home page 
// Allow a user to cancel creating a post, or do not submit if any fields are empty (this functionality has already been added for comments)
// Have reply count include all descendents, not just direct replies
// Allow pages to fail gracefully if a url is manually changed and user is null


// NICE TO HAVE


// Allow a user to delete or edit posts (and comments?)
// Allow users to order their posts by popularity or chronological
// Allow a user to search for a post
// Posts you might be interested in
    // count top significant words in active user's titles
    // score other posts on match, likes and recency
// show only a selection of posts in the home page and provide the option to view more


// FINAL TOUCHES


// Add Navbar with && Conditional in App.js
// Consider showing default child posts as hidden
// Convert unnecessary classes to simple functions
// Convert CSS to REM (or other suitable - )
// Restructure files
// Change 'user_Id' to just 'id'






// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
