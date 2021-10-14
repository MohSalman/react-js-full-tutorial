import React from 'react';
import { Link,useHistory } from 'react-router-dom';
import { RouterConstant } from '../constants/RouteConstant';
import './auth.scss';

const ForgotPassword = () => {
    let history = useHistory();
    const handleForgotPassword = () => {
        history.push(RouterConstant.ResetPassword);
    }
    return (
        <div className="auth-wrapper">
            <div className="auth-inner-wrapper">
                <div className="logo">
                    <img src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt="logo" />
                </div>

                <form className="form-wrapper" onSubmit={handleForgotPassword}>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="Email" placeholder="ex:- name@example.com" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-75">Send Verification Email</button>
                    </div>
                    <p className="jump-link mt-3 text-center">
                        Do you remember password? <Link to={RouterConstant.Login}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
