import { useDispatch, useSelector } from "react-redux"
import { addPoliticsCategory } from "../utils/CategoriesSlice";
import { API_KEY } from "../utils/constants";
import { useEffect } from "react";

const usePoliticsNews=async()=>{
const politicsNews=useSelector(store=>store.categories?.politicsCategory)
const dispatch=useDispatch();
const fetchPolticsNews=async()=>{
    const data= await fetch("https://newsapi.org/v2/top-headlines?category=politics&apiKey="+API_KEY);
         const json=await data.json(); 
         dispatch(addPoliticsCategory(json.articles));
         
        }
        useEffect(()=>{
            !politicsNews&&fetchPolticsNews();
        },[])
    
}
export default usePoliticsNews;