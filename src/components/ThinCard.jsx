import React from 'react'


const ThinCard = ({src, alt, bgColor = 'bg-secondary', children, contentStyle}) => {
  return (
    <div className='w-full px-4 h-40'>
        <div className={`${bgColor} w-full h-full rounded-xl flex`}>
            <div className={`h-full w-full ${contentStyle}`}>
                {children}
            </div>
            <img 
            src={src} 
            alt={alt} 
            className='h-full w-2/5  object-cover rounded-r-md bg-black'/>
        </div>
    </div>
  )
}

export default ThinCard