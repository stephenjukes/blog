import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Login from './login-action';
import defaultUsers from '../initial-state/users';

class LoginForm extends React.Component {

    handleClick = (username, password) => {
        const user = this.props.users.find(u => 
            u.username === username && 
            u.password === password);

        if (!user) {
            alert('User not found. Please try again.');
            return;
        };

        this.props.history.push('/home');
        return this.props.login(user);
    }

    render() {
        //var users = defaultUsers.map(u => `\n${u.user_Id}: ${u.username}`);
        // var userId = prompt(`Log in as: \n\nor cancel to log in normally.`);
        // var user = defaultUsers;//.find(u => u.userId == userId);
        // var u = defaultUsers.find(us => us.user_Id == userId);

        // if (u !== null) {
        //     var username = u.username;
        //     var password = u.password;
        //     this.handleClick(u.username, u.password);
        // }

        return (
            <div id="login" className="route">
                <section 
                    class="demo"
                    style={{
                        marginTop: -20 * defaultUsers.length - 90  //-20 = height of each item, -90 = heading + padding
                    }}
                >
                    <h4>Log in as:</h4>
                    <ul>
                        {defaultUsers.map(u => 
                            <li 
                                key={u.user_Id}
                                onClick={() => this.handleClick(u.username, u.password)}    
                            >
                                <a>{u.username}</a>
                                
                            </li>    
                        )}
                    </ul>

                    <div className="speech-tail"></div>
                </section>

                <section>
                    <h2>Login Details</h2>
                    <input id="login-username" name="username" type="text" placeholder="Username" />
                    <input id="login-password" name="password" type="password" placeholder="Password" />

                    <button onClick={() => this.handleClick(
                        document.getElementById('login-username').value,
                        document.getElementById('login-password').value
                    )}>
                        Login
                    </button>

                    <br/>
                    <Link to={"/sign-up"}>Sign up</Link>
                </section>
            </div>
        )
    }
}

LoginForm.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired
        })),

    login: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    const login = (username) => dispatch(Login(username));
    return { login };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
