import {useState,useContext } from "react";
import { useNavigate } from 'react-router-dom'; 
import AuthContext from "../context/AuthProvider";
import { useLogin } from "../hooks/useLogin";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login,error } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    // navigate('/gen-qrcode');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="email input">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-btn">
          <button>login</button>
        </div>
        <a href="/signup">New? Signup</a>
      </form>
      {/* <div>
        {error}
      </div> */}
    </div>
  );
}

export default Login;
