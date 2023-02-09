import Image from 'next/image'

function Avatar() {
  return <Image src="/banana3.jpg" alt="gif" width="380" height="100" className='rounded-lg cursor-pointer transform transition duration-500 hover:scale-110 '/>
}

export default Avatar