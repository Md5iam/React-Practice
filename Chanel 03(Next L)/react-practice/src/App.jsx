import './App.css'
import Card from './component/Card'
import TestComponent from './TestComponent'

function App() {

  return (
    <>
      <TestComponent />
      <Card firstName = "Siam" lastName = "Ahmed" age = {22}>
          <div>
            <p>This is from childer</p>
            <p>It implemented inside any existing component</p>
          </div>
      </Card>
    </>
  )
}

export default App
