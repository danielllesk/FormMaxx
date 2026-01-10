import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HumanBody from './components/human-body.jsx'
import MuscleSelectButton from './components/muscle-select-button.jsx'
import Exercise from './components/exercise.jsx'
import ExersizeCard from './components/exersize-card.jsx'
import BarbellCurlsImage from './assets/BarbellCurls.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <ExersizeCard exercise="Barbell Curl" description="A classic biceps isolation exercise focusing on elbow flexion." exerciseImage={BarbellCurlsImage} />
    <MuscleSelectButton label="Muscle Select Button" onClick={() => console.log('clicked')} />
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
