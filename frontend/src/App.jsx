import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HumanBody from './components/human-body.jsx'
import Exercise from './components/exercise.jsx'
import Instructions from './components/instructions.jsx'

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<HumanBody />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
