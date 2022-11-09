import React from 'react'
import './hero.css'

const HeroSection = () => {
  return (
    <div>
        <div className="hero-section w-full h-[90vh] md:pt-[14rem] pt-32">
            <div className="content md:ml-52 md:text-left text-center">
                <h1 className='text-[4rem] font-head'>Steetwear <br /> Collection </h1>
                <div className='flex items-center space-x-5 justify-center md:justify-start'>
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