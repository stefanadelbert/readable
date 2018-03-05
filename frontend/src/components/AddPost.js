import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link, Redirect} from 'react-router-dom';
import styled from 'styled-components';

import {addPost} from '../actions/actions';

const ButtonLink = styled.a`
    margin: 0.2rem;
    padding: 0.2rem;
    background: transparent;
    text-decoration: none;
    color: black;
    border: black 1px solid;
    border-radius: 0.1rem;
    &:hover {
        color: white;
        background-color: grey;
    }
`;
const ButtonReactRouterLink = styled(Link)`
    margin: 0.2rem;
    padding: 0.2rem;
    background: transparent;
    text-decoration: none;
    color: black;
    border: black 1px solid;
    border-radius: 0.1rem;
    &:hover {
        color: white;
        background-color: grey;
    }
`;
const ContainerRightAlign = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const ContainerColumnStretch = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;
const ContainerRowStretch = styled.div`
    display: flex;
    flex-direction: row;
    align-content: stretch;
    align-items: stretch;
    flex-wrap: wrap;
`;
const Input = styled.input`
    margin: 0.2rem;
    flex: 1;
`;
const TextArea = styled.textarea`
    margin: 0.2rem;
    resize: vertical;
`;
class AddPost extends React.Component {
    state = {
        title: '1',
        body: '2',
        author: '3',
        category: '4',
        done: false,
    }
    static defaultProps = {
        title: 'Title',
        body: 'Body',
        author: 'Author',
        category: 'Category',
    }
    static propTypes = {
        title: PropTypes.string,
        body: PropTypes.string,
        author: PropTypes.string,
        category: PropTypes.string,
    }
    constructor(props) {
        super(props);

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleAuthorChange = this.handleAuthorChange.bind(this)
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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
    handleSubmit(event) {
        this.props.addPost(this.state.title, this.state.body, this.state.author, this.state.category);
        this.setState({done: true});
    }
    handleCancel(event) {
        this.setState({done: true});
    }
    render() {
        return (
            this.state.done?
            <Redirect to="/" /> :
            <div>
                <h3>New Post</h3>
                <div>
                    <ContainerColumnStretch>
                        <Input type="text" placeholder={this.props.title} value={this.state.title} onChange={this.handleTitleChange} name="title" />
                        <TextArea type="text" placeholder={this.props.body} value={this.state.body} onChange={this.handleBodyChange} name="body" />
                        <ContainerRowStretch>
                            <Input type="text" placeholder={this.props.author} value={this.state.author} onChange={this.handleAuthorChange} name="author" />
                            <Input type="text" placeholder={this.props.category} value={this.state.category} onChange={this.handleCategoryChange} name="category" />
                        </ContainerRowStretch>
                    </ContainerColumnStretch>
                    <ContainerRightAlign>
                        <ButtonLink onClick={this.handleSubmit}>Submit</ButtonLink>
                        <ButtonLink onClick={this.handleCancel}>Cancel</ButtonLink>
                    </ContainerRightAlign>
                </div>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (title, body, author, category) => dispatch(addPost(title, body, author, category))
    }
}

export default connect(null, mapDispatchToProps)(AddPost);
