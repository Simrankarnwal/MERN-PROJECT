import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
 <>
 <div className="text-2xl text-center pt-8 border-t">
  <Title text1={"ABOUT"} text2={"US"}/>
 </div>
 <div className="my-10 flex flex-col md:flex-row gap-16">
  <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="" />
  <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non fugiat repellat suscipit eum? Iste voluptas, amet at aspernatur animi exercitationem.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta harum consequuntur nostrum explicabo magnam vero! Cupiditate iste dolore deserunt hic necessitatibus! Nulla tempora, ad repudiandae nisi repellendus cupiditate architecto.</p>
  
  <b className='text-gray-800'> OUR MISSION
    </b>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita vel illum illo provident nam culpa aut. Pariatur ipsam omnis quae.</p>
    </div>
       </div>
    <div className="text-4xl py-4">
      <Title text1={"WHY"} text2={"CHOOSE US"}/>

<div className="flex flex-col md:flex-row text-sm mb-20">
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Quality Assurance:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae esse quia nemo ex, veniam inventore. Provident ratione minus error!</p>
  </div>
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Convenience:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae esse quia nemo ex, veniam inventore. Provident ratione minus error!</p>
  </div>
  <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
    <b>Exceptional Customer Service:</b>
    <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab recusandae esse quia nemo ex, veniam inventore. Provident ratione minus error!</p>
  </div>
 
</div>
<NewsLetterBox />
 </div>
 </>
  )
}

export default About