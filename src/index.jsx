import React from 'react';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LocalizationProvider } from './localization/provider';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <LocalizationProvider>
            <App />
        </LocalizationProvider>
    </React.StrictMode>
)

serviceWorker.register();
