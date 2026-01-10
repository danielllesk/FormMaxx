import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HumanBody from './components/human-body.jsx'
import MuscleSelectButton from './components/muscle-select-button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <MuscleSelectButton label="Muscle Select Button" onClick={() => console.log('clicked')} className="muscle-select-button" disabled={false} />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HumanBody />} />
        {/* <Route path="/" element={} /> */}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
