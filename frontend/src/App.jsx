import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HumanBody from './components/human-body.jsx'
import MuscleSelectButton from './components/muscle-select-button.jsx'
import Exercises from './components/excerise.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <MuscleSelectButton label="Muscle Select Button" onClick={() => console.log('clicked')} />
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<HumanBody />} />
        <Route path="/exercise" element={<Exercises />} />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
