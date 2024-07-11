import axios from "axios";
import { useState } from "react";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = { email, password };

    const response = await axios.post("http://127.0.0.1:3000/login", user);
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      console.log(error);
    }
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
      </form>
    </div>
  );
}

export default Login;
