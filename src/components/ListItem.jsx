import React, { useContext, useEffect, useRef, useState } from "react";
import { TasksContext } from "../App";

const ListItem = (props) => {
  const index = props.name;

  const [currtime, setCurrtime] = useState(new Date());
  const {setUpdateTask,example,setExample } = useContext(TasksContext);


  

  const handleDelete = () => {
    console.log(props.name);
    setExample(example.filter((tasks) => example.indexOf(tasks) !== props.name));
  };
  const handleUpdate = () => {
    setUpdateTask([example[props.name].title, props.name,example[props.name].DueDate]);
  };

  const done1 = useRef(null);
  const done2 = useRef(null);
  const text =useRef(null);
  const ddate = useRef(null);
  const handleDone = () => {
    const tas = example;
    tas[index].done = !example[index].done;
    setExample(tas);
    
    done1.current.classList.toggle("d-none");
    done2.current.classList.toggle("d-none");
    text.current.classList.toggle("text-muted");
  };
 


  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrtime(new Date());
    }, 1000); 
    

    return () => clearInterval(intervalId);
  }, []);
  

  const duration = (time) => {
    const timediff = Math.floor((currtime.getTime() - time) / 1000);
    if (timediff < 60) {
      return timediff + " sec ago";
    } else if (timediff >= 60 && timediff < 3600) {
      return Math.floor(timediff / 60) + " min ago";
    }
  };
 
useEffect(()=>{
  
  if(example[index].done){
    done2.current.classList.remove("d-none");
    text.current.classList.add("text-muted");
  }
  else{
    done1.current.classList.remove("d-none");
  }
  if(example[index].DueDate===""){
    ddate.current.classList.add("d-none");
  }
},[index,example])
  return (
    <div >
<div class="row px-3 align-items-center todo-item rounded">
                    <div class="col-auto m-1 p-0 d-flex align-items-center">
                        <h2 class="m-0 p-0 display-2" onClick={handleDone}>
                            <i ref={done1} className="fa fa-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as complete"></i>
                            <i ref={done2} className="fa fa-check-square-o text-primary btn m-0 p-0 d-none" data-toggle="tooltip" data-placement="bottom" title="Mark as todo"></i>
                        </h2>
                    </div>
                    <div class="col px-1 m-1 d-flex align-items-center">
                        <input ref={text} type="text" class="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3" readonly value={props.title} title={props.title} />
                        <input type="text" class="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none" value="Renew car insurance" />
                    </div>
                    <div ref={ddate} class="col-auto m-1 p-0 px-3 ">
                        <div class="row">
                            <div class="col-auto d-flex align-items-center rounded bg-white border border-warning">
                                <i class="fa fa-hourglass-2 my-2 px-2 text-warning btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Due on date"></i>
                                <h6 class="text my-2 pr-2">{example[index].DueDate}</h6>
                                
                            </div>
                        </div>
                    </div>
                    <div class="col-auto m-1 p-0 todo-actions">
                        <div class="row d-flex flex-row align-items-center justify-content-end">
                            <h5 class="m-0 p-0 px-2 col-md-2" onClick={handleUpdate}>
                                <i class="fa fa-pencil text-info btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Edit todo"></i>
                            </h5>
                            <h5 class="m-0 p-0 px-2 col-md-2" onClick={handleDelete}>
                                <i class="fa fa-trash-o text-danger btn m-0 p-0" data-toggle="tooltip" data-placement="bottom" title="Delete todo"></i>
                            </h5>
                        </div>
                        <div class="row todo-created-info">
                            <div class="col-auto d-flex align-items-center pr-2">
                                <i class="fa fa-info-circle my-2 px-2 text-black-50 btn" data-toggle="tooltip" data-placement="bottom" title="" data-original-title="Created date"></i>
                                <label class="date-label my-2 text-black-50">{duration(props.time)}</label>
                            </div>
                        </div>
                    </div>
                </div>

     
    </div>
  );
};

export default ListItem;
