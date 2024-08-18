import React from 'react'
import {Typography,Button} from '@mui/material';

import './Admin.css'
import { useState } from 'react';
import { login } from '../../actions/user';
import { useDispatch, useSelector } from 'react-redux';
import {toast} from 'react-toastify'
import { useEffect } from 'react';

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch=useDispatch();
    const {loading, message, error}=useSelector((state)=>state.login);
    const submithandler = (e) => {
        e.preventDefault();
        dispatch(login(email,password));
    }
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
    },[error, message, dispatch])
    return (
        <div className="login">
            <div className="loginContainer">
            <form className="loginForm" onSubmit={submithandler}>
                <Typography variant='h4'>
                    <p>A</p>
                    <p>D</p>
                    <p>M</p>
                    <p>I</p>
                    <p style={{marginRight:"1vmax"}}>N</p>

                    <p>P</p>
                    <p>A</p>
                    <p>N</p>
                    <p>E</p>
                    <p>L</p>
                </Typography>
                
                    <div>
                        <input type="email" placeholder='Admin Email' value={email} required onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                        <input type="password" placeholder='Admin password' value={password} required onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        <Button variant='contained' type='submit' disabled={loading}>Login</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Admin
