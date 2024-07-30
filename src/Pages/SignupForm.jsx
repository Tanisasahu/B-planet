import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import {Link} from "react-router-dom"

function SignupForm() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div>
      <form>
        <div>
          <label>
            <p>
              Email<sup>*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email"
              value={formData.email}
            />
          </label>
        </div>
        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={changeHandler}
              placeholder="Enter Password"
              name="password"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </label>

          <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={changeHandler}
              placeholder="Confirmr Password"
              name="password"
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </label>
        </div>
        <button>Create Account</button>
        <div>
          <p>
            If you have an account ?
            <Link to="#">
              <p>SignUp</p>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
