
import React from 'react'

export const Item = ({ props }) => {
    return (
        <li>
            <input type="checkbox" value={props.packed} />
            <span style={props.packed ? { "text-decoration-line": "line-through" } : {}}>{props.quantity} {props.description}</span>
            <button>❌</button>

        </li>
    )
}
