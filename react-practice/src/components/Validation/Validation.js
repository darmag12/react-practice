import React from 'react'

const Validation = (props) => {
return (

    <div>
        {props.charLength < 5 ? <strong>text too short</strong> : <strong>text long enough</strong>}
    </div>
 
)

}


export default Validation