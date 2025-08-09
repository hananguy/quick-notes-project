import React, { useState } from "react";
import Note from "./Note";
import './NoteList.css'

export default function NoteList({notes, onDeleteNote}) {
  return (
    <div className="noteGrid">
      {notes.map((note, index) => (
        <Note idx={note.idx} text={note.text} date={note.date} handleDeleteNote={onDeleteNote}/>
      ))}
    </div>
  );
}