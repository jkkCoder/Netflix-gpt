import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_URL, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice'


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='flex justify-between absolute z-10 w-screen px-8 py-2 bg-gradient-to-b from-black'>
        <img className='w-44' src={LOGO_URL} alt="logo" />
        {user && <div className='flex items-center'>
          <select onChange={handleLanguageChange} className='p-2 m-2 bg-gray-900 text-white'>
            {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>
          <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 bg-purple-800 text-white rounded-lg'>GPT Search</button>
          <img className='w-12 h-12 p-2' alt="userIcon" src={user?.photoURL} />
          <button onClick={signOutCta} className='font-bold text-white'>Sign Out</button>
        </div>}
        
    </div>
  )
}

export default Header;
