import React from 'react'
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard';

const MainContainer = () => {
  const fetchedNews=useSelector(store=>store.news);
  
  
  if(fetchedNews.length===0)return
  
  const titles = fetchedNews.map(article => article.title);
 

 
    
  return (
    <div className=' w-full p-2 flex flex-wrap overflow-y-auto '>
    {
      fetchedNews?.map((news,index)=><NewsCard  key ={index} urlToImage={news.urlToImage} description={news.description} title={news.title}/>) 
    
      }
      </div>
    
  )
}
// <div className='m-2 bg-black w-8/12 text-white '>
    //     {fetchedNews[0].urlToImage&&<img src={fetchedNews[0].urlToImage}
    //     className='h-auto w-8/8'
    //     alt="newsimage" 
    //     />}
    //     <div className='mx-2 absolute -mt-14 w-8/12 bg-opacity-20 
    //      text-white'>
    //         <p>{fetchedNews[0].description}</p>
    //     </div>
    // </div>

export default MainContainer