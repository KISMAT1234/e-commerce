import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import kismatlogo from "../assets/kismatlogo.png"

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10 border-red-600 border-y-4 ">
      <div className="w-[15%]">
        {/* <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold ">Kismat Foods</h1> */}
        <img src={kismatlogo} className=" lg:w-[40%]"/>
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold md:mt-3">Burgers! Because no great story started with salad </h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
    </nav>
  );
};

export default Navbar;