
import React from 'react'

export const Item = ({ props, onDelete, onDone }) => {
    return (
        <li>
            <input type="checkbox" value={props.packed} onChange={() => onDone(props.id)} />
            <span style={props.packed ? { "text-decoration-line": "line-through" } : {}}>{props.quantity} {props.description}</span>
            <button onClick={() => onDelete(props.id)}>❌</button>

        </li>
    )
}
