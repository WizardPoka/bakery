// Login.jsx
import React from "react";
import useNavigation from "../hooks/useNavigation";

function Login() {
    const { navigateTo } = useNavigation();

  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => navigateTo("/")}> Назад </button>
    </div>
  );
}

export default Login;