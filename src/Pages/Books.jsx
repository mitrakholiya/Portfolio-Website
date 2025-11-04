import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import { bookData } from '../Data/BookData'

const Books = () => {
  console.log(bookData);

  return (
    <>
      <Header />
      <div className="container sm:py-[100px] mx-auto">
        <h2 className='text-center py-[30px] text-[38px]'>BOOKS</h2>
        {bookData.map((v, i) => {
          return (
            <>
              <div className='bg-[#f0f3f6] py-[100px] mb-[30px]'>
                <div className="sm:flex justify-center items-center">
                  <div className='sm:w-[5%]'></div>
                  <div className="w-full sm:px-[0px] px-[40px] sm:w-[25%]">
                    <h4 className='text-[30px] sm:text-[48px] leading-[0.9]'>{v.title}</h4>
                    <p className='text-[19px] sm:text-[14px] text-justify py-[25px]'>{v.para}</p>
                    <div className="flex justify-between items-center">
                      <h4 className='text-[48px] relative tracking-[10px]'>{v.price} <sup className='absolute text-[20px] right-[-20px] top-[20px]'>$</sup></h4>
                      <button className='btn2'>Buy Now</button>
                    </div>
                  </div>
                  <div className='sm:w-[5%]'></div>
                  <div className="sm:px-[0px] w-full sm:w-[40%]">
                    <img src={v.url} alt=""  className='w-full'/>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default Books
