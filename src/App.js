import React, { useState } from 'react'
import Card from './components/Card'

const App = ()=>{
  
  const [tarjetas,setTarjetas] = useState([])
  
  const agregarTarjeta = () =>{
    tarjetas.push(<Card key={tarjetas.length} titulo={`La tarjeta numero ${tarjetas.length}`} numero={tarjetas.length} mequieromori={EliminarUna}/>)
    setTarjetas([...tarjetas])
  }
  const eliminarTarjetaUltima=()=>{
    const array = tarjetas.filter(function(el){
      return el.key !== ((tarjetas.length - 1 +''))
    })
    setTarjetas(array)
  }

  const EliminarUna=(id)=>{
    console.log(tarjetas)
    const array = tarjetas.filter(function(el){
      console.log('key ' +el.key)
      console.log('id '+id)

      return el.key !== id
    })
    console.log(array)
    setTarjetas(array)
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

