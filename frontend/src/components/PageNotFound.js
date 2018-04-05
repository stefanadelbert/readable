import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PageNotFound = (props) => {
    return <div className="d-flex justify-content-center align-items-center">
        <div className="card m-4">
            <div className="card-body">
                <div className="card-title">
                    <h2 className="text-center">404</h2>
                </div>
                <div className="card-subtitle">
                    <h4 className="text-center">Page not found</h4>
                </div>
                <div className="card-text">
                    {props.children}
                </div>
            </div>
        </div>
    </div>
}	
export default PageNotFound;
