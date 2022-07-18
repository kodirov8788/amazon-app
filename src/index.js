import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Create from './pages/amazon-registration/Create';
import Single from './pages/single__product/Single';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>

        <Route exact path='/' element={<App />} />
        <Route exact path="register" element={<Create />} />
        <Route path='product/:id' element={<Single />} />
      </Routes>


    </BrowserRouter>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
