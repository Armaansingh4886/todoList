import React, { useContext, useEffect ,useState} from 'react'
import { TasksContext } from '../App'


const ListItem = (props) => {
  
  const [currtime, setCurrtime] = useState(new Date());
const {task,setTask , setUpdateTask} = useContext(TasksContext);
const handleDelete =() =>{
  console.log(props.name)
  setTask(task.filter((tasks)=> task.indexOf(tasks) !== props.name));
}
const handleUpdate = ()=>{
  setUpdateTask([task[props.name][0],task[props.name][1],props.name]);
}

useEffect(
  () => {
    const intervalId = setInterval(() => {
      setCurrtime(new Date());
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []
)


const duration = (time)=>{
  const timediff = Math.floor((currtime.getTime()-time)/1000)
  if(timediff<60){
    return timediff+" sec ago";
  }else if(timediff>=60 && timediff<3600){
return Math.floor(timediff/60)+" min ago";
  }
}
  return (
    <div className='listitem'>
      {/* {props.name} */}
      
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <div className="timer"><i>{duration(props.time)}</i></div>
      <div className="icons">
<i className='icon icon-delete' onClick={handleDelete}><i class="fa-solid fa-trash"></i></i>

<i className='icon icon-update' onClick={handleUpdate}><i class="fa-regular fa-pen-to-square"></i></i>
</div>
    </div>
  )
}

export default ListItem
