import React, { useContext,useState} from 'react'
import ListItem from './ListItem'
import{ TasksContext }from "../App"
import { useDrop } from 'react-dnd'

const List = () => {
 const { task,setTask,example} = useContext(TasksContext);
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
 const todolists = example.map((item,index)=>(searchValue===""||item.title.includes(searchValue))&&<ListItem key={index} name ={index} title={ item.title} desc = { item.description} time={ item.TimeOfCreation} duetime={item.DueDate}/>)
  return (
    <div ref={drop} className='list'>
       {/* <!-- View options section --> */}
        <div class="row m-1 p-3 px-5 justify-content-end">
          <input className="search col-auto rounded bg-transparent border-1" type="text"placeholder='search...' onChange={(e)=>{setSearchValue(e.target.value)}}/>
            <div class="col-auto d-flex align-items-center">
                <label class="text-secondary my-2 pr-2 view-opt-label">Filter</label>
                <select class="custom-select custom-select-sm btn my-2">
                    <option value="all" selected>All</option>
                    <option value="completed">Completed</option>
                    <option value="active">Active</option>
                    <option value="has-due-date">Has due date</option>
                </select>
            </div>
            <div class="col-auto d-flex align-items-center px-1 pr-3">
                <label class="text-secondary my-2 pr-2 view-opt-label">Sort</label>
                <select class="custom-select custom-select-sm btn my-2">
                    <option value="added-date-asc" selected>Added date</option>
                    <option value="due-date-desc">Due date</option>
                </select>
                <i class="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
                <i class="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>
            </div>
        </div>
      
      <div class="row mx-1 px-5 pb-3 w-80">
            <div class="col mx-auto">
      {todolists}
      </div></div>
    </div>
  )
}

export default List
