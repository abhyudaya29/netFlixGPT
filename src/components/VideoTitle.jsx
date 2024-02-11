/* eslint-disable react/prop-types */
import { Button } from 'antd'
// import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <>
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-26 absolute text-white bg-gradient-to-r from-black'>
    <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
    <p className='hidden md:inline-block py-6 w-1/2'>{overview}</p>
    <div className='my-6 md:my-0'>
        <Button className='bg-white text-white-30 bg-opacity-50 rounded-lg mx-2 hover:opacity-20'>▶️Play Movie</Button>
        <Button className='bg-gray-500 text-white-30 bg-opacity-50 rounded-lg'>More Info Button</Button>
    </div>
    </div>
    </>
  )
}

export default VideoTitle