import React from 'react'
import Logo from '../images/pineapple.jpeg'
import '../css/login.css'

function Login() {
  return (
        <div>
        <p className='login_back'>
            <div className="container">
                <input type="checkbox" id="flip" />
                <div className="cover">
                    <div className="front">
                        <img src={Logo} alt="login page" />
                    </div>
                    <div className="back">
                    </div>
                </div>
                <div className="forms">
                    <div className="form-content">
                        <div className="login-form">
                            <div className="title">Login
                            </div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i  className="fas fa-envelope">
                                        </i>
                                        <input type="text" placeholder="Enter your email" required />
                                    </div>
                                    <div className="input-box">
                                        <i  className="fas fa-lock">
                                        </i>
                                        <input type="password" placeholder="Enter your password" required />
                                    </div>
                                    <div className="text">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                    <div className="button input-box">
                                        <input type="submit" value="Submit" />
                                    </div>
                                    <div className="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="signup-form">
                            <div className="title">Signup
                            </div>
                            <form action="#">
                                <div className="input-boxes">
                                    <div className="input-box">
                                        <i  className="fas fa-user">
                                        </i>
                                        <input type="text" placeholder="Enter your name" required />
                                    </div>
                                    <div className="input-box">
                                        <i  className="fas fa-envelope">
                                        </i>
                                        <input type="text" placeholder="Enter your email" required />
                                    </div>
                                    <div className="input-box">
                                        <i  className="fas fa-lock">
                                        </i>
                                        <input type="password" placeholder="Enter your password" required />
                                    </div>
                                    <div className="button input-box">
                                        <input type="submit" value="Submit" />
                                    </div>
                                    <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </p>
        </div>
  )
}

export default Login
