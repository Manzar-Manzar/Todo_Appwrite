import React from 'react'
import db from '../appwrite/databases.js';

function NoteForm({ setNotes }) {

    const handleAdd = async (e) => {
        e.preventDefault()
        const noteBody = e.target.body.value;
        if (noteBody == "") return;
        try {
            const payload = {body:noteBody}
            const response = await db.notes.create(payload)
            setNotes((prevState) => [response, ...prevState])
            e.target.reset()
        } catch (error) {
            console.log(`Error in Noteform : ${error}`)
        }
    }
  return (
    <form onSubmit={handleAdd} id='todo-form'>
        <input type="text"
        name="body"
        placeholder="what's on the agenda?" />
    </form>
  )
}

export default NoteForm