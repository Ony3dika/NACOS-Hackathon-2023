import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiSolidHome } from "react-icons/bi";
import { BsFire, BsStarFill } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import logo from "../assets/repeat.svg";
import { MdDarkMode, MdSunny } from "react-icons/md";

function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <nav className='sticky top-0 z-50 '>
      <section className='container sticky left-0 top-0 mx-auto flex  h-20 w-full border-b-[1px] border-primary dark:border-gray-600 bg-white/50 px-5 pt-3 backdrop-blur-3xl dark:bg-darkBase md:px-10 lg:px-24'>
        <div className='flex basis-2/3 items-center'>
          <p className='text-2xl font-bold text-primary dark:text-white '>
            Code<span className='text-sub'>Craft</span>
          </p>
          <img src={logo} className='h-full' alt='' />
        </div>

        <div className='hidden basis-5/6 justify-between lg:flex items-center'>
          <Link to={"/"}>
            <button className='flex items-center justify-center transition-all duration-200 ease-linear  hover:text-sub/70 focus:text-sub dark:text-white dark:hover:text-sub/70 dark:focus:text-sub'>
              <BiSolidHome className='mr-1' size={"1.2rem"} />
              Home
            </button>
          </Link>

          <Link to={"/articles"}>
            <button className='flex items-center justify-center transition-all duration-200 ease-linear hover:text-sub/70 focus:text-sub dark:text-white dark:hover:text-sub/70 dark:focus:text-sub'>
              <MdArticle className='mr-1' size={"1.2rem"} />
              Articles
            </button>
          </Link>

          <Link to={"/"}>
            <button className='flex items-center justify-center transition-all duration-200 ease-linear hover:text-sub/70 focus:text-sub dark:text-white dark:hover:text-sub/70 dark:focus:text-sub'>
              <BsFire className='mr-1' size={"1.2rem"} />
              Trending
            </button>
          </Link>

          <Link to={"/"}>
            <button className='flex items-center justify-center transition-all duration-200 ease-linear hover:text-sub/70 focus:text-sub dark:text-white dark:hover:text-sub/70 dark:focus:text-sub'>
              <BsStarFill className='mr-1' size={"1.2rem"} />
              Saved
            </button>
          </Link>
        </div>

        <div className="basis-1/3 flex items-center justify-end">
          <button
            className='transition-all duration-300 ease-linear'
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {theme === "dark" ? (
              <MdSunny className='text-white' size={"1.5rem"} />
            ) : (
              <MdDarkMode className='text-primary' size={"1.5rem"} />
            )}
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
      <section className='fixed bottom-5 left-0 h-20 w-full lg:hidden'>
        <div className='mx-10 flex h-full basis-full items-center justify-around rounded-3xl border-[1px] border-gray-100/10 bg-primary/90 dark:bg-darkBase/90 backdrop-blur-sm lg:flex-col lg:border-0'>
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

          <Link to={"/"}>
            <button className='text-white transition-all duration-200 ease-linear focus:text-sub'>
              <BsFire size={"1.2rem"} />
            </button>
          </Link>

          <Link to={"/"}>
            <button className='text-white transition-all duration-200 ease-linear focus:text-sub'>
              <BsStarFill size={"1.2rem"} />
            </button>
          </Link>
        </div>
      </section>
    </nav>
  );
}

export default Navbar;
