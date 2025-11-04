import React from 'react'
import Header from '../../Comman/Header'
import Footer from '../../Comman/Footer'
import { useLocation } from 'react-router-dom'
import {portfolioData} from "../portsub/PortfolioData"
const SubPortfolio = () => {
    let location = useLocation();

    let currentLocation = Number(location.pathname.split('/')[2]);

    let data = portfolioData.find((i)=> currentLocation === i.id )
    return (
        <>
            <Header />
            {currentLocation === 0 || currentLocation === 2? (<>
                <div className="container mx-auto sm:pt-[100px]">
                    <h1 className='sm:text-[52px] text-[32px]  text-center pb-[20px] sm:pb-[50px]'>{data.title}</h1>
                    <div className='flex gap-2 flex-col sm:flex-row'>
                        <div className="sm:w-[40%] flex gap-2 flex-col sm:flex-row flex-wrap justify-center">
                            <div className="flex gap-2">
                                <div className="w-[50%]  overflow-hidden ">
                                    <img src={data.img1} alt="" className='  w-full hover:scale-[1.15] h-full duration-[500ms]' />
                                </div>
                                <div className="w-[50%]   overflow-hidden">
                                    <img src={data.img2} alt="" className='w-full hover:scale-[1.15] duration-[500ms]' />
                                </div>
                            </div>
                            <div className="w-[100%]  overflow-hidden ">
                                <img src={data.img3} alt="" className='w-full hover:scale-[1.05] duration-[500ms]' />
                            </div>
                        </div>
                        <div className="sm:w-[60%] overflow-hidden ">
                            <img src={data.img4} alt="" className='w-full hover:scale-[1.05] duration-[500ms]' />
                        </div>
                    </div>
                </div>
            </>) : (<>
                <div className="container mx-auto sm:pt-[100px]">
                    <h1 className='sm:text-[52px] text-[32px] text-center pb-[20px] sm:pb-[50px] '>FOOD & SERVE </h1>
                    <div className='flex gap-1.5 flex-col sm:flex-row'>
                        <div className="sm:w-[55%] flex gap-1.5 flex-wrap justify-center">
                            <div className="flex gap-1.5">
                                <div className="w-[60%]  overflow-hidden ">
                                    <img src={data.img1} alt="" className='  w-full h-full hover:scale-[1.15] duration-[500ms]' />
                                </div>
                                <div className="w-[40%]   overflow-hidden">
                                    <img src={data.img2} alt="" className='w-full hover:scale-[1.15] duration-[500ms]' />
                                </div>
                            </div>
                            <div className="w-[100%]  overflow-hidden ">
                                <img src={data.img4} alt="" className='w-full hover:scale-[1.05] duration-[500ms]' />
                            </div>
                        </div>
                        <div className="sm:w-[45%] overflow-hidden ">
                            <div className="flex flex-col gap-1.5">
                                <div className="w-[100%]  overflow-hidden ">
                                    <img src={data.img3} alt="" className='w-full hover:scale-[1.05] duration-[500ms]' />
                                </div>
                                <div className="w-[100%]  overflow-hidden ">
                                    <img src={data.img5} alt="" className='w-full  hover:scale-[1.05] duration-[500ms]' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>)}
            <Footer />
        </>
    )
}

export default SubPortfolio
