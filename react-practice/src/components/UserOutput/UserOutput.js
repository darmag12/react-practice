import React from 'react'
import UserInput from '../UserInput/UserInput'

const UserOutput = (props) => {
return (

    <div>
        <UserInput changeName={props.changeName} currentName={props.currentName}/>
        <p>Name: {props.user}</p>
        <p>Age: {props.age}</p>
        <p>Hair color: {props.hair}</p>
        <p>Gender: {props.gender}</p>
    </div>
)

}


export default UserOutput