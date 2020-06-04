import React from 'react';
// import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import NavBar from '../common/navbar';
import CommentOptions from '../comments/comment-options-container';
import Comment from '../comments/comment-container';

class Post extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
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

    flatten = (array) => array
        .reduce( (agg, e) => agg.concat(Array.isArray(e) 
            ? this.flatten(e)
            : e
        ) , [] )

    render() {
        const { posts, comments } = this.props;
        
        const postId = this.props.match.params.post_id; 
        let post = posts.find(p => p.id === postId);     // postId from initialState is coming out as string, hence only 2 equal signs

        const postComments = post.childComments
            .map(commentId => this.constructCommentTree(comments, commentId, 0))
            
        const flattenedComments = this.flatten(postComments);
        const placeholder = 'Be the first to write a comment ...';

        return (
            <div id="post">
                <NavBar />

                <section>
                    <header>
                        <h1>{post.title.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}</h1>
                        <p className="author-detail">{post.author.username}</p>
                        <time className="author-detail">{post.date.toString()}</time>   
                    </header>
                                     
                    <div>{post.content.split('\n').map((paragraph, i) => <p key={i} className="postParagraph">{paragraph}</p>)}</div>

                    <CommentOptions parent={post}/> {/* This needs to be the whole post to include number of likes */}
                </section>
                
                <section id="comments">
                    <h2>Comments</h2>

                    <ul>
                        { flattenedComments.length > 0
                            ? flattenedComments.map(c => <li key={c.id}><Comment comment={c} /></li>) 
                            : <span className="deemphasize">{placeholder}</span> }
                    </ul>
                </section>
            </div>
        )
    }
}

// Post.propTypes = {
//     posts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             title: PropTypes.string.isRequired,
//             content: PropTypes.string.isRequired,
//             author: PropTypes.string.isRequired,
//             date: PropTypes.string.isRequired,
//             history: PropTypes.object 
//         })).isRequired,
    
//     comments: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             content: PropTypes.string.isRequired,
//             username: PropTypes.string.isRequired,
//             date: PropTypes.string.isRequired
//     })).isRequired
// }

Post.defaultProps = {
    posts: [
        {
            id: 0,
            title: "none",
            content: "",
            author: "",
            date: "",
            history: {history: 'history'}   // CHANGE TO MATCH?
        }
    ]
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        comments: state.comments
    }
}

export default connect(mapStateToProps)(Post);


