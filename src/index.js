import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import References from './components/References';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Species from './components/Species';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/references" element={<References />} />
        <Route path="/species" element={<Species />} />
        

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
