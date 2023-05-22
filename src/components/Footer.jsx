import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks,socialMedia } from '../consts'

export default function Footer() {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
<div className={`${styles.flexStart} mb-b w-full flex-col md:flex-row`}>
<div className={`flex-1 flex-col flex justify-start mr-10`}>
  <img src={logo} alt="" className='w-[266px] h-[72px] object-contain' />
  <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
A new way to make the payments easy, reliable and secure.  </p>
</div>
<div className='flex-[1.5] flex flex-row flex-wrap justify-between md:mt-0 mt-10'>
  {
    footerLinks.map((link,i)=>(
      <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`} key={i}>
<h4 className={`font-poppins font-medium text-[18px] leading-[27px] text-white`}>{link.title}</h4>
<ul className='list-none mt-4'>
  {link.links.map((item,i)=>(
    <li className={`font-poppins font-normal  text-[16px] ${i !==link.links.lenght -1 ? "mb-5" : "mb-0" } cursor-pointer text-dimWhite leading-[24px] hover:text-secondary`} key={i}>
{item.name}
    </li>
  ))}
</ul>
      </div>
    ))
  }

</div>
</div>


<div className={`w-full justify-between items-center pt-6 border-t-[1px] border-t-[dimWhite] md:flex-row flex-col  flex `}>
<p className={`font-poppins font-normal text-center text-[18px] leading-[27px] text-white`}>
Copyright Ⓒ 2022 HooBank. All Rights Reserved.
</p>
<div className='flex flex-row md:mt-0 mt-6'>
{
  socialMedia.map((item,i)=>(
    <img key={i} src={item.icon} className={`w-[21px] h-[21px] ${ i !== socialMedia.length -1 ?  "mr-6" :"mr-0"} object-contain cursor-pointer`} />
  ))
}
</div>
</div>
    </section>
  )
}
