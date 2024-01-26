import React, { useContext } from 'react'
import { TasksContext } from '../App'


const ListItem = (props) => {
const {task,setTask} = useContext(TasksContext);
const id = props.name;
const handleDelete =() =>{
  console.log(props.name)
  const tas = task;
  setTask(task.filter((tasks)=> task.indexOf(tasks) !== props.name));
}
  return (
    <div className='listitem'>
      {props.name}
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
<button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default ListItem
