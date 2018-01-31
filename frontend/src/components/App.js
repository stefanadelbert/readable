import React from 'react';
import { Switch, Route } from "react-router-dom";

import AddPost from './AddPost';
import Header from './Header';
import Main from './Main';
import PageNotFound from './PageNotFound';
import Post from './Post';
import PostsByCategory from './PostsByCategory';

const PostsByCategoryWrapper = ({match}) => <PostsByCategory category={match.params.category} />;
const PostWrapper = ({match}) => <Post id={match.params.id} />;

const App = (props) => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/add" component={AddPost} />
                <Route exact path="/categories/:category" component={PostsByCategoryWrapper} />
                <Route exact path="/posts/:id" component={PostWrapper} />
                <Route path="/pagenotfound" component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
