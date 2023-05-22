import React from 'react'
import { feedback } from '../consts'
import { layout } from '../style'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
export default function Testimonials() {
  return (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`} id='clients'>

<div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />





<div className='w-full flex justify-between items-center   z-[1]   md:flex-row flex-col sm:mb-16 mb-6 relative '>
<h1 className={`${styles.heading2}`}>What people are <br className='sm:block hidden' /> saying about us</h1>
<div className='w-full md:mt-0 mt-6'>
<p className={`${styles.paragraph} max-w-[450px] text-left `}>
  Everything you need to accept card paryments and grow your business anywhere on the planet
</p>


</div>
</div>

<div className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container z-[1] realtive`}>
{
  feedback.map((item,i)=>(
<FeedbackCard {...item} key={i} />
  ))
}

</div>
    </section>
  )
}
