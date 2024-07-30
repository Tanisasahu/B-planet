import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import imageSrc from "../assets/LoginImage.png";

const Template = ({setIsLoggedIn}) => {
  return (
    <div className="flex items-center justify-center h-[89.2vh] bg-customColorbg">
      <div className="w-1/2 border-4 border-zinc-500 bg-customColorbg flex absolute top-1/4">
        <div className="mr-6 bg-customColorDark w-1/2 flex items-end justify-center">
          <img src={imageSrc} width={200} loading="lazy" alt="Login" className="" />
        </div>
        <div className="p-5 w-1/2">
          <h1 className="text-2xl font-bold mb-4">Sign In</h1>
          <p className="mb-6">
            <span className="text-gray-600">Welcome Back!</span>
          </p>
          <LoginForm setIsLoggedIn={setIsLoggedIn}/>
          {/* {formtype === "login" ? <LoginForm /> : <SignupForm />} */}
        </div>
      </div>
    </div>
  );
};

export default Template;
