import React from 'react'
import Image from "next/legacy/image";

const MediumCard = ({img, title}) => {
  return (
    <div className='hover-pointer hover:scale-105 transition transform duration-300 ease-out'>
        <div className='relative h-80 w-80'>
            <Image src={img} layout='fill' alt='img'className='rounded-xl'/>
        </div>
        <h3 className='text-2xl mt-3'>{title}</h3>
    </div>
  )
}

export default MediumCard