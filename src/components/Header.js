import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName,photoURL} = user;
            dispatch(addUser({uid, email, displayName, photoURL}))
            navigate("/browse")
        } else {
            dispatch(removeUser())
            navigate("/")
        }
      });
},[])
  const signOutCta = () => {
    signOut(auth).then(() => {}).catch((error) => {
        console.log("error is ", error)
      });
  }
  return (
    <div className='flex justify-between absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black'>
        <img className='w-44' src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logo" />
        {user && <div className='flex items-center'>
          <img className='w-12 h-12 p-2' alt="userIcon" src={user?.photoURL} />
          <button onClick={signOutCta} className='font-bold text-white'>Sign Out</button>
        </div>}
        
    </div>
  )
}

export default Header;
