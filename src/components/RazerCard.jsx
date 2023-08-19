import React from 'react'

import razerLogo from '/images/razer-logo.png'

const RazerCard = () => {
  return (
    <div className='p-4 w-full h-52'>
        <div className='bg-black h-full rounded-lg flex flex-col justify-center items-center '>
          <img src={razerLogo} alt='Logo da Razer' className='translate-x-2'/>
          <p className='font-bold text-xl mt-2'>CONEXÃO GAMER</p>            
          <p className=''><span className='text-primary font-semibold'>Razer</span> paiN Gaming</p>            
        </div>
    </div>
  )
}

export default RazerCard