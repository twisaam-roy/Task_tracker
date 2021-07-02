import Task from './Task';
const Tasks = ({tasks,onDelete,onToggle}:any) => {

    return (
        <>
            {tasks.map((task:any) =>(
                <Task key={task.id} task = {task} onDelete={onDelete} onToggle={onToggle}></Task>
            ))}
        </>
    )
}

export default Tasks
