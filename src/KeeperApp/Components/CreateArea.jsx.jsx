import React, { useState } from "react";

function CreateArea(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });
    const noteHandler = (event) => {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    };
    const submitNote = (event) => {
        props.addNote(note);
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault()
    }
    return (
        <div>
            <form>
                <input
                    value={note.title}
                    onChange={noteHandler}
                    name="title"
                    placeholder="Title"
                />
                <textarea
                    value={note.content}
                    onChange={noteHandler}
                    name="content"
                    placeholder="Take a note..."
                    rows="3"
                />
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
