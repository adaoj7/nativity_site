import React from 'react'
import Background from "../assets/107 , Fall Family Showcase 2018-19 -3.jpg"
import MobileBackground from '../assets/107 , Fall Family Showcase 2018-19 - mobile.jpg'
import Logo from '../assets/CFN White-01.png'

const Home = () => {

  return (
    <div>
      <div className=''>
      <div className='desktop:hidden phone:flex phone:relative top-0'>
        <img src={MobileBackground} className='z-0'/>
        {/* <img src="src\assets\CFN-White-Shadow-01.svg" className= 'invert absolute z-11 left-[40px] h-[120px] w-[180px] border-2 border-transparent'/> */}
      </div>

      <div className='hidden desktop:flex desktop:relative top-0 desktop:'>
        <img src={Background}/>
        <img src={Logo} className='absolute top-1/2 right-44 h-1/4 w-1/3'/>
      </div>
      </div>

      <div >
        <div className='relative'>More text goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores facilis maxime, expedita possimus hic illum magnam, vero modi veritatis, ducimus necessitatibus dicta reiciendis at fugiat veniam. Explicabo, unde accusamus! Qui sit quas adipisci, natus possimus quidem magnam sint dolorem a ipsum perferendis beatae odit asperiores itaque ipsa. Optio numquam maiores molestias accusantium eveniet quasi fugit quae consequatur. Voluptatum quod delectus maxime ratione ducimus itaque? Incidunt dolores officia obcaecati, harum ullam quas, consectetur aspernatur magni pariatur aliquid impedit velit ipsam possimus, nostrum cumque temporibus! Praesentium, voluptates dignissimos maxime quasi incidunt dolores! Temporibus, quisquam voluptates. Recusandae maxime labore quia facere est.</div>
      </div>
      
    </div>
  )
}

export default Home