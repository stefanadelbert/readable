import React from 'react';
import { Switch, Route } from "react-router-dom";

import Header from './Header';
import Main from './Main';
import AddPost from './AddPost';
import PageNotFound from './PageNotFound';
import Post from './Post';

export default class App extends React.Component {
	render() {
		return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/add" component={AddPost} />
                    <Route exact path="/posts/:id" component={PostWrapper} />
                    <Route path="/pagenotfound" component={PageNotFound} />
                </Switch>
            </div>
		);
	}
}

const PostWrapper = ({match}) => {
    return <Post id={match.params.id} />
}	
