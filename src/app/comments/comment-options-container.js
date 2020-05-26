import React, {Component} from 'react';
import {connect} from 'react-redux';
// import PropTypes from 'prop-types';
import AddComment from './action-add-comment';
import AddLike from './action-add-like';
import ToggleReplyThreadVisibility from './action-toggle-reply-thread-visibility';

class CommentOptions extends Component {
    toggleCommentCreationField = e => {
        const commentCreationField = [...e.target.parentNode.children][3];  // refactor to find by classname
        const textarea = commentCreationField.children[0];                  // refactor to find by classname

        commentCreationField.classList.toggle('hidden');
        textarea.value = ''
        textarea.focus();
    }

    submit = e => {
        const {addComment, user, parent} = this.props;
        const commentCreationField = e.target.parentNode;
        const textarea = [...commentCreationField.children][0];             // refactor to find by classname
        const content = textarea.value;

        if (content === '') alert('No content to add');

        textarea.value = '';
        commentCreationField.classList.add('hidden');

        return addComment(content, user, parent.id); 
    }

    addLike = () => {
        const {addLike, parent} = this.props;
        return addLike(parent.id);
    }

    getFlattenedChildComments = (comments, commentId, depth) => {
        const commentTree = this.constructCommentTree(comments, commentId, depth);
        return this.flatten(commentTree);
    }

    constructCommentTree = (comments, commentId, depth) => {
        const targetComment = comments.find( c => c.id === commentId );
        const childCommentIds = targetComment.childComments;

        if (childCommentIds.length === 0) return {...targetComment, depth: depth};

        return [
            ...[{...targetComment, depth: depth}], 
            ...childCommentIds.map(c => this.constructCommentTree(comments, c, depth + 1))
        ];
    }

    flatten = (array) => array.reduce( (agg, e) => 
        agg.concat(Array.isArray(e) ? this.flatten(e) : e)
        , [] );

    toggleReplyThreadVisibility = () => {
        const {parent, comments, toggleReplyThreadVisibility} = this.props;

        const firstChildId = parent.childComments[0];
        const firstChild = comments.find(c => c.id === firstChildId);
        if (firstChild === undefined) return;

        let replyThread;
        if (parent.id.slice(0, 4) === 'post' ) {
            // DRY UP CODE
            const descendents = parent.childComments.map(commentId => this.constructCommentTree(comments, commentId, 0));
            replyThread = this
                .flatten(descendents)
                .filter(d => d.depth > 0)
                .map(d => { return {...d, isVisible: false} });
        }
        else if (firstChild.isVisible) {
            // DRY UP CODE
            const descendents = parent.childComments.map(commentId => this.constructCommentTree(comments, commentId, 0));
            replyThread = this.flatten(descendents).map(d => { return {...d, isVisible: false} });
        }
        else {
            replyThread = comments
                .filter(c => parent.childComments.includes(c.id))
                .map(c => { return {...c, isVisible: true} });
        }

        return toggleReplyThreadVisibility(replyThread);
    }

    render() {   
        const {parent} = this.props;

        return (
            <div className="comment-options">
                { /* Reply */ }
                <button 
                    className="reply"
                    onClick={this.toggleCommentCreationField.bind(this)}
                >
                    Reply
                </button>

                { /* Replies */ }
                <button 
                    className="replies"
                    onClick={this.toggleReplyThreadVisibility.bind(this)}
                >
                    Replies: {parent.childComments.length}
                </button>
                
                { /* Like */ }
                <button 
                    className="like"
                    onClick={this.addLike}
                >
                    Like: {parent.likes}
                </button>    {/*Use css :after*/}

                <div className="comment-creation-field hidden">
                    <textarea 
                        className="comment-creation-text" 
                        placeholder="Write your comment here ..."
                    >
                    </textarea>

                    <button onClick={this.submit.bind(this)}>
                        Submit
                    </button>
                </div>

            </div>
        )
    }
}

// CommentCreationField.propTypes = {
//     username: PropTypes.string.isRequired,
//     parent: PropTypes.object.isRequired,    // refactor with shape
//     addComment: PropTypes.func.isRequired
// }

function mapStateToProps(state) {
    return {
        user: state.activeUser,
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    const addComment = (comment, user, parentId) => dispatch(AddComment(comment, user, parentId));
    const addLike = post => dispatch(AddLike(post));
    const toggleReplyThreadVisibility = commentIds => dispatch(ToggleReplyThreadVisibility(commentIds));

    return { 
        addComment,
        addLike,
        toggleReplyThreadVisibility
    }; 
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentOptions);
