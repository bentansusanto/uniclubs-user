import React from 'react'
import './hero.css'

const HeroSection = () => {
  return (
    <div>
        <div className="hero-section w-full h-[90vh] pt-[14rem]">
            <div className="content ml-52">
                <h1 className='text-[4rem] font-head'>Steetwear <br /> Collection </h1>
                <div className='flex items-center space-x-5'>
                    <div className='bg-black w-24 h-1'></div>
                    <h4 className='text-[1.5rem] font-head'>2022</h4>
                    <div className='bg-black w-24 h-1'></div>
                </div>
                <h1 className='text-[2.5rem] pt-8 font-head font-bold'>Get OFF 50%</h1>
            </div>
        </div>
    </div>
  )
}

export default HeroSection