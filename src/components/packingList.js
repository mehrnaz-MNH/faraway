import React from 'react'
import { Item } from './item'


export const PackingList = ({ listItems, onDeleteItem, onToggleItem }) => {

    return (
        <div className="list">

            <ul >
                {listItems.map(item =>
                    <Item props={item} onDelete={onDeleteItem} onDone={onToggleItem} />
                )}


            </ul>




        </div>

    )
}
