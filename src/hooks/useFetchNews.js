import { useDispatch, useSelector } from "react-redux";
import { addNews } from "../utils/newsSlice";
import { useEffect } from "react";
import { API_KEY } from "../utils/constants";

export const useFetchNews=()=>{
    const newsFetched=useSelector(store=>store.fetchedNews);

    const dispatch=useDispatch();
    const fetchNews=async()=>{
     const data= await fetch("https://newsapi.org/v2/top-headlines?category=sports&apiKey="+API_KEY);
     const json=await data.json();
     
     
     
     dispatch(addNews(json.articles))     
    }
    useEffect(()=>{
        !newsFetched&&fetchNews(); //if there is already data fetched then no need to call again
    },[])

}