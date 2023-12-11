import React from 'react';
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import "./Menu.css";

export default function Menu() {
  return (
    <div>
{/*//////////////////////////////////////////////////////////////////////////////////////////////*/}
      <header>
        <nav>
          <ul id='cabeça'>
            <div id='menu'>
            <li><Link to="/inicio"><button id='principal'>INICIO</button></Link></li>
            <li><Link to="/about"><button id='sobre'>SOBRE</button></Link></li>
            <li><Link to="/Usuarioabout"><button  id='conta'>CONTA<FaUser id='iconta'/></button></Link></li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  )
}
