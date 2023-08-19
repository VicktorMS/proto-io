import React from 'react'

import discordLogo from '/icons/discord-icon.svg'
import twitchLogo from '/icons/twitch-icon.svg'
import overwolfLogo from '/icons/overwolf-icon.png'


const CommunityTab = () => {
  return (
    <div className='flex justify-end px-4 pb-6 gap-3'>
        <img className='w-7 h-6' src={overwolfLogo} alt='Servidor Overwolf'/>
        <img className='w-6' src={twitchLogo} alt='Canal na Twitch'/>
        <img className='w-7 h-7' src={discordLogo} alt='Servidor no Discord'/>
    </div>
  )
}

export default CommunityTab