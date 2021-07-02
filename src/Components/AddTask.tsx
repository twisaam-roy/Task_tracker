import { useState } from "react";

const AddTask = ({onAdd}:any) => {

    let [text, setText] = useState('');
    let [day, setDay] = useState('');
    let [reminder, setReminder] = useState(false);

    let onSubmit = (e:any) =>{
        e.preventDefault();
        if(!text){
            alert("Please add text!");
            return
        }
        onAdd({text,day,reminder})

        setText('');
        setDay('');
        setReminder(false);

    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" placeholder="Add Date and Time" value={day} onChange={(e) => setDay(e.target.value)} />

            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    );
}

export default AddTask
