import React, { useContext,useState,useRef} from 'react'
import ListItem from './ListItem'
import{ TasksContext }from "../App"
import { useDrop } from 'react-dnd'

const List = () => {
 const { task,setTask,example,setExample} = useContext(TasksContext);
 const [searchValue ,setSearchValue] = useState("");
 const [filter,setFilter] = useState("all");
 const [sort,setSort] = useState("added-date");
 const [order,setOrder] = useState(true);
 
const asc = useRef(null);
const desc = useRef(null);
var todolists ;

        // console.log(task[0][0].includes(searchValue))
        if(sort=="added-date"){

          if(!order){
        setExample(example.sort((a,b)=> b.TimeOfCreation-a.TimeOfCreation));
      }else{
        setExample(example.sort((a,b)=> a.TimeOfCreation-b.TimeOfCreation));
      }

        }
        else if(sort=="due-date"){
          if(!order){
          setExample(example.sort((a,b)=> new Date(b.DueDate)-new Date(a.DueDate)));
          }else{
            
          setExample(example.sort((a,b)=> new Date(a.DueDate)-new Date(b.DueDate)));
          }

        }




        if(filter=="all"){
          todolists = example.map((item,index)=>(searchValue===""||item.title.includes(searchValue))&&<ListItem key={index} name ={index} title={ item.title} desc = { item.description} time={ item.TimeOfCreation} duetime={item.DueDate}/>)
       
 }
        if(filter == "completed"){
           todolists = example.map((item,index)=>(item.done)&&(searchValue===""||item.title.includes(searchValue))&&<ListItem key={index} name ={index} title={ item.title} desc = { item.description} time={ item.TimeOfCreation} duetime={item.DueDate}/>)
       
        }
        if(filter == "active"){
          todolists = example.map((item,index)=>(!item.done)&&(searchValue===""||item.title.includes(searchValue))&&<ListItem key={index} name ={index} title={ item.title} desc = { item.description} time={ item.TimeOfCreation} duetime={item.DueDate}/>)
      
       }
       if(filter == "has-due-date"){
        todolists = example.map((item,index)=>(item.DueDate!="")&&(searchValue===""||item.title.includes(searchValue))&&<ListItem key={index} name ={index} title={ item.title} desc = { item.description} time={ item.TimeOfCreation} duetime={item.DueDate}/>)
    
     }

     const handleOrder = ()=>{
      setOrder(!order);
      console.log(order);
     asc.current.classList.toggle("d-none");
     desc.current.classList.toggle("d-none");
     }
  return (
    <div  className='list'>
       {/* <!-- View options section --> */}
      
        <div class="row m-1 p-3 px-5 justify-content-end">
          <input className="search col-auto rounded bg-transparent border-1" type="text"placeholder='search...' onChange={(e)=>{setSearchValue(e.target.value)}}/>
            <div class="col-auto d-flex align-items-center">
                <label class="text-secondary my-2 pr-2 view-opt-label">Filter</label>
                <select onChange={(e)=>{setFilter(e.target.value)}}  class="custom-select custom-select-sm btn my-2">
                    <option value="all" selected>All</option>
                    <option value="completed">Completed</option>
                    <option value="active">Active</option>
                    <option value="has-due-date">Has due date</option>
                </select>
            </div>
            <div class="col-auto d-flex align-items-center px-1 pr-3">
                <label class="text-secondary my-2 pr-2 view-opt-label">Sort</label>
                <select onChange={(e)=>{setSort(e.target.value)}} class="custom-select custom-select-sm btn my-2">
                    <option value="added-date" selected>Added date</option>
                    <option value="due-date">Due date</option>
                </select>
                <div onClick={handleOrder}>
                  
                <i ref={asc}  class="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1" data-toggle="tooltip" data-placement="bottom" title="Ascending"></i>
                <i ref={desc} class="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none" data-toggle="tooltip" data-placement="bottom" title="Descending"></i>
                </div>
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
