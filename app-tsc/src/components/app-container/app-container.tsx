import React, { Fragment } from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from "./home/home";
import ArticlesListContainer from "./articles/articles-list-container";

const AppContainer = () => {

  return (
    <Fragment>
        <Header />
        

        <Switch>
        <Redirect from='/' exact to='/home'/>
          <Route  path='/home'  component={Home} />
          <Route path="/articles/:category" component={ArticlesListContainer} />
          <Route render={() => <div className="noMatch-404">404</div>} />
        </Switch>

        <Footer />
    </Fragment>
  );
};

export default AppContainer;
