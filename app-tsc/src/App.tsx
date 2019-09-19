import React from 'react';
import './App.scss';
import Home from './components/home/home';
import Footer from './components/footer/footer';
import Header from './components/header/header';

const App: React.FC = () => {
  return (
    <div className="App">
     <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
