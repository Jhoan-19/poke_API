import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Aleatorios from './Componentes/aleatorios'
import Capturados from './Componentes/capturados'
import Favoritos from './Componentes/favoritos'
import Lista from './Componentes/lista'
import Pokemon from './Componentes/pokemon'
import Usuarios from './Componentes/usuarios'

function App() {

  return (
    <Router>

    <Menu />
    
    <Routes>
      <Route path="/" element={<Lista/>} />
    </Routes>
  
  </Router>
  )
}

export default App