import { Typography,Button } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Contact.css'
import {contactUs} from '../../actions/user'
import {toast} from 'react-toastify'
import { useEffect } from 'react'
const Contact = () => {
    const [name, setName]=useState("");
    const [email,setEmail]=useState("");
    const [Message, setMessage]=useState("");

    const { loading, error, message } = useSelector((state)=>state.update);
    const dispatch=useDispatch();
    const ContactSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(contactUs(name, email, Message));
    };
    useEffect(()=>{
        if(error)
        {
            toast.error(error);
            dispatch({type:"CLEAR_ERRORS"});
        }
        if(message)
        {
            toast.success(message);
            dispatch({type:"CLEAR_MESSAGE"});
        }
    },[error, message,loading,  dispatch])
    return (
        <div className="contact">
            <div className="contactRightbar"></div>

            <div className="contactContainer">
                <form className='contactContainerForm' onSubmit={ContactSubmitHandler}>
                    <Typography variant='h4'>Contact Me</Typography>
                    <input type="text" placeholder='Name' value={name} required onChange={(e)=>{
                        setName(e.target.value);
                    }}/>
                    <input type="email" placeholder='Email' value={email} required onChange={(e)=>{
                        setEmail(e.target.value);
                    }}/>
                    <textarea placeholder='Message' cols="30" rows="10" value={Message} required onChange={(e)=>{
                        setMessage(e.target.value);
                    }}></textarea>
                    <Button variant='contained' type='submit' disabled={loading}>Send</Button>
                </form>
            </div>
        </div>
    )
}

export default Contact


