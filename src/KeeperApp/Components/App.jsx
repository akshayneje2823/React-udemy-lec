import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  
  // getting note in new array
  const [notes,setNotes] = useState([])

  // Adding new note to an array
  function addNote(newNote){
    setNotes((prevNote)=>{
      return [...prevNote,newNote]
      
    })
  }
  // delete Note
  function deleteNote(id){
     setNotes((prevNote)=>{
      return prevNote.filter((noteItem,index)=>{
        return index !== id
      })
    })
    
    
  }

  return (
    <div>
      <Header />
      <CreateArea 
      addNote={addNote}
      />
      {
        notes.map((noteItem,index)=>{
          return <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
           />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
