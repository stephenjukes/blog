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


// DONE Remove nav bar from login and sign in pages
// DONE Do not allow same usernames or emails
// DONE Comments are failing again
// DONE Provide defaults and a way for a viewer to select easily (include ability to sign in)
    // DONE Comments
    // DONE Prompt to allow viewer to select a user to log in with
    
// Only the last comments have children (this is because of how comments are generated recursively)
// Allow users to order their posts by popularity or chronological
// Posts you might be interested in
    // count top significant words in active user's titles
    // score other posts on match, likes and recency
// Provide a way for a user to add profile details
// Allow a user to search for a post
// Allow a user to cancel creating a post, or do not submit if any fields are empty (this functionality has already been added for comments)
// Allow pages to fail gracefully if a url is manually changed and user is null
// Consider showing default child posts as hidden
// Have reply count include all descendents, not just direct replies
// Vary posts in the same way that comments vary
// show only a selection of posts in the home page and provide the option to view more








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
