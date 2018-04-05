import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import MdAddCircleOutline from 'react-icons/lib/md/add-circle-outline';
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
    constructor(props) {
        super(props);
        this.state = {
            category: "all",
            sortField: "",
            sortDirection: "desc",
        }
        this.setCategory = this.setCategory.bind(this);
    }
    setCategory(category) {
        this.setState({category});
    }
    setSort(sortField, sortDirection) {
        this.setState({sortField, sortDirection});
    }
    render() {
        var categories = ["all"].concat(this.props.categories.map(category => category.name));
        var posts = this.props.posts.result.map(id => this.props.posts.entities.posts[id]);
        posts = filterPostsByCategory(posts, this.state.category);
        return (
            <div>
                <Categories setCategory={this.setCategory} categories={categories} />
                <div className="btn-group">
                    <Link className="btn btm-lg btn-light" to="/new"><MdAddCircleOutline/></Link>
                </div>
                <PostSummaries onVote={this.props.votePost} posts={posts} />
            </div>
        );
    }
}
MainPage.propTypes = {
    categories: PropTypes.array.isRequired,
    posts: PropTypes.object.isRequired,
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
