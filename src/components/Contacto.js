import React from 'react';


const Contacto = () => {
    return (
    <> 
    <div className='container' style={{  backgroundSize: 'cover', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingTop: '50px' }}>
    <h1 style={{ color: '#F5F5DC',textShadow: '3px 3px 4px #000000', fontFamily: 'Arial', fontSize: '40px', margin:'auto' }}>Contacto</h1>
        
        <div className='form-container' style={{ height: '500px', display: 'flex' }}>
            <div className='form-column' style={{ flex: '1', padding: '20px' , marginTop:'50px'}}>
                
                <form>
                    <div>
                        <label htmlFor="nombre" style={{color: '#F5F5DC',textShadow: '3px 3px 4px #000000'}}>Nombre:</label>
                        <input type="text" id="nombre" name="nombre" />
                    </div>
                    <div>
                        <label htmlFor="telefono" style={{color: '#F5F5DC',textShadow: '3px 3px 4px #000000'}} >Teléfono:</label> 
                        <input type="text" id="telefono" name="telefono" />
                    </div>
                    <div>
                        <label htmlFor="correo" style={{color: '#F5F5DC',textShadow: '3px 3px 4px #000000'}}>Correo:</label>
                        <input type="email" id="correo" name="correo" />
                    </div>
                    <div>
                        <label htmlFor="tema" style={{color: '#F5F5DC',textShadow: '3px 3px 4px #000000'}}>Tema:</label>
                        <input type="text" id="tema" name="tema" />
                    </div>
                    <div>
                        <label htmlFor="mensaje" style={{color: '#F5F5DC',textShadow: '3px 3px 4px #000000'}}>Mensaje:</label>
                        <textarea id="mensaje" name="mensaje"style={{ height: '120px' }} ></textarea>
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </div>
            <div className='contact-info-column' style={{backgroundImage: 'url(/contact_photo.png)', backgroundSize: 'cover', flex: '1', padding: '150px', margin: '50px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'black', width: '100px', height: '100px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                    <p style={{ color: '#F5F5DC',textShadow: '3px 3px 4px #000000', fontFamily: 'Arial', fontSize: '12px' }}>Dirección:</p>
                    <p style={{ color: '#F5F5DC',textShadow: '3px 3px 4px #000000', fontFamily: 'Arial', fontSize: '12px' }}>Teléfono:</p>
                    <p style={{ color: '#F5F5DC',textShadow: '3px 3px 4px #000000', fontFamily: 'Arial', fontSize: '12px' }}>Email:</p>
                </div>
            </div>
        </div>
    </div>
    </>
    );
};

export default Contacto;


