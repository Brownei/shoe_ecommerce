import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {


  const heroRef = useRef(null);
  useEffect(() => {
    gsap.fromTo('.hero', 1.5, {opacity: 0, y:100}, {opacity: 1, y: 0})
    gsap.fromTo('.shop', 2.5, {opacity: 0, y:100}, {opacity: 1, y: 0})
  })

  return (
    <section id="hero" ref={ heroRef }>
      <div className="flex flex-col justify-center items-start mt-32">
        <div className="hero">
          <h1 className="text-5xl md:text-6xl font-extrabold">Step Up Your Style Game.</h1>
          <p className="mt-4 text-md md:text-lg"> Discover the Perfect Pair of Shoes Today!</p>
        </div>
        <button className="shop mt-2 mx-2 border py-2 px-5 rounded-full bg-black text-white font-medium hover:bg-[#7C5A3F]">Shop Now</button>
      </div>
    </section>
  );
}

export default Hero;