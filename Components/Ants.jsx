import React from 'react'
import Image from 'next/image'
import Avatar from '../public/Avatar.jsx'

const Team = () => {
  return (
    <div class="py-20 bg-white">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">This is a HandSome Ant</h2>
            
        </div>
        <div class="grid gap-12 items-center md:grid-cols-2">
            <div class="space-y-4 text-center">
            <Image src="/banana2.jpg" alt="gif" width="500" height="400" className='z-10 rounded-lg cursor-pointer transform transition duration-500 hover:scale-110'/>
                  
            </div>
            <div class="grid gap-12 items-center md:grid-cols-1">
            <h2>A Handsome Ants comes in many shapes and colors. This is the most common type. Handsome Ants are all about inclusivity, so much so that it's part of their biology. Handsome Ants are capable of creating any kind of animal or Beeing called hybrids! Hybrids are just as much Beeings as most common type. Being a Handsome Ants comes from the heart, not from your shell. This leaves room for a lot of creative appearances. Let's meet other Handsome Ants below.
<br/>
<br/>
Our collection consists of 10,000 uniquely created Handsome Ants, with over 230+ traits, including a couple secret ones...
<br/>
<br/>
Every Handsome Ant and trait has been digitally hand-drawn by Pedro Ferreira.</h2>
            </div>
            
        </div>
        <div class="grid gap-12 items-center md:grid-cols-4 mx-auto max-w-7xl py-24 sm:px-6 sm:py-15 lg:px-8">
            <div class="space-y-4 text-center 0">
            <Image src="/banana2.jpg" alt="gif" width="200" height="50" className=' rounded-lg cursor-pointer transform transition duration-500 hover:scale-110'/>
            <h3> Alien Ant</h3>
            </div>
            <div class="space-y-4 text-center">
            <Image src="/banana3.jpg" alt="gif" width="200" height="50" className=' rounded-lg cursor-pointer transform transition duration-500 hover:scale-110'/>
            <h3> Dumb Ant</h3>
            </div>
            <div class="space-y-4 text-center">
            <Image src="/banana2.jpg" alt="gif" width="200" height="50" className=' rounded-lg cursor-pointer transform transition duration-500 hover:scale-110'/>
            <h3> Cunt Ant</h3>
            </div>
            <div class="space-y-4 text-center">
            <Image src="/banana3.jpg" alt="gif" width="200" height="50" className=' rounded-lg cursor-pointer transform transition duration-500 hover:scale-110'/>
            <h3> Stupid Ant</h3>
            </div>
        </div>
    </div>
</div>
  )
}

export default Team