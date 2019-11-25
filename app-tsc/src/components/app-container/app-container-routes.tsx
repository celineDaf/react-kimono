import React from 'react';
import Home from "./home/home";
import ArticlesListContainer from "./articles/articles-list-container";
import { Switch, Redirect, Route } from 'react-router-dom'

const APPContainerRoutes = () => {
    return (
    <Switch>
      <Redirect from='/' exact to='/home'/>
      <Route  path='/home'  component={Home} />
      <Route path="/articles/:category" component={ArticlesListContainer} />
      <Route render={() => <div className="noMatch-404">404</div>} />
    </Switch>
    )
  };

  export default APPContainerRoutes;