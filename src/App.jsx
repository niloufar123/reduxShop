import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <h1 className="text-3xl font-bold underline text-center mt-10">
      Hello world!
    </h1>
    </div>
  )
}

export default App
