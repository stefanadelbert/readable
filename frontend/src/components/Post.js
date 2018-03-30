import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, ButtonGroup} from 'reactstrap';

import Author from './Author';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';
import CommentCount from './CommentCount';
import { ContainerRightAlign, ContainerColumnStretch, ContainerRowStretch} from './Containers.js';

const PostContainer = styled.div`
    padding: 1rem;
    margin: 0.20rem;
    &:hover {
        background-color: #eeeeee;
    }
`;
const DetailsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`;
const Title = styled.div``;
const Body = styled.div`padding: 1rem;`;
class Post extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        voteScore: PropTypes.number.isRequired,
        commentCount: PropTypes.number.isRequired,
    }
    render() {
        return (
            <PostContainer>
                <DetailsWrapper>
                    <Author author={this.props.author}/>
                    <Timestamp timestamp={this.props.timestamp}/>
                    <VoteScore voteScore={this.props.voteScore}/>
                    <CommentCount commentCount={this.props.commentCount}/>
                </DetailsWrapper>
                <Title><strong>{this.props.title}</strong></Title>
                <Body>{this.props.body}</Body>
            </PostContainer>
        )
    }
}

const Input = styled.input`
    margin: 0.2rem;
    flex: 1;
`;
const TextArea = styled.textarea`
    margin: 0.2rem;
    resize: vertical;
`;
class EditPost extends React.Component {
    static defaultProps = {
        title: '',
        body: '',
        author: '',
        category: '',
    }
    static propTypes = {
        title: PropTypes.string,
        body: PropTypes.string,
        author: PropTypes.string,
        category: PropTypes.string,
        onDone: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            body: this.props.body,
            author: this.props.author,
            category: this.props.author,
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleAuthorChange = this.handleAuthorChange.bind(this)
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }
    handleBodyChange(event) {
        this.setState({body: event.target.value});
    }
    handleAuthorChange(event) {
        this.setState({author: event.target.value});
    }
    handleCategoryChange(event) {
        this.setState({category: event.target.value});
    }
    handleDone(event) {
        this.props.onDone(this.state.title, this.state.body, this.state.author, this.state.category);
    }
    handleCancel(event) {
        this.props.onCancel();
    }
    render() {
        return (
            <div>
                <h3>New Post</h3>
                <div>
                    <ContainerColumnStretch>
                        <Input type="text" placeholder={'Title'} value={this.state.title} onChange={this.handleTitleChange} name="title" />
                        <TextArea type="text" placeholder={'Body'} value={this.state.body} onChange={this.handleBodyChange} name="body" />
                        <ContainerRowStretch>
                            <Input type="text" placeholder={'Author'} value={this.state.author} onChange={this.handleAuthorChange} name="author" />
                            <Input type="text" placeholder={'Category'} value={this.state.category} onChange={this.handleCategoryChange} name="category" />
                        </ContainerRowStretch>
                    </ContainerColumnStretch>
                    <ContainerRightAlign>
                        <ButtonGroup>
                            <Button color="primary" onClick={this.handleDone}>Done</Button>
                            <Button color="danger" onClick={this.handleCancel}>Cancel</Button>
                        </ButtonGroup>
                    </ContainerRightAlign>
                </div>
            </div>
        );
    }
}

export {Post, EditPost};
