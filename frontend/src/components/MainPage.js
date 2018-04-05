import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Categories from './Categories';
import PostSummaries from './PostSummaries';
import {votePost} from '../actions/actions';

const filterPostsByCategory = (posts, category) => {
    if (category === "all") {
        return posts;
    }
    return posts.filter(post => post.category === category);
}

class MainPage extends React.Component {
    static propTypes = {
        category: PropTypes.string,
        categories: PropTypes.array.isRequired,
        posts: PropTypes.object.isRequired,
    }
    static defaultProps = {
        category: "all",
    }
    constructor(props) {
        super(props);
        this.state = {
            category: this.props.category,
            sortField: "",
            sortDirection: "desc",
        }
    }
    setSort(sortField, sortDirection) {
        this.setState({sortField, sortDirection});
    }
    render() {
        var categories = this.props.categories.map(category => category.name);
        var posts = this.props.posts.result.map(id => this.props.posts.entities.posts[id]);
        posts = filterPostsByCategory(posts, this.props.category);
        return (
            <div>
                <Categories active={this.props.category} categories={categories} />
                <div className="btn-group d-flex justify-content-end p-2">
                    <Link className="btn btm-lg btn-dark" to="/posts/new">New Post</Link>
                </div>
                <PostSummaries onVote={this.props.votePost} posts={posts} />
            </div>
        );
    }
}

function mapStateToProps({categories, posts}) {
	return {
		categories,
		posts
	};
}

function mapDispatchToProps(dispatch) {
    return {
        votePost: (id, option) => dispatch(votePost(id, option)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
