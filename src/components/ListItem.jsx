import React, { useContext, useEffect, useRef, useState } from "react";
import { TasksContext } from "../App";
import { useDrag } from "react-dnd";

const ListItem = (props) => {
  const id = props.key;
  const index = props.name;
  const [, drag] = useDrag({
    type: "ITEM",
    item: { id, index },
  });

  const [currtime, setCurrtime] = useState(new Date());
  const { task, setTask, setUpdateTask } = useContext(TasksContext);

  const [duedate, setDuedate] = useState("");

  useEffect(() => {
    console.log((task[props.name][4] = duedate));
  }, [duedate]);

  const handleDelete = () => {
    console.log(props.name);
    setTask(task.filter((tasks) => task.indexOf(tasks) !== props.name));
  };
  const handleUpdate = () => {
    setUpdateTask([task[props.name][0], task[props.name][1], props.name]);
  };
  const handleDone = () => {
    const tas = task;
    tas[index][3] = !task[index][3];
    setTask(tas);
  };
  const optionList = useRef(null);
  const onBtn = useRef(null);
  const blur = useRef(null);
  const dateform = useRef(null);

  const handleOn = () => {
    optionList.current.classList.toggle("show");
    // offBtn.current.style.display ="block";
    onBtn.current.classList.toggle("fa-xmark");
  };

  const handleBlur = () => {
    blur.current.classList.toggle("blur");
    dateform.current.classList.toggle("show");
    optionList.current.classList.toggle("show");
    onBtn.current.classList.toggle("fa-xmark");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrtime(new Date());
    }, 1000); // Update every 1000 milliseconds (1 second)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const handleDate = () => {
    blur.current.classList.toggle("blur");
    dateform.current.classList.toggle("show");
  };

  const duration = (time) => {
    const timediff = Math.floor((currtime.getTime() - time) / 1000);
    if (timediff < 60) {
      return timediff + " sec ago";
    } else if (timediff >= 60 && timediff < 3600) {
      return Math.floor(timediff / 60) + " min ago";
    }
  };
  const timeleft = () => {
    if (task[props.name][4][0] == undefined) {
      return "";
    }
    var time = "seconds";
    var count = task[props.name][4][0];
    if (task[props.name][4][1] === "min") {
      count = count * 60;
      // time = "minutes";
    }
    if (task[props.name][4][1] === "hr") {
      count = count * 3600;
      time = "hours";
    }
    if (task[props.name][4][1] === "da") {
      count = count * 3600 * 24;
      time = "days";
    }
    if (task[props.name][4][1] === "mo") {
      count = count * 3600 * 24 * 30;
      time = "months";
    }
    if (task[props.name][4][1] === "yr") {
      count = count * 3600 * 24 * 365;
      // time = "year";
    }
    var tleft =
      count - Math.floor((currtime.getTime() - props.time) / 1000);
      if(tleft<=0){
        return "time Out";
      }
      if(tleft>60 && tleft< 3600){
        tleft = Math.floor(tleft/60);
        time = "minutes";
      }
      if(tleft>3600 && tleft< 3600*24){
        tleft = Math.floor(tleft/3600);
        time = "hour";
      }
      if(tleft>3600*24 && tleft< 3600*24*30){
        tleft = Math.floor(tleft/3600*24);
        time = "days";
      }
      if(tleft>3600*24*30 && tleft< 3600*24*365){
        tleft = Math.floor(tleft/3600*24*30);
        time = "months";
      }
      if(tleft>3600*24*265){
        tleft = Math.floor(tleft/3600*24*365);
        time = "years";
      }
      


    return tleft + " " + time + " left";
  };
  return (
    <div ref={drag} className="listitem">
      <div ref={blur} onClick={handleBlur} classList=""></div>
      {/* {props.key} */}
      {task[props.name][3] && <h1>js</h1>}
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
      <div className="timer">
        <i>{timeleft()}</i>
      </div>
      <div className="timer">
        <i>{duration(props.time)}</i>
      </div>
      {/* <div className="icons">
<i className='icon icon-delete' onClick={handleDelete}><i class="fa-solid fa-trash"></i></i>

<i className='icon icon-update' onClick={handleUpdate}><i class="fa-regular fa-pen-to-square"></i></i>
</div> */}
    </div>
  );
};

export default ListItem;
