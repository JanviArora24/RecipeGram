import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { updateProfile, onAuthStateChanged } from "firebase/auth";

function Profile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    // Listen to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setName(currentUser.displayName || "");
      } else {
        setUser(null);
        setName("");
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleSave = async () => {
    if (!user) return;
    try {
      await updateProfile(user, {
        displayName: name
      });
      alert("Profile updated!");
    } catch (err) {
      alert(err.message);
    }
  };

  if (!user) {
    return <div className="p-5">Please log in to view profile.</div>;
  }

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold">Profile</h2>
      <p>Email: {user.email}</p>
      <input
        placeholder="Enter name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border p-2 m-2"
      />
      <button onClick={handleSave} className="bg-purple-500 text-white p-2 m-2">
        Save Name
      </button>
    </div>
  );
}

export default Profile;
