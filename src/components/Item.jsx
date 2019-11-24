import React from 'react';

export const Item = (props)=>
        <div key={props.key} id="item">
            <p>{props.text}</p>
            <button onClick={props.delete} id={props.id}>Delete</button>
        </div>
        