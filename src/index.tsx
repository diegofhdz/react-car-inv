import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components';
import { Dashboard } from './components';
import './style.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import { Contact } from './components/Contact';
import { About } from './components/About';


let myTitle = "Diego's Webpage";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path="/carinventory" element={<Dashboard/>}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);