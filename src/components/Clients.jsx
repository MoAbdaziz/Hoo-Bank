import React from 'react'
import { clients } from '../consts'
import styles from '../style'
export default function Clients() {
  return (
   <section className={`${styles.flexCenter} my-4`}>

<div className={`${styles.flexCenter} flex-wrap w-full`}>
{
  clients.map(({logo},i)=>(
    <div className={`${styles.flexCenter} sm:min-w-[192px] min-w-[120px] flex-1`} key={i}>
      <img src={logo} alt="" className={`sm:w-[192px]   w-[100px] object-contain `} />
    </div>
  ))
}
</div>
   </section>
  )
}
