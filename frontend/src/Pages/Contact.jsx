import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
  <>
    <div className="text-center tex-2xl border-t pt-10">
      <Title text1={"CONTACT"} text2={"US"}/>
    </div>
    <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
<img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
<div className="flex flex-col justify-center items-start gap-6">
  <p className='font-semibold text-xl text-gray-600'>Our Store</p>
  <p className='text-gray-500'>45454 Habbis Metro <br />Suite 346, Washington, USA</p>
  <p className='text-gray-500'>Tel: (455) 767-0132 <br />Email: admin@forever.com</p>
  <p className='font-semibold text-xl text-gray-600'>Carrers at Forever</p>
   <p className='text-gray-500'>Learn more about our team and jon openings.</p>
   <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
</div>

    </div>
    <NewsLetterBox />
  </>
  )
}

export default Contact