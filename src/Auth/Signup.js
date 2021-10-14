import React from 'react';
import { Link } from 'react-router-dom';
import { RouterConstant } from '../constants/RouteConstant';
import './auth.scss';

const Signup = () => {
    const handleLogin = ()=>{
        alert("login will be integrate soon");
    }
    return (
        <div className="auth-wrapper">
            <div className="auth-inner-wrapper">
                <div className="logo">
                    <img src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg" alt="logo" />
                </div>

                <form className="form-wrapper" onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="Email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="Email" placeholder="ex:- name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Fullname" className="form-label">Fullname</label>
                        <input type="email" className="form-control" id="Fullname" placeholder="ex:- Mohan Chand" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="ContactNo" className="form-label">Contact No.</label>
                        <input type="email" className="form-control" id="ContactNo" placeholder="ex:- 9997608521" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Password" className="form-label">Password</label>
                        <input type="email" className="form-control" id="Password" placeholder="ex:- Test@123" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-75">Signup</button>
                    </div>
                    <p className="jump-link mt-3 text-center">
                        Already have an account <Link to={RouterConstant.Login}>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup
