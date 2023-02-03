import { useState } from 'react'
import './css/App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={(e) => setCount((pre) => pre + 1)}>count: {count}</button>
      <h2>wooooo!!</h2>
    </div>
  )
}

export default App
