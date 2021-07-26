import React from 'react';

import Header from './utils/Header/Header';
import IndexPage from './utils/IndexPage/IndexPage/IndexPage';
import PathFinding from './PathFinding/PathFinding';
import Sorting from './Sorting/Sorting'

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path='/' component={IndexPage} />
      <Route path='/path-finding-visualizer' component={PathFinding} />
      <Route path='/sorting' component={Sorting} />
    </BrowserRouter>
  );
}

export default App;
