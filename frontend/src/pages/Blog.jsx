import React from 'react'
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import salad from "../assets/blog/salad.jpg"
import customer1 from "../assets/blog/customer1.jpg"
import customer2 from "../assets/blog/customer2.jpg"


const Blog = () => {
  return (
   <>
        <Navbar/>
        <div>
            <div className="md:flex sm:justify-around mt-10">
               <div>
                   <img src={salad} alt="Salad"/>
               </div>
               <div className="sm:w-[50%]">
                   <h1 className="text-center font-thin">
                   Have you had your salad today? Eating salad almost every day may be one of the most healthy eating habits you can adopt -- and one of the simplest, experts say. Eating salads is a super-convenient way to work in a couple of servings of vegetables and/or fruit. Green salads are on the menu of almost every restaurant. Everyone knows how to make a green salad- just wash, dress, and toss. But very few know how to make a really nutritious, healthy salad. Making the perfect salad is a hidden skill that I’ve developed over the last 3 years from my job. I work at Saladworks and in this restaurant we are committed to making the freshest, best salads in America. With all the variety available,we make our salads with the cleanest ingredients and seasonal foods to keep our reputation of being ‘America 's Best Salads’. When it comes to your health, not all salads are created equal. In fact, many restaurant and fast-food salads are essentially calorie bombs disguised as healthy food- smothered in creamy, calorie dense dressings and missing important nutrients packed with powerful disease-fighting benefits. Next time you make your own salad, this is what you should include for the maximum nutrition, health benefits and taste. 
                   </h1>
               </div>
             </div>
             <div className="justify-center my-10">
               <h1 className="text-bold text-8xl text-center ">Happy Customer</h1>
             </div>

             <div>
                <div>
                    <img src={customer1}/>
                </div>
                <div className="md:flex mt-10">
                   <img src={customer2}/>
                   <h1 className="text-4xl mx-10 mt-5 font-serif">We have served over more than 1 million customers till date. With good reviews and comments we are delighted to be a part of this family. 
                    Customer satisfaction is our happiness and motivation towards our work. We are always ready to serve our customer as best as we can. 
                   </h1>
                </div>
             </div>

             <div className="mt-40">
                 <h1 className="text-9xl font-bold text-center">GET YOUR FAVOURITE FOOD HERE </h1>
             </div>

             <div className="mt-40 pl-10">
                <h1 className="text-4xl font-semibold mb-6">
                  LIST OF DISCOUNT THAT OUR RESTAURANT OFFERS
                </h1>
                <h1 className="text-2xl my-5 font-serif">#  Saturday package (20% Discount in all items)</h1>
                <h1 className="text-2xl my-5 font-serif"># Christmas package (10% off in pizza)</h1>
                <h1 className="text-2xl my-5 font-serif"># New Year Package (Buy 1 pizza or burger get  one free pepsi can).</h1>
                <h1 className="text-2xl my-5 font-serif"># Sunday package (Get $1 cashback  on every order)</h1>
                <h1 className="text-2xl my-5 font-serif"># Family package (Get 50% off on family package deal )</h1>
                <h1 className="text-2xl my-5 font-serif"># Holiday package (Get 80% off on any drinks )</h1>
             </div>
        </div>
    <Footer/>
   </>
  )
}

export default Blog