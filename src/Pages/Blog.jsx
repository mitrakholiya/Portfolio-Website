import React from 'react'
import Header from '../Comman/Header'
import Footer from '../Comman/Footer'
import { blogdata } from '../Data/BlogData'
import r1 from '../../public/r1.png'
const Blog = () => {
  console.log(blogdata);

  return (
    <>
      <Header />
      <div className="container sm:px-[5%] mx-auto sm:py-[100px] ">
        <h3 className='text-[38px] text-center py-[30px]'>MY BLOG</h3>
        <div className='bg-[#f0f3f6] py-[100px]'>
          {blogdata.map((v, i) => {
            return (
              <>

                <div className="sm:flex justify-center sm:pb-[20px]">
                  {/* Image left */}
                  <div className="sm:w-[40%]">
                    <img src={v.url} alt="" />
                  </div>
                  {/* Right content */}
                  <div className="sm:w-[40%] bg-[white] p-[30px] relative">
                    {/* Admin line */}
                    <div className="flex justify-between">
                      <div className='flex'>
                        <div className='w-[40px] h-[40px] me-[10px] rounded-[50%]'>
                          <img src={r1} alt="" className='w-full h-full'/>
                        </div>
                        <div className='text-[14px]'>
                          <p>Admin</p>
                          <p>May 23, 2023 . 1 min read</p>
                        </div>
                      </div>
                      {/* right side menu */}
                      <div>:</div>
                    </div>

                    <div>
                      <h2 className='uppercase py-[20px] text-[26px]'>{v.title}</h2>
                      <p>{v.para}</p>
                    </div>
                    {/* hr right side bottom line */}
                    <div className='sm:absolute pt-[40px] left-[20px] right-[20px] bottom-[0px]'>
                        <hr className='text-[gray]' />
                        <div className='flex justify-between py-[20px]'>
                          <div className='flex text-[12px]'>
                            <p className='pe-[20px]'>6 views</p>
                            <p>0 comments</p>
                          </div>
                          <div>
                            ❤️
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog
