import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
// import p1 from '../../public/p1.avif'
// import p2 from '../../public/p2.avif'
// import p3 from '../../public/p3.avif'
import { Link } from 'react-router-dom'
import { portfolioData } from './portsub/PortfolioData'

const Portfolio = () => {
  return (
    <>
      <Header />
      <div className='container mt-[60px] sm:mt-[100px] mx-auto sm:px-[5%] flex flex-col items-center '>
        {/* TITLE */}
        <h2 className='text-[38px] font-light py-[30px]'>PORTFOLIO</h2>
        {/* Image Library */}
        <div className="sm:flex gap-3">

          {portfolioData.map((v, i) => {
            return(
            <>
              <div className="sm:w-[33%] w-[100%] relative">
                <img src={v.mainUrl} alt="" className='w-full' />
                <Link to={`/portfolio/${i}`}>
                  <div className="absolute bg-[#273a4e66] w-full h-full inset-0 ">
                    <div className='text-center py-[60px] text-[40px] text-[white]'>
                      <h3 className='sm:block hidden'>EDITORIAL</h3>
                    </div>
                  </div>
                </Link>
              </div>
              <h3 className='sm:hidden block text-[38px] text-center py-[30px]'>EDITORIAL</h3>
            </>)
          })}
          {/*           
          <div className="sm:w-[33%] w-[100%] relative">
            <img src={p1} alt="" className='w-full' />
            <Link to={"/Portfolio/sub"}>
              <div className="absolute bg-[#273a4e66] w-full h-full inset-0 ">
                <div className='text-center py-[60px] text-[40px] text-[white]'>
                  <h3 className='sm:block hidden'>EDITORIAL</h3>
                </div>
              </div>
            </Link>
          </div>
          <h3 className='sm:hidden block text-[38px] text-center py-[30px]'>EDITORIAL</h3>

          <div className="sm:w-[33%] w-[100%] relative">
            <img src={p2} alt="" className='w-full' />
            <Link to={"/portfolio/sub2"}>
              <div className="absolute bg-[#273a4e66] w-full h-full inset-0 ">
                <div className='text-center py-[60px] text-[40px] text-[white]'>
                  <h3 className='sm:block hidden'>FOOD & SERVE</h3>
                </div>
              </div>
            </Link>
          </div>
          <h3 className='sm:hidden block text-[38px] text-center py-[30px]'>FOOD & SERVE</h3>
          
          <div className="sm:w-[33%] w-[100%] relative">
            <img src={p3} alt="" className='w-full' />
            <Link to={"/portfolio/sub3"}>
              <div className="absolute bg-[#273a4e66] w-full h-full inset-0 ">
                <div className='text-center py-[60px] text-[40px] text-[white]'>
                  <h3 className='sm:block hidden'>BAKED GOODS</h3>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
      </div>
      {/* <h3 className='sm:hidden block text-[38px] text-center py-[30px]'>BAKED GOODS</h3> */}

      <Footer />
    </>
  )
}

export default Portfolio
