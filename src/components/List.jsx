import React, { useContext,useState} from 'react'
import ListItem from './ListItem'
import{ TasksContext }from "../App"
const List = () => {
 const { task} = useContext(TasksContext);
 const [searchValue ,setSearchValue] = useState("");
 
        console.log(task[0][0].includes(searchValue))
 const todolists = task.map((item,index)=>(searchValue===""||item[0].includes(searchValue))&&<ListItem key={index} name ={index} title={ item[0]} desc = { item[1]} time={ item[2]}/>)
  return (
    <div className='list'>
      <input type="text"placeholder='search...' onChange={(e)=>{setSearchValue(e.target.value)}}/>
      {todolists}
    </div>
  )
}

export default List
