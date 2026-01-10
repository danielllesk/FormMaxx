import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HumanBody from './components/human-body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<HumanBody />} />
        <Route path="/" element={} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
