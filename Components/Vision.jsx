import React from 'react'
import Image from 'next/image'

const Vision = () => {
  return (
    <div class="py-20 bg-blue-200">
    <div class="container mx-auto px-6 md:px-12 xl:px-32">
        <div class="mb-16 text-center">
            <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">Our Vision</h2>
            
        </div>
        <div class="grid gap-12 items-center md:grid-cols-2">
            <div class="space-y-4 text-center">
                <img class="rounded-lg cursor-pointer transform transition duration-500 hover:scale-110 w-64 h-64 mx-auto object-cover md:w-40 md:h-40 lg:w-64 lg:h-64" 
                    src="/banana3.jpg" alt="woman" loading="lazy" width="640" height="805"/>
                <div>
                </div>
            </div>
            <div class="grid gap-12 items-center md:grid-cols-1">
            <h4>You might have lived your whole life not beelieving the power you have inside of you. You are more creative than you think. A beeing; made to create. <br/>
            <br/>
Our mission is to motivate you to bee who you are meant to bee. Together we can explore and empower this side of you. With our resources we want to create something bigger than us, something meant to stay.
<br/><br/>
For the community, by the community.
<br/>
<br/>
WE ARE BEEINGS.</h4>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default Vision