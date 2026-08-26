import {Routes , Route} from 'react-router'
import { HomePage } from './assets/pages/HomePage'
import {CheckoutPage} from './assets/pages/CheckoutPage'

import './App.css'

function App() {
  return (
    // <Routes>
    //   //index = "/"
    //   <Route path="/" element = {<HomePage />}></Route>
    //   <Route path="/checkout" element = {<p>Siam</p>}></Route>
    // </Routes>
    <Routes>
      <Route path="/" element = {<HomePage />} />
      <Route path="/checkout" element = {<CheckoutPage />} />
    </Routes>
  )
}

export default App
