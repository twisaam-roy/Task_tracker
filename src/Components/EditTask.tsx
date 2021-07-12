import { useState } from "react";

const EditTask = ({ onEdit, updateTask,showEditTaskForm }: any) => {


    //console.log(updateTask)  

    let [editText, setText] = useState(updateTask.text);
    let [editDay, setDay] = useState(updateTask.day);
    let [editReminder, setReminder] = useState(updateTask.reminder);
    let [jobId, setId] = useState(updateTask.id);
    let [showEditTask, setShowEditTask] = useState(showEditTaskForm);



    let onUpdate = (e: any) => {

        setText(editText);
        setDay(editDay);
        setReminder(editReminder)
        onEdit({ editText, editDay, editReminder, jobId })
        setShowEditTask(showEditTask)
        //e.preventDefault()

    }

    return (
        <>
        { showEditTask && <form className="add-form" onSubmit={onUpdate}>
            <div className="form-control">
                <label>Task ID:{jobId}</label>
                <label>Task</label>
                <input type="text" value={editText} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" value={editDay} onChange={(e) => setDay(e.target.value)} />

            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={editReminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Update Task" className="btn btn-block" />
        </form>}
        </>
    )
}
//
//
//
export default EditTask
