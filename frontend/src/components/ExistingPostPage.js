import React from 'react';
import {connect} from 'react-redux';
import {Button, ButtonGroup} from 'reactstrap';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdThumbDown from 'react-icons/lib/md/thumb-down';

import {Post, EditPost} from './Post';
import Comments from './Comments';
import {ContainerRightAlign} from './Containers.js';
import {votePost} from '../actions/actions';

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
        let post = this.props.posts[this.props.id];
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
                        <ButtonGroup>
                            <Button color="danger" onClick={() => this.onVote(post.id, 'downVote')}><MdThumbDown/></Button>
                            <Button color="success" onClick={() => this.onVote(post.id, 'upVote')}><MdThumbUp/></Button>
                            <Button onClick={this.onEdit}>Edit</Button>
                        </ButtonGroup>
                    </ContainerRightAlign>
                    <Comments comments={this.props.comments[post.id]} />
                </div>
            );
        }
    }
}

function mapStateToProps({posts, comments}) {
	return {
        posts: posts.entities.posts,
        comments
	};
}

function mapDispatchToProps(dispatch) {
    return {
        votePost: (id, option) => dispatch(votePost(id, option))
    };
} 

export default connect(mapStateToProps, mapDispatchToProps)(ExistingPostPage);
