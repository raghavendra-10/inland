import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth } from "../firebaseConfig";
const Header = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();
  const isLoggedIn = !!auth.currentUser;
  const [username, setUsername] = useState("");
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/register");
    } catch (e) {
      console.error(e.message);
    }
  };
  useEffect(() => {
    const fetchUsername = async () => {
      const q = query(
        collection(db, "users"),
        where("email", "==", auth.currentUser.email)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUsername(doc.data().username);
      });
    };

    if (auth.currentUser) {
      fetchUsername();
    }
  }, []);
  return (
    <header className="md:flex justify-center items-center md:justify-between bg-teal-500 p-4 text-white">
      <h1 className="text-lg items-center flex justify-center md:text-3xl font-bold">
        Sustainable Inland Fisheries Initiative
      </h1>
      <div className="text-xl text-center">Welcome! {username}</div>
      <ul className="flex justify-center items-center flex-col md:flex-row md:flex gap-2 text-xl">
        <li className="hover:bg-white hover:text-black p-1 transition transition-ease rounded">
          <Link to="/">HOME</Link>
        </li>
        
          {isLoggedIn &&<li className="hover:bg-white hover:text-black p-1 transition transition-ease rounded"> <Link to="/challenges">CHALLENGES</Link></li>}

        <li className="hover:bg-white hover:text-black p-1 cursor-pointer transition transition-ease rounded">
          {isLoggedIn ? (
            <li onClick={handleLogout}>LOGOUT</li>
          ) : (
            <li>
              <Link to="/register">LOGIN/SINGUP</Link>
            </li>
          )}
        </li>
        <li className="hover:bg-white hover:text-black p-1 transition transition-ease rounded">
          <Link to="/contact">CONTACT</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
