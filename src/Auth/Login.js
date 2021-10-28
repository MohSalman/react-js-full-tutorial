import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { loginApiFun } from '../API/Services/authService';
import { RouterConstant } from '../constants/RouteConstant';
import './auth.scss';
import { useForm } from 'react-hook-form';

const Login = () => {
    let history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const handleLogin = (formData) => {
        console.log("form data", formData.emailID)
        // e.preventDefault();
        let data = {
            "szEmail": formData.emailID,
            "szPassword": formData.password
        }
        loginApiFun(data)
            .then((response) => {
                if (response?.data?.status === 'OK') {
                    localStorage.setItem('testToken', response?.data?.data?.szToken);
                    history.push(RouterConstant.Home);

                } else {
                    console.log("test login api", response)
                }
            })
            .catch(error => {
                console.log("catch block", error)
                //   setMessage(error.data.message);
            })
    }


    console.log(" state ---> ", email, password)
    return (
        <div className="auth-wrapper">
            <div className="auth-inner-wrapper">
                <div className="logo">
                    <img src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt="logo" />
                </div>

                <p className="text-danger text-center mt-3">{message}</p>

                <form className="form-wrapper" onSubmit={handleSubmit(handleLogin)}>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email address</label>
                        <input type="email" className={`form-control ${errors.emailID ? "is-invalid" : ""}`}
                            {...register('emailID', { required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/ })}
                            id="Email" placeholder="ex:- name@example.com"
                        />
                        {errors.emailID && errors.emailID.type === "required" && <small className="text-danger">Email is required.</small>}
                        {errors.emailID && errors.emailID.type === "pattern" && <small className="text-danger">Invalid email address.</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="text" className={`form-control ${errors.password ? "is-invalid" : ""}`}
                            {...register('password', { required: true })}
                            id="Password" placeholder="ex:- Test@123" />
                        {errors.password && <small className="text-danger">Password is required.</small>}
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
