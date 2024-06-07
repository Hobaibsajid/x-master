import React from "react";
import Nav from '../components/Common/Nav'
import { Link } from 'react-router-dom';
import build from '../assets/images/Image 3.png'
import Foot from '../components/Common/Foot';

export default function About() {
  return (
    <main className="h-screen w-full">
      <Nav />
      <div className="grid grid-cols-2 pl-20 py-8 my-10 mx-12 bg-[#f6db5a1a] rounded-xl">
        <div>
          <h1 className="text-black text-[32px] font-extrabold font-[cooper]">About</h1>
          <br />
          <br />
          <h3 className="font-[gabriola]">Fateh Al Mustaqbil is a one-of-a-kind travel agency designed to cater to the interests of travelers across the globe, founded in 2023 in Riyadh, Saudi Arabia. Our expertise lies in crafting exceptional journeys tailored to each client's unique requirements, whether it be ticketing, hotel bookings, or visa assistance. With competitive pricing and access to superior consulting services, we have become the favored choice among travelers. Fateh Al Mustaqbil plays a pivotal role in shaping the landscape of travel and tour services not only within the Kingdom of Saudi Arabia but also on a global scale.</h3>
          <br />
          <h3 className="font-[gabriola]">Welcome to Fateh Al Mustaqbil, where we advocate exploring the world one adventure at a time. Come, be a part of this remarkable journey, and together, let's craft experiences that transcend time and place.</h3>
        </div>
        <div className="">
          <img className='h-[450px] w-[400px] pl-32' src={build} alt="" />
        </div>
      </div>
      <Foot />
    </main>
  )
}
