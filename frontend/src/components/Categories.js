import React from 'react';
import PropTypes from 'prop-types';

export default class Categories extends React.Component {
    static defaultProps = {
        categories: [],
    }
    static propTypes = {
        categories: PropTypes.array,
    }
	render() {
		return (
			<div>
                <ul>
                    {this.props.categories.map(category =>
                        <li key={category.name}>{category.name}</li>
                    )}
                </ul>
			</div>
		);
	}
}
