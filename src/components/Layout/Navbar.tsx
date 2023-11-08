import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/KoinxLogo.svg';
import Hamburger from '@/assets/hamburger.svg';
const Navbar = () => {
  const Navlinks = ['Features', 'Exchanges', 'How it Works?', 'Blog', 'About us']

  return (
    <div className='bg-white px-6 md:px-[60px] py-[22px] flex items-center justify-between navbar'>
      <Image 
      alt='logo'
      src={Logo}
      width={200}
      height={200}
      className='w-[81px] md:w-24 h-5 md:h-6 object-contain'
      />
      <div>
        <Image 
        alt='hamburger'
        src={Hamburger}
        width={200}
        height={200}
        className='w-[28px] h-[28px] object-contain block md:hidden'
        />
      </div>
      <div className='hidden md:flex items-center justify-center gap-[69px] '>
        <ul className='flex items-center justify-center gap-8'>
          {
            Navlinks.map((link, index) => <li key={index} className='text-[--gray-1] text-base font-semibold tracking-[-0.16px]'>{link}</li>)
          }
        </ul>
        <button className='rounded-[4px] text-[--signIn-btn] signIn-btn px-10 py-2 flex items-center justify-center text-base font-semibold tracking-[-0.16px]'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
