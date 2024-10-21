import React from 'react'
import "./backbutton.css"
import { useNavigate } from 'react-router-dom'


const Backbutton=({onclick,type,children})=> {


  /*Function for go back to the login page */
  const navigate=useNavigate()
  const navigatehandler=()=>{
    navigate("/login")
  }
  
  /*here it ends */


  return (
    <button  className='backbutton' onClick={navigatehandler} type={type}>{children}</button>
  )
}

export default Backbutton
