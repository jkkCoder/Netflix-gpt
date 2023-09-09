import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL } from '../utils/constants';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  console.log("header is rendered")
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName,photoURL} = user;
            dispatch(addUser({uid, email, displayName, photoURL}))
            navigate("/browse")
        } else {
            dispatch(removeUser())
            navigate("/")
        }
      });

    return () => {
      unsubscribe()
    }
},[])
  const signOutCta = () => {
    signOut(auth).then(() => {}).catch((error) => {
        console.log("error is ", error)
      });
  }
  return (
    <div className='flex justify-between absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black'>
        <img className='w-44' src={LOGO_URL} alt="logo" />
        {user && <div className='flex items-center'>
          <img className='w-12 h-12 p-2' alt="userIcon" src={user?.photoURL} />
          <button onClick={signOutCta} className='font-bold text-white'>Sign Out</button>
        </div>}
        
    </div>
  )
}

export default Header;
