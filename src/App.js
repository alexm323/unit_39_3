import React from 'react';
import ShoppingCart from './ShoppingCart'
import Alert from './Alert'
import Greeting from './Greeting'
import items from './items'
import fakeLogo from './new_logo.svg'
import './ShoppingCart.css'
import './CartItem.css'
import './App.css';

function App() {
  console.log(fakeLogo)
  return (
    <div>
      <Alert variant="success">
        <h1>Welcome Back!</h1>
        <Greeting />
      </Alert>
      <Alert variant="danger">
        <h1>Danger!</h1>
      </Alert>
      <img src={fakeLogo} id='logo' alt='logo' />
      <ShoppingCart items={items} username='Abby' />
    </div>
  );
}

export default App;
