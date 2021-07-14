import Task from './Task';
const Tasks = ({tasks,onDelete,onToggle, onEdit}:any) => {

    return (
        <>
            {tasks.map((task:any, index: any) =>(
                <Task key={index} task = {task} onDelete={onDelete} onToggle={onToggle} onEdit = {onEdit} ></Task>
            ))}
        </>
    )
}

export default Tasks
