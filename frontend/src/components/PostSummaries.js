import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MdThumbUp from 'react-icons/lib/md/thumb-up';
import MdThumbDown from 'react-icons/lib/md/thumb-down';
import MdChevronRight from 'react-icons/lib/md/chevron-right';
import 'bootstrap/dist/css/bootstrap.min.css';

import Post from './Post';

const PostSummaries = (props) => {
    return (
        <div>
            {props.posts.map(post => 
                <div key={post.id}>
                    <Post {...post} >
                        <div className="d-flex justify-content-end">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm" onClick={() => props.onVote(post.id, 'downVote')}><MdThumbDown className="text-danger"/></button>
                                <button type="button" className="btn btn-sm" onClick={() => props.onVote(post.id, 'upVote')}><MdThumbUp className="text-success"/></button>
                                <Link className="btn btn-secondary" to={`/${post.category}/${post.id}`}><MdChevronRight/></Link>
                            </div>
                        </div>
                    </Post>
                </div>
            )}
        </div>
    );
};
PostSummaries.defaultProps = {
    posts: [],
};
PostSummaries.propTypes = {
    posts: PropTypes.array,
    onVote: PropTypes.func.isRequired,
};
export default PostSummaries;
