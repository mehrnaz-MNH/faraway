import { React, useState } from 'react'

export const Form = ({ onAddItem }) => {

    const [selectedQuant, setQuant] = useState(1);
    const [desc, setdesc] = useState("");
    function handleSubmit(event) {

        event.preventDefault();

        const newItem = { id: Date.now(), description: desc, quantity: selectedQuant, packed: false }
        onAddItem(newItem);

        setQuant(1);
        setdesc("");

    }


    const numbers = Array.from({ length: 20 }, (_, i) => i + 1)
    return (
        <div className="add-form">

            <h3>What Do You Need For Your Trip?</h3>
            <form onSubmit={handleSubmit} >
                <select
                    value={selectedQuant}
                    onChange={e => setQuant(parseInt(e.target.value, 10))}
                >
                    {numbers.map((number) =>
                        <option key={number} value={number}>{number}</option>
                    )}
                </select>
                <input type="text" value={desc} onChange={e => setdesc(e.target.value)} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
