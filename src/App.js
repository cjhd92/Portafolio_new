import Navbar from "./components/Navbar";
import Comenzar from "./components/Comenzar";
import Contacto from "./components/Contacto";
import Sobre_mi from "./components/Sobre_mi";


import './App.css';

function App() {
  return (
    <>
    
    <div className="contenedor-header">
        <header>
          <div className='logo'>

              <a href='#'>Nick</a>

          </div>

          <Navbar />
        
      </header>
      
      </div>

      
      <div className="contenedor-contenido">
        <div className="contenido">
          
        <Comenzar/>
        <Sobre_mi />
        <Contacto />


          </div>

      </div>

      
      

      

     



      
     


    
 
      
      
    </>
      
   
  );
}

export default App;
