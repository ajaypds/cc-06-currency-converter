import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-lg bg-orange-500 text-white'>Currency app with chai</h1>
    </>
  )
}

export default App
