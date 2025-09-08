import { useState } from "react";
import "../styles/loginStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
if (!email){
    setError("Email is required");
    return;
}
if (!password){
    setError("Password is required");
    return;
}

setError("");
        // Handle login logic here
        console.log("Logging in with", { email, password });

        alert(`Logged in as ${email}`);

    };

    return (

        <div className="container">
            <form onSubmit={handleSubmit} className="form">
                <h2 className="title">Login</h2>

                {error && <p className="error">{error}</p>}

                <label className="label" htmlFor="email">Email *</label>
                <input
                    className="input"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                />

                <label className="label" htmlFor="password">Password *</label>
                <input
                    className="input"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                <span className="mt-100">forget password?</span>

                <button type="submit" className="button">Login</button>
            </form>
        </div>


    )
}