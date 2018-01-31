import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

class EditablePost extends React.Component {
    state = {
        title: '',
        body: '',
    }
    static defaultProps = {
        title: '',
        body: '',
    }
    static propTypes = {
        title: PropTypes.string,
        body: PropTypes.string,
    }
    constructor(props) {
        super(props);

        this.state.title = props.title;
        this.state.body = props.title;

        this.handleTitleChange = this.handleTitleChange.bind(this)
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }
    handleBodyChange(event) {
        this.setState({body: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>
                    Title<input type="text" value={this.state.title} onChange={this.handleTitleChange} name="name" />
                </label>
            </div>
            <div>
                <label>
                    Body<input type="text" value={this.state.body} onChange={this.handleBodyChange} name="body" />
                </label>
            </div>
            <input type="submit" value="Submit" />
        </form>
        );
    }
}

const AddPost = (props) => {
    return (
        <div>
            <h3>New Post</h3>
            <EditablePost />
            <Link to="/">Cancel</Link>
        </div>
    );
}
export default AddPost;
