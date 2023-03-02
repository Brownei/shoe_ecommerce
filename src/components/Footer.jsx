import { AiOutlineTwitter, AiOutlineCopyright, AiOutlineInstagram, AiOutlineFacebook, AiOutlineWhatsApp } from 'react-icons/ai'
 
const Footer = () => {
  
  scroll()
  return (
    <section id="footer" className='bg-[#F6F6F6]'>
      <div className="container mx-auto p-6 mt-32 z-10 flex flex-col justify-between space-y-7 md:flex-row md:p-10 md:space-y-0 md:items-center">
        <div className="flex flex-col space-y-2">
          <h5>s<span className="text-lg font-bold">H</span>oes.</h5>
          <h4 className='font-bold text-lg'>Contact</h4>
          <p><strong>Address:</strong> 1st Richard Izoya Street, Ebrumede, Off Okuatata Street, Ugbomro</p>
          <p><strong>Phone:</strong> +234 8035982957</p>
          <p><strong>Hours:</strong> Always open 24/7 hours a day.</p>
          <div className='flex space-x-3'>
            <a className='hover:scale-110' href="#"><AiOutlineFacebook fontSize={20}/></a>
            <a className='hover:scale-110' href="#"><AiOutlineTwitter fontSize={20}/></a>
            <a className='hover:scale-110' href="#"><AiOutlineInstagram fontSize={20}/></a>
            <a className='hover:scale-110' href="#"><AiOutlineWhatsApp fontSize={20}/></a>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className='font-bold text-lg'>About</h4>
          <a className='hover:font-medium' href="#">About Us</a>
          <a className='hover:font-medium' href="#">Delivery Information</a>
          <a className='hover:font-medium' href="#">Privacy Policy</a>
          <a className='hover:font-medium' href="#">Terms and Conditions</a>
          <a className='hover:font-medium' href="#">Contact Us</a>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className='font-bold text-lg'>My Account</h4>
          <a className='hover:font-medium' href="#">Sign In</a>
          <a className='hover:font-medium' href="#">View Cart</a>
          <a className='hover:font-medium' href="#">My Favorites</a>
          <a className='hover:font-medium' href="#">Help</a>
        </div>
      </div>
      <div className='flex space-x-1 items-center justify-center'>
        <AiOutlineCopyright fontSize={20}/>
        <p>2023, Tech etc - React E-commerce Template</p>
      </div>
    </section>
  );
}

export default Footer;