import React from 'react'
import f1 from '../../public/foot1.avif'
import f2 from '../../public/foot2.avif'
import f3 from '../../public/foot3.avif'
import f4 from '../../public/foot4.avif'

const Footer = () => {
    return (
        <>
            <div className="container lg:px-[10%] mx-auto py-[30px]">
                <div className='flex flex-col items-center'>
                    <div className='flex pb-[10px]'>
                        <img src={f1} alt="" className='w-[30px] object-contain' />
                        <img src={f2} alt="" className='w-[30px] object-contain' />
                        <img src={f3} alt="" className='w-[30px] object-contain' />
                        <img src={f4} alt="" className='w-[30px] object-contain' />
                    </div>
                    <p className='text-center'>&copy; 2035 by The Art of Food. Powered and secured by Mit</p>
                </div>
            </div>
        </>
    )
}

export default Footer
