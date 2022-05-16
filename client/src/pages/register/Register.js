import './Register.scss';

function Register(){
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
                <div className='input'>
                    <input 
                        id='emailInput' 
                        className='emailInput' 
                        type='email' 
                        placeholder='Enter your email' 
                        required 
                    />
                    <button className='registerButton'>Register</button>
                </div>
            </div>
        </div>
    );
}

export default Register;