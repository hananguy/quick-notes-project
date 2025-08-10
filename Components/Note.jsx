import React from "react";
import './Note.css';

export default function Note({ idx, note, title, text, date, handleDeleteNote, handleSelectedNote}) {

 const formattedDate = new Date(date).toLocaleString("en-US", {
    month:  "short",   
    day:    "numeric", 
    hour:   "numeric", 
    minute: "numeric"  
  });

  const handleNoteSelect = () =>
  {
    handleSelectedNote(note);
  }
  const handleDeleteClick = (e) =>
  {
    e.stopPropagation(); 
    const ok = window.confirm("Are you sure you want to delete this note?");
    if (ok) {
    handleDeleteNote(idx);
    } 

    
  }
  return (
    <div key={idx} className="note-container" onClick={handleNoteSelect}>
        <div className="note">
            <strong>{formattedDate}</strong>
            <p class="title">{title}</p>
            <p class="text">{text}</p>
        </div>
        <button className="btn" onClick={handleDeleteClick}>X</button>
      
    </div>
  );
}