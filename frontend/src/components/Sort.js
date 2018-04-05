import React from 'react';
import PropTypes from 'prop-types';
import MdKeyboardArrowUp from 'react-icons/lib/md/keyboard-arrow-up';
import MdKeyboardArrowDown from 'react-icons/lib/md/keyboard-arrow-down';
import 'bootstrap/dist/css/bootstrap.min.css';

class Sort extends React.Component {
    static propTypes = {
        fields: PropTypes.array.isRequired,
        active: PropTypes.string.isRequired,
        direction: PropTypes.string.isRequired,
        setSort: PropTypes.func.isRequired,
    }
    render() {
        return <div>
            <div className="btn-group mr-2">
                {this.props.fields.map((field, index) => {
                    if (this.props.active === field) {
                        return <button
                            className={"btn btn-secondary active"}
                            key={index}
                            onClick={() => this.props.setSort(field)}
                        >
                            {field}
                            {this.props.direction === "asc" && <MdKeyboardArrowUp/>}
                            {this.props.direction === "desc" && <MdKeyboardArrowDown/>}
                        </button>
                    } else {
                        return <button
                            className={"btn btn-secondary"}
                            key={index}
                            onClick={() => this.props.setSort(field)}
                        >
                            {field}
                        </button>
                    }
                }
            )} 
            </div>
        </div>
    }
}

export default Sort;
