import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <section className='container mx-auto mt-8 flex w-full justify-between rounded-t-lg border-t-2 border-gray-600 bg-primary dark:bg-darkSub px-5 py-5 text-sm leading-loose lg:px-36 lg:py-10 lg:leading-normal lg:text-base'>
        <div className='basis-2/5 font-bold text-gray-300 md:basis-1/5'>
          <p className='custom'>CodeCraft</p>
          <p className='font-semibold'>All right Reserved</p>
        </div>

        <div className='hidden basis-3/5 text-center font-medium text-gray-300 md:block'>
          <p>2023 © CodeCraft, Exploring The Web</p>
        </div>

        <div className='flex basis-3/5 justify-around md:basis-1/5 md:justify-between'>
          <button className='bg-alt/70 rounded-md p-3 px-5 text-gray-300 transition-all duration-300 ease-in hover:text-sub'>
            <FaTwitter size={"1.3rem"} />
          </button>
          <button className='hover:text-pinkWord focus:text-tealWord bg-alt/70 rounded-md p-3 px-5 text-gray-300 transition-all duration-300 ease-in hover:text-sub'>
            <FaFacebookSquare size={"1.3rem"} />
          </button>
          <button className='hover:text-pinkWord focus:text-tealWord bg-alt/70 rounded-md p-3 px-5 text-gray-300 transition-all duration-300 ease-in hover:text-sub'>
            <AiFillInstagram size={"1.3rem"} />
          </button>
        </div>
      </section>
    </div>
  );
}

export default Footer;
