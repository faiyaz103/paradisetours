import React from 'react'
import { Link } from 'react-router-dom'

const Discover = () => {
  return (
    <section class="bg-white">
    {/* <!-- Title Section --> */}
    <div class="text-center py-10">
      <h1 class="text-4xl font-bold text-black mb-4">Discover New Adventures</h1>
      <p class="text-lg text-gray-600">Explore, discover, and find inspiration through these exciting journeys.</p>
    </div>
  
    {/* <!-- Content Section --> */}
    <div class="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-5 sm:py-16">
      <div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        <div class="relative">
          <a href="#_" class="block overflow-hidden group shadow-lg">
            <img src="https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxmb3Jlc3R8ZW58MHwwfHx8MTcyNjkxODYzNHww&ixlib=rb-4.0.3&q=80&w=1080" class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Adventure"/>
          </a>
          <div class="relative mt-5">
            <a href="#" class="block mb-3 hover:underline">
              <h2 class="text-2xl font-bold leading-5 text-gray-700 transition-colors duration-200 hover:text-sky-500">
                Journey to the Mountains
              </h2>
            </a>
            <p class="mb-4 text-gray-600">Escape the hustle and explore the serene beauty of the mountains. Discover the peace and adventure that awaits.</p>
          </div>
        </div>
  
        <div class="relative">
          <a href="#_" class="block overflow-hidden group shadow-lg">
            <img src="https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Ocean"/>
          </a>
          <div class="relative mt-5">
            <a href="#" class="block mb-3 hover:underline">
              <h2 class="text-2xl font-bold leading-5 text-gray-700 transition-colors duration-200 hover:text-sky-500">
                Explore the Deep Oceans
              </h2>
            </a>
            <p class="mb-4 text-gray-600">Dive into the deep oceans and explore the beauty and mystery of the underwater world. A truly unforgettable experience.</p>
          </div>
        </div>
  
        <div class="relative">
          <a href="#_" class="block overflow-hidden group shadow-lg">
            <img src="https://images.unsplash.com/photo-1629112250823-3f091e001783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxEZXNlcnQlMjBTYWZhcml8ZW58MHwwfHx8MTcyNjkxODcwOHww&ixlib=rb-4.0.3&q=80&w=1080" class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110" alt="Desert Adventure"/>
          </a>
          <div class="relative mt-5">
            <a href="#" class="block mb-3 hover:underline">
              <h2 class="text-2xl font-bold leading-5 text-gray-700 transition-colors duration-200 hover:text-sky-500">
                Desert Safari
              </h2>
            </a>
            <p class="mb-4 text-gray-600">Venture into the heart of the desert and experience the thrill of a safari amidst the dunes.</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
      <Link to='/blog' className="bg-sky-500 text-white font-semibold py-2 px-6 hover:bg-sky-300 hover:text-gray-700 transition">
          Discover More
      </Link>
      </div>
    </div>
  
  </section>
  )
}

export default Discover