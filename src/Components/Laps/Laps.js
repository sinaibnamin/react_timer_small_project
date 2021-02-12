import React from 'react'

const Laps = (props) =>{
    
    return(
        // <h1> {props.laps} </h1>
        
        <ul>
            {props.laps.map((lap,index) => {
                return(
                    <li key={index}>
                        <span>MIN: {lap.min}</span>
                        <span>SEC: {lap.sec}</span>
                        <span>MILI: {lap.mili}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default Laps