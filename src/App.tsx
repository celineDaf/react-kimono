import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContainer from './components/app-container/app-container';



const App: React.FC = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AppContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;


