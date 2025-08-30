import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // We'll create a minimal one

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);