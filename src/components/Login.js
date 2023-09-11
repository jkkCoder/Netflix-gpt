import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_URL, USER_AVATAR } from '../utils/constants';


const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
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

    if(msg)  return;
    
    if(!isSignInForm){  //sign up logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName.current.value,
          photoURL: USER_AVATAR
        }).then(() => {
          const {uid, email, displayName,photoURL} = auth.currentUser;
          dispatch(addUser({uid, email, displayName, photoURL}))
        }).catch((error) => {
          console.log("error is ", error)
        });
        //on authStateChanged will be called from Header componet, there we are dispatching the action
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode+errorMessage)
      });

    }else{  //sign in logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        //on authStateChanged will be called from Header componet, there we are dispatching the action
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMsg(errorCode + errorMessage)
      });
    }

     
  }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img className='h-screen object-cover' src={BACKGROUND_URL} alt="bg-img" />
        </div>
        <form onSubmit={e => e.preventDefault()} className='absolute p-12 text-white bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0 bg-opacity-80'>
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