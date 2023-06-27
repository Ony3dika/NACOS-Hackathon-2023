import Navbar from "../components/navbar";

function Home() {
  return (
    <>
      <div className='min-h-screen bg-base'>
        <Navbar />
        
        {/* Intro */}
        <section className='container mx-auto mt-8 w-full px-5 md:px-10 lg:px-20'>
          <div className='flex items-center justify-center'>
            <p className='rounded-lg bg-gray-200 p-5 py-10 text-center text-xl font-bold text-sub lg:text-3xl'>
              Welcome to <span className='text-primary'>CodeCraft</span> <br />
              Your Gateway to the World of Software Sorcery!
            </p>
          </div>
        </section>

        {/* Trending */}
      </div>
    </>
  );
}

export default Home;
