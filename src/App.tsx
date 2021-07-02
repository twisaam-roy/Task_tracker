import React from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import {useState} from 'react';
const App = () => {
    let [showAddTask,setShowAddTask] = useState(false);

    let [tasks,setTasks] = useState([
      {
          id: 1,
          text: "Sync up meeting",
          day: "Monday",
          reminder: true
      },
      {
          id: 2,
          text: "DAO sync up",
          day: "Tuesday",
          reminder: false
      },
      {
          id: 3,
          text: "DAO Open Bridge",
          day: "Wednesday",
          reminder: true
      }
  ])

  // Add Task 
  function addTask(task:any){
      let id = Math.floor(Math.random()*10000) + 1;
      let newTask ={id,...task};
      setTasks([...tasks,newTask])
    //console.log("adding task by id",id);
  }
  //Delete Task
    function deleteTask(id: number) {
      // console.log("deleted task",id);
      setTasks(tasks.filter((task) => task.id !== id))
   }

   //Toggle Reminder

   function toggleReminder(id:number){
    //console.log("reminder task",id);
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder : !task.reminder}: task))
   }
    return (
        <div className='container'>
         <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
         {showAddTask && <AddTask onAdd={addTask}/>}
         {tasks.length>0 ?<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>:"No Tasks To Show"}
        </div>
    );
}

// class App extends React.Component{
//   render() {
//     return <h1>My App from class</h1>
//   }
// }

export default App

