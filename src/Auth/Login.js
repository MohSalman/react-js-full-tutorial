import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginApiFun } from '../API/Services/authService';
import { RouterConstant } from '../constants/RouteConstant';
import './auth.scss';

const Login = () => {
    let history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        let data = {
            "szEmail": email,
            "szPassword": password
          }
        loginApiFun(data)
        .then((response)=>{
              if(response?.data?.status === 'OK'){
                  localStorage.setItem('testToken', response?.data?.data?.szToken);
                  history.push(RouterConstant.Home);

              }else{
                  console.log("test login api", response)
              }
          })
          .catch(error=>{
              console.log("catch block", error.data.message)
              setMessage(error.data.message);
          })
    }

    const handleEmail =(event)=>{
        // console.log("email", event.target.value)
        setEmail(event.target.value)
    }

    const handlePassword =(event)=>{
        // console.log("password")
        setPassword(event.target.value)
    }

    console.log(" state ---> ", email, password)
    return (
        <div className="auth-wrapper">
            <div className="auth-inner-wrapper">
                <div className="logo">
                    <img src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt="logo" />
                </div>

                <p className="text-danger text-center mt-3">{message}</p>

                <form className="form-wrapper" onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email address</label>
                        <input onChange={handleEmail} type="email" className="form-control" id="Email" placeholder="ex:- name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input onChange={handlePassword} type="text" className="form-control" id="Password" placeholder="ex:- Test@123" />
                    </div>
                    <p className="jump-link mt-3 text-end">
                        <Link to={RouterConstant.ForgotPassword}>Forgot Password ?</Link>
                    </p>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-75">Login</button>
                    </div>
                    <p className="jump-link mt-3 text-center">
                        Don't have an account <Link to={RouterConstant.Signup}>Sign Up</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
