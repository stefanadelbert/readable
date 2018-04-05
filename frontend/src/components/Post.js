import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

import Author from './Author';
import Category from './Category';
import Timestamp from './Timestamp';
import VoteScore from './VoteScore';
import CommentCount from './CommentCount';

const Post = (props) => {
    return (
        <div className="card bg-light">
            <div className="card-body">
                <div className="card-title">{props.title}</div>
                <div className="card-subtitle">
                    <div className="d-flex flex-wrap justify-content-end">
                        <Category category={props.category}/>
                        <Author author={props.author}/>
                        <Timestamp timestamp={props.timestamp}/>
                        <VoteScore voteScore={props.voteScore}/>
                        <CommentCount commentCount={props.commentCount}/>
                    </div>
                </div>
                <div className="card-text">{props.body}</div>
                {props.children}
            </div>
        </div>
    );
}
Post.defaultProps = {
    body: "",
};
Post.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    timestamp: PropTypes.number.isRequired,
    voteScore: PropTypes.number.isRequired,
    commentCount: PropTypes.number.isRequired,
    body: PropTypes.string
};


export default Post;
