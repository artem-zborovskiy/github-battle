import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/App.js';
import store from './redux/store';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <BrowserRouter basename="/github-battle">
            <App />
        </BrowserRouter>
    </Provider>
);