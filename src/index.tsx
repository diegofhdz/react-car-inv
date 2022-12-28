import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components';
import { Dashboard } from './components';
import './style.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

let myTitle = "Diego's Webpage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);