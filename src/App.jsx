import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginRegister from './pages/LoginRegister'
import Signup from "./pages/Signup"
import Notes from './pages/Notes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="app">
      <div id='container'>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginRegister />} />
      <Route path='/notes' element={<Notes />} />
      <Route path = '/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
      </div>
    </div>
    
  )
}

export default App
