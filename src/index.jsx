import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";


import './styles/normalize.css'
import GlobalStyle from './styles/createGlobalStyle.jsx'

import reportWebVitals from './reportWebVitals';
import { LanguageProvider } from './components/LanguageContext';

import HomePage from './pages/HomePage';
import HomeTest from './pages/HomeTest'
import HomeTest2 from './pages/HomeTest2'
import AboutUs from './pages/AboutUs'

import ErrorPage from './components/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <LanguageProvider>
    <GlobalStyle/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/bis" element={<HomeTest />}/>
          <Route path="/bis2" element={<HomeTest2 />}/>
          <Route path="/About_us" element={<AboutUs />}/>

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </LanguageProvider>
  </HashRouter>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
