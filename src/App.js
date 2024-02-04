import './App.css';
import List from './components/List';
import Add from './components/Add';
import { createContext,  useEffect,  useState } from 'react';
import { DndProvider } from 'react-dnd';

import { HTML5Backend } from "react-dnd-html5-backend";



export const TasksContext = createContext();
// export const updateTask = createContext();
function App() {
  const [task , setTask] = useState([]);
  const [updateTask , setUpdateTask] = useState([]);
  const [rerender,setrerender] = useState(false);
  // const task= [{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},];
// var task  =[["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],];
// task = [...task , ["new" , "new description"]];
 

  return ( 
    <div className="App">
      <DndProvider  backend={HTML5Backend}>
    <TasksContext.Provider value={ {task,setTask,updateTask,setUpdateTask,rerender,setrerender} }>
      
    {task}
    <Add/>
    
    <List />
    </TasksContext.Provider>
    </DndProvider>
    </div>
  );
}

export default App;
