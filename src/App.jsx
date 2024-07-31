import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Contactus from "./Pages/Contactus";
import Signup from "./Pages/SignupForm";
import Profile from "./Pages/Profile";
import { useState } from "react";
import Template from "./Pages/Template";
import Product from "./Pages/Product"
import Login from "./Pages/Login";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <div className="font-sans antialiased text-black">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes basename='./'>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Template setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/product" element={<Product/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
