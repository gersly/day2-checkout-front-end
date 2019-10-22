import React from 'react';
import TopNav from './components/TopNav/TopNav'
import './App.css';
import CheckoutContainer from './components/Checkout/CheckoutContainer';

function App() {
  return (
    <div>
      <TopNav />
      <div>
        <CheckoutContainer />
      </div>
    </div>
  );
}

export default App;
