import React from 'react'
import r1 from '../../../public/sub31.jpg'
import r2 from '../../../public/sub32.jpg'
import r3 from '../../../public/sub33.jpg'
import r4 from '../../../public/sub34.jpg'
import Header from '../../Comman/Header'
import Footer from '../../Comman/Footer'

const SubBaked = () => {
    return (
        <>
            <Header />
            <div className="container mx-auto sm:pt-[100px]">
                <h1 className='sm:text-[52px] text-[32px]  text-center pb-[20px] sm:pb-[50px] '>BAKED GOODS</h1>
                <div className='flex gap-1.5 flex-col sm:flex-row'>
                    <div className="sm:w-[40%] flex gap-1.5 flex-col sm:flex-row flex-wrap justify-center">
                        <div className="flex gap-1.5">
                            <div className="w-[50%]  overflow-hidden ">
                                <img src={r1} alt="" className='  w-full h-full hover:scale-[1.15] duration-[500ms]' />
                            </div>
                            <div className="w-[50%]   overflow-hidden">
                                <img src={r2} alt="" className='w-full hover:scale-[1.15] duration-[500ms]' />
                            </div>
                        </div>
                        <div className="w-[100%]  overflow-hidden ">
                            <img src={r3} alt="" className='w-full hover:scale-[1.05] duration-[500ms]' />
                        </div>
                    </div>
                    <div className="sm:w-[60%] overflow-hidden ">
                        <img src={r4} alt="" className='w-full hover:scale-[1.05] duration-[500ms]' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default SubBaked
