import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './app/app';
import DocsState from './api/docs/state/state';
import {StaticRouter as Router, Route} from 'react-router-dom';
import Docs from './docs/docs';

const reactApp = async (req) => {
  const docsStore = new DocsState();
  const initialDocsState = {};
  const context = {};
  return {
    initialDom: ReactDOMServer.renderToString(
      <Router location={req.url} context={context}>
        <div>
          <App docsStore={docsStore}/>
          <Route path="/component-library" component={Docs}/>
        </div>
      </Router>
    ),
    initialDocsState
  };
};

export default reactApp;