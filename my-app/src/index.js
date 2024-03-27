import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC39Zb2Yo2Em7_V_X-HCijdSoO85-C5H6o",
  authDomain: "url-shortener-client-py.firebaseapp.com",
  projectId: "url-shortener-client-py",
  storageBucket: "url-shortener-client-py.appspot.com",
  messagingSenderId: "286294355928",
  appId: "1:286294355928:web:6550e7dae1dbe440414cad",
  measurementId: "G-0876QLS38K"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
