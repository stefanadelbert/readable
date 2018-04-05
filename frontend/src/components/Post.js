import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup} from 'reactstrap';
import {Card, CardTitle, CardSubtitle, CardBody, CardText} from 'reactstrap';
import {Form, Input} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Author from './Author';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';
import CommentCount from './CommentCount';

const Post = (props) => {
    let postColour = props.deleted? "danger" : "light";
    return (
        <Card color={postColour}>
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle>
                    <div className="d-flex flex-wrap justify-content-end">
                        <Author author={props.author}/>
                        <Timestamp timestamp={props.timestamp}/>
                        <VoteScore voteScore={props.voteScore}/>
                        <CommentCount commentCount={props.commentCount}/>
                    </div>
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

class NewPost extends React.Component {
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
                <Form>
                    <Input type="text" placeholder={'Title'} value={this.state.title} onChange={this.handleTitleChange} name="title" />
                    <Input type="textarea" placeholder={'Body'} value={this.state.body} onChange={this.handleBodyChange} name="body" />
                    <Input type="text" placeholder={'Author'} value={this.state.author} onChange={this.handleAuthorChange} name="author" />
                    <Input type="text" placeholder={'Category'} value={this.state.category} onChange={this.handleCategoryChange} name="category" />
                </Form>
                <div className="d-flex justify-content-end">
                    <ButtonGroup>
                        <Button color="primary" onClick={this.handleDone}>Done</Button>
                        <Button color="danger" onClick={this.handleCancel}>Cancel</Button>
                    </ButtonGroup>
                </div>
            </div>
        );
    }
}

class EditPost extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        onDone: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            body: this.props.body,
        }

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }
    handleBodyChange(event) {
        this.setState({body: event.target.value});
    }
    handleDone(event) {
        console.log('EditPost.handleDone');
        this.props.onDone(this.state.title, this.state.body);
    }
    handleCancel(event) {
        this.props.onCancel();
    }
    render() {
        return (
            <div>
                <div className="d-flex justify-content-end">
                    <Author author={this.props.author}/>
                    <Timestamp timestamp={this.props.timestamp}/>
                    <VoteScore voteScore={this.props.voteScore}/>
                    <CommentCount commentCount={this.props.commentCount}/>
                </div>
                <Form>
                    <Input type="text" placeholder={'Title'} value={this.state.title} onChange={this.handleTitleChange} name="title" />
                    <Input type="textarea" placeholder={'Body'} value={this.state.body} onChange={this.handleBodyChange} name="body" />
                    <div className="d-flex justify-content-end">
                        <ButtonGroup>
                            <Button color="primary" onClick={this.handleDone}>Done</Button>
                            <Button color="danger" onClick={this.handleCancel}>Cancel</Button>
                        </ButtonGroup>
                    </div>
                </Form>
            </div>
        );
    }
}

export {Post, NewPost, EditPost};
