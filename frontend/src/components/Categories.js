import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Categories extends React.Component {
    render() {
        return (
            <div className="btn-group p-2">
                <Link className={"btn btn-secondary" + ("all" === this.props.active? " active" : "")} to="/all">all</Link>
                {this.props.categories.map(category =>
                    <Link key={category} className={"btn btn-secondary" + (category === this.props.active? " active" : "")} to={"/" + category}>{category}</Link>

                )}
            </div>
        );
    }
}
Categories.defaultProps = {
    categories: [],
    active: "all",
}
Categories.propTypes = {
    active: PropTypes.string,
    categories: PropTypes.array,
}
export default Categories;
