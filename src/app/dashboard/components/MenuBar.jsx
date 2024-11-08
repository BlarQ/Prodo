import Link from 'next/link';
import React from 'react'
import { PiBriefcaseFill } from "react-icons/pi";
import { 
RiBookOpenLine, 
RiMenuSearchLine, 
RiMessage3Line, 
RiSettings3Line, 
RiShieldUserLine } 
from "react-icons/ri";

const menu = [
    { id: 1, name: 'Overview', icon: <RiMenuSearchLine />, link: '/dashboard/overview' },
    { id: 2, name: 'Task', icon: <RiBookOpenLine />, link: '/dashboard/task' },
    { id: 3, name: 'Mentors', icon: <RiShieldUserLine />, link: '/mentors' },
    { id: 4, name: 'Message', icon: <RiMessage3Line />, link: '/message' },
    { id: 5, name: 'Settings', icon: <RiSettings3Line />, link: '/settings' },
]

const MenuBar = () => {
  return (
    <section className='w-[15em] py-8 flex flex-col gap-16 justify-start items-center bg-white min-h-[100vh] shadow'>
        <Link href={'/dashboard'} className='flex justify-center items-center gap-2'>
            <PiBriefcaseFill className='text-[#546FFF] text-3xl' />

            <h1 className='text-xl font-serif font-semibold text-[#141522]'>PRODO</h1>
        </Link>

        <div className=' flex flex-col gap-3'>
            {
                menu.map((item) => {
                    return (
                        <Link key={item.id} href={item.link} className='flex items-center px-4 py-2 justify-start gap-2 hover:bg-[#F5F5F7] rounded font-semibold text-[#8E92BC] duration-300 ease-in-out focus:text-[#141522] focus:bg-[#f5f5f7]'>
                            <span className='text-xl'>

                                {item.icon}
                            </span>

                            <span>

                                {item.name}
                            </span>
                        </Link>
                    )
                })
            }
        </div>
    </section>
  )
}

export default MenuBar