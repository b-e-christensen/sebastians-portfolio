import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Background />
      <div className='App'>
        <Routes>
          <Route exact path='/React-Portfolio' element={<About />} />
          <Route path='/React-Portfolio/work' element={<Work />} />
          <Route path='/React-Portfolio/contact' element={<Contact />} />
          <Route path='/React-Portfolio/resume' element={<Resume />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
