import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CommentOptions from './comment-options-container';

class Comment extends Component {
    render() {
        const {comment} = this.props;

        return (

            <section 
                id="comment"
                style={{
                    marginLeft: 30 * comment.depth,
                    display: comment.isVisible ? 'block' : 'none'
                }}
            >

                <header className="author-detail">
                    {comment.author.username} -- {comment.date.toDateString()}
                </header>

                <p>{comment.content}</p>

                <CommentOptions parent={comment}/>

            </section>
        )
    }
}

// Comment.propTypes = {
//     comment: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         content: PropTypes.string.isRequired,
//         username: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//         childIds: []
//     }).isRequired
//     ,

//     comments: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             content: PropTypes.string.isRequired,
//             username: PropTypes.string.isRequired,
//             date: PropTypes.string.isRequired,
//             childIds: []
//         }).isRequired
//     )
// }

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(Comment)


