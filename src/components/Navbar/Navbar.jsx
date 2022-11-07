import React from 'react'
import { Link } from 'react-router-dom'
import {BsCart2} from 'react-icons/bs'
// import {FcMenu} from 'react-icons/fc'
// import { useState } from 'react'
const Navbar = () => {
    // const [open, setOpen] = useState(false);
    const navList = [
        {name : 'Home', link :'/'},
        {name : 'Shop', link :'/'},
        {name : 'Blog', link :'/'},
    ]
  return (
    <div>
        <nav className='bg-white w-full px-20 py-5 flex items-center'>
            <div className="logo">
                <h1 className='text-[1.8rem] font-bold font-head'>UNICLUB</h1>
            </div>
            <div className="nav-list flex space-x-6 ml-10">
                {
                    navList.map((val,idx) =>(
                        <li key={idx} className='list-none font-content'>
                            <Link to={val.link}>
                                {val.name}
                            </Link>
                        </li>
                    ))
                }
            </div>
            <div className="icon-mobile">
                
            </div>
            <div className="login flex items-center ml-auto space-x-10">
                <div className="cart flex">
                    <BsCart2 className='text-[1.4rem]'/>
                    <span><div className='bg-black rounded-[100%] px-1.5 py-.5 text-white text-[.8rem] justify-center relative z-30'>0</div></span>
                </div>
                <button className='bg-black px-5 py-1.5 rounded-sm text-white font-medium font-content'>Sign Up</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar