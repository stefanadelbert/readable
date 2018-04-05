import React from 'react';
import {connect} from 'react-redux';

import {NewPost} from './Post';
import {newPost} from '../actions/actions';

class NewPostPage extends React.Component {
    constructor(props) {
        super(props);
        this.onCancel = this.onCancel.bind(this);
        this.onDone = this.onDone.bind(this);
    }
    onCancel() {
        this.props.history.goBack();
    }
    onDone(title, body, author, category) {
        this.props.newPost(title, body, author, category);
        this.props.history.goBack();
    }
    render() {
        return (
            <div>
                <NewPost
                    categories={this.props.categories.map(category => category.name)}
                    onDone={(title, body, author, category) => this.onDone(title, body, author, category)}
                    onCancel={this.onCancel}
                />
            </div>
        );
    }
}

function mapStateToProps({categories}) {
	return {
		categories,
	};
}

function mapDispatchToProps(dispatch) {
    return {
        newPost: (title, body, author, category) => dispatch(newPost(title, body, author, category))
    };
} 

export default connect(mapStateToProps, mapDispatchToProps)(NewPostPage);
