import React from 'react';
import { Link } from "react-router-dom";

export default class AddPost extends React.Component {
    render() {
        return (
            <div>
                <h3>Add Post</h3>
                <Link to="/">Cancel</Link>
            </div>
        );
    }
}
