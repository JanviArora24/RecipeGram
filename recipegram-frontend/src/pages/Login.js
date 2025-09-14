import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-5">
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} className="border p-2 m-2"/>
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} className="border p-2 m-2"/>
      <button onClick={handleLogin} className="bg-green-500 text-white p-2 m-2">Login</button>
    </div>
  );
}

export default Login;
