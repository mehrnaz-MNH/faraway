import React from 'react'
import { Item } from './item'


export const PackingList = ({ listItems }) => {
    return (
        <div className="list">

            <ul >
                {listItems.map(item =>
                    <Item props={item} />
                )}


            </ul>




        </div>

    )
}
