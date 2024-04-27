import { useState } from "react"
import supabase from "./supabase"

function CreateMovie() {
const [schema,setschema]=useState({imgurl:"",overview :"",name:"",Reviews:JSON.stringify([])})
const addMovie=async()=>{
  await supabase.from('MovieReview').insert(schema)
  
}

  return (
    <div className="createmovie">
    <div className="inner_create_movie">
      <input className="input" placeholder="image link"/>
      <input className="input" placeholder="name of movie"/>
      <textarea className="inputtextarea" placeholder="description" rows="20" cols="50"/>
      <button className="btn-cr-mv">Add Movie</button>
    </div>
    </div>
  )
}

export default CreateMovie

{

}