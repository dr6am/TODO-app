import React from 'react';

export const Item = (props)=>{
    console.log(props)    
    return(
        <div key={props.key} id="item">
            <p>{props.text}</p>
            <button onClick={props.delete} className="deleteBtn" id={props.id}><p onClick={props.delete} id={props.id}>Delete</p></button>
        </div>
        )
        }
        