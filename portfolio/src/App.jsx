import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './components/Portfolio'
import Project from './components/Project'
import AboutMe from './components/Aboutme';
import Skills from './components/Skills';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Router>
  )
}

export default App
