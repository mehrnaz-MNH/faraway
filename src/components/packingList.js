import { useState } from 'react'
import { Item } from './item'


export const PackingList = ({ listItems, onDeleteItem, onToggleItem, onClearList }) => {

    const [selectOrder, setSelectedOrder] = useState("input");

    let sortedlist;

    if (selectOrder == "description")
        sortedlist = listItems.slice().sort((a, b) => a.description.localeCompare(b.description));

    if (selectOrder == "input") sortedlist = listItems;

    if (selectOrder == "packed") sortedlist = listItems.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

    return (
        <div className="list">

            <ul >
                {sortedlist.map(item =>
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
