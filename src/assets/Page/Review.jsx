
import { useLocation } from "react-router-dom"
import { useEffect,useState } from "react";
import supabase from "./supabase";
function Review() {
  const[movie,setmovie]=useState({})
  const[review,setreview]=useState({})
  const location=useLocation();
    useEffect(()=>{
        (async()=>{
            const id=location.hash.split("#")[1]
            const { data, error } = await supabase.from('MovieReview').select().eq('id', id)
            setmovie(data[0])
        })()
  
        },[])//dependency
const addReview=async()=>{
    try{
        

    }catch(err){
        console.log(err)
    }
    }
    
  return (
    <div className="Reviews">
        <h1>{movie.name}</h1>
        <img src={movie.imgurl} alt="" />
        <p>{movie.overview}</p>
        <h1>Reviews</h1>
        {/* <div>{JSON.parse(movie.Reviews).map((item)=>(<p>test</p>))}</div> */}
        <textarea  cols="80" rows="20" onChange={(e)=>{
            setreview(e.target.value)
        }}></textarea>
        <button onClick={addReview}>add review</button>

    </div>
  )
}

export default Review
