
import './App.css';

import { Logo } from './components/logo';
import { Form } from './components/form';
import { PackingList } from './components/packingList';
import { Stats } from './components/stats';

import { useState } from 'react';


function App() {

  const [itemsList, setItemsList] = useState([]);

  function handleAddItem(item) {

    setItemsList((prevItemsList) => [...prevItemsList, item]);

  }

  function handleToggleItem(id) {

    setItemsList((prevItemsList) =>
      prevItemsList.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );

  }

  function handleDeleteItem(id) {

    setItemsList((prevItemsList) =>
      prevItemsList.filter(item => item.id !== id));

  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );

    if (confirmed) setItemsList([]);

  }

  console.log(itemsList)

  return (

    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList listItems={itemsList} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats list={itemsList} />


    </div>

  );
}

export default App;
