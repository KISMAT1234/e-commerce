import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
// import chief from "../assets/about/chief.jpg"
import view from "../assets/about/view.jpg"
// import from "../assets/about"
// import from "../assets/about"
// import from "../assets/about"
// import from "../assets/about"
// import from "../assets/about"


function About() {
    return (
        <>
        <div className="absolute">

    
          <Navbar/>
        
          <div className="relative">
            <div className="flex justify-center">
               <img src={view} className="w-[100%] mt-5"/>
            </div>
            <div className=" ">
              <h1 className=" text-gray-600 text-center text-8xl ">Best View  in the World</h1>
            </div>
          </div>

          <div>
            
          </div>

          <Footer/>
          </div>
        </>
    )
}

export default About;