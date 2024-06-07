import React, { Fragment } from 'react'
import MyCard from '../components/Common/MyCard';
import { Link } from 'react-router-dom';
import Nav from '../components/Common/Nav';
import Foot from '../components/Common/Foot';

import phone from '../assets/images/phone.png'
import map from '../assets/images/map-pin.png'
import colors from '../assets/images/color.png'
import image from '../assets/images/Group 6850.png'
import plane from '../assets/images/flight.png'
import icon1 from '../assets/images/Union 1.png'
import booking from '../assets/images/book.png'
import icon2 from '../assets/images/Union 10.png'
import visa from '../assets/images/visa.png'
import icon3 from '../assets/images/union2.png'
import li from '../assets/images/licc.png'
import icon4 from '../assets/images/Union 3.png'
import air from '../assets/images/airport.png'
import icon5 from '../assets/images/Union 4.png'
import maid from '../assets/images/maid.png'
import icon6 from '../assets/images/Union 5.png'
import tour from '../assets/images/travel.png'
import icon7 from '../assets/images/Union 6.png'
import umra from '../assets/images/umrah.png'
import icon8 from '../assets/images/Union 7.png'
import logo2 from '../assets/images/kogo.png'


export default function Home() {


    return (
        <main className='h-screen w-full'>
            <div className='flex p-1 bg-gradient-to-r from-[#F6DB5A] to-[#BD9C00] ... justify-between'>
                <div className='w-full pl-[50%] flex gap-10'>
                <img className='' src={phone} alt="" />
                <h5 className='text-white '>+966 424 424 12</h5>
                <h1 className='text-white'>|</h1>
                <img src={map} alt="" />
                    <h5 className='text-white'>Al Noor Industrial area, Riyadh</h5>
                </div>
            </div>

            <Nav />

            <div className='w-full h-[300px]  flex bg-gradient-to-r from-[#BD9C00] to-[#F6DB5A00]'>
        
                <div className='bg-gradeint  w-[35%]'>
            
                <h1 className='text-black mx-[5%] my-[9%] font-cooper font-black text-4xl flex text-center leading-tight'>Your Gateway to <br/> World Adventure</h1>
        
                </div>
                <div className='h-[300px]'>
                    <img src={image} alt="" />
                </div>
               
            </div>


            <div className='mt-10 flex gap-10 flex-wrap ml-10'>
                <div className='relative flex'>
                    <img src={plane} alt="" />

                    <div className='text-center flex justify-center items-end leading-5 opacity-80 absolute w-[100%] rounded-xl bg-gradient-to-t from-[#BD9C00] to-[#00162499] text-1xl h-full hover:opacity-0 duration-500'>
                        <h5 className='text-[#FFFFFF] font-serif mb-2'>International And <br />Domestic Flight Ticket </h5>
                        <img className='absolute z-59 top-3 left-24 w-16' src={icon1} alt="" />
                    </div>
                </div>

                <div className='relative flex'>
                    <img src={booking} alt="" />

                    <div className='text-center flex justify-center items-end leading-5 opacity-80 absolute w-[100%] rounded-xl bg-gradient-to-t from-[#BD9C00] to-[#00162499] text-1xl h-full hover:opacity-0 duration-500'>
                        <h5 className='text-[#FFFFFF] font-serif mb-2'>Hotel Reservation <br />WorldWide </h5>
                        <img className='absolute z-59 top-3 left-24 w-16' src={icon2} alt="" />
                    </div>
                </div>

                <div className='relative flex'>
                    <img src={visa} alt="" />

                    <div className='text-center flex justify-center items-end leading-5 opacity-80 absolute w-[100%] rounded-xl bg-gradient-to-t from-[#BD9C00] to-[#00162499] text-1xl h-full hover:opacity-0 duration-500'>
                        <h5 className='text-[#FFFFFF] font-serif mb-2'>Visa <br />Services </h5>
                        <img className='absolute z-59 top-3 left-24 w-16' src={icon3} alt="" />
                    </div>
                </div>

                <div className='relative flex'>
                    <img src={li} alt="" />

                    <div className='text-center flex justify-center items-end leading-5 opacity-80 absolute w-[100%] rounded-xl bg-gradient-to-t from-[#BD9C00] to-[#00162499] text-1xl h-full hover:opacity-0 duration-500'>
                        <h5 className='text-[#FFFFFF] font-serif mb-2'>International <br />Driving Licesnse </h5>
                        <img className='absolute z-59 top-3 left-24 w-16' src={icon4} alt="" />
                    </div>
                </div>

                <div className='relative flex'>
                    <img src={air} alt="" />

                    <div className='text-center flex justify-center items-end leading-5 opacity-80 absolute w-[100%] rounded-xl bg-gradient-to-t from-[#BD9C00] to-[#00162499] text-1xl h-full hover:opacity-0 duration-500'>
                        <h5 className='text-[#FFFFFF] font-serif mb-2'>Airport VIP Service <br />(Meet & Greet) </h5>
                        <img className='absolute z-59 top-3 left-24 w-16' src={icon5} alt="" />
                    </div>
                </div>

                <div className='relative flex'>
                    <img src={maid} alt="" />

                    <div className='text-center flex justify-center items-end leading-5 opacity-80 absolute w-[100%] rounded-xl bg-gradient-to-t from-[#BD9C00] to-[#00162499] text-1xl h-full hover:opacity-0 duration-500'>
                        <h5 className='text-[#FFFFFF] font-serif mb-2'>House Maid <br />Transportation </h5>
                        <img className='absolute z-59 top-3 left-24 w-16' src={icon6} alt="" />
                    </div>
                </div>

                <div className='relative flex'>
                    <img src={tour} alt="" />

                    <div className='text-center flex justify-center items-end leading-5 opacity-80 absolute w-[100%] rounded-xl bg-gradient-to-t from-[#BD9C00] to-[#00162499] text-1xl h-full hover:opacity-0 duration-500'>
                        <h5 className='text-[#FFFFFF] font-serif mb-2'>Tourism <br />Package </h5>
                        <img className='absolute z-59 top-3 left-24 w-16' src={icon7} alt="" />
                    </div>
                </div>

                <div className='relative flex'>
                    <img src={umra} alt="" />

                    <div className='text-center flex justify-center items-end leading-5 opacity-80 absolute w-[100%] rounded-xl bg-gradient-to-t from-[#BD9C00] to-[#00162499] text-1xl h-full hover:opacity-0 duration-500'>
                        <h5 className='text-[#FFFFFF] font-serif mb-2'>Umrah & Ziyara <br />Services </h5>
                        <img className='absolute z-59 top-3 left-24 w-16' src={icon8} alt="" />
                    </div>
                </div>
               
            </div>
            <br />

            <Foot />
        </main>
    )
        

}
