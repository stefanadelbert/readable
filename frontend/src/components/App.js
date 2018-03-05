import React from 'react';
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';

import AddPost from './AddPost';
import Main from './Main';
import PageNotFound from './PageNotFound';
import Post from './Post';
import PostsByCategory from './PostsByCategory';
import Header from './Header';

const AppWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const App = (props) => {
    return (
        <AppWrapper>
            <Header />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/add" component={AddPost} />
                <Route path="/categories/:category" render={({match}) => <PostsByCategory category={match.params.category} />} />
                <Route path="/posts/:id" render={({match}) => <Post id={match.params.id} />} />
                <Route path="/pagenotfound" component={PageNotFound} />
                        
            </Switch>
        </AppWrapper>
    );
}

export default App;
