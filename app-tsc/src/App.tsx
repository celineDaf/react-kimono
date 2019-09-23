import React from 'react';
import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import './App.scss';
import Home from './components/home/home';
import Admin from './components/admin/admin';



const App: React.FC = () => {
  return (
      <BrowserRouter>
          <Switch>
            <Redirect from='/' exact to='/home'/>
            <Route path="/home"  component={Home}/>
            <Route path="/admin" exact component={Admin}/>
            <Route render={() => <div className="noMatch-404">404</div>} />
          </Switch>
      </BrowserRouter>
  );
}

export default App;
