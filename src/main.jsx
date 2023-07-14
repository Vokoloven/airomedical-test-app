import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename="airomedical-test-app">
            <App />
        </BrowserRouter>
    </StrictMode>
);
