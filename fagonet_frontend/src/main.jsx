import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './assets/css/home/index.css';
import './assets/css/nav/index.css';
import './assets/css/services/index.css';
import './assets/css/solutions/index.css';
import './assets/css/contact/index.css';
import './assets/css/footer/index.css';
import './assets/css/_animation.css';
import { ServicesProvider } from './pages/services/hooks/services-context.jsx';
import { SolutionsProvider } from './pages/solutions/hooks/solutions-context.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ServicesProvider>
        <SolutionsProvider>
          <App />
        </SolutionsProvider>
      </ServicesProvider>
    </Provider>
  </React.StrictMode>
);
