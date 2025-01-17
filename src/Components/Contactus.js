import React from "react";

const ContactUs = () => {
  return (
    <div className='bg-gradient-to-b from-blue-500 to-indigo-900 min-h-screen flex flex-col items-center text-white mx-2 sm:mx-64 my-10'>
      <header className='w-full text-center py-8 bg-blue-600 shadow-md'>
        <h1 className='text-4xl font-bold tracking-wide'>Contact Us</h1>
        <p className='text-sm font-light mt-2'>
          Have a question or feedback? We'd love to hear from you!
        </p>
      </header>

      <main className='flex flex-col items-center w-11/12 max-w-4xl mt-10 text-center space-y-8'>
        <section className='p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md'>
          <h2 className='text-3xl font-bold mb-4'>Get in Touch</h2>
          <p className='text-lg'>
            We’re here to help! Reach out to us with any questions, suggestions,
            or concerns.
          </p>
        </section>

        <section className='p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md'>
          <h2 className='text-3xl font-bold mb-4'>Contact Details</h2>
          <div className='text-left space-y-2'>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href='mailto:abhinavranjan1523@gmail.com'
                className='text-blue-300 underline'
              >
                abhinavranjan1523@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +91-6203926247
            </p>
            <p>
              <strong>Address:</strong> Climate Connect, MCA Department, India
            </p>
          </div>
        </section>

        <section className='p-6 bg-white bg-opacity-10 rounded-lg shadow-md backdrop-blur-md'>
          <h2 className='text-3xl font-bold mb-4'>Follow Us</h2>
          <div className='flex justify-center space-x-6 text-3xl'>
            <a
              href='https://github.com/abhinavranjan23'
              target='_blank'
              rel='noopener noreferrer'
            >
              🌐
            </a>
            <a
              href='https://www.linkedin.com/in/abhinav-ranjan-a790ba276/'
              target='_blank'
              rel='noopener noreferrer'
            >
              💼
            </a>
            <a
              href='https://twitter.com/abhinavranjan'
              target='_blank'
              rel='noopener noreferrer'
            >
              🐦
            </a>
          </div>
        </section>
      </main>

      <footer className='w-full mt-10 py-4 bg-blue-700 text-center'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Climate Connect. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;
