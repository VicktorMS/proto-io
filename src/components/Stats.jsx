import React from 'react'

const Stats = ({icon, alt, children, label}) => {
  return (
    <div className='text-center flex flex-col justify-center'>
        <img src={icon} alt={"icone " + label} className='h-4'/>
        <p className='font-bold text-4xl'>{children}</p>
        <p className='text-sm text-accent-content'>{label}</p>
    </div>
  )
}

export default Stats