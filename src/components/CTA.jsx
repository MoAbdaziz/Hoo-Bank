import React from 'react'
import styles from '../style'
import Button from './Button'


export default function CTA() {
  return (
<section className={`${styles.flexCenter} ${styles.marginY} box-shadow ${styles.padding} sm:flex-row flex-col rounded-[20px] bg-black-gradient-2`}>
<div className='flex flex-1 flex-col'>
  <h2 className={`${styles.heading2}`}>Lets try our service now </h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
</div>
  <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
    <Button text="Get Started" />
  </div>
</section>
  )
}
