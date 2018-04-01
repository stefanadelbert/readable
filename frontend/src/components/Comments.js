import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MdEdit from 'react-icons/lib/md/edit';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdDeleteForever from 'react-icons/lib/md/delete-forever';
import {Card, CardTitle, CardSubtitle, CardBody, CardText} from 'reactstrap';
import {Button, ButtonGroup} from 'reactstrap';
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
    };
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
        this.onDelete = this.onDelete.bind(this);
    }
    onDelete() {
        console.log('Comments.Comment.onDelete', this.props);
        this.setState({editing: false});
        this.props.onDelete(this.props.id);
    }
    render() {
        return (
            <Card className="m-1 p-1">
                <CardSubtitle>
                    <div className="d-flex justify-content-end">
                        <Author author={this.props.author}/>
                        <Timestamp timestamp={this.props.timestamp} />
                        <VoteScore voteScore={this.props.voteScore}/>
                    </div>
                </CardSubtitle>
                <CardText>{this.props.body}</CardText>
                <div className="d-flex justify-content-end">
                    <ButtonGroup>
                        <Button color="danger" onClick={this.onDelete}><MdDeleteForever/>Delete</Button>
                    </ButtonGroup>
                </div>
            </Card>
        );
    }
}

const Comments = ({comments}) => {
    if (comments === undefined) {
        return <div>No comments</div>
    }
    return (
        <ul>
            {comments.map(comment => (
                <div key={comment.id}>
                    <Comment
                        id={comment.id}
                        body={comment.body}
                        author={comment.author}
                        timestamp={comment.timestamp}
                        voteScore={comment.voteScore}
                        onDelete={(id) => console.log('Comments.onDelete', id)}
                    />
                </div>
            ))}
        </ul>
    );
}
Comments.defaultProps = {
    comments: [],
}
Comments.propTypes = {
    comments: PropTypes.array,
}
export default Comments;
