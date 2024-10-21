import React from 'react'
import Countdown from "react-countdown"
const Timerotp=()=> {
  return (
    <div className='timer'>
      <Countdown date={Date.now()+1*60*1000}/>
    </div>
  )
}

export default Timerotp
