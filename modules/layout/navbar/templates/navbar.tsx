import React from 'react'
import Links from '../components/Links'

const Navbar = () => {
  return (
    <div className='w-full h-10 bg-white border-b'>
        <div className='w-[90vw] h-full'>
            <div className='grid grid-cols-3 gap-10 place-content-center'>
                <div></div>
                <div className=''><Links/></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar