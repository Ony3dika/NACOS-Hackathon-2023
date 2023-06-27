import Navbar from "../components/navbar";
import pic from "../assets/pic2.jpg";

function Home() {
  return (
    <>
      <div className='min-h-screen bg-base'>
        <Navbar />

        {/* Intro */}
        <section className='container mx-auto mt-8 w-full px-5 md:px-10 lg:px-36'>
          <div className='flex items-center justify-center'>
            <div className=' rounded-lg bg-gray-200 p-5 py-10'>
              {" "}
              <p className='text-center text-xl font-bold text-sub lg:text-3xl'>
                Welcome to <span className='text-primary'>CodeCraft</span>
                <br />
                Your Gateway to the World of Software Sorcery!
              </p>
              <p className='mt-5 leading-loose text-base text-primary'>
                Step into a realm where lines of code transform into digital
                spells, and developers wield their keyboards like magic wands.
                Welcome to CodeCraft, a place where the artistry of programming
                and the wizardry of technology converge.
                <br /> <br />
                <span className='hidden lg:block'>
                  Through our blog, you will find a treasure trove of insights,
                  tutorials, and thought-provoking articles that delve into the
                  latest trends, best practices, and emerging technologies.
                  Whether you seek guidance on mastering a programming language,
                  unraveling the mysteries of debugging, or staying up-to-date
                  with the ever-evolving tech landscape, CodeCraft is your
                  trusted companion on this magical journey. So, fellow
                  sorcerers of code, grab your keyboards and get ready to be
                  spellbound.{" "}
                </span>
                Welcome to CodeCraft, where software sorcery comes to life, and
                the possibilities are as endless as the lines of code waiting to
                be crafted. Let the adventure begin!
              </p>
            </div>
          </div>
          {/* Trending */}

          <section className='mt-10'>
            <p className='text-lg font-bold text-sub lg:text-2xl'>Trending</p>

            <article className='mt-5 rounded-lg bg-sub/5 p-5'>
              <p className='text-md font-bold text-sub lg:text-xl'>
                Unveiling the Latest Tech Innovations Shaping the Future
              </p>

              <div className='mt-5 flex flex-col justify-between lg:flex-row'>
                <img src={pic} className='object-cover h-52 w-80 basis-1/3 rounded-lg' alt='' />

                <p className='mt-3 basis-[63%] lg:mt-0'>
                  In our rapidly evolving world, technology continues to push
                  the boundaries of what we once thought possible. From
                  groundbreaking scientific discoveries to innovative gadgets
                  that enhance our daily lives, the pace of technological
                  advancement is truly awe-inspiring. In this article, we will
                  explore some of the latest tech innovations that are currently
                  shaping the future and transforming the way we live, work, and
                  interact.
                  <br /> <br />
                  In our rapidly evolving world, technology
                  continues to push the boundaries of what we once thought
                  possible. From groundbreaking scientific discoveries to...
              
                </p>
              </div>

              <p className='text-sm font-bold text-right lg:text-sub text-sub lg:text-base'>
                See More...
              </p>

              <p></p>
            </article>
          </section>
        </section>
      </div>
    </>
  );
}

export default Home;
