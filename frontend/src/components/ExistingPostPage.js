import React from 'react';
import {connect} from 'react-redux';

import {Post, EditPost} from './Post';
import Comments from './Comments';
import {ContainerRightAlign} from './Containers.js';
import {votePost} from '../actions/actions';

const InvalidPost = (props) => {
    return (
        <div>
            <h3>Invalid Post</h3>
        </div>
    )
}

class ExistingPostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
        this.onVote = this.onVote.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
        this.onEditDone = this.onEditDone.bind(this);
    }
    onVote(id, option) {
        console.log('onVote', id, option);
        this.props.votePost(id, option);
    }
    onEdit() {
        this.setState({editing: true});
    }
    onEditCancel() {
        this.setState({editing: false});
    }
    onEditDone(body) {
        this.setState({editing: false});
    }
    render() {
        let filtered_posts = this.props.posts.filter(post => post.id === this.props.id);
        if (filtered_posts.length !== 1) {
            return <InvalidPost />;
        }

        let post = filtered_posts[0];
        if (this.state.editing) {
            return (
                <div>
                    <EditPost {...post} onDone={this.onEditDone} onCancel={this.onEditCancel}/>
                    <Comments comments={this.props.comments[post.id]} />
                </div>
            )
        } else {
            return (
                <div>
                    <Post {...post} />
                    <ContainerRightAlign>
                        <button onClick={() => this.onVote(post.id, 'downVote')}>Down</button>
                        <button onClick={() => this.onVote(post.id, 'upVote')}>Up</button>
                        <button onClick={this.onEdit}>Edit</button>
                    </ContainerRightAlign>
                    <Comments comments={this.props.comments[post.id]} />
                </div>
            );
        }
    }
}

function mapStateToProps({posts, comments}) {
	return {
        posts,
        comments
	};
}

function mapDispatchToProps(dispatch) {
    return {
        votePost: (id, option) => dispatch(votePost(id, option))
    };
} 

export default connect(mapStateToProps, mapDispatchToProps)(ExistingPostPage);
