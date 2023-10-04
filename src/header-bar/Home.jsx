import React from 'react'

const Home = () => {

  return (
    <div>
      <div className=''>
      <div className='desktop:hidden phone:flex phone:relative top-0 phone:z--1000'>
        <img src="src\assets\mobile-background-1.jpg" className='z--1000'/>
        <img src="src\assets\CFN-White-Shadow-01.svg" className= 'invert phone:absolute phone:top-12 phone:right-1/3 phone:h-40 phone:w-60 border-2 border-transparent'/>
      </div>

      <div className='hidden desktop:flex desktop:relative top-0 desktop:z--10'>
        <img src="src\assets\107 , Fall Family Showcase 2018-19 -3.jpg "/>
        <img src="src\assets\CFN White-01.png" className='desktop:absolute desktop:top-1/2 desktop:right-44 desktop:h-1/4 desktop:w-1/3'/>
      </div>
      </div>

      <div >
        <div className='relative'>More text goes here Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores facilis maxime, expedita possimus hic illum magnam, vero modi veritatis, ducimus necessitatibus dicta reiciendis at fugiat veniam. Explicabo, unde accusamus! Qui sit quas adipisci, natus possimus quidem magnam sint dolorem a ipsum perferendis beatae odit asperiores itaque ipsa. Optio numquam maiores molestias accusantium eveniet quasi fugit quae consequatur. Voluptatum quod delectus maxime ratione ducimus itaque? Incidunt dolores officia obcaecati, harum ullam quas, consectetur aspernatur magni pariatur aliquid impedit velit ipsam possimus, nostrum cumque temporibus! Praesentium, voluptates dignissimos maxime quasi incidunt dolores! Temporibus, quisquam voluptates. Recusandae maxime labore quia facere est.</div>
      </div>
      
    </div>
  )
}

export default Home