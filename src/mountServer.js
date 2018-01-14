import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/app/app';

const reactApp = async () => {
  return {
    initialDom: ReactDOMServer.renderToString(<App />)
  };
};

export default reactApp;