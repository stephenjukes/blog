import React from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import NavBar from '../common/navbar';
import CreatePost from './create-post-action';

class NewPostForm extends React.Component {
    handleClick = (title, content) => {
        const history = this.props.history;
        return this.props.createPost(title, content, this.props.user, history);
    }

    render() {
        return (
            <div id="new-post-form">
                <NavBar />
                <h1>New Post</h1>

                <input id="title" type="text" name="title" placeholder="Title" />
                <textarea id="new-post" placeholder="Write your post here ..."></textarea>

                <button onClick={() => this.handleClick(
                    document.getElementById("title").value,
                    document.getElementById("new-post").value
                    )}
                >
                    Submit
                </button>
            </div>
        )
    }
}

NewPostForm.propTypes = {
    user: PropTypes.string.isRequired,
    createPost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
    return {
        user: state.activeUser,
    }
}

function mapDispatchToProps(dispatch) {
    // MAKE CONSISTENT WITH OTHER SIMILAR FUNCTIONS
    return bindActionCreators({
        createPost: CreatePost
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPostForm)
