import React from "react";
import { RiEditFill } from "react-icons/ri";
import image from "../assets/profile.jpg";
import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("Anil Sahu");
  const [email, setEmail] = useState("anil1011@gmail.com");
  const [password, setPassword] = useState("Gooday123");
  const [phoneNumber, setPhoneNumber] = useState("9853375624");
  const [address, setAddress] = useState("Patia, Bhubaneswar");
  const [state, setState] = useState("Odisha");
  const [zipCode, setZipCode] = useState(751024);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChangeName = (e) => setName(e.target.value)
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangePhoneNumber = (e) => setPhoneNumber(e.target.value);
  const handleChangeAddress = (e) => setAddress(e.target.value);
  const handleChangeState = (e) => setState(e.target.value);
  const handleChangePhoneZipCode = (e) => setPhoneZipCode(e.target.value);
  return (
    <div className="flex justify-center pt-8 pb-6 border border-solid border-black bg-customColorbg">
      <div className="relative  pb-3 border border-gray-300 rounded-md shadow-md bg-customColorbg w-4/12">
        <div className="absolute top-6 left-1/2 -translate-x-1/2">
          <img src={image} width={120} alt="Profile" className="rounded-full" />
        </div>
        <div className="h-24 bg-customColorDark"></div>
        <div className="space-y-4 m-4 pt-8">
          <div>
            <div className="flex justify-between items-center">
              <label className="font-semibold">Name</label>
              <div
                className="text-black cursor-pointer flex items-center text-sm"
                onClick={handleEditClick}
              >
                {isEditing ? "Save" : "Edit"}
                <RiEditFill className="ml-1" />
              </div>
            </div>
            <input
              type="text"
              value={name}
              name="name"
              readOnly={!isEditing}
              onChange={handleChangeName}
              className="w-full border pl-3 pt-1 pb-1 border-gray-300 bg-customGray focus:outline-none"
            />
          </div>
          <div>
            <div className="font-semibold">Email</div>
            <input
              type="email"
              value={email}
              name="email"
              readOnly={!isEditing}
              onChange={handleChangeEmail}
              className="w-full border pl-3 pt-1 pb-1 border-gray-300 bg-customGray focus:outline-none"
            />
          </div>
          <div>
            <div className="font-semibold">Password</div>
            <input
              type="password"
              value={password}
              name="password"
              readOnly={!isEditing}
              onChange={handleChangePassword}
              className="w-full border pl-3 pt-1 pb-1 border-gray-300 bg-customGray focus:outline-none"
            />
          </div>
          <div>
            <div className="font-semibold">Phone Number</div>
            <input
              type="tel"
              value={phoneNumber}
              name="phoneNumber"
              readOnly={!isEditing}
              onChange={handleChangePhoneNumber}
              className="w-full border pl-3 pt-1 pb-1 border-gray-300 bg-customGray focus:outline-none"
            />
          </div>
          <div>
            <div className="font-semibold">Address</div>
            <input
              type="text"
              value={address}
              name="address"
              readOnly={!isEditing}
              onChange={handleChangeAddress}
              className="w-full border pl-3 pt-1 pb-1 border-gray-300 bg-customGray focus:outline-none"
            />
          </div>
          <div className="flex justify-between">
            <div className="w-1/2 pr-2">
              <div className="font-semibold">State</div>
              <input
                type="text"
                value={state}
                name="state"
                readOnly={!isEditing}
                onChange={handleChangeState}
                className="w-full border pl-3 pt-1 pb-1 border-gray-300 bg-customGray focus:outline-none"
              />
            </div>
            <div className="w-1/2 pl-2">
              <div className="font-semibold">Zip Code</div>
              <input
                type="number"
                value={zipCode}
                name="zipCode"
                readOnly={!isEditing}
                onChange={handleChangePhoneZipCode}
                className="w-full border pl-3 pt-1 pb-1 border-gray-300 bg-customGray focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
