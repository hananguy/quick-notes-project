import { useRef, useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import NoteModal from './NoteModal';
import './Notes.css';

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

const handleUpdateNote = (noteObj, updates) => {
  const stamp = new Date().toLocaleString();

  setNotes(prev =>
    prev.map(n => (n === noteObj ? { ...n, ...updates, updatedAt: stamp } : n))
  );

  setSelectedNote(curr =>
    curr ? { ...curr, ...updates, updatedAt: stamp } : curr
  );
};


return (
    <div className="container">
      <NoteForm onAddNote={addNote} />
      <NoteList notes={notes} onDeleteNote={deleteNote} onSelectedNote={handleSelectNote}/>
      <NoteModal note={selectedNote} onClose={() => setSelectedNote(null)} onUpdate={handleUpdateNote}/>
    </div>
  );
}