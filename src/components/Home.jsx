import React from 'react'
import Pdf from '../Pdf/AbhisehkCv.pdf'
import hero from './Data/hero.json'
const Home = () => {
  return (
    <>
  <div className='container home ' id='home'>
    <div className="left"
    data-aos="fade-up-right"
    data-aos-duration="1000"
    >
        <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Tempore delectus in nisi quae id dolore ad praesentium quod,
        </h1>
       <a href={Pdf} download="Resume.pdf" className='btn btn-outline-warning'>Download Resume</a>
    </div>
    <div className="right">
        <div className="img" data-aos="fade-up-left"
    data-aos-duration="1000" >
        <img src={`/assets/${hero.imgSrc}`} alt='hero'>
        </img>
        </div>
    </div>
  </div>
  </>
  )
}

export default Home
