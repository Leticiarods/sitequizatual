import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import Quiz from './components/Quiz/Quiz';
import Usuarioabout from './components/User/Usuarioabout';
import About from './components/About/About';
import Inicio from './components/Inicio/Inicio';
import Gope from './components/gope';
import Feedback from './components/Feedback/Feedback';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div>
    <div>
      <Menu/>
      <Routes>
        <Route path="quiz" element={<Quiz />} />
        <Route path="comecar" element={<Usuarioabout />} />
        <Route path="about" element={<About />} />
        <Route path="Usuarioabout" element={<Usuarioabout />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="Feedback" element={<Feedback />} />
      </Routes>
      <Gope/>
    </div>
  </div>  
  </BrowserRouter>
);