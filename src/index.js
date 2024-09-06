import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import for React 18
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductPreview from './ProductPreview';

const container = document.getElementById('root'); // Get the container element
const root = createRoot(container); // Create a root.

// Render your React component into the root.
root.render(
  <React.StrictMode>
    <ProductPreview /> {/* Render ProductPreview instead of App for now */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
