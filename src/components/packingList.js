import { useState } from 'react'
import { Item } from './item'


export const PackingList = ({ listItems, onDeleteItem, onToggleItem, onClearList }) => {

    const [selectOrder, setSelectedOrder] = useState("input");

    return (
        <div className="list">

            <ul >
                {listItems.map(item =>
                    <Item props={item} onDelete={onDeleteItem} onDone={onToggleItem} />
                )}


            </ul>

            <div className="actions">

                <select value={selectOrder} onChange={(e) => setSelectedOrder(e.target.value)}>

                    <option value="input">Sort by input order</option>
                    <option value="description">Sort by description</option>
                    <option value="packed">Sort by packed status</option>

                </select>

                <button onClick={() => onClearList()}>Clear List</button>


            </div>




        </div>

    )
}
