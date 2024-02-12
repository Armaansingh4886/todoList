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
  const [example,setExample] = useState([]);
  const [updateTask , setUpdateTask] = useState([]);
  const [rerender,setrerender] = useState(false);
  // const task= [{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},];
// var task  =[["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],["title" , "descriptoinasd adsf sdfdgfdsfg dfgdsf"],];
// task = [...task , ["new" , "new description"]];
 

  return ( 
    <div className="App container m-5 p-2 rounded mx-auto bg-light shadow">
       {/* <!-- App title section --> */}
        <div class="row m-1 p-4">
            <div class="col">
                <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
                    <i class="fa fa-check bg-primary text-white rounded p-2"></i>
                    <u>My Todo-s</u>
                </div>
            </div>
        </div>
      <DndProvider  backend={HTML5Backend}>
    <TasksContext.Provider value={ {task,setTask,updateTask,setUpdateTask,rerender,setrerender,example,setExample} }>
      
    {task}
    <Add/>
    
    <List />
    </TasksContext.Provider>
    </DndProvider>
    </div>
  );
}

export default App;
