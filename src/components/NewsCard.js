import React from 'react'


const NewsCard = ({urlToImage ,description , title}) => {
  if(!urlToImage)
    return 
  
  return (
    <div  className='w-3/12  h-auto mx-14 my-4 bg-gray-200 shadow-lg'>
      <img src={urlToImage}
      className="w-7/12 h-auto mx-10 my-2"alt="newsimage"/>
      <div>
      <h1 className='font-bold text-xl m-2'>{title}</h1>
      <p className='m-2 text-sm'>{description}</p>
      </div>

    </div>
  )
}

export default NewsCard