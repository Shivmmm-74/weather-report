import React from "react";
import logo from "../logo.png";
const Footer = () => {
  return (
    <div>
      <footer class='w-full bg-white p-8'>
        <div class='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between'>
          <img src={logo} alt='logo' className='h-10 sm:h-14'></img>

          <ul class='flex flex-wrap items-center gap-y-2 gap-x-8'>
            <li>
              <a
                href='#'
                class='text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm'
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href='#'
                class='text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm'
              >
                License
              </a>
            </li>
            <li>
              <a
                href='#'
                class='text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm'
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href='#'
                class='text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm'
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <p class='block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4'>
          Copyright © 2024&nbsp;
          <a
            href='https://material-tailwind.com/'
            target='_blank'
            rel='noreferrer'
          >
            Climate Connect
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Footer;
