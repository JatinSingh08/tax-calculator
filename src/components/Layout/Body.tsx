import React from 'react'
import TaxCalculator from '../TaxCalculator/TaxCalculator';
import Image from 'next/image';
import FreeBanner from '@/assets/freeBanner.svg';
import FAQs from '../Faq/FAQs';
import SubscribeBanner from '@/assets/subscribe.svg';
import ThanksBanner from '@/assets/thanksBanner.svg';
import SignupAdv from '../SignupAdv/SignupAdv';
import Subscribe from '../Subscribe/Subscribe';

const Body = () => {
  return (
    <div className='bg-[--body-bg] min-h-[100vh] px-[14px] py-5 sm:py-[29px] sm:px-14'>
      {/* Hero Section */}
      <div className=' flex flex-col md:flex-row items-start justify-between'>
        <div className='w-full flex flex-col gap-16'>
          <TaxCalculator />
          <FAQs />
        </div>
        <div className='ml-5 w-auto  md:mt-0'>
          <Image 
          alt='freeBanner'
          width={200}
          height={200}
          src={FreeBanner}
          className='hidden w-full md:flex cursor-pointer'
          draggable='false'
          />
        </div>
      </div>

        {/* Subscribe Banner  */}
        <div className='w-full'>
          <Subscribe />
        </div>

        <div className='w-full mt-6'>
          <Image 
              alt='SubscribeBanner'
              width={200}
              height={200}
              src={ThanksBanner}
              className=' flex md:hidden w-full mx-auto object-contain cursor-pointer'
              draggable='false'
          />
        </div>
    </div>
  )
}

export default Body
