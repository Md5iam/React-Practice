import {Routes , Route} from 'react-router'
import { HomePage } from './assets/pages/HomePage'

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
      <Route path="/checkout" element = {<p>Siam</p>} />
    </Routes>
  )
}

export default App
