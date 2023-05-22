import React from 'react'
import {stats} from "../consts"
import styles from '../style'

export default function Stats() {
  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>

{
  stats.map((stat,i)=>(
<div key={i} className={`flex-1 flex justify-start items-center flex-row m-3 `}>
<h4 className='font-poopins font-semibold xs:text-[40px] text-[30px] text-white
 leading-[43px] xs:leading-[53px]'>{stat.value}</h4>
<p className='font-poopins font-normal xs:text-[20px] text-[15px] text-gradient ml-3 uppercase
 leading-[21px] xs:leading-[26px]'>{stat.title}</p>
</div>
  ))
}

    </section >
  )
}
