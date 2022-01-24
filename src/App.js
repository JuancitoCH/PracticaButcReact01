import React, { useState } from 'react'
import Card from './components/Card'
import uniqid from 'uniqid'

const App = ()=>{
  
  const [tarjetas,setTarjetas] = useState([])
  
  const agregarTarjeta = () =>{
    const id = uniqid()
    tarjetas.push(<Card key={id} id={id} titulo={`La tarjeta numero ${tarjetas.length}`} numero={tarjetas.length} delBtn={EliminarUna}/>)
    setTarjetas([...tarjetas])
  }
  const eliminarTarjetaUltima=()=>{
    tarjetas.pop();
    setTarjetas([...tarjetas])
  }

  const EliminarUna=(id)=>{
    
    const array = tarjetas.filter(function(el){
      return el.props.id !== id
    })
    setTarjetas([...array])
  }

  return(
    <div>
      <h2>Prueba de css</h2>
      <button onClick={agregarTarjeta}>Agregar tarjeta</button>
      <button onClick={eliminarTarjetaUltima}>DEl</button>
      <div className='cuadricula'>
        {tarjetas}
      </div>
      
    </div>
  )
}

export default App

