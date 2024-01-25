import React, { useContext } from 'react'
import ListItem from './ListItem'
import TasksContext from "../App"
const List = (props) => {
    const arr = props.tasks;
const a = arr.map((item)=><ListItem title={ item.title } desc = { item.desc }/>)
const task = useContext(TasksContext);
  return (
    <div className='list'>
      {a}
    {task}lk

    </div>
  )
}

export default List
