import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Admin from './components/admin/admin';
import AdminArticleUpdateContainer from './components/admin/admin-article/admin-article-update-container';
import AppContainer from './components/app-container/app-container';



const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
          <Switch>
            <Route path="/admin" exact component={Admin}/>
            <Route path="/admin/add-article" exact component={AdminArticleUpdateContainer}/>
            <Route path="/admin/articles/:id" exact component={AdminArticleUpdateContainer}/>
            <Route path="/" component={AppContainer}/>
          </Switch>
      </BrowserRouter>
      </div>
  );
}

export default App;


