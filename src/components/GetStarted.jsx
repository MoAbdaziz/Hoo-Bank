import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'
export default function GetStarted() {
  return (
    <div className={` p-[2px] cursor-pointer ${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient`}>
<div className={` rounded-full ${styles.flexCenter} bg-primary flex-col w-[100%] h-[100%]`}>

<div className={`${styles.flexStart} flex-row`}>
<p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
  <span className='text-gradient'>
    Get
  </span>
  </p>
  <img className='w-[23px] h-[23px] object-contain' src={arrowUp} alt="" />
 

</div>
<p className='font-poppins font-medium text-[18px] leading-[23px]'>
  <span className='text-gradient'>
    Started
  </span>
 
</p>
</div>



    </div>
  )
}
