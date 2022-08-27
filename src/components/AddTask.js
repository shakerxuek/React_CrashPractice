import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText]=useState('')
    const [day, setDay]=useState('')
    const [reminder, setReminder]=useState(false)

const onSubmit =(e)=>{
    e.preventDefault()

    if(!text)
    {
        alert('Please add a task')
        return
    }

    onAdd({text,day,reminder})

    setText('')
    setDay('')
    setReminder(false)
}
  return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control">
            <label>Event</label>
            <input type='text' placeholder="Event name" value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>
        <div className="form-control">
            <label>Location and date
            </label>
            <input type='text' placeholder="loc and date" value={day} onChange={(e)=>setDay(e.target.value)}/>
        </div>
        <div className="form-control form-control-check">
            <label>Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
        </div>

        <input type='submit' value='Add' className='btn btn-block'/>
    </form>
  )
}

export default AddTask