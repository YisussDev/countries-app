import React from 'react'
import '../estilos/Tarjetas.css'

const Tarjetas = (props) => {
  return (
    <div id='Tarjetas' className={props.id} onClick={props.mostrar}>
        <img src={props.flag} alt="" onClick={props.mostrar} className={props.id}/>
        <div id='ContenedorInfo' onClick={props.mostrar} className={props.id}>
            <h1 className={props.id}>{props.name}</h1>
            <p className={props.id} onClick={props.mostrar}>Population: {props.population}</p>
            <p className={props.id} onClick={props.mostrar}>Region: {props.region}</p>
            <p className={props.id} onClick={props.mostrar}>Capital: {props.capital}</p>
        </div>
        
    </div>
  )
}

export default Tarjetas