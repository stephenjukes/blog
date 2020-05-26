import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignUp from './sign-up-action';

class SignupForm extends React.Component {
    handleClick = (username, email, password, repeatPassword) => {
        const users = this.props.users;

        if (users.some(u => u.username === username)) {
            alert ('Username already exists');
            return;
        }
            
        if (users.some(u => u.email === email)) {
            alert ('Email already exists');
            return;
        }
            
        if (password !== repeatPassword) {
            alert ('Passwords do not match');
            return;
        }
            
        this.props.history.push('/home');
        return this.props.signUp(username, email, password);
    }

    render() {
        return (
            <section id="sign-up" className="route">
                <h2>Sign Up:</h2>
                <div>
                    <input id="signup-username" name="firstName" type="text" placeholder="First Name" />
                    <input id="signup-email" name="email" type="email" placeholder="Email" />
                    <input id="signup-password" name="password" type="password" placeholder="Password" />
                    <input id="signup-repeatPassword" name="repeatPassword" type="password" placeholder="Repeat Password" />
    
                    <button 
                        type="submit"
                        onClick={() => this.handleClick(
                                document.getElementById('signup-username').value,
                                document.getElementById('signup-email').value,
                                document.getElementById('signup-password').value,
                                document.getElementById('signup-repeatPassword').value
                        )}>
                        Submit
                    </button>
    
                </div>
            </section>
    
        )
    }
}

SignupForm.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired
        })),

    signUp: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

function mapDispatchToProps(dispatch) {
    const signUp = (firstName, lastName, email, password, repeatPassword) => {
        dispatch(SignUp(firstName, lastName, email, password, repeatPassword))
    }
    
    return { signUp };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
