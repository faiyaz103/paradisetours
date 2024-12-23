import React from 'react'
import banner from '../assets/images/banner.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section
  className="relative bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${banner})` }}
>
  <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 sm:bg-gradient-to-r"></div>

  <div className="relative mx-auto max-w-screen-xl px-4 py-48 sm:px-6 lg:px-8"> {/* Increased padding here */}
    <div className="max-w-xl text-center sm:text-left">
      <h1 className="text-3xl text-gray-700 font-extrabold sm:text-5xl">
        Let us enhance your
        <strong className="block font-extrabold text-sky-500"> Travel Experience. </strong>
      </h1>
      <p className="mt-4 text-gray-700 max-w-lg sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
      </p>
      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <Link
          to='/packages'
          className="block w-full bg-sky-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-sky-300 hover:text-gray-700 focus:outline-none focus:ring sm:w-auto"
        >
          Get Started
        </Link>
        <Link
          to='/contact'
          className="block w-full bg-white px-12 py-3 text-sm font-medium text-gray-700 shadow hover:bg-gray-100 focus:outline-none focus:ring sm:w-auto"
        >
          Learn More
        </Link>
      </div>
    </div>
  </div>
</section>

  )
}

export default Banner