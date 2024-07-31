import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

function LoginForm({setIsLoggedIn}) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true);
    navigate("/profile");
  }

  return (
    <div className="w-full max-w-sm mx-auto">
      <form className="w-full space-y-4 relative" onSubmit={submitHandler}>
        <label className="block">
          <p className="mb-2 font-semibold">
            Email Address<sup className="text-red-500">*</sup>
          </p>
          <input
            required
            type="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email id"
            name="email"
            className="w-full border-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500"
          />
        </label>

        <label className="block relative">
          <div className="flex justify-between items-center mb-2">
            <p className="font-semibold">
              Password<sup className="text-red-500">*</sup>
            </p>
            <Link to="#" className="text-blue-500 text-sm">
              Forgot Password
            </Link>
          </div>
          <input
            required
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter Password"
            name="password"
            className="w-full border-2 border-gray-300 p-2 focus:outline-none focus:border-blue-500 pr-10"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer absolute right-4 transform translate-y-1/2 text-xl text-gray-500 hover:text-gray-700 transition-colors"
            
          >
            {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
          </span>
        </label>
        
        <button
          className="flex justify-center items-center bg-customColor text-black p-1 pl-5 pr-5 mx-auto rounded-2xl "
        >
          Log In
        </button>

        <div className="text-center mt-4">
          <p>
            Don't have an account yet?{" "}
            <Link to="#" className="text-blue-500 hover:underline">
              SignUp
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

