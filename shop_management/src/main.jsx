import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import adminReducer from './redux/adminReducer';
import productListReducer from './redux/productListReducer';
import ProductAddToCartReducer from './redux/ProductAddToCartReducer';

// Combine reducers
const rootReducer = combineReducers({
  admin: adminReducer,
  product: productListReducer,
  productCart: ProductAddToCartReducer,
});

// Create Redux store
const store = configureStore({
  reducer: rootReducer,
});

// Render the app using createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <GoogleOAuthProvider
      clientId="22352471051-nmb00ujkoajleo1gkha4obl72cp7elra.apps.googleusercontent.com">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </Provider>
);
