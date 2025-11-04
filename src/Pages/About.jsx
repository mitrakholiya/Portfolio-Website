import React, { useEffect, useState } from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import about from '../../public/about.avif'

const About = () => {

  let[content,setContent] = useState()
  useEffect(() => {
    setInterval(() => {
    setContent(<>
        <div className="container sm:px-[5%] mx-auto">
          <div className="sm:flex pb-[100px]">
            <div className="w-full sm:w-[50%]">
              <img src={about} alt="" />
            </div>
            <div className="w-full sm:w-[50%] px-[20px] sm:px-[50px] sm:py-[0px] py-[50px] bg-[#f0f3f6] text-[14px] sm:text-justify ">
              <div className='h-full flex items-center'>
                <div>
                  <h3 className='pb-[25px] text-[32px] sm:text-[38px] text-center'>ABOUT JADE</h3>
                  <p className='text-[22px] sm:text-[16px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page</p>
                  <p className='py-[25px] text-[22px] sm:text-[16px]'>
                    This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company.
                  </p>
                  <div className='pb-[25px] text-[22px] sm:text-[16px]'>
                    <h5 className='text-[26px] sm:text-[17px] pb-[16px]'>Education:</h5>
                    <p className='text-[22px] sm:text-[16px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
                  </div>
                  <h5 className='text-[26px] sm:text-[17px] pb-[16px]'>Awards & Nominations:</h5>
                  <p className='text-[22px] sm:text-[16px]'>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>)
    }, 500)
  }, [])
  return (
    <>
      <Header />
      {content}
      <Footer />
    </>
  )
}

export default About
