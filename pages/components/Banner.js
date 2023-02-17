import React from 'react'
import Image from "next/legacy/image";

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image
        src='https://prod-virtuoso.dotcmscloud.com/dA/188da7ea-f44f-4b9c-92f9-6a65064021c1/previewImage/PowerfulReasons_hero.jpg'
        alt='banner img'
        layout='fill'
        
        />
        <div className='absolute top-1/2 w-full text-center font-semibold'>
            <p className='text-md sm:text-lg'>Not sure where to go? Perfect.</p>
            <button className='text-red-500 bg-white px-10 py-4 shadow-lg rounded-full font-bold my-3
            hover:shadow-xl active:scale-90 transition duration-150'>I&apos;m flexible</button>
        </div>

    </div>
  )
}

export default Banner