import React from 'react';
import {connect} from 'react-redux';
import MdEdit from 'react-icons/lib/md/edit';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdDelete from 'react-icons/lib/md/delete';
import MdComment from 'react-icons/lib/md/comment';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Post, EditPost} from './Post';
import Comments from './Comments';
import NewComment from './NewComment';
import {editPost, votePost, deletePost, newComment} from '../actions/actions';

class ExistingPostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            commenting: false,
        }
        this.onVote = this.onVote.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onDeletePost = this.onDeletePost.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
        this.onEditDone = this.onEditDone.bind(this);
        this.onNewComment = this.onNewComment.bind(this);
        this.onNewCommentCancel = this.onNewCommentCancel.bind(this);
        this.onNewCommentDone = this.onNewCommentDone.bind(this);
    }
    onVote(id, option) {
        this.props.votePost(id, option);
    }
    onEdit() {
        this.setState({editing: true});
    }
    onDeletePost() {
        this.setState({editing: false});
        this.props.deletePost(this.props.id);
    }
    onEditCancel() {
        this.setState({editing: false});
    }
    onEditDone(title, body) {
        this.setState({editing: false});
        this.props.editPost(this.props.id, title, body);
    }
    onNewComment(title, body) {
        this.setState({commenting: true});
    }
    onNewCommentCancel() {
        this.setState({commenting: false});
    }
    onNewCommentDone(id, body, author) {
        this.setState({commenting: false});
        console.log('ExistingPostPage.onNewCommentDone', id, body, author);
        this.props.newComment(id, body, author);
    }
    render() {
        let post = this.props.posts[this.props.id];
        if (post === undefined) {
            return (<h1>Invalid</h1>)
        }
        if (post.deleted) {
            return (<h1>Deleted</h1>)
        }
        if (this.state.editing) {
            return (
                <div>
                    <EditPost {...post} onDone={this.onEditDone} onCancel={this.onEditCancel}/>
                    <Comments comments={this.props.comments[post.id]} />
                </div>
            );
        } else {
            return (
                <div>
                <Post {...post}>
                <div className="d-flex justify-content-end">
                    <div className="btn-group">
                        {!this.state.commenting && <button type="button" className="btn btn-sm" onClick={() => this.onNewComment()}><MdComment className=""/></button>}
                        <button type="button" className="btn btn-sm" onClick={() => this.onVote(post.id, 'downVote')}><MdThumbDown className="text-danger"/></button>
                        <button type="button" className="btn btn-sm" onClick={() => this.onVote(post.id, 'upVote')}><MdThumbUp className="text-success"/></button>
                        <button type="button" className="btn btn-sm" onClick={this.onEdit}><MdEdit/></button>
                        <button type="button" className="btn  btn-sm btn-danger" color="danger" onClick={this.onDeletePost}><MdDelete/></button>
                    </div>
                </div>
            </Post>
            {this.state.commenting && <NewComment onDone={(body, author) => this.onNewCommentDone(post.id, body, author)} onCancel={this.onNewCommentCancel}/>}
            <Comments comments={this.props.comments[post.id]}/>
                </div>
            );
        }
    }
}

function mapStateToProps({posts, comments}) {
	return {
        posts: posts.entities.posts,
        comments,
	};
}

function mapDispatchToProps(dispatch) {
    return {
        editPost: (id, title, body) => dispatch(editPost(id, title, body)),
        votePost: (id, option) => dispatch(votePost(id, option)),
        deletePost: (id) => dispatch(deletePost(id)),
        newComment: (parentId, body, author) => dispatch(newComment(parentId, body, author)),
    };
} 

export default connect(mapStateToProps, mapDispatchToProps)(ExistingPostPage);
