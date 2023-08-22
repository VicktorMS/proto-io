import React from 'react'

const NewsCard = ({children}) => {
  return (
    <div className='mx-4 rounded-lg text-secondary-content flex'>
        {children}
    </div>
  )
}

export default NewsCard