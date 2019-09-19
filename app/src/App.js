import React from 'react';
import Home from '../../app-tsc/src/components/home/home'
import Header from '../../app-tsc/src/components/header/header'
import Footer from '../../app-tsc/src/components/footer/footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
