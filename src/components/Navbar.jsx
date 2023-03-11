import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineHeart } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { CgProfile } from 'react-icons/cg';
import { FiShoppingCart } from 'react-icons/fi';
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CartList from "./CartList";

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
    })

  return (
    <nav ref={ navRef }  className="sticky top-0 left-0 z-30 bg-[#F6F6F6] shadow-md p-4 md:p-6">
       <div className="flex justify-between items-center">
            <div className="md:hidden">
                {toggleMenu
                    ? <RxCross1 fontSize={22} className='cursor-pointer' onClick={() => setToggleMenu(false)}/>
                    : <AiOutlineMenu fontSize={22} className='cursor-pointer' onClick={() => setToggleMenu(true)}/>
                }


                {/* MOBILE NAVBAR SECTION */}

                {toggleMenu && 
                    <div className="mobile-navbar relative">
                       <div className="fixed z-40 bg-[#F6F6F6] -top-12 -left-6 pt-24 h-screen w-[60vw]">
                                <RxCross1 fontSize={22} className='cursor-pointer absolute my-4 top-3 right-5' onClick={() => setToggleMenu(false)} />
                            <div>
                                <ul className="flex flex-col items-center space-y-10">
                                    <li className="font-semibold hover:scale-110 active:scale-110"><NavLink to= '/'>Home</NavLink></li>
                                    <li className="font-semibold hover:scale-110 active:scale-110"><NavLink to= '/explore'>Explore</NavLink></li>
                                    <li className="font-semibold hover:scale-110 active:scale-110"><NavLink to= '/wholesale'>Wholesale</NavLink></li>
                                    <li className="font-semibold hover:scale-110 active:scale-110"><NavLink to= '/contact'>Contact</NavLink></li>
                                    <li className="font-semibold hover:scale-110 active:scale-110"><NavLink to= '/about'>About</NavLink></li>
                                </ul>
                            </div>
                       </div>
                    </div>
                }
                {toggleMenu
                    ? (<div className="bg-black/80 fixed w-full h-screen -z-10 top-0 left-0"></div>)
                    : ''
                }
            </div>

                {/* DESKTOP NAVBAR SECTION */}

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



            {/* CART-SECTION */}

            <div className="flex space-x-3 md:space-x-7">
                <NavLink to='/favorite'><AiOutlineHeart fontSize={22} /></NavLink>
                <NavLink to='/profile'><CgProfile fontSize={22} /></NavLink>
                <div className="cursor-pointer">
                    { toggleCart 
                        ? <RxCross1 fontSize={22} onClick={() => {setToggleCart(false)}}/>
                        : <FiShoppingCart fontSize={22} onClick={() => {setToggleCart(true)}} />
                    }
                    { toggleCart &&
                        <div className="cart relative cursor-default">
                           <div className="overflow-auto fixed z-10 bg-[#F6F6F6] top-0 -right-5 pt-24 h-screen w-[80vw] md:w-[40vw] duration-300">
                                    <RxCross1 fontSize={22} className='cursor-pointer fixed my-4 top-3 right-5 ' onClick={() => setToggleCart(false)} />
                                <ul className="flex flex-col px-4 py-10 justify-start shadow-sm items-start space-y-10">
                                    <li>
                                            <CartList image= {"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/852c5323-cf29-435d-919d-2936c4bce051/air-jordan-5-x-dj-khaled-mens-shoes-F3jrrH.png"} title={"Air Jordan 5 x DJ Khaled"} price={"50,000"} />
                                    </li>
                                    <li>
                                            <CartList image= {"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fadf1b0c-c687-4e3d-8f4e-6d089d115a0c/air-jordan-13-retro-shoe-08RC9v.png"} title={"Air Jordan 13 Retro"} price={"50,000"} />
                                    </li>
                                    <li>
                                            <CartList image= {"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fadf1b0c-c687-4e3d-8f4e-6d089d115a0c/air-jordan-13-retro-shoe-08RC9v.png"} title={"Air Jordan 13 Retro"} price={"50,000"} />
                                    </li>
                                    <li>
                                            <CartList image= {"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fadf1b0c-c687-4e3d-8f4e-6d089d115a0c/air-jordan-13-retro-shoe-08RC9v.png"} title={"Air Jordan 13 Retro"} price={"50,000"} />
                                    </li>
                                    <li className="sticky bottom-12 md:left-[50%] translate-x-2/4 translate-y-1/2">
                                        <button className="px-7 py-2 md:px-10 bg-black text-white hover:bg-[#7C5A3F] rounded-full">Contact Supplier</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    }
                    {toggleCart
                        ? (<div className="bg-black/80 fixed w-full h-screen -z-10 top-0 left-0"></div>)
                        : ''
                    }
                </div>
            </div>
       </div>
    </nav>
  );
}

export default Navbar;