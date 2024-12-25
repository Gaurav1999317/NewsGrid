import React from 'react'
import { useSelector } from 'react-redux'
import NewsCard from './NewsCard';

const SecondaryContainer = () => {
  const fetchedNews=useSelector(store=>store.news);
  if(fetchedNews.length===0)return
  return (
    <div className=''>
      {
      fetchedNews?.map((news,index)=><NewsCard key ={index} urlToImage={news.urlToImage} description={news.description} title={news.title}/>) 
    
      }
      
    </div>
  )
}


export default SecondaryContainer