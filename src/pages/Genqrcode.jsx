import axios from "axios";
import { useState,useEffect } from "react";
import { useContext } from 'react';
import AuthContext from "../context/AuthProvider";


function Genqrcode() {
  
  let [displayResponse, setDisplayResponse] = useState("");
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const { token } = useContext(AuthContext);
  const accessToken = token
  // console.log(accessToken);
  const handleClickEvent = async () => {
    console.log(token.token);

    const config = {
      headers: {
        Authorization: 'Bearer ' + token.token,
        Url: url
      }
    };
    
    // Use the token in your API call
    try {
      const response = await axios.get("http://127.0.0.1:7000/app/genqrcode", config)
      setDisplayResponse(response.data);
    } catch (error) {
      console.error(error);
      setError('code generation failed, please try again or go back to the login or signup page if new')
    }
  };

  

  return (
    <div className="genCode">
      <form >
        <label >Embed a link</label>
        <input type="text" value={url} onChange={(e) =>setUrl(e.target.value)}/>
      </form>
      <button className="btn" onClick={handleClickEvent}>GENERATE QR-CODE</button>
      <div>
        <img src={displayResponse} alt="qrcode" width={200}/>
      </div>
      <div className="error-msg">
        {error}
      </div>
    </div>
  );
}

export default Genqrcode;
