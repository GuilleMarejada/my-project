import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Filters from './Components/Filters'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gray-300 h-screen'>
       <Filters/>
      </div>
    
    </>
  )
}

export default App
