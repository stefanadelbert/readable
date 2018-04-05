import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import Categories from './Categories';
import PostSummaries from './PostSummaries';
import Sort from './Sort';
import {votePost} from '../actions/actions';

const filterPostsByCategory = (posts, category) => {
    if (category === "all") {
        return posts;
    }
    return posts.filter(post => post.category === category);
}

const sortPosts = (posts, field, direction) => {
    if ("asc" == direction) {
        return posts.sort((a, b) => a[field] > b[field]);
    } else {
        return posts.sort((a, b) => a[field] < b[field]);
    }
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
            sortField: "timestamp",
            sortDirection: "desc",
        }
        this.setSort = this.setSort.bind(this);
    }
    setSort(sortField) {
        console.log('MainPage.setSort', sortField);
        if (sortField === this.state.sortField) {
            console.log('toggling');
            this.setState({
                sortDirection: (this.state.sortDirection === "asc"? "desc" : "asc")
            })
        } else {
            console.log('switching');
            this.setState({
                sortField,
                sortDirection: "asc"
            })
        }
    }
    render() {
        var categories = ["all"].concat(this.props.categories.map(category => category.name));
        var posts = this.props.posts.result.map(id => this.props.posts.entities.posts[id]);
        posts = filterPostsByCategory(posts, this.props.category);
        posts = sortPosts(posts, this.state.sortField, this.state.sortDirection);
        return (
            <div>
                <Categories active={this.props.category} categories={categories} />
                <div className="d-flex justify-content-end p-2">
                    <div className="btn-toolbar">
                        <Sort fields={["timestamp", "voteScore"]} active={this.state.sortField} direction={this.state.sortDirection} setSort={this.setSort}/>
                        <Link className="btn btm-lg btn-dark" to="/posts/new">New Post</Link>
                    </div>
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
