import React from 'react'
import Nav from '../components/Common/Nav'
import { Link } from 'react-router-dom'
import Foot from '../components/Common/Foot';

import plane from '../assets/images/tick.png'
import img1 from '../assets/images/image1.png'
import img2 from '../assets/images/image2.png'
import img3 from '../assets/images/image3.png'
import img4 from '../assets/images/image4.png'
import img5 from '../assets/images/image5.png'
import img6 from '../assets/images/image6.png'
import img7 from '../assets/images/image7.png'

export default function Services() {
    return (
        <main className='bg-[#f6db5a1a] h-full w-full'>
            <Nav />
            <div className='flex flex-col justify-center text-center my-14 px-10 '>
                <h1 className='text-black text-[40px] font-extrabold font-[cooper]'>Services by FATEH</h1>
                <br />
                <h3 className='text-[#515151] text-[25px] font-[gabriola] px-[215px]'>Elevate your travel experience with our comprehensive and efficient solutions. We leverage a wide range of travel services, all aimed at making your travel journey smooth and enjoyable.</h3>
            </div>

            <div className=' grid grid-cols-2 pl-20 my-20'>
                <div>
                    <img className='w-[500px] h-[500px]' src={plane} alt="" />
                </div>
                <div className='pr-20'>
                    <h1 className='text-[#BD9C0080] font-[General Sans] text-[68px]'>01</h1>
                    <br />
                    <h1 className='text-black font-[cooper] text-[40px] font-extrabold'>International And Domestic Flight Tickets</h1>
                    <h3 className='text-[#182F43] font-[gabriola] text-[20px]'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</h3>
                    <br />
                    <button className='text-white font-[gabriola] bg-[#BD9C00] rounded-lg w-24 border-r-2'>Get Started</button>
                </div>
                <br />
            </div>

            <div className=' grid grid-cols-2 pl-20 my-20'>
                <div className='pr-20'>
                    <h1 className='text-[#BD9C0080] font-[General Sans] text-[68px]'>02</h1>
                    <br />
                    <h1 className='text-black font-[cooper] text-[40px] font-extrabold'>Hotel Reservation World Wide</h1>
                    <h3 className='text-[#182F43] font-[gabriola] text-[20px]'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</h3>
                    <br />
                    <button className='text-white font-[gabriola] bg-[#BD9C00] rounded-lg w-24 border-r-2'>Get Started</button>
                </div>
                <div>
                    <img className='w-[500px] h-[500px]' src={img1} alt="" />
                </div>
                <br />
            </div>

            <div className=' grid grid-cols-2 pl-20 my-20'>
                <div>
                    <img className='w-[500px] h-[500px]' src={img2} alt="" />
                </div>
                <div className='pr-20'>
                    <h1 className='text-[#BD9C0080] font-[General Sans] text-[68px]'>03</h1>
                    <br />
                    <h1 className='text-black font-[cooper] text-[40px] font-extrabold'>Visa Services</h1>
                    <h3 className='text-[#182F43] font-[gabriola] text-[20px]'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</h3>
                    <br />
                    <button className='text-white font-[gabriola] bg-[#BD9C00] rounded-lg w-24 border-r-2'>Get Started</button>
                </div>
                <br />
                </div>

                <div className=' grid grid-cols-2 pl-20 my-20'>
                <div className='pr-20'>
                    <h1 className='text-[#BD9C0080] font-[General Sans] text-[68px]'>04</h1>
                    <br />
                    <h1 className='text-black font-[cooper] text-[40px] font-extrabold'>International Driving License</h1>
                    <h3 className='text-[#182F43] font-[gabriola] text-[20px]'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</h3>
                    <br />
                    <button className='text-white font-[gabriola] bg-[#BD9C00] rounded-lg w-24 border-r-2'>Get Started</button>
                </div>
                <div>
                    <img className='w-[500px] h-[500px]' src={img3} alt="" />
                </div>
                <br />
            </div>

            <div className=' grid grid-cols-2 pl-20 my-20'>
                <div>
                    <img className='w-[500px] h-[500px]' src={img4} alt="" />
                </div>
                <div className='pr-20'>
                    <h1 className='text-[#BD9C0080] font-[General Sans] text-[68px]'>05</h1>
                    <br />
                    <h1 className='text-black font-[cooper] text-[40px] font-extrabold'>Airport VIP Service (Meet & Greet)</h1>
                    <h3 className='text-[#182F43] font-[gabriola] text-[20px]'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</h3>
                    <br />
                    <button className='text-white font-[gabriola] bg-[#BD9C00] rounded-lg w-24 border-r-2'>Get Started</button>
                </div>
                <br />
                </div>

                <div className=' grid grid-cols-2 pl-20 my-20'>
                <div className='pr-20'>
                    <h1 className='text-[#BD9C0080] font-[General Sans] text-[68px]'>06</h1>
                    <br />
                    <h1 className='text-black font-[cooper] text-[40px] font-extrabold'>House Maid Transportation</h1>
                    <h3 className='text-[#182F43] font-[gabriola] text-[20px]'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</h3>
                    <br />
                    <button className='text-white font-[gabriola] bg-[#BD9C00] rounded-lg w-24 border-r-2'>Get Started</button>
                </div>
                <div>
                    <img className='w-[500px] h-[500px]' src={img5} alt="" />
                </div>
                <br />
            </div>

            <div className=' grid grid-cols-2 pl-20 my-20'>
                <div>
                    <img className='w-[500px] h-[500px]' src={img6} alt="" />
                </div>
                <div className='pr-20'>
                    <h1 className='text-[#BD9C0080] font-[General Sans] text-[68px]'>07</h1>
                    <br />
                    <h1 className='text-black font-[cooper] text-[40px] font-extrabold'>Tourism Packages</h1>
                    <h3 className='text-[#182F43] font-[gabriola] text-[20px]'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</h3>
                    <br />
                    <button className='text-white font-[gabriola] bg-[#BD9C00] rounded-lg w-24 border-r-2'>Get Started</button>
                </div>
                <br />
                </div>

                <div className=' grid grid-cols-2 pl-20 my-20'>
                <div className='pr-20'>
                    <h1 className='text-[#BD9C0080] font-[General Sans] text-[68px]'>08</h1>
                    <br />
                    <h1 className='text-black font-[cooper] text-[40px] font-extrabold'>Umrah & Ziyara  Services</h1>
                    <h3 className='text-[#182F43] font-[gabriola] text-[20px]'>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id dui posuere blandit. Pellentesque in ipsum id orci porta dapibus. Cras ultricies ligula sed magna dictum porta.</h3>
                    <br />
                    <button className='text-white font-[gabriola] bg-[#BD9C00] rounded-lg w-24 border-r-2'>Get Started</button>
                </div>
                <div>
                    <img className='w-[500px] h-[500px]' src={img7} alt="" />
                </div>
                <br />
            </div>
            <Foot />

        </main>
    )
}
