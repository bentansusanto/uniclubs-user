import React from 'react'
import { Link } from 'react-router-dom'
import {BsCart2} from 'react-icons/bs'
// import {FcMenu} from 'react-icons/fc'
import { useState } from 'react'
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navList = [
        {name : 'Home', link :'/'},
        {name : 'Shop', link :'/'},
        {name : 'Blog', link :'/'},
    ]
  return (
    <div>
        <nav className='bg-white w-full lg:px-20 px-8 py-5 flex items-center'>
            <div className="logo">
                <Link to='/' className='text-[1.6rem] font-head font-bold'>
                    UNICLUB
                </Link>
            </div>
            <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                <ion-icon name={open ? 'close':'menu'}></ion-icon>
            </div>
                <div className={`md:flex md:items-center md:ml-10 md:mr-28 md:space-x-10 md:pb-0 md:pt-0 md:space-y-0 space-y-10 pt-16 pb-16 absolute md:static bg-[#1c1b1b] md:bg-transparent md:z-auto z-[1] left-0 w-full h-[92.5vh] md:h-auto md:w-auto md:pl-0 px-9 transition-all duration-1500 ease-out ${open ? 'top-16 ':'bottom-[-500px] hidden'}`} onClick={() => setOpen(false)}>
                    {
                        navList.map((val,idx) =>(
                            <li key={idx} className=' font-content text-white md:text-black list-none text-[1rem]'>
                                <Link to={val.link}>
                                    {val.name}
                                </Link>
                            </li>
                        ))
                    }
                <div className="login items-center md:hidden ">
                    <button className='bg-white px-5 py-1.5 w-full rounded-sm text-black font-medium font-content'>Sign Up</button>   
                </div>
            </div>
            <div className="login1 md:flex items-center space-x-10 ml-auto md:mr-0 mr-14">
            <div className="cart flex">
                    <BsCart2 className='text-[1.4rem]'/>
                    <span><div className='bg-black w-[22px] h-[21px] rounded-[100%] text-white text-[.8rem] text-center relative'>0</div></span>
                </div>
                    <div className="login lg:ml-auto hidden md:block">
                        <button className='bg-black px-5 py-1.5 rounded-sm text-white font-medium font-content'>Sign Up</button> 
                    </div>
                </div>
        </nav>
    </div>
  )
}

export default Navbar