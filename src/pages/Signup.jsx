import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = {username, email, password };
    console.log(user);
    const response = await axios.post("http://localhost:7000/auth/signup", user);
    const json = await response.data;

    if (!response.ok) {
      setError(json.error);
      console.log(error);
      
    }
    navigate('/')
  };

  return (
    <div className="form-container signup-container">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="email input">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
        <div className="form-btn signup-btn">
          <button>signup</button>
        </div>
        <a href="/">Already signed up? login</a>
      </form>
    </div>
  );
}

export default Signup;
