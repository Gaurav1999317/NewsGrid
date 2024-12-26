import { useDispatch, useSelector } from "react-redux"
import { API_KEY } from "../utils/constants";
import { addSportsCategory } from "../utils/CategoriesSlice";
import { useEffect } from "react";

const useSportsNews=()=>{
    const sportsNews= useSelector(store=>store.categories?.sportsNews);
    const dispatch=useDispatch();
    const  fetchSportsNews =async()=>{
        const data= await fetch("https://newsapi.org/v2/top-headlines?category=sports&apiKey="+API_KEY);
        const json = await data.json();
        dispatch(addSportsCategory(json.articles));
    }
    useEffect(()=>{
       !sportsNews&&fetchSportsNews(); 
    },[])
}
export default useSportsNews;