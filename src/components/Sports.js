import { useSelector } from "react-redux";
import useSportsNews from "../hooks/useSportsNews"

import NewsCard from "./NewsCard";

const Sports=()=>{
    useSportsNews();//get the sports news
    const sportsNews=useSelector(store=>store.categories?.sportsCategory);
    if(!sportsNews)return 

    return <div className=' w-full p-2 flex flex-wrap overflow-y-auto '>
    {
      sportsNews?.map((news,index)=><NewsCard  key ={index} urlToImage={news.urlToImage} description={news.description} title={news.title}/>) 
    
      }
      </div>
    
    
    
}
export default Sports;