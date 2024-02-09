import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaSnapchatSquare } from "react-icons/fa";
function Footer(){
    return(
        <>
         <footer className="bg-gray-400 w-[100%]  px-5 py-5">
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
                        <h5></h5>
                    </div>

                    
                </div>
            </div>
         </footer>
        </>
    )
}

export default Footer;