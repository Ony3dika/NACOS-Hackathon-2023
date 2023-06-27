import { Link } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { BsFire, BsStarFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
function navbar() {
  return (
    <nav className="sticky top-0">
      <section className='container bg-white/50 backdrop-blur-3xl mx-auto sticky left-0 top-0 flex h-20 w-full border-b-[1px] border-primary px-5 pt-8 md:px-10 lg:px-24'>
        <div className='basis-1/3'>
          <p className='text-2xl font-bold text-primary '>
            Code<span className="text-sub">Craft</span>
          </p>
        </div>

        <div className='flex basis-2/3 justify-between'>
          <Link to={"/"}>
            <button className='flex items-center justify-center transition-all duration-200 ease-linear hover:text-sub/70 focus:text-sub'>
              <BiSolidHome className='mr-1' size={"1.2rem"} />
              Home
            </button>
          </Link>

          <Link to={"/articles"}>
            <button className='flex items-center justify-center transition-all duration-200 ease-linear hover:text-sub/70 focus:text-sub'>
              <MdArticle className='mr-1' size={"1.2rem"} />
              Articles
            </button>
          </Link>

          <Link to={"/trending"}>
            <button className='flex items-center justify-center transition-all duration-200 ease-linear hover:text-sub/70 focus:text-sub'>
              <BsFire className='mr-1' size={"1.2rem"} />
              Trending
            </button>
          </Link>

          <Link to={"/saved"}>
            <button className='flex items-center justify-center transition-all duration-200 ease-linear hover:text-sub/70 focus:text-sub'>
              <BsStarFill className='mr-1' size={"1.2rem"} />
              Saved
            </button>
          </Link>
        </div>
      </section>

      {/* Mobile Menu */}
      <section className='fixed bottom-5 left-0 h-20 w-full lg:hidden'>
        <div className='mx-10 flex h-full basis-full items-center justify-around rounded-3xl border-[1px] border-gray-100/10 bg-primary/90 backdrop-blur-sm lg:flex-col lg:border-0'>
          <Link to={"/"}>
            <button className='text-white transition-all duration-200 ease-linear focus:text-sub'>
              <BiSolidHome size={"1.2rem"} />
            </button>
          </Link>

          <Link to={"/articles"}>
            <button className='text-white transition-all duration-200 ease-linear focus:text-sub'>
              <MdArticle size={"1.2rem"} />
            </button>
          </Link>

          <Link to={"/trending"}>
            <button className='text-white transition-all duration-200 ease-linear focus:text-sub'>
              <BsFire size={"1.2rem"} />
            </button>
          </Link>

          <Link to={"/saved"}>
            <button className='text-white transition-all duration-200 ease-linear focus:text-sub'>
              <BsStarFill size={"1.2rem"} />
            </button>
          </Link>
        </div>
      </section>
    </nav>
  );
}

export default navbar;
