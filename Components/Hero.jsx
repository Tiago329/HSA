import React from 'react'
import Avatar from '../public/Avatar.jsx'

/* This example requires Tailwind CSS v3.0+ */
export default function Hero() {
    return (
      <div className="bg-white">
        <div className="mx-auto sm: sm: lg:">
          <div className=" bg-white px-6 pt-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">   
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                Handsome Ants coming soon...
              </h2>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-pink-200 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Mint
                </a>
            
              </div>
            </div>
            <div className=" mt-16 h-80 lg:mt-8 ">
            
            <Avatar/> 
          </div>
            
          </div>
        </div>
      </div>
    )
  }
  