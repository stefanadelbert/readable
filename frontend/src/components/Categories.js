import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

class Categories extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "all"
        }
        this.setCategory = this.setCategory.bind(this);
    } 
    setCategory(category) {
        this.setState({category});
        this.props.setCategory(category);
    }
    render() {
        return (
            <div className="btn-group p-2">
                {this.props.categories.map(category =>
                    <button key={category} className={"btn btn-secondary" + (category === this.state.category? " active" : "")} onClick={() => this.setCategory(category)}>{category}</button>

                )}
            </div>
        );
    }
}
Categories.defaultProps = {
    categories: [],
}
Categories.propTypes = {
    categories: PropTypes.array,
    setCategory: PropTypes.func.isRequired,
}
export default Categories;
