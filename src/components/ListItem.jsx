import React, { useContext, useEffect } from 'react'
import { TasksContext } from '../App'


const ListItem = (props) => {
const {task,setTask,updateTask , setUpdateTask} = useContext(TasksContext);
const handleDelete =() =>{
  console.log(props.name)
  setTask(task.filter((tasks)=> task.indexOf(tasks) !== props.name));
}
const handleUpdate = ()=>{
  setUpdateTask([task[props.name][0],task[props.name][1],props.name]);
}




  return (
    <div className='listitem'>
      {/* {props.name} */}
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <div className="icons">
<i className='icon icon-delete' onClick={handleDelete}><i class="fa-solid fa-trash"></i></i>

<i className='icon icon-update' onClick={handleUpdate}><i class="fa-regular fa-pen-to-square"></i></i>
</div>
    </div>
  )
}

export default ListItem
