import React, { useContext, useEffect, useState ,useRef} from 'react'
import { TasksContext } from '../App';

const Add =  () => {
const { task,setTask,updateTask,setUpdateTask,example,setExample} = useContext(TasksContext);

  // task = [...task , ["new" , "new description"]];

  const [title,setTitle] = useState("");
  const [description ,setDescription] = useState("");
  const [dueDate , setDueDate] = useState("");
  const handleClick = (event)=>{

    event.preventDefault();
  if(updateTask.length < 1){
    
 const count = new Date();
    setTask([...task,[title,description,count.getTime(),false,0]]);
    setExample([...example,{title:title,description:description,TimeOfCreation:count.getTime(),done:false,DueDate:dueDate}]);
    // setExample([{name: "this"}]);
    setTitle("");
    setDescription("");
  }else{
    const tas = example;
    tas[updateTask[1]]={title:title,description:description,TimeOfCreation:example[updateTask[1]].TimeOfCreation,done:example[updateTask[1]].done,DueDate:example[updateTask[1]].DueDate};
    setExample(tas);
    setTitle("");
    setDescription("");
    setUpdateTask([]);
  }
}

  useEffect(()=>{
    setTitle(updateTask[0]);
    setDescription(updateTask[1]);

  },[updateTask])
  const dateform = useRef(null);
  const calenderon = useRef(null);
  const calenderoff = useRef(null);
  const handleDueDate = ()=>{
    dateform.current.classList.toggle("d-none");
    calenderon.current.classList.toggle("d-none");
    calenderoff.current.classList.toggle("d-none");
  }

  
  return (
    <div className='add'>
    {/* <!-- Create todo section --> */}
        <div class="row m-1 p-3">
            <div class="col col-11 mx-auto">
                <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                    <div class="col">
                        <input class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded" type="text" placeholder="Add new .."  onChange={(e)=>{setTitle(e.target.value)}} value = {title}/>
                    </div>
                    <div class="col-auto m-0 px-2 d-flex align-items-center">
                        <label class="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">Due date not set</label>
                        <input ref={dateform} onChange={(e)=>{setDueDate(e.target.value)}} class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded d-none"  type="date" name="dandt" id="" />
                        <i onClick={handleDueDate} ref={calenderon} class="fa fa-calendar my-2 px-1 text-primary btn due-date-button" data-toggle="tooltip" data-placement="bottom" title="Set a Due date"></i>
                        <i onClick={handleDueDate} ref={calenderoff} class="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none" data-toggle="tooltip" data-placement="bottom" title="Clear Due date"></i>
                    </div>
                    
                    <div class="col-auto px-0 mx-0 mr-2">
                        <button type="button" class="btn btn-primary" onClick={handleClick} >Add</button>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="p-2 mx-4 border-black-25 border-bottom"></div>
{/*       
      <form onSubmit={handleClick} >
      <label >Title</label>
      <input type='text' required placeholder="Title..." onChange={(e)=>{setTitle(e.target.value)}} value = {title}></input>
      <label>Description</label>
      <textarea placeholder='Description...' onChange={(e)=>{setDescription(e.target.value)}} value={description}></textarea>
      <button type="submit"  >add to list</button>
   </form> */}

     
    </div>
  )
}

export default Add
