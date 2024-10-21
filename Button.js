import React from 'react'
import "./button.css"

const Button=({onclick,type,children}) =>{
  return (
    <button onClick={onclick} type={type} className='ui-button'>{children}</button>
  )
}

export default Button
