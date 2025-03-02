import React, { useState } from 'react';
import Navigation from './components/Nav';
import Container from './components/Container';
import Button from './components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Navigation />
      <header className="App-header">
        <h1>Hello World!</h1>
        <Container>
          <p>Счетчик: {count}</p>
          <Button text="Увеличить" onClick={incrementCount} />
        </Container>
      </header>
    </div>
  );
}

export default App;