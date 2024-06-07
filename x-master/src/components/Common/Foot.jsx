import React from 'react'
import { Link } from 'react-router-dom'
import logo2 from '../../assets/images/kogo.png'
import fb from '../../assets/images/facebook.png'
import ld from '../../assets/images/linkedin.png'
import x from '../../assets/images/x.png'

export default function Foot() {
    return (
        <footer className='flex bg-black h-[420px] rounded-xl'>
            <div className="w-full mx-[45%] my-[3%] flex">
            <img className='w-[160px] h-[128px]' src={logo2} alt="" />
          <div class="items-center flex mx-[-60%] gap-10 text-white">
            
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            
         </div>
         <div className=" bg-white  flex my-[60%] mx-[11%] justify-between gap-4">
            <h1 className="text-white " ><img src={fb} alt="" /></h1>
            <h1 className="text-white "><img src={ld} alt="" /></h1>
            <h1 className="text-white"><img src={x} alt="" /></h1>
            
           </div>
           <div className="my-[85%] flex mx-[-46%]">
            <h6 className="text-slate-600">All right reserved for 2023</h6>
           </div>
           </div>
        </footer>
    )

}