import React from 'react'
import './Sobre_mi.css';
import Button from 'react-bootstrap/Button';

const Sobre_mi = () => {
  return (
    <div id='sobremi' className='sobremi'>
      <div className="row titulo">
        <h2>Sobre mi</h2>
        <p><span>
            Hola soy NIck Pere</span> Candidato con título en Ingeniería Informática y especialización en desarrollo de software, tiene cinco años de experiencia, especialmente en programación de aplicaciones móviles y gestión de proyectos. Ha liderado equipos y es fluente en inglés y español. Se destaca por su compromiso con el aprendizaje continuo y desarrollo profesional.</p>

      </div>

      <div className='row'>
        <div className='col'>
          <h3 className='subtitulo'>Datos Personales</h3>
          <ul>
            <li>
              <strong>Telefono</strong>
              +2664 345456
            </li>
            <li>
              <strong>Email</strong>
              cjhd92@gmail.com
            </li>
            <li>
              <strong>Cargo</strong>
              <span>Freelance</span>
            </li>
          </ul>
        </div>
        <div className='col'>
        <h3 className='subtitulo'>Mis intereses</h3>
        <div className='contenedor_interese'>
          <div className='interes'>
            <i class="fa-solid fa-gamepad"></i>
            <span>JUEGOS</span>
          </div>
          <div className='interes'>
          <i class="fa-solid fa-headphones"></i>
            <span>MUSICA</span>
          </div>
          <div className='interes'>
            <i class="fa-solid fa-plane"></i>
            <span>VIAJAR</span>
          </div>
          <div className='interes'>
          <i class="fa-solid fa-person-hiking"></i>
            <span>DEPORTE</span>
          </div>
          <div className='interes'>
            <i class="fa-solid fa-person-hiking"></i>
            <span>LIBROS</span>
          </div>
          <div className='interes'>
          <i class="fa-solid fa-camera"></i>
            <span>FOTO</span>
          </div>
        </div>

        </div>
      </div>

      <div className='btn'>
        <Button className='btn_descargar'>
                  Descargar CV 
                  <i class="fa-solid fa-download"></i>
              </Button>
      </div>

      
    </div>
  )
}

export default Sobre_mi