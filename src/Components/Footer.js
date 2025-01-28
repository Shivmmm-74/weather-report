import React from "react";
import logo from "../logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className='w-full p-8 bg-emerald-50'>
        <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between'>
          <img src={logo} alt='logo' className='h-10 sm:h-14'></img>

          <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
            <li>
              <Link
                to='/about'
                className='text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm'
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm'
              >
                Contact Us
              </Link>
            </li>
            <li>
              <a
                href='https://github.com/abhinavranjan23/weather_report'
                className='text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm'
              >
                Contribute
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm'
              >
                License
              </a>
            </li>
          </ul>
        </div>
        <p className='block mb-4 text-sm text-center text-slate-500 md:mb-0 border-t border-slate-200 mt-4 pt-4'>
          Copyright © 2025&nbsp;
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
