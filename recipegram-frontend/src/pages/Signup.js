import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-5">
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} className="border p-2 m-2"/>
      <input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} className="border p-2 m-2"/>
      <button onClick={handleSignup} className="bg-blue-500 text-white p-2 m-2">Signup</button>
    </div>
  );
}

export default Signup;
