import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Button, ButtonGroup} from 'reactstrap';
import {Card, CardTitle, CardSubtitle, CardBody, CardText} from 'reactstrap';

import Author from './Author';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';
import CommentCount from './CommentCount';
import {ContainerRightAlign, ContainerColumnStretch, ContainerRowStretch} from './Containers.js';

const DetailsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
`;
const Post = (props) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>
                    <DetailsWrapper>
                        <Author author={props.author}/>
                        <Timestamp timestamp={props.timestamp}/>
                        <VoteScore voteScore={props.voteScore}/>
                        <CommentCount commentCount={props.commentCount}/>
                    </DetailsWrapper>
                </CardSubtitle>
                <CardText>{props.body}</CardText>
                {props.children}
            </CardBody>
        </Card>
    );
}
Post.defaultProps = {
    body: "",
};
Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    body: PropTypes.string
};


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
