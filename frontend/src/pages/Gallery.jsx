import React from 'react'
import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import FoodData from '../data/FoodData';
const Gallery = () => {
  return (
    <>
       <Navbar/>

        <div className=" ">
            <h1 className=" my-10 text-6xl font-bold text-center">GALLERY OF FOOD THAT WE OFFER</h1>
            <div className="flex flex-wrap mx-20">
               {
                FoodData.map((item,index)=>{
                   return(
                    <div className="w-[300px]">
                        <img src={item.img}  alt=""  className=""/>
                    </div>
                   )
                })
            }
            </div>
        </div>

       <Footer/>
    </>
  )
}

export default Gallery