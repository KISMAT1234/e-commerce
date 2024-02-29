import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
// import chief from "../assets/about/chief.jpg"
import view from "../assets/about/view.jpg"
import chief from "../assets/about/chief.jpg"
import waiter from "../assets/about/waiter.jpeg"
import kitchen from "../assets/about/kitchen.jpeg"
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
              <h1 className="mt-20 text-gray-60pg0 text-center text-8xl ">Best View  in the World</h1>
            </div>
          </div>

           <hr></hr>
          <h1 className="mt-20 mb-5 text-4xl text-center">We have well experienced chief and waiter</h1>
          <div className="flex justify-around">
             <div>
                   <img src={chief} className="w-[500px]"/>
             </div>
             <div>
             <img src={waiter} className="w-[400px] rounded border-rounded-xl"/>
             </div>
          </div>
          <div className="mt-20 md:flex md:justify-between">
             <div className="md:w-[50%]">
                 <img src={kitchen} className="w-[90%] ml-10"/>
             </div>
             <div className="md:w-[50%] mt-10">
                 <h1 className="md:mr-40 mx-10">Our kitchen have the best well equiped utensils for chief. We have new kitchen technology like toaster, pizza maker, oven and other vantilation. Our kitchen is covered with all walls so that no any dust or smell can enter inside the kitchen. Chief are also provided with proper gloves and head cover so that the food is made with proper hygenic for the customer. Due to our well equiped materials chief are able to make delicious and spicies food.</h1>
             </div>
          </div>

          <Footer/>
          </div>
        </>
    )
}

export default About;