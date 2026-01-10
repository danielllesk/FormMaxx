import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HumanBody from './components/human-body.jsx'
import MuscleSelectButton from './components/muscle-select-button.jsx'
import Exercise from './components/exercise.jsx'
import ExersizeCard from './components/exersize-card.jsx'
import BarbellCurlsImage from './assets/BarbellCurls.png'
import Instructions from './components/instructions.jsx'

function App() {
  const [count, setCount] = useState(0)

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
