import "./Login.scss";

function Register(){

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img 
                        src="https://pngimg.com/uploads/netflix/netflix_PNG6.png"
                        alt="Netflix logo"
                        className="logo"
                    />
                </div>
            </div>

            <div className="container">
                <form>
                    <h1> Sign in</h1>
                    <input type="email" placeholder="Email or phone number" />
                    <input type="password" placeholder="Password" />
                    <button type="submit" className="loginButton">Sign In</button>

                    <span>
                        New to netflix? <b>Sign in now.</b>
                    </span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot
                        <b>learn more</b>
                    </small>
                </form>
            </div>
        </div>
    );
}

export default Register;