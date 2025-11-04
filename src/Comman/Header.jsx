import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    let [show, setShow] = useState(false)
    return (
        <div className='py-[30px] sm:px-[10%] px-[5%] sm:fixed top-0 w-full z-90 bg-[white]'>
            <div className="flex justify-between items-center">
                <h1 className='text-[32px] font-light'>J . A L I S S A</h1>
                {/* Sm display block code */}
                <div className='sm:w-[50%] sm:block hidden'>
                    <ul className='flex justify-between'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/books">Books</Link>
                        </li>
                        <li>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/client">Client Albums</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* sm:display hidden code */}
                <div className='sm:w-[50%] sm:hidden block z-40'>
                    <button onClick={() => setShow(!show)} className='text-[30px]'>☰</button>
                    {show ? (<>
                        <div className='fixed inset-0 bg-[#00000038] w-full h-screen '>
                            <div className="flex h-full">
                                <div className='w-[20%] h-screen'></div>
                                <ul className='w-[80%] h-screen bg-white flex flex-col items-center justify-evenly text-[22px]'>
                                    <div className='flex justify-end w-full pe-[30px] pt-[15px]'> 
                                        <button onClick={() => setShow(!show)} className='text-[30px] '>✖</button>
                                    </div>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/Portfolio">Portfolio</Link>
                                    </li>
                                    <li>
                                        <Link to="/About">About</Link>
                                    </li>
                                    <li>
                                        <Link to="/Books">Books</Link>
                                    </li>
                                    <li>
                                        <Link to="/Blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="/Client">Client Albums</Link>
                                    </li>
                                    <li>
                                        <Link to="/Contact">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </>) :
                        ""}
                </div>
            </div>
        </div>
    )
}

export default Header
