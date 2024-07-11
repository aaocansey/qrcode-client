import axios from "axios";
import { useState } from "react";

function Genqrcode() {
  let [displayResponse, setDisplayResponse] = useState("");

  const handleClickEvent = async () => {
    try {
      fetchToken()
      const response = await axios.get("http://127.0.0.1:3000/gen/genqrcode");
      console.log(response.data);
      setDisplayResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchToken = async () => {
    const token = getCookie("auth_token");
    if (!token) {
      console.error("Error occured during form submission");
      throw Error;
    }

    try {
      const response = axios.post("", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getCookie = (name) => {
    const cookies = document.cookie.split(";");
    for (const cookie of cookies) {
      const [key, value] = cookie.trim().split("=");
      if (key === name) {
        return value;
      }
    }
    return null;
  };

  return (
    <div>
      <button onClick={handleClickEvent}>GENERATE QR-CODE</button>
      <div>
        <img src={displayResponse} alt="qrcode"/>
      </div>
    </div>
  );
}

export default Genqrcode;
