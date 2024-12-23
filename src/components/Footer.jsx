import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-sky-500 mt-20">
  <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">

    <div className="lg:flex lg:items-end lg:justify-between">
      <div>
        <div className="flex justify-center text-teal-600 lg:justify-start">
          <img
                src={logo} // Replace with the actual path to your logo
                alt="Paradise Tours Logo"
                className="h-8 mr-2" // Adjust size of the logo (height 8)
            />
          <h1 className='text-gray-100 font-bold text-lg'>Paradise Tours</h1>
        </div>

        <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-100 lg:text-left">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa
          cum itaque neque.
        </p>
      </div>

      <ul
        className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12"
      >
        <li>
          <a className="text-gray-100 transition hover:text-gray-700" href='/'> Home </a>
        </li>

        <li>
          <Link className="text-gray-100 transition hover:text-gray-700" to='/packages'> Packages </Link>
        </li>

        <li>
          <Link className="text-gray-100 transition hover:text-gray-700" to='/blog'> Blog </Link>
        </li>

        <li>
          <Link className="text-gray-100 transition hover:text-gray-700" to='/contact'> Contact Us </Link>
        </li>
      </ul>
    </div>

    <p className="mt-12 text-center text-sm text-gray-100 lg:text-right">
      &copy; Faiyaz Mahmud {new Date().getFullYear()}.
    </p>
  </div>
</footer>
  )
}

export default Footer