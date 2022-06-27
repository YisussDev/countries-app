import React from 'react'
import { useState, useEffect } from 'react'
import '../estilos/Principal.css'
import Buscador from './Buscador'
import Navbar from './Navbar'
import Tarjetas from './Tarjetas'
import InfoCompleta from './InfoCompleta'

const Principal = () => {

  
  useEffect( () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(json => {setDatos(json); setTimeout(() => {
      setDatosMostrados(json)
    }, 1000);})
  },[])

  const [datos, setDatos] = useState([]);
  const [datosMostrados, setDatosMostrados] = useState(false);
  const [paginaVisible, setPaginaVisible] = useState(0);
  const [paginado, setPaginado] = useState(true);
  const [buscador, setBuscador] = useState(true);
  const [infoCompleta, setInfoCompleta] = useState(true);

  let cantidadDePaginas = parseInt((datosMostrados.length)/16)+1;
  const volver = () => {
    setInfoCompleta(true)
    setDatosMostrados(false)
    setPaginado(true)
    setBuscador(true)
    setPaginaVisible(0)
    setTimeout(() => {
      setDatosMostrados(datos)
    }, 1000);
  }
  const aumentar = () => {
    if(paginaVisible<cantidadDePaginas){
      setPaginaVisible(paginaVisible+1)
    }
  }
  const disminuir = () => {
    if(paginaVisible!==0){
      setPaginaVisible(paginaVisible - 1)
    }
  }
  const filtrar = (e) => {
    let datosFiltrados = datos.filter(res => res.region === e.target.innerHTML)
    setDatosMostrados(datosFiltrados)
    setPaginaVisible(0)
    setBuscador(false)
    console.log(datos)
  }
  const mostrarPais = (e) => {
    setDatosMostrados(false)
    setTimeout(1000)
    let datosFiltrados2 = datos.filter(res => res.name === e.target.className)
    setBuscador(false)
    setPaginado(false)
    setTimeout(() => {
      setInfoCompleta(false)
    }, 1000);
    setTimeout(() => {
      setDatosMostrados(datosFiltrados2)
    }, 1000);
    console.log(datos)
  }
  const filtrabus = (input) => {
    let datosFiltrados = datos.filter(res => res.name.startsWith(`${input}`))
    setDatosMostrados(datosFiltrados)
  }

  return (
    <div id='Principal'>
        <Navbar />
        {buscador?(<Buscador 
        onChange = {filtrabus}
        filtrar = {filtrar}
        />):<div id='Volver' onClick={volver}>Volver</div>}
        
        <div id='contenedor_tarjetas'>
        {infoCompleta?(
        datosMostrados?(datosMostrados.map((respuesta, indice) =>{
          if((indice>=paginaVisible*16)&&(indice<paginaVisible*16+16)){ 
            return <Tarjetas
          name = {respuesta.name}
          population = {respuesta.population}
          region = {respuesta.region}
          capital = {respuesta.capital}
          flag= {respuesta.flags.png}
          key = {respuesta.name}
          id = {respuesta.name}
          mostrar={mostrarPais}
          />}else{return null}} 
          
        )):(<div id='preloader'></div>)
        ):(datosMostrados.map(respuesta =>
          <InfoCompleta
          name = {respuesta.name?respuesta.name:null}
          nativeName = {respuesta.nativeName?respuesta.nativeName:null}
          population = {respuesta.population?respuesta.population:null}
          region = {respuesta.region?respuesta.region:null}
          subregion = {respuesta.subregion?respuesta.subregion:null}
          capital = {respuesta.subregion?respuesta.subregion:null}
          toplevel = {respuesta.topLevelDomain?respuesta.topLevelDomain:null}
          flag= {respuesta.flags.svg?respuesta.flags.svg:null}
          languages = {respuesta.languages.map(x => x.name + ',')}
          currencies = {respuesta.currencies?(respuesta.currencies[0].name):null}
          key = {respuesta.name}
          id = {respuesta.name}
          bc1 = {respuesta.borders?(datos.map(x=>{if(x.alpha3Code === respuesta.borders[0]){
            return x.name
          }else{return null}})):null}
          bc2 = {respuesta.borders?(datos.map(x=>{if(x.alpha3Code === respuesta.borders[1]){
            return x.name
          }else{return null}})):null}
          bc3 = {respuesta.borders?(datos.map(x=>{if(x.alpha3Code === respuesta.borders[2]){
            return x.name
          }else{return null}})):null}
          />
          
        ))}

        </div>

      {
        paginado?(<div id='Paginado'>
          <button onClick={disminuir}>Atrás</button>
          <span>{paginaVisible + 1}</span>
          <button onClick={aumentar}>Adelante</button>
        </div>):null
      }

    </div>
  )
}

export default Principal