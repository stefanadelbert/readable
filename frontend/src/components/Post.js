import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Remarkable from 'remarkable';
import styled from 'styled-components';

import Author from './Author';
import Comments from './Comments';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';
import CommentCount from './CommentCount';

const Body = ({body}) => {
    let remarkable = new Remarkable();
    const rendered_body = remarkable.render(body);
    return (
        <div dangerouslySetInnerHTML={{__html: rendered_body}}/>
    );
}
Body.propTypes = {
    body: PropTypes.string.isRequired,
}

const InvalidPost = (props) => {
    return (
        <div>
            <h3>Invalid Post</h3>
        </div>
    )
}

class BodyEdit extends React.Component {
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

const PostHeaderContainer = styled.div`
    padding: 1rem;
    margin: 0.20rem;
    border-left: 0.3rem grey solid;
    &:hover {
        border-left-color: darkred;
    }
`;
const PostHeaderDetailsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`;
const Title = styled.div`flex: 1;`;
const PostHeader = (props) => {
    return (
        <PostHeaderContainer>
            <Title><strong>{props.title}</strong></Title>
            <PostHeaderDetailsWrapper>
                <Author author={props.author}/>
                <Timestamp timestamp={props.timestamp}/>
                <VoteScore voteScore={props.voteScore}/>
                <CommentCount commentCount={props.commentCount}/>
        </PostHeaderDetailsWrapper>
        </PostHeaderContainer>
    );
}
PostHeader.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
};
export {PostHeader};

class FullPostWithComments extends React.Component {
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
            let post = filtered_posts[0];
            let body;
            if (!this.state.editing) {
                body = <div>
                        <Body body={post.body} />
                        <button onClick={this.onEdit}>Edit</button>
                    </div>;
            } else {
                body = <BodyEdit body={post.body} onCancel={this.onEditCancel} onOK={this.onEditOK} />;
            }
            return (
                <div>
                    <PostHeader {...post} />
                    {body}
                    <Comments comments={this.props.comments[post.id]} />
                </div>
            );
        }
        return <InvalidPost />;
    }
}

function mapStateToProps({posts, comments}) {
	return {
        posts,
        comments
	};
}

export default connect(mapStateToProps, null)(FullPostWithComments);
