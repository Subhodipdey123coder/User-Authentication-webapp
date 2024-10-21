import React, { useState } from 'react';
import "./auth.css";
import Input from '../ui/Input';
import { MdAssignmentInd } from "react-icons/md";
import Button from '../ui/Button';
import Backbutton from '../ui/Backbutton';
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import apis from '../../utils/apis';
import toast from 'react-hot-toast';
import Spinner from '../ui/Spinner';
import LoadingButton from '../ui/LoadingButton';

const Register=() =>{

const navigate=useNavigate();  

/*set the inputs in a variable*/
const [name,setname]=useState('');
const [email,setemail]=useState('');
const [password,setpassword]=useState('');
const [number,setnumber]=useState('')
const [loading,setloading]=useState(false);
/*here it ends */

/*function call when the user type inputs */

const nameChange=(event)=>{
  setname(event.target.value);
  /*
  const event={

    target:{
    value:"Subhodip"}  
  } 
  */
}
const emailChange=(event)=>{
  setemail(event.target.value);
}
const passwordChange=(event)=>{
  setpassword(event.target.value);
}
const numberChange=(event)=>{
  setnumber(event.target.value);
}
/*here it ends */



/*for not reload the page while submitting the form*/
  const submithandler=async(event)=>{
    event.preventDefault();

    try {
      setloading(true);
      const response=await fetch(apis().registerUser,{
      method:'POST',
      body:JSON.stringify({name,number,email,password}),
      headers:{'Content-Type':'application/json'},
      });

      
      const result =await response.json();
      setloading(false);
      if(!response.ok){
        throw new Error(result.message);
        
      }
      if(result?.status){
        toast.success(result?.message)
        navigate("/Login");
      }

    }
     catch (error) {
      toast.error(error.message);
      
    }
    //console.log(name,email,number,password);
  }

 /*here it ends */ 

  return (
    <div className='auth-main'>

      <form onSubmit={submithandler}>
        <div className='auth-container'>
          <div className='auth-header'>
            <MdAssignmentInd />
            <h1>Welcome</h1>
            <p>Create a new account</p>
          </div>

          <div className='auth-item'>
            <lable>Name </lable>
            <Input onchange={nameChange} type='text' placeholder='Enter your name' required />
          </div>
          <div className='auth-item'>
            <lable>Mobile No </lable>
            <Input onchange={numberChange} type="number" placeholder='Enter your Number' required />
          </div>
          <div className='auth-item'>
            <lable>Email </lable>
            <Input onchange={emailChange} type="email" placeholder='Enter your Email' required />
          </div>
          <div className='auth-item'>
            <lable>Password </lable>
            <Input onchange={passwordChange} type="password" placeholder='Enter your Password' />
          </div>

          <div className='auth-action'>
            <Button><LoadingButton loading={loading} title={"Register"}></LoadingButton></Button>
            <Backbutton><IoMdArrowBack/>Back</Backbutton>
    
          </div>


        </div>

      </form>


    </div>
  )
}

export default Register
