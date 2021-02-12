import React from 'react'
const Digit = (props)=>{
    return(
        <h1 className="mx-4" style={{ color: props.color }}>
            {props.value < 10 ? `0${props.value}`: props.value}
            </h1>
    )
}
export default Digit