import React from 'react'
import sm from '../assets/images/saintmartin.jpg'
import { Link } from 'react-router-dom'

const Explore = () => {
  return (
    
    <section class="bg-white">
    {/* <!-- Title Section --> */}
    <div class="text-center py-10">
      <h1 class="text-4xl font-bold text-gray-700 mb-4">Explore Packages</h1>
      <p class="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, rerum.</p>
    </div>
  
    {/* <!-- Content Section --> */}
    <div class="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-5 sm:py-16">
      <div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        <div class="relative">
          <Link to="#" className="group relative block">
                <div className="relative h-[350px] sm:h-[450px]">
                    <img
                    src={sm}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-60"
                    />
                </div>
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                    <h3 className="text-xl font-medium text-white">Saint Martins Tour</h3>
                    <p className="mt-1.5 text-pretty text-xs text-white">
                    3 Nights, 2 Days
                    </p>
                </div>
            </Link>
        </div>
  
        <div class="relative">
        <Link to="#" className="group relative block">
            <div className="relative h-[350px] sm:h-[450px]">
                <img
                src={sm}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-60"
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Saint Martins Tour</h3>
                <p className="mt-1.5 text-pretty text-xs text-white">
                3 Nights, 2 Days
                </p>
            </div>
        </Link>
        </div>
  
        <div class="relative">
        <Link to="#" className="group relative block">
            <div className="relative h-[350px] sm:h-[450px]">
                <img
                src={sm}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-60"
                />
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Saint Martins Tour</h3>
                <p className="mt-1.5 text-pretty text-xs text-white">
                3 Nights, 2 Days
                </p>
            </div>
        </Link>
        </div>

        
      </div>
      <div className="text-center mt-8">
      <Link to='/packages' className="bg-sky-500 text-white font-semibold py-2 px-6 hover:bg-sky-300 hover:text-gray-700 transition">
          Explore More
      </Link>
      </div>
    </div>
  
  </section>

  )
}

export default Explore