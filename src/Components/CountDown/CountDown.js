import React from 'react'
import Digit from './Digit/Digit'
const CountDown = (props) =>{
    return(
        <div className="d-flex my-4">
            <Digit color = "red" value={props.time.min} />
            <Digit color = "green" value={props.time.sec}  />
            <Digit color = "blue" value={props.time.mili}  />
        </div>
    )
}
export default CountDown