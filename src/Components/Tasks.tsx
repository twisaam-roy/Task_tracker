import Task from './Task';
const Tasks = ({tasks,onDelete,onToggle}:any) => {

    return (
        <>
            {tasks.map((task:any, index: any) =>(
                <Task key={index} task = {task} onDelete={onDelete} onToggle={onToggle} ></Task>
            ))}
        </>
    )
}

export default Tasks
