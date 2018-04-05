import React from 'react';
import PropTypes from 'prop-types';

import Author from './Author';
import Category from './Category';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';
import CommentCount from './CommentCount';

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
                    <Category category={this.props.category}/>
                    <Author author={this.props.author}/>
                    <Timestamp timestamp={this.props.timestamp}/>
                    <VoteScore voteScore={this.props.voteScore}/>
                    <CommentCount commentCount={this.props.commentCount}/>
                </div>
                <form>
                    <input className="form-control" type="text" placeholder={'Title'} value={this.state.title} onChange={this.handleTitleChange} name="title" />
                    <textarea className="form-control" placeholder={'Body'} value={this.state.body} onChange={this.handleBodyChange} name="body" />
                    <div className="d-flex justify-content-end">
                        <div className="btn-group">
                            <button className="btn btn-primary" onClick={this.handleDone}>Done</button>
                            <button className="btn btn-danger" onClick={this.handleCancel}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditPost;
