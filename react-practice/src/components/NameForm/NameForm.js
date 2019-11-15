import React, { useState } from 'react'
import './NameForm.css'

const NameForm = (props) => {
    const [newName, setNewName] = useState("");

    const changeHandler = (e) => {
        setNewName(e.target.value)
    }

    const submitNameHandler = (e) => {
        e.preventDefault();
        props.addName(newName)
        setNewName("")

    }

    return(
        <div className="nameform__container">
            <form onSubmit={submitNameHandler}>
            <input type="text" placeholder="add name..." 
            value={newName}
            onChange={changeHandler} />
            </form>
        </div>
    )
}

export default NameForm