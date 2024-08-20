import React, { useEffect, useState } from "react"
import { databases } from "../appwrite/appwriteconfig.js"
import db from "../appwrite/databases.js"
import NoteForm from "../components/NoteForm.jsx"
import { Query } from "appwrite"
import Note from "../components/Note.jsx"

export default function Notes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        init()
    }, [])

    const init = async () => {
        const response = await db.notes.list([
            Query.orderAsc("$createdAt")
        ])
        setNotes(response.documents)
    }
    return (
        <>
            <div>
                <h1>✍️ My Todo List</h1>
            </div>
            <NoteForm setNotes={setNotes} />
            <div>
                {notes.map((note) => (
                    <Note key={note.$id} setNotes={setNotes} noteData={note} />
                ))
            }
            </div>
        </>
    )
}
