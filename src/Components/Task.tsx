import { FaTimes,FaEdit } from "react-icons/fa"
const Task = ({ task, onDelete, onToggle,onEdit }: any) => {
    return (
        <div className={`task ${task.reminder ? 'reminder':''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}<FaTimes style={{ color: "red", cursor: "pointer" }} onClick={() => onDelete(task.id)} /><FaEdit style = {{color : "blue", cursor : "pointer"}} onClick = {() => onEdit(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    );
}

export default Task
