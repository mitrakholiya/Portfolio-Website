import React from 'react'
import r1 from '../../../public/sub21.jpg'
import r2 from '../../../public/sub22.jpg'
import r3 from '../../../public/sub23.jpg'
import r4 from '../../../public/sub24.jpg'
import r5 from '../../../public/sub25.jpg'
import Header from '../../Comman/Header'
import Footer from '../../Comman/Footer'


const SubFood = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto sm:pt-[100px]">
                <h1 className='sm:text-[52px] text-[32px] text-center pb-[20px] sm:pb-[50px] '>FOOD & SERVE </h1>
                <div className='flex gap-1.5 flex-col sm:flex-row'>
                    <div className="sm:w-[55%] flex gap-1.5 flex-wrap justify-center">
                        <div className="flex gap-1.5">
                            <div className="w-[60%]  overflow-hidden ">
                                <img src={r1} alt="" className='  w-full h-full hover:scale-[1.15] duration-[500ms]' />
                            </div>
                            <div className="w-[40%]   overflow-hidden">
                                <img src={r2} alt="" className='w-full hover:scale-[1.15] duration-[500ms]' />
                            </div>
                        </div>
                        <div className="w-[100%]  overflow-hidden ">
                            <img src={r4} alt="" className='w-full hover:scale-[1.05] duration-[500ms]' />
                        </div>
                    </div>
                    <div className="sm:w-[45%] overflow-hidden ">
                        <div className="flex flex-col gap-1.5">
                            <div className="w-[100%]  overflow-hidden ">
                                <img src={r3} alt="" className='w-full hover:scale-[1.05] duration-[500ms]' />
                            </div>
                            <div className="w-[100%]  overflow-hidden ">
                                <img src={r5} alt="" className='w-full hover:scale-[1.05] duration-[500ms]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SubFood
