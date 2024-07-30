import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css';
import App from './App';
import store from './store';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Provider store={store}>
    <Router>
    <App/>
    </Router>
    </Provider>
  </React.StrictMode>
);
