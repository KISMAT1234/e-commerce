import Navbar from "../components/Navbar";
import Footer from  "../components/Footer";
import {Link } from "react-router-dom"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Signupschema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmpassword: yup.string().required().oneOf([yup.ref('password'),null],'password not match'),
    gender: yup.string().required(),
  
  })
  .required();


function Signup(){

  const {setValue, register,  reset,  handleSubmit, formState: {errors} } = useForm({
    resolver: yupResolver(Signupschema),
  });
  
  const errorColor = {
    color:"white"
  }



  const unReload = (data) => {
    window.location.href="/"
    console.log(data)
       
  }

  return(
    <>
    <Navbar/>
    <div className="border-2 border-green-400 h-[120vh] w-[100%] bg-red-600 ">
    <h1 className="text-6xl text-blue-400 font-bold ml-10 mt-2 mb-5" >SIGNUP FORM</h1>
      <form onSubmit={handleSubmit(unReload)}>
        <div className="mx-10 text-2xl font-thin">
        {errors.username?.message && <a style ={errorColor}> <p>{errors.username?.message}</p></a>}
        </div>
        <input type="text" {...register("username")}  name="username" className=" mt-2   w-[80%] text-3xl  mx-10" placeholder=" UserName " />
        <div className="mx-10 text-2xl font-thin">
        {errors.email?.message && <a style ={errorColor}> <p>{errors.email?.message}</p></a>}
        </div>
        <input type="email" {...register('email')} name="email" className=" border-blue-600 w-[80%] text-3xl  mx-10 mt-4" placeholder="Email"/>
        <div className="mx-10 text-2xl font-thin">
        {errors.password?.message && <a style ={errorColor}> <p>{errors.password?.message}</p></a>}
        </div>
        <input type="password" {...register("password")} name="password" className=" border-blue-600 w-[80%] text-3xl  mx-10 mt-4" placeholder="Password"/>
        <div className="mx-10 text-2xl font-thin">
        {errors.confirmpassword?.message && <a style ={errorColor}> <p>{errors.confirmpassword?.message}</p></a>}
        </div>
        <input type="password" {...register('confirmpassword')} name="confirmpassword" className=" border-blue-600 w-[80%] text-3xl  mx-10 mt-4" placeholder="Confirm Password"/>
        <input type="file" className="mx-10 mt-4 text-2xl" name="image" placeholder="profile photo" onChange={(e)=>{setValue("image", e.target.files[0])}}/>

        <div className="">
           <label htmlFor="gender" className="md:text-4xl text-2xl mx-10 mt-4">Gender:
               {errors.gender && <a style={errorColor}>{errors.gender.message}</a>}
           </label> <br/>
           <label> <input type="radio" className="ml-10 mt-4 text-4xl"
                          {...register("gender")}
                          name="gender" value="male"/> Male </label>
           <label> <input type="radio"
                          {...register("gender")}
                          name="gender" value="female"/> Female </label>
         </div>
        <div className="flex justify-between">
           <button className="hover:bg-orange-600 bg-green-900  w-[30%] text-3xl mx-10 mt-4 text-amber-50"> Signup </button>
           <Link to="/login">
           <button className="hover:bg-orange-600 bg-green-900  w-[70%] text-3xl mr-40 text-amber-50  mt-4"> Login </button>
           </Link>
         </div>      
      </form>
    </div>
    <Footer/>
    </>
  )
}
export default Signup;