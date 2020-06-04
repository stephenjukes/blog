import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../common/navbar';

class Home extends React.Component {
    render() {
        // REPEAT PATTERN IN OTHER CONTAINERS
        const {user, posts} = this.props;
        const defaultAvatar = require('../initial-state/images/ninja.jpg');

        const avatarStyling = {
            float: "right",
            height: "200px",
            width: "200px",
            background: `url(${user.profile.avatar || defaultAvatar}) center center`,
            backgroundSize: "cover",
            borderRadius: "5px"
        }
        const profileEntries = Object.entries(user.profile)
            .filter(e => e[0] !== "avatar" && e[1])
            .map(e => 
                <li key={user.id}>
                    <h4>{e[0][0].toUpperCase() + e[0].slice(1).toLowerCase() + ": " }</h4>
                    <p>{e[1]}</p>
                </li>)

        return (
            <div id="home">
                <NavBar />
                <section id="profile">
                    <h1>{user.username}</h1>

                    <div id="avatar" style={ avatarStyling }></div>

                    <ul>
                        { profileEntries.length > 0 
                            ? profileEntries 
                            : <span className="deemphasize">Express yourself - add your profile details</span> }
                    </ul>
                </section>
                
                <section id="top-posts">
                    <h2>Your top posts</h2>
                    <ul>
                        { posts
                            .filter(p => p.author.username === user.username)
                            .map(p => 
                                <li key={p.id} >
                                    <Link to={`posts/${p.id}`} className="listedPost">
                                        {p.title}
                                    </Link>
                                </li>) 
                        }
                    </ul>
                </section>

                <section id="post-suggestions">
                    <h2>Posts you might be interested in:</h2>
                </section>
            </div>
        )
    }
}

Home.propTypes = {

}

function mapStateToProps(state) {
    return {
        user: state.activeUser,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);
