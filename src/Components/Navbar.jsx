import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import image from "../assets/profile.jpeg";

function Navbar(props) {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success("Logged Out");
  };

  return (
    <div className="flex bg-customColor text-black justify-around p-5">
      <div>
        <Link to="/">
          <div className="text-4xl  font-sans">B.planet</div>
        </Link>
      </div>
      <div className="justify-center items-center text-lg flex gap-8">
        {
          <Link to="/contactus">
            <div className="border-2 border-solid border-black rounded-3xl px-3 py-1">
              Contact Us
            </div>
          </Link>
        }
        {!isLoggedIn && (
          <Link to="/login">
            <div>Login</div>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/profile">
            <div className="rounded-full">
            <img src={image} width={50} alt="Profile" className="rounded-full" />
            </div>
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/" onClick={handleLogout}>
            <div>Logout</div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
