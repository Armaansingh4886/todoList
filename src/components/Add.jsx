import React, { useContext, useEffect, useState } from 'react'
import { TasksContext } from '../App';

const Add =  () => {
const { task,setTask} = useContext(TasksContext);

  // task = [...task , ["new" , "new description"]];

  const [title,setTitle] = useState("");
  const [description ,setDescription] = useState("");
  const handleClick = (event)=>{
    event.preventDefault();
    setTask([...task,[title,description]]);
    setTitle("");
    setDescription("");
  }

  return (
    <div className='add'>
      <form onSubmit={handleClick} >
      <label >Title</label>
      <input type='text' required placeholder="Title..." onChange={(e)=>{setTitle(e.target.value)}} value = {title}></input>
      <label>Description</label>
      <textarea placeholder='Description...' onChange={(e)=>{setDescription(e.target.value)}} value={description}></textarea>
      <button type="submit"  >add to list</button>
   </form>

     
    </div>
  )
}

export default Add
