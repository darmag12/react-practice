import React from 'react'
import Name from '../Name/Name'

const NameList = (props) => {
    const allNames = props.names.map((n, i) =>{
       return <Name key={i} name={n}/>
    })
    return (

        <div>
            {allNames}
        </div>
    )
}

export default NameList