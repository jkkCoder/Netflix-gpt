import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {
  const [isSignInForm , setIsSignInForm ] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)
  const email = useRef()
  const password = useRef()
  const fullName = useRef()

  const toggleSignInForm = () => {
    setIsSignInForm(prev => !prev)
  }
  const btnText = isSignInForm ? "Sign in": "Sign Up"

  const handleCta = () => {
    const msg = checkValidData(email.current.value,password.current.value, !isSignInForm, isSignInForm ? "" : fullName.current.value)
    setErrorMsg(msg)

    
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="bg-img" />
        </div>
        <form onSubmit={e => e.preventDefault()} className='absolute p-12 text-white bg-black w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{btnText}</h1>
          {
            !isSignInForm && <input 
            type="text" 
            placeholder='Full Name' 
            ref={fullName}
            className='px-2 py-4 my-4 w-full bg-gray-700' 
          />
          }
          <input 
            type="text" 
            placeholder='Email Address' 
            ref={email}
            className='px-2 py-4 my-4 w-full bg-gray-700' 
          />
          <input 
            type="password" 
            placeholder='Password' 
            ref={password}
            className='px-2 py-4 my-4 w-full bg-gray-700' 
          />
          <p className='text-red-500 font-bold text-lg py-2'>{errorMsg}</p>
          <button onClick={handleCta} className='py-4  my-4 bg-red-700 w-full rounded-lg'>{btnText}</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now": "Already a User? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login