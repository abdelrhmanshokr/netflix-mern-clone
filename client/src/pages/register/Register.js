import { useState, useRef } from "react";
import './Register.scss';

function Register(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();

    const registerClickHandler = () => {
        setEmail(emailRef.current.value);
    };
    const finishHandler = () => {
        setPassword(passwordRef.current.value);
    };

    return (
        <div className='register'>
            <div className='top'>
                <div className='wrapper'>
                    <img 
                        src='https://pngimg.com/uploads/netflix/netflix_PNG6.png'
                        alt='Netflix logo'
                        className='logo'
                    />
                    <button className='loginButton'>Log In</button>
                </div>
            </div>

            <div className='container'>
                <h1>nothing important</h1>
                <h3>the same here</h3>
                <p>just wasting space here</p>
                {
                    email === "" 
                        ?
                        <div className='input'>
                            <input 
                                id='emailInput' 
                                className='emailInput' 
                                type='email' 
                                placeholder='Enter your email' 
                                required
                                ref={emailRef}
                            />
                            <button 
                                className='registerButton'
                                onClick={registerClickHandler}
                            >
                                Register
                            </button>
                        </div>
                        :
                        <form className='form'>
                            <input 
                                id='passwordInput' 
                                className='passwordInput' 
                                type='password' 
                                placeholder='Enter your password' 
                                ref={passwordRef}
                                required
                            />
                            <button 
                                className='sendingButton'
                                onClick={finishHandler}
                            >
                                Get started
                            </button>
                        </form>
                }
            </div>
        </div>
    );
}

export default Register;