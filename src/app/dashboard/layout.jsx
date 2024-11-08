import React from 'react'
import MenuBar from './components/MenuBar'

const layout = ({children}) => {
  return (
    <div className='grid grid-cols-[17%_83%]'>
        <MenuBar />
        {children}
    </div>
  )
}

export default layout