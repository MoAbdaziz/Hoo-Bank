import React from 'react'

const Button = (Para) => {
  return (
    <button type='button' className={`font-poppins text-[18px] text-primay outline-none font-medium ${Para.styles} py-4 px-6 bg-blue-gradient`}>
{Para.text}
    </button>
  )
}

export default Button