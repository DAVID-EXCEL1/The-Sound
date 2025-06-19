import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-16 py-4 bg-[#ffffff] shadow-md">
            <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
                <span className="text-xl font-bold">TheSound</span>
            </div>


            <ul className=''>
                <li className='inline-block ml-20'>
                    <Link href="/" className="hover:text-blue-500 font-medium">
                        Home
                    </Link>
                </li>
                <li className='inline-block ml-20'>
                    <Link href="/about" className="hover:text-blue-500 font-medium">
                        About
                    </Link>
                </li>
                <li className='inline-block ml-20'>
                    <Link href="/service" className="hover:text-blue-500 font-medium">
                        Services
                    </Link>
                </li>
                <li className='inline-block ml-20'>
                    <Link href="/contact" className="hover:text-blue-500 font-medium">
                        Contact
                    </Link>
                </li>
            </ul>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition">
                Listen Now
            </button>
        </nav>
    )
}

export default Navbar
