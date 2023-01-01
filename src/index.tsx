import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components';
import { Dashboard } from './components';
import './style.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
// import { AddCarForm } from './components';
import { CarInventory } from './components/CarInventory';
import { Provider } from 'react-redux';
import { store } from './redux/store'


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
          {/* <Route path="/carinventory" element={<CarInventory/>}/> */}
          <Route path="/carinventory" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);