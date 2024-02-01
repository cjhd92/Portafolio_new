import React from 'react'


import './Barra_progreso.css';

const Barra_progreso = (props) => {

const { habilidad, porcentaje } = props;

  return (
    <div className='skill'>
        <span>{habilidad}</span>
            <div className='barra_skill'>
                 <div className='progreso javascript'>
                        <span>{porcentaje}%</span>
                </div>
             </div>
        </div>
  )
}

export default Barra_progreso