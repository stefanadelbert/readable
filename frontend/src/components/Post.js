import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Remarkable from 'remarkable';

import Comments from './Comments';
import PostHeader from './PostHeader';

const PostBody = ({body}) => {
    let remarkable = new Remarkable();
    const rendered_body = remarkable.render(body);
    return (
        <div dangerouslySetInnerHTML={{__html: rendered_body}}/>
    );
}
PostBody.propTypes = {
    body: PropTypes.string.isRequired,
}

const InvalidPost = (props) => {
    return (
        <div>
            <h3>Invalid Post</h3>
        </div>
    )
}	

class PostEditBody extends React.Component {
    static propTypes = {
        body: PropTypes.string.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            bodyDraft: props.body
        }
        this.remarkable = new Remarkable();
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }
    handleBodyChange(event) {
        this.setState({bodyDraft: event.target.value})
    }
    render() {
        const rendered_body = this.remarkable.render(this.state.bodyDraft);
        return (
            <div>
                <div dangerouslySetInnerHTML={{__html: rendered_body}}/>
                <textarea value={this.state.bodyDraft} onChange={this.handleBodyChange} />
                <button onClick={this.props.onCancel}>Cancel</button>
                <button onClick={() => this.props.onOK(this.state.bodyDraft)}>OK</button>
            </div>
        )
    }
}

class PostFull extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
        this.onEdit = this.onEdit.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
        this.onEditOK = this.onEditOK.bind(this);
    }
    onEdit() {
        this.setState({editing: true});
    }
    onEditCancel() {
        this.setState({editing: false});
    }
    onEditOK(body) {
        console.log(`Set post body to: ${body}`);
        this.setState({editing: false});
    }
    render() {
        let filtered_posts = this.props.posts.filter(post => post.id === this.props.id);
        if (filtered_posts.length === 1) {
            let post = filtered_posts[0]
            return (
                <div>
                    <PostHeader {...post} />
                    {!this.state.editing && <div><PostBody body={post.body} /><button onClick={this.onEdit}>Edit</button></div>}
                    {this.state.editing && <PostEditBody body={post.body} onCancel={this.onEditCancel} onOK={this.onEditOK} />}
                    <Comments comments={this.props.comments[post.id]} />
                </div>
            )
        }
        return <InvalidPost />
    }
}

function mapStateToProps({posts, comments}) {
	return {
        posts,
        comments
	};
}

export default connect(mapStateToProps, null)(PostFull);
