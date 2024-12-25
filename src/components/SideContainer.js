import { useSelector } from "react-redux";
import NewsCard from "./NewsCard";

const SideContainer=()=>{
    const fetchedNews=useSelector((store)=>store.news);
    return(
       
            <div className=''>
      {fetchedNews?.map((news,index)=><NewsCard key ={index} urlToImage={news.urlToImage} description={news.description} title={news.title}/>) 
    
  }
      
    </div>
        
    )
}
export default SideContainer;