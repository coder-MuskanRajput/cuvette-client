import React from 'react'
import useAuth from '../hooks/useAuth'
import { removeToken } from '../utils/api'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slice/authSlice'

const Navbar = () => {
    const {isAuth} = useAuth()
    const dispatch = useDispatch()
  return (
    <div className='w-full h-16 shadow-md border-b-gray-400 flex items-center p-3 justify-between'>
        <img src="image.png" className='h-10' alt="" />
        <div className='flex gap-3'>
            <button className=' px-8 py-2 rounded-md font-semibold hover:text-blue-600 active:scale-95' >Contact</button>
            {
                isAuth && <>
                <details className="dropdown">
  <summary className="btn m-1">Your Name</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>{
      removeToken()
      dispatch(logout())
    }}><a>Logout</a></li>
  </ul>
</details>
                </>
            }
        </div>
    </div>
  )
}

export default Navbar