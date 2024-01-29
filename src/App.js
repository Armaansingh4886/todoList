import './App.css';
import List from './components/List';
import Add from './components/Add';
import { createContext,  useEffect,  useState } from 'react';



export const TasksContext = createContext();
// export const updateTask = createContext();
function App() {
  const [task , setTask] = useState([]);
  const [updateTask , setUpdateTask] = useState([]);
  // const task= [{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},];
// var task  =[["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],];
// task = [...task , ["new" , "new description"]];
 
var count=0;

  return ( 
    <div className="App">
    <TasksContext.Provider value={ {task,setTask,updateTask,setUpdateTask} }>
      
     { useEffect(()=>{
        count++;
      },[setTask])}
      a{count}a
    <Add/>
    {useEffect(()=>{
      <h1>updated</h1>
    },[setTask])}
    <List />
    </TasksContext.Provider>
    </div>
  );
}

export default App;
