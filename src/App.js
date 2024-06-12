
import './App.css';

import { Logo } from './components/logo';
import { Form } from './components/form';
import { PackingList } from './components/packingList';

import { useState } from 'react';

function App() {

  const [itemsList, setItemsList] = useState([]);

  function handleAddItem(item) {

    setItemsList((prevItemsList) => [...prevItemsList, item]);

  }

  console.log(itemsList);

  return (

    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      < PackingList listItems={itemsList} />


    </div>

  );
}

export default App;
