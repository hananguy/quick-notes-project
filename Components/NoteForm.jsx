import React, { useState } from "react";
import './NoteForm.css';

export default function NoteForm({onAddNote})
{
    const [text, setText] = useState("")
    const [title,setTitle] = useState("")

    const updateText = (event) => {
    setText(event.target.value);
    }

    const updateTitle = (event) =>{
    setTitle(event.target.value)
    }

    const handleAdd = () => {
    if (text.trim() === "") return;
    onAddNote(text, title); 
    setText("");
    setTitle("")
    }


    return(<div className="formContainer">
        <textarea className="form-title" value={title} onChange={updateTitle} placeholder="Note title..."></textarea>
        <textarea className="form-text" value={text} onChange={updateText} placeholder="Your note..."></textarea>
        
        <button className="button" onClick={handleAdd}>Add Note</button>
        </div>)
} 