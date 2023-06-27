import Navbar from "../components/navbar";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";
import Footer from "../components/footer";
import { InView } from "react-intersection-observer";
function Home() {
  return (
    <>
      <div className='min-h-screen bg-base dark:bg-darkBase'>
        <Navbar />

        {/* Intro */}
        <section className='container mx-auto mt-8 w-full px-5 md:px-10 lg:px-36'>
          <div className='flex items-center justify-center'>
            <InView triggerOnce={true} threshold={0.3}>
              {({ inView, ref }) => (
                <div
                  ref={ref}
                  className={`iso mt-5 rounded-lg bg-gray-200 p-5 py-10 opacity-0 dark:bg-darkSub ${
                    inView ? "animate-slideup" : ""
                  }`}
                >
                  <p className='text-center text-xl font-bold text-sub lg:text-3xl'>
                    Welcome to{" "}
                    <span className='text-primary dark:text-white'>
                      CodeCraft
                    </span>
                    <br />
                    Your Gateway to the World of Software Sorcery!
                  </p>
                  <p className='mt-5 font-medium leading-loose text-base text-primary dark:text-white/70'>
                    Step into a realm where lines of code transform into digital
                    spells, and developers wield their keyboards like magic
                    wands. Welcome to CodeCraft, a place where the artistry of
                    programming and the wizardry of technology converge.
                    <br /> <br />
                    <span className='hidden lg:block'>
                      Through our blog, you will find a treasure trove of
                      insights, tutorials, and thought-provoking articles that
                      delve into the latest trends, best practices, and emerging
                      technologies. Whether you seek guidance on mastering a
                      programming language, unraveling the mysteries of
                      debugging, or staying up-to-date with the ever-evolving
                      tech landscape, CodeCraft is your trusted companion on
                      this magical journey. So, fellow sorcerers of code, grab
                      your keyboards and get ready to be spellbound.{" "}
                    </span>
                    Welcome to CodeCraft, where software sorcery comes to life,
                    and the possibilities are as endless as the lines of code
                    waiting to be crafted. Let the adventure begin!
                  </p>
                </div>
              )}
            </InView>
          </div>
          {/* Trending */}

          <section className='mt-10'>
            <p className='text-lg font-bold text-sub lg:text-2xl'>Trending</p>
            {/* Article 1 */}
            <InView triggerOnce={true} threshold={0.4}>
              {({ inView, ref }) => (
                <article
                  ref={ref}
                  className={`mt-5 rounded-lg bg-sub/5 p-5 opacity-0 ${
                    inView ? "animate-slideleft" : ""
                  }`}
                >
                  <p className='text-md font-bold text-sub lg:text-xl'>
                    Unleashing the Power of Artificial Intelligence:
                    Transforming Industries and Empowering Humanity
                  </p>

                  <div className='mt-5 flex flex-col justify-between lg:flex-row'>
                    <img
                      src={pic1}
                      className='h-52 w-80 basis-1/3 rounded-lg object-cover'
                      alt=''
                    />

                    <p className='mt-3 basis-[63%] dark:text-white/70 lg:mt-0'>
                      Artificial Intelligence (AI) has emerged as a
                      transformative force, revolutionizing the way we live,
                      work, and interact. With its ability to analyze vast
                      amounts of data, learn from patterns, and make intelligent
                      decisions, AI has become an indispensable tool across
                      various industries. In this article, we will explore the
                      incredible potential of AI, its impact on different
                      sectors, and the ethical considerations surrounding its
                      adoption.
                      <br />
                      <br />
                      AI in Healthcare: AI is reshaping the healthcare landscape
                      by enhancing diagnosis, treatment, and patient care.
                      Machine Learning algorithms can quickly analyze medical...
                    </p>
                  </div>

                  <div className='mt-5 flex items-center justify-between'>
                    <div className='flex items-center justify-between rounded-full bg-gray-300/80 text-sm text-primary lg:text-primary'>
                      <span className='px-3'>5 min read</span>
                      <span className='rounded-full bg-gray-500/20 px-5 py-3'>
                        20th June
                      </span>
                    </div>
                    <p className='text-sm font-bold text-sub lg:text-base lg:text-sub'>
                      See More...
                    </p>
                  </div>
                </article>
              )}
            </InView>
            {/* Article 2 */}
            <InView triggerOnce={true} threshold={0.4}>
              {({ inView, ref }) => (
                <article
                  ref={ref}
                  className={`mt-5 rounded-lg bg-sub/5 p-5 opacity-0 ${
                    inView ? "animate-slideleft" : ""
                  }`}
                >
                  <p className='text-md font-bold text-sub lg:text-xl'>
                    Unveiling the Latest Tech Innovations Shaping the Future
                  </p>

                  <div className='mt-5 flex flex-col justify-between lg:flex-row'>
                    <img
                      src={pic2}
                      className='h-52 w-80 basis-1/3 rounded-lg object-cover'
                      alt=''
                    />

                    <p className='mt-3 basis-[63%] dark:text-white/70 lg:mt-0'>
                      In our rapidly evolving world, technology continues to
                      push the boundaries of what we once thought possible. From
                      groundbreaking scientific discoveries to innovative
                      gadgets that enhance our daily lives, the pace of
                      technological advancement is truly awe-inspiring. In this
                      article, we will explore some of the latest tech
                      innovations that are currently shaping the future and
                      transforming the way we live, work, and interact.
                      <br /> <br />
                      In our rapidly evolving world, technology continues to
                      push the boundaries of what we once thought possible. From
                      groundbreaking scientific discoveries to...
                    </p>
                  </div>

                  <div className='mt-5 flex items-center justify-between'>
                    <div className='flex items-center justify-between rounded-full bg-gray-300/80 text-sm text-primary lg:text-primary'>
                      <span className='px-3'>7 min read</span>
                      <span className='rounded-full bg-gray-500/20 px-5 py-3'>
                        23th June
                      </span>
                    </div>
                    <p className='text-sm font-bold text-sub lg:text-base lg:text-sub'>
                      See More...
                    </p>
                  </div>
                </article>
              )}
            </InView>

            {/* Article 3 */}
            <InView threshold={0.4} triggerOnce={true}>
              {({ inView, ref }) => (
                <article ref={ref} className={`mt-5 rounded-lg opacity-0 bg-sub/5 p-5 ${inView ? "animate-slideleft"  : " "}`}>
                  <p className='text-md font-bold text-sub lg:text-xl'>
                    A Comprehensive Guide to Using the useState Hook
                  </p>

                  <div className='mt-5 flex flex-col justify-between lg:flex-row'>
                    <img
                      src={pic3}
                      className='h-52 w-80 basis-1/3 rounded-lg object-cover'
                      alt=''
                    />

                    <p className='mt-3 basis-[63%] dark:text-white/70 lg:mt-0'>
                      React, a popular JavaScript library for building user
                      interfaces, offers developers a powerful arsenal of tools
                      and hooks. Among these, the useState hook stands out as a
                      fundamental tool for managing state within functional
                      components. In this tutorial, we will dive into the
                      useState hook and explore its capabilities, guiding you
                      through its implementation and showcasing its versatility
                      in creating dynamic and interactive React applications.
                      <br />
                      <br />
                      The useState hook is a built-in React hook that allows
                      functional components to manage state locally. We will
                      begin by understanding the basic syntax and usage of
                      useState, exploring...
                    </p>
                  </div>

                  <div className='mt-5 flex items-center justify-between'>
                    <div className='flex items-center justify-between rounded-full bg-gray-300/80 text-sm text-primary lg:text-primary'>
                      <span className='px-3'>6 min read</span>
                      <span className='rounded-full bg-gray-500/20 px-5 py-3'>
                        19th June
                      </span>
                    </div>
                    <p className='text-sm font-bold text-sub lg:text-base lg:text-sub'>
                      See More...
                    </p>
                  </div>
                </article>
              )}
            </InView>
          </section>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Home;
