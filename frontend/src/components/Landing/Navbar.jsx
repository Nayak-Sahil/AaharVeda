import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Navbar() {
    return (
        <header className="mb-2 px-4 shadow">
            <div className="relative mx-auto flex max-w-screen-lg flex-col py-4 sm:flex-row sm:items-center sm:justify-between">
                <a className="flex items-center text-2xl font-black" href="/">
                    <span className='text-gray-600'>Aahar<span className='text-primary'>Veda</span></span>
                </a>
                <input className="peer hidden" type="checkbox" id="navbar-open" />
                <label className="absolute right-0 mt-1 cursor-pointer text-xl sm:hidden" for="navbar-open">
                    <span className="sr-only">Toggle Navigation</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zm448 160c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h384c17.7 0 32 14.3 32 32z" /></svg>
                </label>
                <nav aria-label="Header Navigation" className="peer-checked:block hidden pl-2 py-6 sm:block sm:py-0">
                    <ul className="flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-8">
                        <li className=""><a className="text-gray-600 hover:text-primary" href="#">Home</a></li>
                        <li className=""><a className="text-gray-600 hover:text-primary" href="#">Features</a></li>
                        <li className=""><a className="text-gray-600 hover:text-primary" href="#">How it works?</a></li>
                        <li className="mt-2 sm:mt-0"><a className="rounded-full border-[1px] border-primary px-6 py-1 font-medium text-primary hover:bg-primary hover:text-white sm:flex sm:items-center shadow transition-colors ease-in-out" href="#">Sign In</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
