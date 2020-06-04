import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './app/home/home-container';
import Login from './app/user-active/login-container';
import SignUp from './app/users/sign-up-container';
import UpdateProfile from './app/profile/update-profile-container';
import CreatePost from './app/post-create/create-post-container';
import Post from './app/post/post-container';
import './App.css';

export default function() {
  return (
    <HashRouter basename='/'>
        <Route exact path="/" component={Login}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/update-profile" component={UpdateProfile}></Route>
        <Route path="/create-post" component={CreatePost}></Route>
        <Route path="/posts/:post_id" component={Post}></Route>
    </HashRouter>
    /*</Router>*/
  )
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
