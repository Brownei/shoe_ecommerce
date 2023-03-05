import React, { useEffect } from 'react';
import gsap from 'gsap';

const About = () => {

  useEffect(() => {
    gsap.fromTo('.about-section', 1.5, {opacity: 0, y: 50}, {opacity: 1, y: 0})
  }, [])


  return (
    <div>
       <div className='bg-[#F6F6F6] border-b-0 overflow-hidden'>
        <h2 className="about-section font-semibold text-3xl text-center pt-7 pb-2">About</h2>
      </div>
      <p className='mx-auto p-3 tracking-wide font-light text-lg md:max-w-3xl'>Welcome to our shoe company, where we believe that every step should be taken in style and comfort. 
        Our passion for footwear drives us to create high-quality shoes that not only look great but also feel amazing to wear. 
        From timeless classics to trendy must-haves, we offer a wide range of designs to fit every style and occasion. 
        With an emphasis on using the finest materials and craftsmanship, our shoes are made to last and will become a staple in your wardrobe for years to come. 
        Browse our collection and find the perfect pair that will take you wherever you want to go.</p>
    </div>
  )
}

export default About;