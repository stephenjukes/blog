import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../user-active/login-action';


class NavBar extends React.Component {
    render() {
        return (
            <nav id="navbar">
                <ul>
                    <li><Link to={"/home"}>Home</Link></li>
                    <li><Link to={"/create-post"}>New Post</Link></li>
                </ul>
                <ul>
                    <li>Search</li>
                    <li>
                        <Link 
                            to={"/login"}
                            onClick={() => this.props.logout(null)}
                        >
                                Log out
    
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapDispatchToProps(dispatch) {
    const logout = (user) => dispatch(Login(user));
    return { logout };
}

export default connect(null, mapDispatchToProps)(NavBar);