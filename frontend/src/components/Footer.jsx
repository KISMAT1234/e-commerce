function Footer(){
    return(
        <>
         <footer className="bg-gray-400 w-[100%] h-[60vh] px-5 py-5">
            <div className="">
                <div className="sm:flex">

                     <input type="text" className="w-[100%] h-[5vh] text-2xl  " placeholder="Enter your email"/>
                     <button className="bg-red-600 rounded sm:ml-10 w-[100%] sm:w-[30%] text-3xl h-[4vh] mt-2">Subscribe</button>
                </div>
                <div className="flex flex-wrap ">
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
                        <h5>Cancellation</h5>
                        <h5>Returns</h5>
                        <h5>Error page</h5>
                    </div>

                    <div className="">
                        <h1 className="font-bold text-xl">POLICY</h1>
                        <h5></h5>
                    </div>

                    <div className="">
                    <h1 className="font-bold text-xl">FOLLLOW US</h1>

                        <h5></h5>
                    </div>

                    
                </div>
            </div>
         </footer>
        </>
    )
}

export default Footer;