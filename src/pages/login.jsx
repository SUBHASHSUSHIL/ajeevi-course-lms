import { useState } from "react";
import "../styles/loginStyle.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        alert(`Logged in with email: ${email} and password: ${password}`);
    }



    return (
        <div className="overlay">
            <div className="model">
                <button className="closeBtn" onClick={onclose}>&times;</button>
                <h2 className="header">Welcome back</h2>
                <form onSubmit={handleLogin} className="form">
                    <label className="label">
                        Email <span style={{ color: "red" }}>*</span>
                    </label>
                    <input type="email" placeholder="name@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="input" />
                    <label className="label">
                        Password <span style={{ color: "red" }}>*</span>
                    </label>
                    <div className="passwordWrapper">
                        <input type={showPassword ? "text" : "password"} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)}
                            required className="inputPassword" />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="eyeBtn" aria-label="Toggle password visibility" 
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>
                    </div>
                    <div>
                        <a href="#" className="forgotLink">
                            Forgot password?
                        </a>
                    </div>
                    <button type="submit" className="loginBtn">
                        Login
                    </button>
                    <div className="orSeparator">
                        <span className="line"></span>
                        <span className="orText">or</span>
                        <span className="line"></span>
                    </div>
                    <button className="socialBtn">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                            className="icon"
                        />
                        Continue with Google
                    </button>
                    <button className="socialBtn">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png"
                            alt="Facebook"
                            className="icon"
                        />
                        Continue with Facebook
                    </button>
                    <button className="socialBtn">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                            alt="Apple"
                            className="iconApple"
                        />
                        Continue with Apple
                    </button>
                    <p style={{ marginTop: 20, fontSize: "14px", textAlign: "center" }}>
                        New to Coursera?{" "}
                        <a href="#" style={{ color: "#1a73e8", textDecoration: "underline" }}>
                            Sign up
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;