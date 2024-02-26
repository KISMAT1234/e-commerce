import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
// import Carousel from "./CarouselComponent";
import leftImage from "../assets/slider/left.jpg";
import Chicken from "../assets/slider/chicken.jpg";
import Menu from "../assets/slider/menu.jpg";
import Pizza from "../assets/slider/pizza.jpg";
import Restaurant from "../assets/slider/restaurant.jpg";
import rightImage from "../assets/slider/right.jpg";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";



const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  let slides=[
    Restaurant,
    Pizza,
    Menu,
    Chicken
]

const [current, setCurrent] =useState(0);

let previousSlide = ()=>{
  if (current===0) setCurrent(slides.length-1)
  else setCurrent(current-1);
}

let nextSlide = ()=>{
  if (current===slides.length-1) setCurrent(0)
  else setCurrent(current + 1);
}

  return (
   
    <div className="mx-6">
      <div className="md:flex md:justify-between">
        <div className="md:w-[20%] md:mt-[10%]">
               <img src={leftImage}/>
        </div>
        <div className="overflow-hidden md:w-[55%]   md:mx-10  sm:mb-10  relative">
          <div className={`flex transition ease-out duration-1000 `} 
            style={{
            transform: `translateX(-${current * 100}%)`}}>
            {slides.map((food)=>{
                return <img src={food}/>;
            })}
          </div>
          <div className="absolute top-0 h-full w-full justify-between flex px-2">
               <button onClick={previousSlide} className="text-4xl text-green-600"> <FaArrowCircleLeft /></button>
               <button onClick={nextSlide} className="text-4xl text-green-600"><FaArrowCircleRight /></button>
          </div>
        </div>
        <div className="md:w-[20%] md:mt-[10%]">
          <img src={rightImage}/>
        </div>
      </div>
      <h3 className="text-xl font-semibold ">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
            selectedCategory === "All" && "bg-green-500 text-white"
          }`}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              onClick={() => dispatch(setCategory(category))}
              key={index}
              className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === category && "bg-green-500 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;