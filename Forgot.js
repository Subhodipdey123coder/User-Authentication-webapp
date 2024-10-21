import React, { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { IoIosLogIn } from "react-icons/io";
import "./auth.css";
import Backbutton from '../ui/Backbutton';
import { IoMdArrowBack } from "react-icons/io";
import {useNavigate} from"react-router-dom";
import apis from '../../utils/apis';
import toast from 'react-hot-toast';
import LoadingButton from '../ui/LoadingButton';


function Forgot() {

const [email,setemail]=useState('');


/* Navigate the page to otp-verify page */
const navigate=useNavigate();

const [loading,setloading]=useState(false);
/*here it ends */

const emailChange=(event)=>{
    setemail(event.target.value);
    
}

const submithandler=async(event)=>{
        event.preventDefault();
        console.log(email);

        try {

            setloading(true);
            const response=await fetch(apis().forgetpasswoard,{
                method:'POST',
                body: JSON.stringify({ email }),
                headers: { 'Content-Type': 'application/json' },
            })
            

            const result=await response.json()
            setloading(false);

            if(!response.ok){
                throw new Error(result?.message);
            }
            if(result?.status){
                toast.success(result.message);
                console.log(result);
                navigate("/verify"); 
            }

            
        } catch (error) {
            toast.error(error.message);
            
        }

}

  return (
    <div className='auth-main'>
    <form onSubmit={submithandler}>
        <div className='auth-container'>

            <div className='auth-header'>
                <IoIosLogIn />
                <h2>Forgot Password</h2>
                <p>Enter your register email to verify a 6-digit OTP</p>
            </div>
            <div className='auth-item'>
                <lable>Email </lable>
                <Input onchange={emailChange} placeholder="Enter your Email" required />
            </div>
            

            <div className='auth-action'>
                <Button><LoadingButton loading={loading} title={"Verify"}></LoadingButton></Button>
                <Backbutton><IoMdArrowBack/>Back</Backbutton>

            </div>

        </div>
    </form>
</div>
  )
}

export default Forgot
