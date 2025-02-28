import axios from "axios";
import { useState } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate()
  const { dispatch } = useAuth()
  const [error, setError] = useState(null);
  const login = async (email, password) => {
  const data = { email, password };

    try {
      setError(null);
      const response = await axios.post("http://localhost:7000/auth/login", data);
      const json = response.data;

      if (json.data == null) {
        setError("user login unsuccessful");
        dispatch({ type: "Logout", payload: null });
      } 
      dispatch({ type: "Loggedin", payload: json });
        console.log(json.data)
        json.data===null?navigate('/'):navigate("/gen-qrcode");
    //   console.log(json);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  return { login, error };
};
