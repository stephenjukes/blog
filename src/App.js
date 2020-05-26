import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import NavBar from './app/common/navbar';
import Home from './app/home/home-container';
import Login from './app/user-active/login-container';
import SignUp from './app/users/sign-up-container';
import CreatePost from './app/post-create/create-post-container';
import Post from './app/post/post-container';
import './App.css';

export default function() {
  return (
    <Router history={createBrowserHistory()}>
      {/* <NavBar /> */}
      <Route exact path="/" component={Login}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/sign-up" component={SignUp}></Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/create-post" component={CreatePost}></Route>
      {/* <Route path="/post" component={Post}></Route> */}
      <Route path="/posts/:post_id" component={Post}></Route>
    </Router>
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
