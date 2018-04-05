import React from 'react';
import { Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import MainPage from './MainPage';
import NewPostPage from './NewPostPage';
import ExistingPostPage from './ExistingPostPage';
import PageNotFound from './PageNotFound';

const App = (props) => {
    return (
        <div className="w-75 mx-auto">
            <Header />
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/posts/new" component={NewPostPage} />
                <Route exact path="/:category"
                    render={({match}) => <MainPage category={match.params.category} />}
                />
                <Route path="/:category/:post_id"
                    render={({match}) => <ExistingPostPage id={match.params.post_id} />}
                />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    );
}

export default App;
