import React from 'react';
import PropTypes from 'prop-types';
import MdEdit from 'react-icons/lib/md/edit';
import MdDelete from 'react-icons/lib/md/delete';
import {Card, CardSubtitle, CardText} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Author from './Author';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';

class Comment extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        voteScore: PropTypes.number.isRequired,
        onDelete: PropTypes.func.isRequired,
    };
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
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
    render() {
        return (
            <Card className="m-1 p-1">
                <CardSubtitle>
                    <div className="d-flex flex-wrap justify-content-end">
                        <Author author={this.props.author}/>
                        <Timestamp timestamp={this.props.timestamp} />
                        <VoteScore voteScore={this.props.voteScore}/>
                    </div>
                </CardSubtitle>
                <CardText>{this.props.body}</CardText>
                <div className="d-flex justify-content-end">
                    <div className="btn-group">
                        <button type="button" className="btn btn-sm" onClick={this.onEdit}><MdEdit/></button>
                        <button type="button" className="btn btn-sm btn-danger" onClick={this.onDelete}><MdDelete/></button>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Comment;
