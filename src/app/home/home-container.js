import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBar from '../common/navbar';

class Home extends React.Component {
    render() {
        // REPEAT PATTERN IN OTHER CONTAINERS
        const {user, posts, history} = this.props;

        return (
            <div id="home">
                <NavBar />
                <header>
                    <div id="header-left">
                        <h1>{user.username}</h1>
                        <ul>
                            <li>Works:</li>
                            <li>Studied:</li>
                            <li>Resides:</li>
                            <li>Skills:</li>
                            <li>About Me:</li>
                        </ul>
                        
                    </div>

                    <img src="https://i.ebayimg.com/images/g/vc8AAOSwy7lc0wGY/s-l300.jpg" alt="Profile"/>
                    
                </header>
                
                <section>
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

                <section>
                    <h2>Posts you might be interested in:</h2>
                </section>
            </div>
        )
    }
}

Home.propTypes = {
    username: PropTypes.string.isRequired,
    history: PropTypes.object
}

function mapStateToProps(state) {
    return {
        user: state.activeUser,
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Home);
