import axios from "axios";
import { useState,useEffect } from "react";
import { useContext } from 'react';
import AuthContext from "../context/AuthProvider";

function Genqrcode() {
  
  let [displayResponse, setDisplayResponse] = useState("");
  const { token } = useContext(AuthContext);
  
  const handleClickEvent = async () => {
    console.log(token);
    
    // Use the token in your API call
    try {
      const response = await axios.get("http://127.0.0.1:7000/app/genqrcode", {token});
      console.log(response.data);
      setDisplayResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div>
      <button className="btn" onClick={handleClickEvent}>GENERATE QR-CODE</button>
      <div>
        <img src={displayResponse} alt="qrcode"/>
      </div>
    </div>
  );
}

export default Genqrcode;
