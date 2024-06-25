import { faHamburger } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import AaharVedaHoriz from '../../assets/AaharVeda_Horiz.png';
import AaharVedaVerti from '../../assets/AaharVeda_Verti.png';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
    return (
        <header className="mb-2 px-4 w-full shadow">
            <div className="transition-all relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a className="relative -top-1 flex items-center text-2xl font-black" href="/">
                    <img src={AaharVedaHoriz} alt="AaharVeda" className='sm:w-40 w-[135px]' />
                    {/* <span className='text-primetext'>Aahar<span className='text-primary'>Veda</span></span> */}
                </a>
                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label className="absolute h-max block peer-checked:hidden right-2 -translate-y-[50%] top-[50%] cursor-pointer text-xl sm:hidden" for="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <FontAwesomeIcon className='text-primetext' icon={faHamburger}></FontAwesomeIcon>
                </label>
                <label className="absolute h-max hidden peer-checked:block right-2 peer-checked:top-[10%] cursor-pointer text-xl sm:hidden sm:peer-checked:hidden" for="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <FontAwesomeIcon className='text-red-500' icon={faCircleXmark}></FontAwesomeIcon>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
                    <ul className="flex flex-col items-start sm:items-center gap-y-4 sm:flex-row sm:gap-x-8">
                        <li className=""><a className="text-primetext hover:text-primary" href="#">Home</a></li>
                        <li className=""><a className="text-primetext hover:text-primary" href="#">Features</a></li>
                        <li className=""><a className="text-primetext hover:text-primary" href="#">How it works?</a></li>
                        {/* <li className="mt-2 sm:mt-0"><a className="rounded-full border-[1px] border-primary px-6 py-1 font-medium text-primary hover:bg-primary hover:text-white sm:flex sm:items-center shadow transition-colors ease-in-out" href="#">Sign In</a></li> */}
                    </ul>
                </nav>
            </div>
        </header>
    )
}
