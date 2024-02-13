import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import kismatlogo from "../assets/kismatlogo.png"





function Footer(){
    return(
        <>
         <footer className="bg-gray-400 w-[100%]  px-10 py-10">
            <div className="">
                <div className="sm:flex">

                     <input type="text" className="w-[100%] h-[8vh] text-4xl  " placeholder="Enter your email"/>
                     <button className="bg-red-600 rounded sm:ml-10 w-[100%] sm:w-[30%] text-3xl h-[vh] mt-2">Subscribe</button>
                </div>
                <div className="flex flex-wrap justify-between mt-5">
                    <div className="">
                        <h1 className="font-bold text-xl">LOCATION</h1>
                        <h5>Copenhagen, Denmark</h5>
                        <h5>Dublin, Ireland</h5>
                        <h5>Delhi, India</h5>
                        <h5>Kathmandu, Nepal</h5>
                        <h5>Dhubai, UAE</h5>
                    </div>

                    <div className="">
                        <h1 className="font-bold text-xl">HELP</h1>
                        <h5>Payments</h5>
                        <h5>Shipping</h5>
                        <h5>Cancellation of order</h5>
                        <h5>Returns</h5>
                        <h5>Error page</h5>
                    </div>

                    <div className="">
                        <h1 className="font-bold text-xl">POLICY</h1>
                        <h5>Return Policy</h5>
                        <h5>Terms Of Use</h5>
                        <h5>Security</h5>
                        <h5>Privacy</h5>
                        <h5>Press</h5>
                    </div>

                    <div className="">
                        <h1 className="font-bold text-xl">FOLLLOW US</h1>
                        <div className="flex justify-between">
                            <FaFacebook/>
                            <FaInstagram />
                            <FaTwitterSquare />
                            <FaTiktok />
                            <FaSnapchatSquare />
                        </div>
                    </div>
                </div>
                <div className="sm:flex sm:flex-wrap pt-10 justify-between">
                    <div className="">
                       <img src={kismatlogo} className=" lg:w-[70%]"/>
                    </div>
                    <div className="">
                        <FaPhoneAlt className="ml-10 text-4xl mt-5"/>
                        <h1 className="md:text-2xl">Call Us At</h1>
                       <h1 className="md:text-2xl"> +977 1234567890 </h1>
                    </div>
                    <div className="">
                       <MdEmail className="ml-10 text-4xl mt-5"/>
                       <h1 className="md:text-2xl">Email Us At</h1>
                       <h1 className="md:text-2xl">foodvalley@gmail.com</h1>
                    </div>
                    <div className="">
                       <FaLocationDot className="ml-10 text-4xl mt-5"/>
                       <h1 className="md:text-2xl">Find Us At</h1>
                       <h1 className="md:text-2xl">kathmandu, nepal</h1>
                    </div>
                </div>
                <div className="mt-5 border-t-4  border-green-500">
                    <h1 className="text-center text-2xl mt-8 text-black">All Rights Reserved. Copyright © Kismat FoodWorks Ltd.</h1>
                </div>
            </div>
         </footer>
        </>
    )
}

export default Footer;