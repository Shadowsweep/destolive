
'use client';

import Modal from "./Modal";
import { useState } from "react";

import CustomButton from "../forms/CustomButton";
import useSignupModal from "@/app/hooks/useSignupModal";

const SignupModal = () => {
  const signupModal = useSignupModal()
  const content = (
    <>
    <h2 className="mb-6 text-2xl">Welcome to Destolive ,please log in </h2>
     <form className="space-y-4" >
        <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4  border border-gray-300 rounded-xl" />
        <input placeholder="Password" type="password" className="w-full h-[54px] px-4  border border-gray-300 rounded-xl" />
        <input placeholder=" confirm Password" type="password" className="w-full h-[54px] px-4  border border-gray-300 rounded-xl" />
        <div className= "p-5 bg-destolive-dark text-white rounded-xl opacity-80">
            The error message
        </div>
         <CustomButton
         label="Submit"
         onClick={()=> console.log('Test')}
         />
     </form>
  
    </>
  )

  return (
   <Modal
   isOpen ={signupModal.isOpen}
   close = {signupModal.close}
   label="Log in "
   content ={content}
   />
  )
}

export default SignupModal