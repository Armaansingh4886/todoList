import React, { useContext, useEffect, useState } from 'react'
import { TasksContext } from '../App';

const Add =  () => {
const { task,setTask,updateTask,setUpdateTask} = useContext(TasksContext);

  // task = [...task , ["new" , "new description"]];

  const [title,setTitle] = useState("");
  const [description ,setDescription] = useState("");
  const handleClick = (event)=>{

    event.preventDefault();
  if(updateTask.length < 1){
    
 const count = new Date();
    setTask([...task,[title,description,count.getTime(),false,0]]);
    setTitle("");
    setDescription("");
  }else{
    const tas = task;
    tas[updateTask[2]]=[title,description,task[updateTask[2]][2],task[updateTask[2]][3],task[updateTask[2]][4]];
    setTask(tas);
    setTitle("");
    setDescription("");
    setUpdateTask([]);
  }
}

  useEffect(()=>{
    setTitle(updateTask[0]);
    setDescription(updateTask[1]);

  },[updateTask])

  
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
