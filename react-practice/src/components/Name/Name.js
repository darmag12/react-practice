import React from 'react'
import './Name.css'

const Name = (props) => {
return (

    <div className="name__container">
        <li className="name-list">
            {props.name}
        </li>
    </div>
 
)

}


export default Name