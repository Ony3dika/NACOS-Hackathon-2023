import Navbar from "../components/navbar";
import Footer from "../components/footer";
import pic4 from "../assets/pic4.jpg"
import pic5 from "../assets/pic5.jpg"
import pic6 from "../assets/pic6.jpg";
import pic7 from "../assets/pic7.jpg";
function Blog() {
  return (
    <>
      <div className='min-h-screen bg-base dark:bg-darkBase'>
        <Navbar />

        <section className='container mx-auto mt-8 w-full px-5 md:px-10 lg:px-36'>
          <div className='mt-5'>
            <p className='text-xl font-bold text-sub lg:text-3xl'>Articles</p>

            <p className='mt-3 font-medium leading-loose text-base text-primary dark:text-white/70'>
              Welcome to CodeCraft - your source for insightful articles,
              engaging stories, and up-to-date information. Join us on a journey
              of discovery and inspiration. Happy reading!
            </p>
          </div>

          <section>
            {/* Article 1 */}
            <article className='mt-5 items-center justify-between rounded-lg bg-sub/5 p-5 lg:flex'>
              <img
                src={pic5}
                className='h-40 w-full basis-1/3 rounded-lg object-cover lg:w-60'
                alt=''
              />

              <div className='mt-3 basis-[63%] lg:mt-0'>
                <p className='text-md font-bold text-sub lg:text-xl'>
                  Mastering SEO: Boosting Your Website&apos;s Visibility and
                  Organic Traffic
                </p>

                <p className='mt-3 font-medium dark:text-white/80'>
                  By Joh Newumann
                </p>

                <div className='mt-5 flex items-center justify-between'>
                  <div className='flex items-center justify-between rounded-full bg-gray-300/80 text-sm text-primary lg:text-primary'>
                    <span className='px-3'>7 min read</span>
                    <span className='rounded-full bg-gray-500/20 px-5 py-3'>
                      25th June
                    </span>
                  </div>
                  <p className='text-sm font-bold text-sub lg:text-base lg:text-sub'>
                    See More...
                  </p>
                </div>
              </div>
            </article>
            {/* Article 2 */}
            <article className='mt-5 items-center justify-between rounded-lg bg-sub/5 p-5 lg:flex'>
              <img
                src={pic4}
                className='h-40 w-full basis-1/3 rounded-lg object-cover lg:w-60'
                alt=''
              />

              <div className='mt-3 basis-[63%] lg:mt-0'>
                <p className='text-md font-bold text-sub lg:text-xl'>
                  Web Development Best Practices: Building Efficient and Secure
                  Websites
                </p>

                <p className='mt-3 font-medium dark:text-white/80'>
                  By David Eze
                </p>

                <div className='mt-5 flex items-center justify-between'>
                  <div className='flex items-center justify-between rounded-full bg-gray-300/80 text-sm text-primary lg:text-primary'>
                    <span className='px-3'>10 min read</span>
                    <span className='rounded-full bg-gray-500/20 px-5 py-3'>
                      30th March
                    </span>
                  </div>
                  <p className='text-sm font-bold text-sub lg:text-base lg:text-sub'>
                    See More...
                  </p>
                </div>
              </div>
            </article>
            {/* Article 3 */}
            <article className='mt-5 items-center justify-between rounded-lg bg-sub/5 p-5 lg:flex'>
              <img
                src={pic6}
                className='h-40 w-full basis-1/3 rounded-lg object-cover lg:w-60'
                alt=''
              />

              <div className='mt-3 basis-[63%] lg:mt-0'>
                <p className='text-md font-bold text-sub lg:text-xl'>
                  Implementing Dynamic Arrays: Resizing and Efficiency
                </p>

                <p className='mt-3 font-medium dark:text-white/80'>
                  By Liam Coleman
                </p>

                <div className='mt-5 flex items-center justify-between'>
                  <div className='flex items-center justify-between rounded-full bg-gray-300/80 text-sm text-primary lg:text-primary'>
                    <span className='px-3'>12 min read</span>
                    <span className='rounded-full bg-gray-500/20 px-5 py-3'>
                      1st June
                    </span>
                  </div>
                  <p className='text-sm font-bold text-sub lg:text-base lg:text-sub'>
                    See More...
                  </p>
                </div>
              </div>
            </article>

            {/* Article 4 */}

            <article className='mt-5 items-center justify-between rounded-lg bg-sub/5 p-5 lg:flex'>
              <img
                src={pic7}
                className='h-40 w-full basis-1/3 rounded-lg object-cover lg:w-60'
                alt=''
              />

              <div className='mt-3 basis-[63%] lg:mt-0'>
                <p className='text-md font-bold text-sub lg:text-xl'>
                  Cybersecurity Basics: Understanding Threats and Protecting
                  Your Systems
                </p>

                <p className='mt-3 font-medium dark:text-white/80'>
                  By Daniel Emeka
                </p>

                <div className='mt-5 flex items-center justify-between'>
                  <div className='flex items-center justify-between rounded-full bg-gray-300/80 text-sm text-primary lg:text-primary'>
                    <span className='px-3'>11 min read</span>
                    <span className='rounded-full bg-gray-500/20 px-5 py-3'>
                      7th June
                    </span>
                  </div>
                  <p className='text-sm font-bold text-sub lg:text-base lg:text-sub'>
                    See More...
                  </p>
                </div>
              </div>
            </article>
          </section>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default Blog;
