import React from 'react';
import '../App/App.css';
import { Footer, Header } from '../../components';
import { Main } from '../../containers';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
