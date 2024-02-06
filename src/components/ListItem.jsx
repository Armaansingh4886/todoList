import React, { useContext, useEffect ,useRef,useState} from 'react'
import { TasksContext } from '../App'
import { useDrag } from 'react-dnd';

const ListItem = (props) => {
  const id = props.key;
  const index = props.name;
    const [, drag] = useDrag({
      type: 'ITEM',
      item: { id, index },
    });

  const [currtime, setCurrtime] = useState(new Date());
const {task,setTask , setUpdateTask} = useContext(TasksContext);
const handleDelete =() =>{
  console.log(props.name)
  setTask(task.filter((tasks)=> task.indexOf(tasks) !== props.name));
}
const handleUpdate = ()=>{
  setUpdateTask([task[props.name][0],task[props.name][1],props.name]);
}
const handleDone = ()=>{
  const tas = task;
  tas[index][3]=!task[index][3];
  setTask(tas);
}
const optionList = useRef(null);
const onBtn = useRef(null);



const handleOn = ()=>{

optionList.current.classList.toggle("show");
onBtn.current.classList.toggle("fa-xmark");
// offBtn.current.style.display ="block";

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
    <div  ref={drag} className='listitem'>
      <div className="blur"></div>
      {/* {props.key} */}
      {(task[props.name][3])&&<h1>js</h1>}
      <div className="options"><i onClick={handleOn} ref={onBtn} class="fa-solid fa-ellipsis-vertical "></i>
      <div ref={optionList} className="options-list">
        <ul>
          <li className="done options-listitem" onClick={handleDone}><i class="fa-regular fa-circle-check"></i></li>
          <li className="time options-listitem"><i class="fa-regular fa-hourglass-half"></i></li>
          <li onClick={handleDelete} className="options-listitem"><i class="fa-solid fa-trash"></i></li>
          <li onClick={handleUpdate} className="options-listitem"><i class="fa-regular fa-pen-to-square"></i></li>
          <form class="time-form">
            <input type="text" name="" id="" />
            <select>
              <option disabled>Time..</option>
              <option>Sec</option>
              <option>Min</option>
              <option>Hours</option>
              <option>Days</option>
              <option>Months</option>
              <option>Years</option>
            </select>
          </form>
         
        </ul>

      </div>
      
      </div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <div className="timer"><i>{duration(props.time)}</i></div>
      {/* <div className="icons">
<i className='icon icon-delete' onClick={handleDelete}><i class="fa-solid fa-trash"></i></i>

<i className='icon icon-update' onClick={handleUpdate}><i class="fa-regular fa-pen-to-square"></i></i>
</div> */}
    </div>
  )
}

export default ListItem
