import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
<div class="py-20 bg-pink-200">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Meet the team</h2>
        </div>
        <div class="grid gap-12 items-center md:grid-cols-3">
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/tiagoCEO.jpg" alt="woman" loading="lazy" width="640" height="805"/>
                <div>
                    <h4 class="text-2xl">Tiago Marques</h4>
                    <span class="block text-sm text-gray-500">CEO-Founder</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-48 md:h-64 lg:w-64 lg:h-80" 
                    src="/PedroArtist.png" alt="man" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 class="text-2xl">Pedro Ferreira</h4>
                    <span class="block text-sm text-gray-500">Chief Technical Artist</span>
                </div>
            </div>
            <div class="space-y-4 text-center">
                <img class="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/banana2.jpg" alt="woman" loading="lazy" width="1000" height="667"/>
                <div>
                    <h4 class="text-2xl">João Nogueira</h4>
                    <span class="block text-sm text-gray-500">Chief Operations Dumbass</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Team