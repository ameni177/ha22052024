import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CarListing from './Component/CarListing';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <div className='car-listings'>

    <CarListing name={'Tesla Model S'} image = {process.env.PUBLIC_URL + '/tesla.jpg'}/>
    <CarListing name={'Audi Q5'} image = {process.env.PUBLIC_URL + '/audi.jpg'}/>
    <CarListing name={'BMW 3 Series'} image = {process.env.PUBLIC_URL + '/bmw.png'}/> 
  </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
