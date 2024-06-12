
import './App.css';

import { Logo } from './components/logo';
import { Form } from './components/form';
import { PackingList } from './components/packingList';
import { stats } from './components/stats';

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

  console.log(itemsList)

  return (

    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList listItems={itemsList} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />



    </div>

  );
}

export default App;
