import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import p1 from '../../public/client1.webp'
import p2 from '../../public/client2.webp'
import p3 from '../../public/client3.webp'
import { Link } from 'react-router-dom'

const Client = () => {
  return (
    <>
      <Header />


        <div className='container sm:mt-[100px] mx-auto sm:px-[5%] flex flex-col items-center '>
          {/* TITLE */}
          <h2 className='text-[48px] sm:text-[38px]  font-light py-[30px]'>PORTFOLIO</h2>
          {/* Image Library */}
          <div className="sm:flex gap-3">
            {/* 1 */}
            <div className="sm:w-[33%] w-[100%] relative sm:pb-[0px] pb-[30px]">
              <img src={p1} alt="" className='w-full' />
              <Link to={"#"}>
                <div className="absolute  w-full h-full inset-0 ">
                  <div className='text-center flex flex-col h-full justify-center text-[52px] sm:text-[40px] text-[white]'>
                    <h3>GREEN EDITORIAL</h3>
                  <p className='text-[26px]'>Client:Herbal Magazine</p>
                  </div>
                </div>
              </Link>

            </div>
            {/* 2 */}
            <div className="sm:w-[33%] w-[100%] relative sm:pb-[0px] pb-[30px]">
              <img src={p2} alt="" className='w-full' />
              <div className="absolute  w-full h-full inset-0 ">
                <div className='text-center flex flex-col h-full justify-center text-[52px] sm:text-[40px] text-[white]'>
                  <h3>BREAD BAKING RECEPIES</h3>
                  <p className='text-[26px]'>Client:The Baker Blog</p>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div className="sm:w-[33%] w-[100%] relative sm:pb-[0px] pb-[30px]">
              <img src={p3} alt="" className='w-full' />
              <div className="absolute  w-full h-full inset-0 ">
                <div className='text-center flex flex-col h-full justify-center text-[52px] sm:text-[40px] text-[white]'>
                  <h3>FRENCH COOKBOOK</h3>
                  <p className='text-[26px]'>Client:La Peche</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default Client
