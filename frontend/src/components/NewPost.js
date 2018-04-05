import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewPost extends React.Component {
    static propTypes = {
        categories: PropTypes.array.isRequired,
        onDone: PropTypes.func.isRequired,
        onCancel: PropTypes.func.isRequired,
    }
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            author: '',
            category: '',
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
                <form className="p-2">
                    <input className="form-control" type="text" placeholder={'Title'} value={this.state.title} onChange={this.handleTitleChange} name="title" />
                    <textarea className="form-control" placeholder={'Body'} value={this.state.body} onChange={this.handleBodyChange} name="body" />
                    <input className="form-control" type="text" placeholder={'Author'} value={this.state.author} onChange={this.handleAuthorChange} name="author" />
                    <select className="form-control" onChange={this.handleCategoryChange}>
                        {this.props.categories.map(
                            category => <option key={category} value={category}>{category}</option>
                        )}
                    </select>
                </form>
                <div className="d-flex justify-content-end">
                    <div className="btn-group p-2">
                        <button className="btn btn-primary" onClick={this.handleDone}>Done</button>
                        <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewPost;
