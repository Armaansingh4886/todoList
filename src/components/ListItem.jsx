import React, { useContext, useEffect, useRef, useState } from "react";
import { TasksContext } from "../App";

const ListItem = (props) => {
  const index = props.name;

  const [currtime, setCurrtime] = useState(new Date());
  const {setUpdateTask,example,setExample } = useContext(TasksContext);


  // useEffect(() => {
  //   console.log((task[props.name][4] = duedate));
  // }, [duedate]);

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
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval on component unmount
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
  // const timeleft = () => {
  //   if (task[props.name][4][0] == undefined) {
  //     return "";
  //   }
  //   var time = "seconds";
  //   var count = task[props.name][4][0];
  //   if (task[props.name][4][1] === "min") {
  //     count = count * 60;
  //     // time = "minutes";
  //   }
  //   if (task[props.name][4][1] === "hr") {
  //     count = count * 3600;
  //     time = "hours";
  //   }
  //   if (task[props.name][4][1] === "da") {
  //     count = count * 3600 * 24;
  //     time = "days";
  //   }
  //   if (task[props.name][4][1] === "mo") {
  //     count = count * 3600 * 24 * 30;
  //     time = "months";
  //   }
  //   if (task[props.name][4][1] === "yr") {
  //     count = count * 3600 * 24 * 365;
  //     // time = "year";
  //   }
  //   var tleft =
  //     count - Math.floor((currtime.getTime() - props.time) / 1000);
  //     if(tleft<=0){
  //       return "time Out";
  //     }
  //     if(tleft>60 && tleft< 3600){
  //       tleft = Math.floor(tleft/60);
  //       time = "minutes";
  //     }
  //     if(tleft>3600 && tleft< 3600*24){
  //       tleft = Math.floor(tleft/3600);
  //       time = "hour";
  //     }
  //     if(tleft>3600*24 && tleft< 3600*24*30){
  //       tleft = Math.floor(tleft/3600*24);
  //       time = "days";
  //     }
  //     if(tleft>3600*24*30 && tleft< 3600*24*365){
  //       tleft = Math.floor(tleft/3600*24*30);
  //       time = "months";
  //     }
  //     if(tleft>3600*24*265){
  //       tleft = Math.floor(tleft/3600*24*365);
  //       time = "years";
  //     }
      


  //   return tleft + " " + time + " left";
  // };
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

      {/* <div ref={blur} onClick={handleBlur} classList=""></div> */}
      {/* {props.key} */}
      {/* {example[props.name].done&& <h1>js</h1>}
      <div className="options">
        <i
          onClick={handleOn}
          ref={onBtn}
          class="fa-solid fa-ellipsis-vertical "
        ></i>
        <div ref={optionList} className="options-list">
          <ul>
            <li className="done options-listitem" onClick={handleDone}>
              <i class="fa-regular fa-circle-check"></i>
            </li>
            <li className="time options-listitem" onClick={handleDate}>
              <i class="fa-regular fa-hourglass-half"></i>
            </li>
            <li onClick={handleDelete} className="options-listitem">
              <i class="fa-solid fa-trash"></i>
            </li>
            <li onClick={handleUpdate} className="options-listitem">
              <i class="fa-regular fa-pen-to-square"></i>
            </li>
            <form ref={dateform} class="time-form">
              <input
                type="text"
                onChange={(e) => {
                  setDuedate([e.target.value, duedate[1]]);
                }}
                value={duedate[0]}
                id=""
              />
              <select
                onChange={(e) => {
                  setDuedate([duedate[0], e.target.value]);
                }}
              >
                <option disabled>Time..</option>
                <option value="sec">Sec</option>
                <option value="min">Min</option>
                <option value="hr">Hours</option>
                <option value="da">Days</option>
                <option value="mo">Months</option>
                <option value="yr">Years</option>
              </select>
            </form>
          </ul>
        </div>
      </div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <div className="timer"> */}
        {/* <i>{timeleft()}</i> */}
      {/* </div> */}
      {/* <div className="timer">
        <i>{duration(props.time)}</i>
      </div> */}
      {/* <div className="icons">
<i className='icon icon-delete' onClick={handleDelete}><i class="fa-solid fa-trash"></i></i>

<i className='icon icon-update' onClick={handleUpdate}><i class="fa-regular fa-pen-to-square"></i></i>
</div> */}
    </div>
  );
};

export default ListItem;
