import React from 'react'
import '../estilos/InfoCompleta.css'

const InfoCompleta = (props) => {
  return (
    <div id='infoCompleta'>
        <img src={props.flag} alt="" />
        
        <div id='info_total'>
            <h1>{props.name}</h1>
            <div id='infoCompleta_1'>
            {props.nativeName?(<p><strong>Native name: </strong>{props.nativeName}</p>):null}
            {props.population?(<p><strong>Population: </strong>{props.population}</p>):null}
            {props.region?(<p><strong>Region: </strong>{props.region}</p>):null}
            {props.subregion?(<p><strong>Sub Region: </strong>{props.subregion}</p>):null}
            {props.capital?(<p><strong>Capital: </strong>{props.capital}</p>):null}
        </div>
        <div id='infoCompleta_2'>
            {props.toplevel?(<p><strong>Top Level Domain: </strong>{props.toplevel}</p>):null}
            {props.currencies?(<p><strong>Currencies: </strong>{props.currencies}</p>):null}
            {props.languages?(<p><strong>Languages: </strong>{props.languages}</p>):null}
        </div>
        <div id='infoCompleta_3'>
            {props.bc1?(<p><strong>Border Countries:</strong></p>):null}
        <div id='infoCompleta_3_cercanos'>
            {props.bc1?(<button>{props.bc1}</button>):null}
            {props.bc2?(<button>{props.bc2}</button>):null}
            {props.bc3?(<button>{props.bc3}</button>):null}
        </div>
        </div>
        </div>
        
    </div>
  )
}

export default InfoCompleta