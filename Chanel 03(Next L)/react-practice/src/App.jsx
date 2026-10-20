import './App.css'
import Counter from './component/Counter';
import Display from './component/Display';
import CounterProvider from './providers/counter.provider'

function App() {

  return (
    <CounterProvider>
      <p>Parent Component</p>
      <Counter />
      <Display />
    </CounterProvider>
  )
}

export default App
