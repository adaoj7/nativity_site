import React from 'react'
import NativityLogo from '../components/Elements/NativityLogo'
import AboutImage from '../assets/MTCNav.jpg'

const About = () => {
  return (
    <>
    <div className='mt-24 flex items-center flex-col'>
      <h1 className='font-bold text-2xl'>About Us and Our Mission</h1>
      <div className='flex flex-row'>
      <img src={AboutImage} className='h-96 m-10'/>
      <div className='w-[400px] p-4 mx-12 flex items-center flex-col justify-center'>
        <p className='py-4'>
          The Community Area Festival of Nativities began in 2016 as an attempt to gather those with a love of Christ across denominations during the Christmas holiday. Originally spearheaded by the Church of Jesus Christ of Latter Day Saints and the Sisters of St. Francis of the Immaculate Conception the festival has grown to host more than 1000 nativities and hundreds of volunteers.
        </p>
        <p className='py-4'>
          As it has grown, those who are involved have grown closer to the Savior and to the joy of giving that comes during the Christmas season. 
        </p>
      </div>
      </div>
    </div>
    </>
  )
}

export default About