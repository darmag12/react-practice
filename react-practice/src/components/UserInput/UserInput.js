import React from 'react'

const UserInput = (props) => {
return (
    <div>
        <input type="text" onChange={props.changeName} value={props.currentName}/>

    </div>

)

}

export default UserInput;
