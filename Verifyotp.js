import React, { useEffect, useRef, useState } from 'react'
import Button from '../ui/Button'
import { FaFingerprint } from "react-icons/fa";
import "./auth.css";
import Backbutton from '../ui/Backbutton';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import Timerotp from './Timerotp';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import apis from '../../utils/apis';




const Verifyotp = () => {

    const navigate =useNavigate();

    /*Here we store and assign the 6 otp inputs in array and implement into the input tag*/
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);

    const inputref = [ref1, ref2, ref3, ref4, ref5, ref6];

    /*here it ends */

    /*to auto focus the first input block */

    useEffect(() => {
        if (ref1.current) {

            ref1.current.focus();
        }
    }, [])

    /*here it ends */

    const inputindex = (event, location) => {
        if (location < 5 && event.target.value) {
            inputref[location + 1].current.focus();
        }
    }


    const [otp1, setotp1] = useState("");
    const [otp2, setotp2] = useState("");
    const [otp3, setotp3] = useState("");
    const [otp4, setotp4] = useState("");
    const [otp5, setotp5] = useState("");
    const [otp6, setotp6] = useState("");

    const otparray = [setotp1, setotp2, setotp3, setotp4, setotp5, setotp6];


  
    const submithandlar = async (event) => {
        event.preventDefault();
    
    
    
        try {
            const response = await fetch(apis().verifyotp, {
                method: 'POST',
                body: JSON.stringify({ otp:otparray }), // Sending OTP as a single string
                headers: { 'Content-Type': 'application/json' },
            });
            const result = await response.json();
            
            if(!response.ok){
                throw new Error(result?.message);
            }


            if (result?.status) {
                console.log(result);
                navigate('./newpassword')
          
            } 
    
        } catch (error) {
            toast.error(error.message);
        }
    };
    

    return (
        <div className='auth-main'>
            <form onSubmit={submithandlar}>
                <div className='auth-container'>

                    <div className='auth-header'>
                        <FaFingerprint />
                        <h2>Verify your OTP</h2>
                        <p>Enter the 6-digit otp here we just sent at your email</p>
                    </div>
                    <div className='auth-item'>
                        <lable>OTP </lable>
                        <div className='otp-input-container'>
                            {
                                inputref.map((item, index) => {
                                    return <input required
                                        key={index}
                                        onChange={(event) => {
                                            inputindex(event, index);
                                        }}
                                        ref={item}
                                        onInput={(event) => {
                                            if (event.target.value.length > 1) {
                                                event.target.value = event.target.value.slice(0, 1);
                                            }
                                        }
                                        }
                                        type='number' className='input otp-input'></input>
                                })
                            }
                        </div>
                    </div>


                    <div className='auth-action-2'>
                        <Button>Verify</Button>

                        <div>
                        <Timerotp/>
                        </div>


                        <Link to="/register">Resend OTP</Link>
                        <Backbutton><IoMdArrowBack />Back</Backbutton>

                    </div>
                    

                </div>
            </form>
        </div>
    )
}

export default Verifyotp
