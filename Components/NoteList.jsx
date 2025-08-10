import React, { useState } from "react";
import Note from "./Note";
import './NoteList.css'

export default function NoteList({notes, onDeleteNote, onSelectedNote}) {
  return (
    <div className="noteGrid">
      {notes.map((note, index) => (
        <Note idx={note.idx} note={note} title={note.title} text={note.text} date={note.date} handleDeleteNote={onDeleteNote} handleSelectedNote={onSelectedNote}/>
      ))}
    </div>
  );
}