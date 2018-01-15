import React from 'react';
import ReactDom from 'react-dom';
import App from './app/app';
import DocsState from './api/docs/state/state';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Docs from './docs/docs';

const docsStore = new DocsState(window.initialDocsState);
const main = document.getElementById('root');
const renderOrHydrate = main.innerHTML.trim().length ? 'hydrate' : 'render';

ReactDom[renderOrHydrate](
  <Router>
    <div>
      <App docsStore={docsStore}/>
      <Route path="/component-library" component={Docs}/>
    </div>
  </Router>, 
  document.getElementById('root'));