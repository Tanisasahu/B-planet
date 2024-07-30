import React from "react";

function Contactus() {
  return (
    <div className="flex items-center justify-center h-[89.2vh] bg-customColorbg">
      <div className="w-1/2 border-4 border-inputColorbg flex absolute top-1/4">
        <div className="border-collapse border-r-4 border-inputColorbg w-2/4 p-8 flex flex-col gap-6">
          <div>
            <h1 className="text-2.5xl">Stay Updated</h1>
            <p className="text-sm">Need to get in touch with us ?</p>
          </div>
          <div>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><div className="underline">Facebook</div></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><div className="underline">instagram</div></a>
          </div>
        </div>
        <div className="p-5 w-1/2 flex flex-col gap-4">
          <input type="text" placeholder="Anil Sahu" className="h-10 pl-3 text-md bg-inputColorbg placeholder-white text-white focus:outline-none"/>
          <input type="email" placeholder="anil1011@gmail.com" className="h-10 pl-3 bg-inputColorbg placeholder-white text-white focus:outline-none"/>
          <textarea type="text" placeholder="i found your site well informed" className="h-24 pl-3 pt-2 bg-inputColorbg placeholder-white text-white focus:outline-none"/>
          <button className="border-2 rounded-2xl w-24 bg-stone-400 p-1">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
