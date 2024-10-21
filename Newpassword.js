import React, { useState } from 'react';
import "./auth.css";
import Input from '../ui/Input';
import { MdAutorenew } from "react-icons/md";
import Button from '../ui/Button';
import Backbutton from '../ui/Backbutton';
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
function Newpassword() {

    const navigate=useNavigate();

    const [password,setPassword]= useState('');
    const [confirmpassword,setConfirmPassword]= useState('');

    const passwordChange=(event)=>{
        setPassword(event.target.value);
    }
    const confirmpasswordChange=(event)=>{
        setConfirmPassword(event.target.value);
    }


    const submithandler=(event)=>{
            event.preventDefault();
            navigate("/Login")
    }

  return (
    <div className='auth-main'>

    <form onSubmit={submithandler}>
      <div className='auth-container'>
        <div className='auth-header'>
          <MdAutorenew />
          <h1>New Password</h1>
          <p>create your strong password</p>
        </div>

        <div className='auth-item'>
          <label>New Password </label>
          <Input onchange={passwordChange} type='password' placeholder='Enter password' required />
        </div>
        <div className='auth-item'>
          <label>Confirm Password </label>
          <Input onchange={confirmpasswordChange} type="password" placeholder='Enter password' required />
        </div>
        

        <div className='auth-action'>
          <Button>Update Password</Button>
          <Backbutton><IoMdArrowBack/>Back</Backbutton>

        </div>


      </div>

    </form>


  </div>
)
}

export default Newpassword
