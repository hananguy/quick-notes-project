import React, { useState, useRef } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import './Notes.css'
import Modal from "react-modal";
import NoteModal from './NoteModal';

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [selectedNote, setSelectedNote] = useState(null);
    const noteIndex = useRef(0);

    const handleSelectNote = (note) =>
    {
        console.log("selected:", note);
        setSelectedNote(note);
    }
    const addNote = (text, title) => {
    const newNote = { idx: noteIndex.current, title, text, date: new Date().toLocaleString(), updatedAt: null   };
    noteIndex.current+=1;
    setNotes([newNote, ...notes]);
    };

    const deleteNote = (idx) => {
        const newNotes = notes.filter(note => note.idx !== idx);
        noteIndex.current-=1;
        setNotes(newNotes);
    };

    const updateNote = (idx, updates) => {
        const stamp = new Date().toLocaleString();
        setNotes(notes =>notes.map(n => n.idx === idx ? { ...n, ...updates, updatedAt: stamp } : n));
    
        (prev =>prev && prev.idx === idx ? { ...prev, ...updates, updatedAt: stamp } : prev);
};


return (
    <div className="container">
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} onSelectedNote={handleSelectNote}/>
      <NoteModal note={selectedNote} onClose={() => setSelectedNote(null)}/>
    </div>
  );
}