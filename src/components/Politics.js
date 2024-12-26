import React from 'react'
import usePoliticsNews from '../hooks/usePoliticsNews'
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';

const Politics = () => {
    usePoliticsNews();
   const  politicsNews=useSelector(store=>store.categories?.politicsCategory);
   if(!politicsNews)return <h1>politics</h1>

    return <div className=' w-full p-2 flex flex-wrap overflow-y-auto '>
    {
      politicsNews?.map((news,index)=><NewsCard key ={index} urlToImage={news.urlToImage} description={news.description} title={news.title}/>) 
    
      }
      </div>
}

export default Politics;