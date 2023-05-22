import React from 'react'
import { quotes } from '../assets'

export default function FeedbackCard({content,name,title,img}) {
  return (
    <div className='flex justify-between sm:mr-5 mr-0 my-5 feedback-card flex-col px-10 py-12 rounded-[20px] md:mr-10 max-w-[370px]'>
<img src={quotes} alt="" className='w-[42px] h-[27px] object-contain' />

<p className=' text-white my-10 leading-[32px] font-poppins font-normal text-[18px]'>

  {content}
</p>
<div className='flex flex-row'>
<img src={img} alt="" className={`w-[48px] h-[48px] rounded-full`} />
<div className='flex flex-col ml-4'>
<h4 className=' text-white  leading-[32px] font-poppins font-semibold text-[20px]'>{name}</h4>
<p className=' text-dimWhite  leading-[24px] font-poppins font-normal text-[16px]'>{title}</p>
</div>
</div>
    </div>
  )
}
