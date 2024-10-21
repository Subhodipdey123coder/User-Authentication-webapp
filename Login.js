import React, { useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { IoIosLogIn } from "react-icons/io";
import "./auth.css";
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import apis from '../../utils/apis';
import LoadingButton from '../ui/LoadingButton';

function Login() {

    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [loading,setloading]=useState(false);


    const emailChange=(event)=>{
            setemail(event.target.value);
    }
    const passwordChange=(event)=>{
        setpassword(event.target.value);
}

const submithandler=async(event)=>{
    event.preventDefault();
    try {
        setloading(true);
        const response = await fetch(apis().loginUser, {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        const result = await response.json();
        setloading(false);
        if (!response.ok) {
            throw new Error(result.message);
        }
        
        if (result?.status) {
            toast.success(result?.message);
            console.log(result);
            localStorage.setItem('token', result.token);
        }
    } 
    catch (error) {
        toast.error(error.message);
    }

    console.log(email, password);
};

    return (
        <div className='auth-main'>
            <form onSubmit={submithandler}>
                <div className='auth-container'>

                    <div className='auth-header'>
                        <IoIosLogIn />
                        <h2>Login</h2>
                        <p>Enter your credentials to login</p>
                    </div>
                    <div className='auth-item'>
                        <lable>Email </lable>
                        <Input onchange={emailChange} placeholder="Enter your email" required />
                    </div>
                    <div className='auth-item'>
                        <lable>Password </lable>
                        <Input onchange={passwordChange} placeholder="Enter your Password" required/>
                    </div>

                    <div className='auth-action'>
                        <Button><LoadingButton loading={loading} title={"Login"}></LoadingButton></Button>

                    </div>

                    <div className='linkes'>
                    <Link to="/register">Create a new account</Link>
                    <Link to="/forgot">Forgot Password</Link>

                    </div>

                </div>
            </form>
        </div>
     )
}

export default Login
