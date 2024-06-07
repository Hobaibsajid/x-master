import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/FATEH LOGO.png'

export default function Nav() {
    return (
        <header className='flex bg-white mx-[2%] justify-between p-6 h-20 rounded-xl border-2'>
            <div><img className='' src={logo} alt="img" /></div>
            <div className='flex w-[30%] justify-between font-semibold'>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </header>
    )
}
