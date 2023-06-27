import { Link } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { BsFire, BsStarFill } from "react-icons/bs";
import {MdArticle} from "react-icons/md"
function navbar() {
  return (
    <nav className=''>
      <section className='container mx-auto h-20 w-full border-b-[1px] border-primary px-5 pt-8 md:px-10 lg:px-24'>
        <p className='text-2xl font-bold text-primary '>CodeCraft</p>
      </section>

      <section className='fixed bottom-5 left-0 h-20 w-full lg:left-0 lg:top-0 lg:min-h-screen lg:w-28 lg:bg-primary'>
        <div className='mx-10 flex h-full basis-full items-center justify-around rounded-3xl border-[1px] border-gray-100/10 bg-primary/90 backdrop-blur-sm lg:flex-col lg:border-0'>
          <Link to={"/"}>
            <button>
              <BiSolidHome size={"1.2rem"} className='text-white' />
            </button>
          </Link>

          <Link to={"/articles"}>
            <button>
              <MdArticle size={"1.2rem"} className='text-white' />
            </button>
          </Link>

          <Link to={"/trending"}>
            <button>
              <BsFire size={"1.2rem"} className='text-white' />
            </button>
          </Link>

          <Link to={"/saved"}>
            <button>
              <BsStarFill size={"1.2rem"} className='text-white' />
            </button>
          </Link>
        </div>
      </section>
    </nav>
  );
}

export default navbar;
