import React from "react"


const Card = ({imagen , titulo, recuperados, disponibles}) => {

    
    return(
        <div className="container">

            
                <img src={imagen} className="rounded-full w-40 h-40"></img>
                <h2>{titulo}</h2>
                <span>{recuperados} muebles recuperados</span>
                <br/>
                <span><strong>{disponibles} muebles disponibles</strong></span>
                
           
        </div>
    )
    }



export default Card