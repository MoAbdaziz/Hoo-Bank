import React from 'react'
import { card } from '../assets'
import styles from '../style'
import Button from './Button'
import { layout } from '../style'
export default function CardDeal() {
  return (
   <section className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>Find a better card deal <br className='sm:block hidden' /> in few easy steps.</h2>
     <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit dicta velit quos nemo quidem delectus omnis eos, autem culpa est.</p>
     <Button text="Get Started" styles="mt-10 rounded-[10px]" />
    </div>
<div className={`${layout.sectionImg}`}>
<img src={card} alt="card" className={`w-[100%] h-[100%]`} />
</div>


   </section>
  )
}
