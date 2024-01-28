import Navbar from "./components/Navbar";
import Comenzar from "./components/Comenzar";
import Contacto from "./components/Contacto";


import './App.css';

function App() {
  return (
    <>
    
    <div className="contenedor-header">
        <header>
          <div className='logo'>

              <a href='#'>Grupo</a>

          </div>

          <Navbar />
        
      </header>
      
      </div>

     
       <Comenzar/>

       <Contacto />


      
     


    
 
      
      
    </>
      
   
  );
}

export default App;
