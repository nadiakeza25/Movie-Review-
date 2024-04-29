import { useState } from "react"
import supabase from "./supabase"

function CreateMovie() {
const [schema,setschema]=useState({imgurl:"",overview :"",name:"",Reviews:JSON.stringify([])})
const[sent,setsent]=useState(false)
const addMovie=async()=>{
  try{
  await supabase.from('MovieReview').insert(schema)
  setsent(true)
  }catch(err){
    console.log(err)
  }
}

  return (
  <div className="createmovie">
    {sent?
    <div className="notification">
        Movie Added
        <img src="https://clipground.com/images/x-symbol-png-9.jpg" alt="" onClick={()=>{
            setsent(false)
        }} />
    </div>:""}
    
    <div className="inner_create_movie">
      <input className="input" placeholder="image link" onChange={(e)=>{
        setschema({...schema,imgurl:e.target.value})
      }}/>
      <input className="input" placeholder="name of movie" onChange={(e)=>{
        setschema({...schema,name:e.target.value})
      }}/>
      <textarea className="inputtextarea" placeholder="description" rows="20" cols="50" onChange={(e)=>{
        setschema({...schema,overview:e.target.value})
      }}/>
      <input className="input" placeholder="add a review" onChange={(e)=>{
        setschema({...schema,Reviews:JSON.stringify([e.target.value])})
      }}/>
      <button className="btn-cr-mv" onClick={addMovie}>Add Movie</button>
    </div>
  </div>
  )
}

export default CreateMovie