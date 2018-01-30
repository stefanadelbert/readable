import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class PostSummary extends React.Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        timestamp: PropTypes.number.isRequired,
        voteScore: PropTypes.number.isRequired,
        commentCount: PropTypes.number.isRequired,
    }
    render() {
        let formattedTimestamp = new Date(this.props.timestamp).toString();
        return (
            <div>
                <div>
                    <Link to={`/posts/${this.props.id}`}>
                        <div>{this.props.title}</div>
                    </Link>
                    <div>{this.props.voteScore}</div>
                </div>
                <div>
                    <div>{this.props.author}</div>
                    <div>{formattedTimestamp}</div>
                    <div>{this.props.commentCount}</div>
                </div>
            </div>
        );
    }
}
