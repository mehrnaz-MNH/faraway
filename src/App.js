
import './App.css';

function App() {

  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);


  return (
    <div className="app">
      <h1>FARAWAY</h1>
      <div className="add-form">
        <h3></h3>
        <select>
          {numbers.map((number) =>
            <option key={number} value={number}>{number}</option>
          )}
        </select>
        <input />
        <button>ADD</button>
      </div>
      <div className="list">

      </div>
      <div className="stats">


      </div>

    </div>
  );
}

export default App;
