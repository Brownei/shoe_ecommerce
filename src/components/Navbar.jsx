import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineHeart } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);
    

    const navRef = useRef(null);
    const tl = gsap.timeline({
        repeat: false,
        default: {duration: 1}
    })
    useEffect(()=> {
        tl
        .fromTo('.mobile-navbar', 0.5, {x: -50}, {x: 0})
        .fromTo('.cart', 0.5, {x: 50}, {x: 0})
    })

  return (
    <nav ref={ navRef }  className="sticky top-0 left-0 z-30 bg-[#F6F6F6] shadow-md p-4 md:p-6">
       <div className="flex justify-between items-center">
            <div className="md:hidden">
                {toggleMenu
                    ? <RxCross1 fontSize={22} className='cursor-pointer' onClick={() => setToggleMenu(false)}/>
                    : <AiOutlineMenu fontSize={22} className='cursor-pointer' onClick={() => setToggleMenu(true)}/>
                }
                {toggleMenu && 
                    <div className="mobile-navbar relative">
                        <ul className="flex flex-col items-center space-y-10  fixed z-10 bg-[#F6F6F6] top-0 -left-5 pt-24 h-screen w-[70vw]">
                            <li className="font-semibold hover:scale-110 active:scale-110"><NavLink to= '/'>Home</NavLink></li>
                            <li className="font-semibold hover:scale-110 active:scale-110"><NavLink to= '/explore'>Explore</NavLink></li>
                            <li className="font-semibold hover:scale-110 active:scale-110"><NavLink to= '/wholesale'>Wholesale</NavLink></li>
                            <li className="font-semibold hover:scale-110 active:scale-110"><NavLink to= '/contact'>Contact</NavLink></li>
                            <li className="font-semibold hover:scale-110 active:scale-110"><NavLink to= '/about'>About</NavLink></li>
                        </ul>
                    </div>
                }
            </div>
            <div className="font-medium">
                <NavLink to='/'>s<span className="text-lg font-bold">H</span>oes.</NavLink>
            </div>
            <div className="hidden md:flex">
                <ul className=" font-medium md:space-x-16 md:flex">
                    <li className=" hover:scale-110 active:scale-110"><NavLink to= '/'>Home</NavLink></li>
                    <li className=" hover:scale-110 active:scale-110"><NavLink to= '/explore'>Explore</NavLink></li>
                    <li className=" hover:scale-110 active:scale-110"><NavLink to= '/wholesale'>Wholesale</NavLink></li>
                    <li className=" hover:scale-110 active:scale-110"><NavLink to= '/contact'>Contact</NavLink></li>
                    <li className=" hover:scale-110 active:scale-110"><NavLink to= '/about'>About</NavLink></li>
                </ul>
            </div>
            <div className="flex space-x-3 md:space-x-7">
                <NavLink to='/favorite'><AiOutlineHeart fontSize={22} /></NavLink>
                <NavLink to='/profile'><CgProfile fontSize={22} /></NavLink>
                <div className="cursor-pointer">
                    { toggleCart 
                        ? <RxCross1 fontSize={22} onClick={() => {setToggleCart(false)}}/>
                        : <FiShoppingCart fontSize={22} onClick={() => {setToggleCart(true)}} />
                    }
                    { toggleCart &&
                        <div className="cart relative">
                            <ul className="flex flex-col items-center space-y-10 fixed z-10 bg-[#F6F6F6] top-0 -right-5 pt-24 h-screen w-[70vw] md:w-[40vw]">

                            </ul>
                        </div>
                    }
                </div>
            </div>
       </div>
    </nav>
  );
}

export default Navbar;