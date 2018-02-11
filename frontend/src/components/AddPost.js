import React from 'react';
import PropTypes from 'prop-types';

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
        onCancel: PropTypes.func.isRequired,
        onSubmit: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);

        this.state.title = props.title;
        this.state.body = props.body;

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
        this.props.onSubmit(this.state.title, this.state.body);
    }
    render() {
        return (
            <div>
                    <div><input type="text" placeholder={"Title"} value={this.state.title} onChange={this.handleTitleChange} name="name" /></div>
                    <div><input type="text" placeholder={"Body"} value={this.state.body} onChange={this.handleBodyChange} name="body" /></div>
                    <div>
                        <div><a onClick={this.handleSubmit}>Submit</a></div>
                        <div><a onClick={this.props.onCancel}>Cancel</a></div>
                    </div>
            </div>
        );
    }
}

const EditPost = (props) => {
    return (
        <div>
            <h3>Edit Post</h3>
            <EditablePost
                title={props.post.title}
                body={props.post.body}
                onCancel={() => console.log("onCancel clicked")}
                onSubmit={(title, body) => console.log(`onSubmit clicked: ${title} ${body}`)}
            />
        </div>
    );
}

const AddPost = (props) => {
    return (
        <div>
            <h3>New Post</h3>
            <EditablePost
                onCancel={() => console.log("onCancel clicked")}
                onSubmit={(title, body) => console.log(`onSubmit clicked: ${title} ${body}`)}
            />
        </div>
    );
}

export {EditPost, AddPost};
