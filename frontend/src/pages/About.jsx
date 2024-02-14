import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import salad from "../assets/salad.jpg"


function About() {
    return (
        <>
          <Navbar/>
          <div className="sm:flex sm:justify-around mt-10">
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
            <h1 className="text-bold text-8xl text-center ">Best Food In The Town</h1>
          </div>
          <Footer/>
        </>
    )
}

export default About;