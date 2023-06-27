import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <nav className=''>
      <section className='container mx-auto h-20 w-full border-b-[1px] border-primary px-5 pt-8 md:px-10 lg:px-20'>
        <p className='text-2xl font-bold text-primary '>CodeCraft</p>
      </section>

      <section className='fixed bottom-5 left-0 h-24 w-full lg:left-0 lg:top-0 lg:min-h-screen lg:w-28 lg:bg-primary'>
        <div className='mx-10 flex flex-col h-full basis-full items-center justify-around rounded-3xl border-[1px] border-gray-100/10 bg-primary backdrop-blur-sm lg:border-0'>
          <Link to={"/"}>
            <button>Home</button>
          </Link>

          <Link to={"/"}>
            <button>Trending</button>
          </Link>

          <Link to={"/"}>
            <button>About</button>
          </Link>
        </div>
      </section>
    </nav>
  );
}

export default navbar;
