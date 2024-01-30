import React, { useContext, useEffect, useRef } from 'react'
import ListItem from './ListItem'
import{ TasksContext }from "../App"
const List = () => {
 const { task, setTask ,updateTask} = useContext(TasksContext);
 
 const todolists = task.map((item,index)=><ListItem key={index} name ={index} title={ item[0]} desc = { item[1]} time={item[2]}/>)
 
  return (
    <div className='list'>
   
      {todolists}

    </div>
  )
}

export default List
