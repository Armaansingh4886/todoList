import React, { useContext,useState} from 'react'
import ListItem from './ListItem'
import{ TasksContext }from "../App"
import { useDrop } from 'react-dnd'

const List = () => {
 const { task,setTask} = useContext(TasksContext);
 const [searchValue ,setSearchValue] = useState("");
 
const [, drop] = useDrop({
  accept: 'ITEM',
  drop: (item, monitor) => {
    const dragIndex = item.index;
    const hoverIndex = task.findIndex((item) => item.id === monitor.getItem().id);
    const newItems = [...task];

    // Reorder the list
    const [draggedItem] = newItems.splice(dragIndex, 1);
    newItems.splice(hoverIndex, 0, draggedItem);

    setTask(newItems);
  },
})

        // console.log(task[0][0].includes(searchValue))
 const todolists = task.map((item,index)=>(searchValue===""||item[0].includes(searchValue))&&<ListItem key={index} name ={index} title={ item[0]} desc = { item[1]} time={ item[2]}/>)
  return (
    <div ref={drop} className='list'>
      <input className="search" type="text"placeholder='search...' onChange={(e)=>{setSearchValue(e.target.value)}}/>
      {todolists}
    </div>
  )
}

export default List
