import React from 'react';
import ReactDom from 'react-dom';
import '@babel/polyfill';
import App from './components/App/index.jsx';

// create root const
const root = document.getElementById('root');

// render the app
ReactDom.render(<App />, root);