import React from 'react';
import PropTypes from 'prop-types';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdEdit from 'react-icons/lib/md/edit';
import MdDelete from 'react-icons/lib/md/delete';
import 'bootstrap/dist/css/bootstrap.min.css';

import Author from './Author';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';

class BodyEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.body,
        }
        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.onDone = this.onDone.bind(this)
    }
    handleBodyChange(event) {
        this.setState({body: event.target.value});
    }
    onDone() {
        this.props.onDone(this.state.body);
    }
    render() {
        return <div>
                <textarea className="form-control" onChange={this.handleBodyChange} value={this.state.body}/>
                <div className="d-flex justify-content-end">
                    <div className="btn-group">
                        <button className="btn btn-sm btn-primary" onClick={this.onDone}>Done</button>
                        <button className="btn btn-sm btn-danger" onClick={this.props.onCancel}>Cancel</button>
                    </div>
                </div>
        </div>
    }
}

class Comment extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        voteScore: PropTypes.number.isRequired,
        onEdit: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
        onVote: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onVote = this.onVote.bind(this);
        this.onEditDone = this.onEditDone.bind(this);
        this.onEditCancel = this.onEditCancel.bind(this);
    }
    onEdit() {
        console.log('Comments.Comment.onEdit', this.props);
        this.setState({editing: true});
    }
    onDelete() {
        console.log('Comments.Comment.onDelete', this.props);
        this.setState({editing: false});
        this.props.onDelete();
    }
    onVote(option) {
        console.log('Comment.onVote', option);
        this.props.onVote(option);
    }
    onEditDone(body) {
        console.log('Comment.onEditDone', body);
        this.setState({editing: false})
        this.props.onEdit(body);
    }
    onEditCancel() {
        console.log('Comment.onEditCancel');
        this.setState({editing: false})
    }
    render() {
        return (
            <div className="card m-1 p-1">
                <div className="card-subtitle">
                    <div className="d-flex flex-wrap justify-content-end">
                        <Author author={this.props.author}/>
                        <Timestamp timestamp={this.props.timestamp} />
                        <VoteScore voteScore={this.props.voteScore}/>
                    </div>
                </div>
                {this.state.editing && <BodyEditor body={this.props.body} onDone={this.onEditDone} onCancel={this.onEditCancel}/>}
                {!this.state.editing && <div className="card-text">{this.props.body}</div>}
                {!this.state.editing && 
                    <div className="d-flex justify-content-end">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm" onClick={() => this.onVote('downVote')}><MdThumbDown className="text-danger"/></button>
                            <button type="button" className="btn btn-sm" onClick={() => this.onVote('upVote')}><MdThumbUp className="text-success"/></button>
                            <button type="button" className="btn btn-sm" onClick={this.onEdit}><MdEdit/></button>
                            <button type="button" className="btn btn-sm btn-danger" onClick={this.onDelete}><MdDelete/></button>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default Comment;
