import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { NewApp } from './components/pages/newApp/NewApp';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NewApp />
  </React.StrictMode>
);
