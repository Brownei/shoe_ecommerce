import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Hero = () => {


  const heroRef = useRef(null);
  useEffect(() => {
    gsap.fromTo('.hero', 1.5, {opacity: 0, y:100}, {opacity: 1, y: 0})
    gsap.fromTo('.shop', 2.0, {opacity: 0, y:100}, {opacity: 1, y: 0})
  })

  return (
    <section id="hero" ref={ heroRef }>
      <div className="flex flex-col justify-center items-start mt-32">
        <div>
          <div className="border-b-0 overflow-hidden">
            <h1 className="hero text-5xl md:text-6xl font-extrabold">Step Up Your Style Game.</h1>
          </div>
          <div className="border-b-0 overflow-hidden">
            <p className="shop mt-4 text-md md:text-lg"> Discover the Perfect Pair of Shoes Today!</p>
          </div>
        </div>
        <Link to='/explore' className="mt-2 mx-2 py-2 px-5 rounded-full bg-black text-white font-medium hover:bg-[#7C5A3F] duration-300">Shop Now</Link>
      </div>
    </section>
  );
}

export default Hero;