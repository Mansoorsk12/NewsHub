import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ReadLater from './components/ReadLater'
import { ReadLaterProvider } from './context/ReadLaterContext'

function App() {
  return (
    <ReadLaterProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read-later" element={<ReadLater />} />
        </Routes>
      </BrowserRouter>
    </ReadLaterProvider>
  )
}

export default App