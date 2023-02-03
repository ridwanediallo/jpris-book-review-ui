import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import SessionProvider from './contexts/session';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SessionProvider>
      <Router>
        <App />
      </Router>
    </SessionProvider>
  </React.StrictMode>,
);
