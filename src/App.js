import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

function App() {
  return (
    <>
      <BrowserRouter history={customHistory}>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
