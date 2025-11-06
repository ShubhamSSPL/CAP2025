/**
 * Application Entry Point
 * Sets up Redux store and global styles
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import App from './App.tsx';

// Global Styles
import 'antd/dist/reset.css'; // Ant Design CSS
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
