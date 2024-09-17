import React from 'react';
import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTask from './Components/AddTask';
import { useState, useEffect } from 'react';
import Footer from './Components/Footer';
import About from './Components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom'
const App = () => {
    let [showAddTask, setShowAddTask] = useState(false);

    let [tasks, setTasks] = useState<any[]>([])

    useEffect(() => {
        let getTasks = async () => {
            let tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }

        getTasks()
    }, [])

    //fetch tasks
    let fetchTasks = async () => {
        let res = await fetch('http://localhost:3333/tasks')
        let data = await res.json()
        //console.log(data)
        return data
    }

    //fetch task by id
    let fetchTaskById = async (id: any) => {
        let res = await fetch(`http://localhost:3333/tasks/${id}`)
        let data = await res.json()
        //console.log(data)
        return data
    }

    // Add Task 
    let addTask = async (task: any) => {
        let res = await fetch('http://localhost:3333/tasks', {
            method: 'POST',
            "headers": {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        let data = await res.json()
        // let id = Math.floor(Math.random() * 10000) + 1;
        // let newTask = { id, ...task };
        setTasks([...tasks, data])
        //console.log("adding task by id",id);
    }
    //Delete Task
    let deleteTask = async (id: any) => {
        await fetch(`http://localhost:3333/tasks/${id}`, {
            method: 'DELETE'
        })
        // console.log("deleted task",id);
        setTasks(tasks.filter((task) => task.id !== id))
    }

    //Toggle Reminder

    let toggleReminder = async (id: number) => {
        let toggleTask = await fetchTaskById(id);
        let updateTask = { ...toggleTask, reminder: !toggleTask.reminder }

        let res = await fetch(`http://localhost:3333/tasks/${id}`, {
            method: 'PUT',
            "headers": {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateTask)

        })

        let data = await res.json()

        //console.log("reminder task",id);
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder } : task))
    }

    return (
        <Router>
            <div className='container'>
                <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

                <Route path='/' exact render={(props: any) => (
                    <>
                        {showAddTask && <AddTask onAdd={addTask} />}
                        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks To Show"}
                    </>
                )} />
                <Route path="/About" component={About} />
                <Footer />
            </div>
        </Router>
    );
}


export default App

