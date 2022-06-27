import React from 'react'
import '../estilos/Buscador.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Buscador = (props) => {

  const [filtro, setFiltro] = useState (0)
  const [textoBus, setTextoBus] = useState('')
  const [textoBusMayus, setTextoBusMayus] = useState('')
  const mostrarFiltro = () => {
    if(filtro===0){
      setFiltro(1)
    }
    if(filtro===1){
      setFiltro(0)
    }
  }
  const buscadorTexto = (e) => {
    setTextoBus(e.target.value);

    const comprueba = () =>{ if(e.target.value.length > 1 ){
      return textoBus[0].toUpperCase()
    }
    else {
      return '';
    }
  }
    let mayus = comprueba();
    
    setTextoBusMayus(mayus.concat(textoBus.slice(1,textoBus.length + 1)))
    props.onChange(textoBusMayus)
  }

  return (
    <div id='Buscador'>
        <input onChange={buscadorTexto} type="text" placeholder="Inserta texto..."/>
        <div id='Filtrador'><div id='Filtrador_select'>Filter by Region <button onClick={mostrarFiltro}><FontAwesomeIcon icon={faMagnifyingGlass} /></button></div>{filtro?(<ul>
          <li onClick={props.filtrar}>Africa</li>
          <li onClick={props.filtrar}>Americas</li>
          <li onClick={props.filtrar}>Asia</li>
          <li onClick={props.filtrar}>Europe</li>
          <li onClick={props.filtrar}>Oceania</li>
          </ul>):null}
        </div>
        
    </div>
  )
}

export default Buscador