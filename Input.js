import React from 'react'
import "./input.css"

const Input=( {placeholder,required,value,onchange,type})=> {
  return (
 
    <input type={type} onChange={onchange} value={value} placeholder={placeholder} required={required} className='input'></input>

  )
}

export default Input
