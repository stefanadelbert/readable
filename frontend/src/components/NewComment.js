import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class NewComment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            author: "",
        }

        this.handleBodyChange = this.handleBodyChange.bind(this)
        this.handleAuthorChange = this.handleAuthorChange.bind(this)
    }
    handleBodyChange(event) {
        this.setState({body: event.target.value});
    }
    handleAuthorChange(event) {
        this.setState({author: event.target.value});
    }
    render() {
        return (
            <div className="card">
                <div className="cardBody">
                    <div className="cardText">
                        <form>
                            <textarea className="form-control" rows="2" placeholder="Comment" onChange={this.handleBodyChange}/>
                            <input className="form-control" placeholder="Author" onChange={this.handleAuthorChange}/>
                        </form>
                        <div className="d-flex justify-content-end">
                            <button type="button" className="btn btn-sm btn-primary" onClick={() => this.props.onDone(this.state.body, this.state.author)}>Done</button>
                            <button type="button" className="btn btn-sm" onClick={this.props.onCancel}>Cancel</button>
                    </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default NewComment;
