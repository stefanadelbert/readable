import React from 'react';
import { Switch, Route } from "react-router-dom";
import styled from 'styled-components';

import Header from './Header';
import MainPage from './MainPage';
import NewPostPage from './NewPostPage';
import PostsByCategoryPage from './PostsByCategoryPage';
import ExistingPostPage from './ExistingPostPage';
import PageNotFound from './PageNotFound';

const AppWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const App = (props) => {
    return (
        <AppWrapper>
            <Header />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/new" component={NewPostPage} />
                <Route path="/categories/:category" render={({match}) => <PostsByCategoryPage category={match.params.category} />} />
                <Route path="/posts/:id" render={({match}) => <ExistingPostPage id={match.params.id} />} />
                <Route path="/pagenotfound" component={PageNotFound} />
                        
            </Switch>
        </AppWrapper>
    );
}

export default App;
