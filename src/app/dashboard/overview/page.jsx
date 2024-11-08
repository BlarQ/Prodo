import Image from 'next/image';
import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import OverviewPage from './components/OverviewPage';

const Page = () => {
  return (
    <div className='bg-[#F5F5F7]'>
      <div className='flex items-start justify-between p-8 '>
        <div className='text-xl font-semibold'>
          <h1 className='font-serif'>Hi, [Name]</h1>

          <p className='text-base text-gray-400'>Welcome to your prodo dashboard!</p>
        </div>

        <div className='flex items-center justify-between gap-3'>
          <div className='p-[0.6rem] border rounded-full cursor-pointer text-gray-400 hover:text-[#141522] duration-300'>

            <IoMdNotificationsOutline className='text-3xl' />
          </div>
          <div className='rounded-full'>
            <Image 
            className='rounded-full'
            src={'/userProfile1.jpg'} width={52} height={52} alt='User Picture' />
          </div>
        </div>
      </div>

      <OverviewPage />
    </div>
  )
}

export default Page