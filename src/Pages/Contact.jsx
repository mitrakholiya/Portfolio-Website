import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import last from '../../public/last.avif'

const Contact = () => {
  return (
    <>
      <Header />
      <div className="container lg:px-[5%] mx-auto bg-[#f0f3f6] ">
        <div className="lg:flex">
          <div className="lg:w-[50%] relative">
            <img src={last} alt="" className='w-full h-full' />
            <div className='absolute w-full h-full bg-[#4c5e7147] inset-0'></div>
          </div>
          <div className="lg:w-[50%]">
            <div className='lg:pt-[200px] pt-[40px] px-[20px] xl:px-[100px]'>
              <h2 className='text-[38px] pb-[15px]'>GET IN TOUCH</h2>
              <p className='text-[20px] lg:text-[14px] pb-[15px] text-justify'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
              <p className='text-[20px] lg:text-[14px] pb-[15px]'>Tel: 123-456-7890  |  Email: info@mysite.com</p>
              <form action="#" className='text-[20px] lg:text-[14px]'>
                <div className='pb-[15px]'>
                  <label htmlFor="Fname">First name *</label><br />
                  <input type="text" className='w-full border-[2px] py-[4px] rounded-[0px]' placeholder='' />
                </div>
                <div className='pb-[15px]'>
                  <label htmlFor="lname">Last name *</label><br />
                  <input type="text" className='w-full border-[2px] py-[4px] rounded-[0px]' placeholder='' />
                </div>
                <div className='pb-[15px]'>
                  <label htmlFor="email">Email *</label><br />
                  <input type="email" className='w-full  border-[2px] py-[4px] rounded-[0px]' placeholder='' />
                </div>
                <div className='pb-[15px]'>
                  <label htmlFor="sub">Subject *</label><br />
                  <input type="text" className='w-full border-[2px] py-[4px] rounded-[0px]' placeholder='' />
                </div>
                <div className='pb-[15px]'>
                  <label htmlFor="Message">Message *</label><br />
                  <textarea name="message" id="" rows={3} className='w-full rounded-[0px] border-[2px]
                  '></textarea>
                </div>
                <div className='flex justify-end'>
                  <button className='btn4 bg-gray-900 '>Submit</button>
                </div>
                <div className='py-[15px]'>
                  <p>Stay Up-To-Date with New Posts</p>
                </div>
                <div>
                  <label htmlFor="email" >Email *</label>
                  <div className='lg:flex items-center justify-between py-[15px]'>
                    <div className="lg:w-[48%]">
                      <input type="email" name="" id="" className='w-full py-[4px] rounded-[0px] border-[2px]' />
                    </div>
                    <div className="lg:w-[48%] pt-[25px] lg:pt-[0px]">
                      <button className='btn4 w-full bg-gray-900'>Subscribe Now</button>
                    </div>
                  </div>
                </div>
                <div className='pb-[40px] lg:pb-[0px] flex items-center'>
                  <input type="checkbox" className='me-[5px]'/>
                  <span>Yes, Subscribe me to your newsletter. *</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
