import './App.css';
import List from './components/List';
import Add from './components/Add';
import { createContext, useContext, useState } from 'react';



function App() {
  // const [task , setTask] = useState("abc");
  const task= [{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},{title: "title1",desc:"this is description1"},];

const TasksContext = createContext("asd");
  return ( 
    <div className="App">
      
    <TasksContext.Provider value={ task }>
    <Add/>
     {`${useContext(TasksContext)}`}
    <List tasks={ task }/>
    </TasksContext.Provider>
    </div>
  );
}

export default App;
