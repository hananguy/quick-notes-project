import React, { useState, useRef } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import './Notes.css'
export default function Notes() {
  const [notes, setNotes] = useState([]);
    const noteIndex = useRef(0);

    const addNote = (text, title) => {
    const newNote = { idx: noteIndex.current, title, text, date: new Date().toLocaleString() };
    noteIndex.current+=1;
    setNotes([newNote, ...notes]);
    };

    const deleteNote = (idx) => {
        const newNotes = notes.filter(note => note.idx !== idx);
        noteIndex.current-=1;
        setNotes(newNotes);
    };


return (
    <div className="container">
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote}/>
    </div>
  );
}