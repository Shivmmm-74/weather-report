import React from "react";

const AboutUs = () => {
  return (
    <div className='bg-gradient-to-b from-green-400 to-blue-600 min-h-screen flex flex-col items-center text-white mx-2 sm:mx-64 mt-10'>
      <header className='w-full text-center py-8 bg-green-500 shadow-md'>
        <h1 className='text-4xl font-bold tracking-wide'>
          About Climate Connect
        </h1>
        <p className='text-sm font-light mt-2'>
          Empowering you with real-time, accurate weather updates.
        </p>
      </header>

      <main className='flex flex-col items-center w-11/12 max-w-4xl mt-10 text-center space-y-8'>
        <section className='p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md'>
          <h2 className='text-3xl font-bold mb-4'>Who We Are</h2>
          <p className='text-lg'>
            Climate Connect is your go-to platform for weather insights. Whether
            it's planning your day, a vacation, or outdoor activities, we ensure
            you're always informed about the weather conditions.
          </p>
        </section>

        <section className='p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md'>
          <h2 className='text-3xl font-bold mb-4'>Our Mission</h2>
          <p className='text-lg'>
            To deliver the most accurate and up-to-date weather forecasts while
            providing an intuitive and user-friendly interface.
          </p>
        </section>

        <section className='p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md'>
          <h2 className='text-3xl font-bold mb-4'>Why Choose Us?</h2>
          <p className='text-lg'>
            We combine cutting-edge technology with global coverage to ensure
            that you stay ahead of the weather. Experience precision,
            reliability, and convenience—all in one platform.
          </p>
        </section>
      </main>

      <footer className='w-full mt-10 py-4 bg-green-700 text-center'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Climate Connect. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default AboutUs;
