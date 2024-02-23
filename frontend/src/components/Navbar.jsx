import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import kismatlogo from "../assets/kismatlogo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 ">
      <div className="w-[15%]">
        <img src={kismatlogo} className=" lg:w-[40%]"/>
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl font-bold md:mt-1">Burgers! Because no great story started with salad </h1>
        <div className="my-2 text-2xl text-violet-800 justify-between">
          <Link to ="/"       className="hover:border-b-2 border-green-600 hover:text-slate-400 ">Home</Link>
          <Link to="/about" className="hover:border-b-2 border-green-600 hover:text-slate-400 ml-4">About</Link>
          <Link to="/gallery" className="hover:border-b-2 border-green-600 hover:text-slate-400 ml-4">Gallery</Link>
          <Link to="/contact" className="hover:border-b-2 border-green-600 hover:text-slate-400 ml-4">Contact</Link>
        </div>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw] h-[6vh]"
        /><br></br>
        <div className="mt-2">
          <Link to ="/login">
              <button className="bg-green-600 rounded h-[6vh] w-[25%] md:ml-30 text-2xl font-bold">Login</button>
          </Link> 
          <Link to="/signup">
            <button className="bg-green-600 rounded h-[6vh] w-[25%] ml-10 text-2xl font-bold">Signup</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;