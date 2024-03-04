import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
// import chief from "../assets/about/chief.jpg"
import view from "../assets/about/view.jpg"
import chief from "../assets/about/chief.jpg"
import waiter from "../assets/about/waiter.jpeg"
import kitchen from "../assets/about/kitchen.jpeg"
import reception from "../assets/about/reception.jpeg"
import table from "../assets/about/table.jpeg"
import vibe from "../assets/about/vibe.jpeg"
import serve from "../assets/about/serve.jpeg"


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
             <div className="md:w-[50%] mt-2">
                 <h1 className="md:mr-40 mx-10">Our kitchen have the best well equiped utensils for chief. We have new kitchen technology like toaster, pizza maker, oven and other vantilation. Our kitchen is covered with all walls so that no any dust or smell can enter inside the kitchen. Chief are also provided with proper gloves and head cover so that the food is made with proper hygenic for the customer. Due to our well equiped materials chief are able to make delicious and spicies food.</h1>
             </div>
          </div>

          <div className="mt-28">
            <h1 className="text-7xl text-center">Our Reception</h1>
            <div>
                 <img src={reception} className="w-full"/>
            </div>
          </div>

          <div className="mt-20 flex">
            <div className="">

              <img src={table} className="w-[900px]"/>
            </div>
            <div className="ml-10 w-[98%]">
              <h1>This is the table I ate at when I was a kid. This table sat in our Miami kitchen for many years; it was the focal point of our nightly meals: 
                meatloaf, lasagna, spaghetti and meatballs, steak, and baked chicken breasts. These are the only meals I remember my mother ever cooking. Each 
                dinner was accompanied by a small bowl of iceberg lettuce, watery cucumbers, and plain, tasteless store-bought tomatoes; the salad was unseasoned</h1>
            </div>

          </div>

          <div className="mt-10 md:flex">
            <div className="mx-20 w-[50%] md:mt-20">
              <h1>The restaurant can give you a vibe which can match your lifestyle and give you a fantastic vibe.
                The  restaurant is open for lunch from 12 pm to 3 pm. Dinner is served from 6 pm to 10 pm. In this time
                you can get  reservation by calling us at +36  (0)777 777  777 or send an email to info@ourres.com.
              </h1>
            </div>
            <div className="mt-10 mx-20">
               <img src={vibe}/>
            </div>
          </div>

          <div className="mt-20 px-4 flex flex-wrap">
             <div className="bg-green-500 h-[60vh] mt-5 w-[300px] px-4 py-4 rounded-2xl">
                <img src={serve} className=""/>
                <h1 className="mt-1 text-2xl">Serving food</h1>
                <h1 className="mt-3">Customer satisfaction depends on serve also. So we have decided to serve in tradition way so that we can easily serve happily.</h1>
             </div>
             {/* <div className="bg-green-500 h-[60vh] mt-5 w-[300px] px-4 py-4 ml-2 rounded-2xl">
                <img src={serve} className=""/>
                <h1 className="mt-1 text-2xl">Serving food</h1>
                <h1 className="mt-3">Customer satisfaction depends on serve also. So we have decided to serve in tradition way so that we can easily serve happily.</h1>
             </div>
             <div className="bg-green-500 h-[60vh] mt-5 w-[300px] px-4 py-4 ml-2 rounded-2xl">
                <img src={serve} className=""/>
                <h1 className="mt-1 text-2xl">Serving food</h1>
                <h1 className="mt-3">Customer satisfaction depends on serve also. So we have decided to serve in tradition way so that we can easily serve happily.</h1>
             </div>
             <div className="bg-green-500 h-[60vh] mt-5 w-[300px] px-4 py-4 ml-2 rounded-2xl">
                <img src={serve} className=""/>
                <h1 className="mt-1 text-2xl">Serving food</h1>
                <h1 className="mt-3">Customer satisfaction depends on serve also. So we have decided to serve in tradition way so that we can easily serve happily.</h1>
             </div> */}
          </div>

          <Footer/>
          </div>

        </>
    )
}

export default About;