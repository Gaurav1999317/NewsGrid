


import MainContainer from "./MainContainer";
import { useFetchNews } from "../hooks/useFetchNews";
import Header from "./Header";
import { useSelector } from "react-redux";


const Browse=()=>{
    
    
   
   useFetchNews();
    return(
        <div className="" >
            
            <MainContainer/>
            
        </div>
    )
}
export default Browse;