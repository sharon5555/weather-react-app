import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Instead of using ReactDOM.render, use createRoot
const root = createRoot(document.getElementById('weather'));

// Render your app inside the root
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
