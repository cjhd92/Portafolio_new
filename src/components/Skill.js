import React from 'react'

import Barra_progreso from './Barra_progreso';
import './Skill.css';

const Skill = () => {
  return (
    <div className='skills' id='skills'>
        <h2>Skills</h2>
        <div className='contenido_seccion'>
            <div className='row'>
                <div className='col'>
                    <h3>Techinical Skills</h3>
                    <Barra_progreso 
                           habilidad="Javascript" 
                           porcentaje={95}/>
                    <div className='espacio'></div>
                  
                    <Barra_progreso 
                           habilidad="HTML & CSS" 
                           porcentaje={80}/>
                    <div className='espacio'></div>
                    <Barra_progreso 
                           habilidad="Python" 
                           porcentaje={85}/>
                    <div className='espacio'></div>
                    <Barra_progreso 
                           habilidad="SQL" 
                           porcentaje={100}/>
                    
                </div>

                <div className='col'>
                    <h3>Professional Skills</h3>
                    <Barra_progreso 
                           habilidad="Comunicacion" 
                           porcentaje={100}/>
                    <div className='espacio'></div>
                    <Barra_progreso 
                           habilidad="Trabajo en equipo" 
                           porcentaje={100}/>
                    <div className='espacio'></div>
                    <Barra_progreso 
                           habilidad="Creatividad" 
                           porcentaje={100}/>
                    <div className='espacio'></div>
                    <Barra_progreso 
                           habilidad="Dedicacion" 
                           porcentaje={100}/>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Skill