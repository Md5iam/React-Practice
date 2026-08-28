import axios from 'axios'
import { useEffect, useState } from 'react'
import {Routes , Route} from 'react-router'
import { HomePage } from './assets/pages/HomePage'
import {CheckoutPage} from './assets/pages/CheckoutPage'
import { OrdersPage } from './assets/pages/OrdersPage'

import './App.css'

function App() {

  const[cart, setCart] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3000/api/cart-items')
    .then((response)=>{
      setCart(response.data);
    })
  },[])

  return (
    <Routes>
      <Route path="/" element = {<HomePage cart={cart} />} />
      <Route path="/checkout" element = {<CheckoutPage cart={cart} />} />
      <Route path="/orders" element = {<OrdersPage />} />
    </Routes>
  )
}

export default App
