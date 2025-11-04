import React from 'react'
import Header from '../Comman/Header'
import bg from "../../public/home.avif"
import Footer from '../Comman/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <div className="container lg:px-[5%] mx-auto">
        <div className="relative w-[100%]  ">
          <img src={bg} alt="" className='h-full ikni  sm:w-full' />
          {/* Overlay  */}
          <div className="absolute inset-0 overlay2">
            <div className='flex justify-center items-center h-[100%]   '>
              <div className='flex flex-col items-center py-[200px] '>
                <h1 className='text-[white] text-[40px] text-center sm:text-[64px] tracking-[0.6rem]'>THE ART OF FOOD</h1>
                <p className=' text-[white] text-[20px] sm:text-[28px] tracking-[0.3rem]'>PHOTOGRAPHY</p>
                <button className='btn1'>View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home
