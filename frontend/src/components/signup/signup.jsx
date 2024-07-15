import React from 'react';
import './signup.css';
import Headingcomp from './headingcomp'; 

function SignUp() {
    return (
        <div className="signup">
            <div className="container">
                <div className="row ">
                    <div className="col-lg-8 d-flex justify-content-center align-items-center">
                        <div className="d-flex flex-column w-100 p-5">
                            <input
                                className="signup-input p-2 my-3"
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                            />
                            <input
                                className="signup-input p-2 my-3"
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                            />
                            <input
                                className="signup-input p-2 my-3"
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                            />
                            <button className="btn-signup p-2" type="submit">Sign Up</button>
                        </div>
                    </div>
                    <div className="col-lg-4  d-flex justify-content-center align-items-center">
                        <Headingcomp first="Sign" second="Up"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
