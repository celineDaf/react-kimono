import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.scss';
import Home from './components/home/home';
import Admin from './components/admin/admin';
import AdminArticleUpdateContainer from './components/admin/admin-article/admin-article-update-container';
import ArticlesListContainer from './components/articles/articles-list-container';



const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
          <Switch>
            <Redirect from='/' exact to='/home'/>
            <Route path="/home"  component={Home}/>
            <Route path="/admin" exact component={Admin}/>
            <Route path="/admin/add-article" exact component={AdminArticleUpdateContainer}/>
            <Route path="/article/:category" component={ArticlesListContainer}/>
            <Route render={() => <div className="noMatch-404">404</div>} />
          </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;
