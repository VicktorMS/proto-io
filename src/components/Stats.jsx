import React from 'react'

const Stats = ({icon, alt, children, label, className}) => {
  return (
    <div className={`text-center flex flex-col justify-center lg:justify-start lg:text-start ${className}`}>
        <img src={icon} alt={"icone " + label} className='h-4 w-4 lg:h-5 lg:w-5'/>
        <p className='font-bold text-4xl'>{children}</p>
        <p className='text-sm text-accent-content'>{label}</p>
    </div>
  )
}

export default Stats