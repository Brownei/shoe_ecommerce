import { Link } from "react-router-dom";

const Wholesale = () => {


  return (
    <section id="wholesale-section">
      <div className="flex flex-col justify-center items-center text-center mt-32">
        <h2 className="font-semibold text-xl mb-5 z-10">WholeSale Services</h2>
        <h3 className="font-medium text-4xl">Up to <span className="text-[#7C5A3F] font-extrabold">30% Off -</span>For All Shoes When You Buy In Bulk</h3>
        <ul>
          <li className="w-fit cursor-pointer my-5 mx-2 border py-2 px-5 rounded-full bg-black text-white font-medium hover:bg-[#7C5A3F]"><Link to= '/wholesale'>Explore More</Link></li>
        </ul>
      </div>
    </section>
  );
}

export default Wholesale;