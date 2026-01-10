import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HumanBody from './components/human-body.jsx'
import MuscleSelectButton from './components/muscle-select-button.jsx'
import Exercise from './components/exercise.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<HumanBody />} />
        <Route path="/exercise" element={<Exercise />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
