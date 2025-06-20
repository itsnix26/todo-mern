import { useState } from 'react';
import Container, { Count, ButtonGroup } from './App.styled.js';

function App() {

  const [count, setCount] = useState(0);
  const [items, setItems] = useState(['Item 1', 'Item 2']);
  const [user, setUser] = useState({ name: 'John', age: 25 });
  const [logs, setLogs] = useState([]);

  const handleClick = (type) => {
    setCount(prev => prev + (type === 'inc' ? 1 : -1));
  }

  return (
    <Container>
      <Count>{count}</Count>
      <ButtonGroup>
        <button onClick={() => handleClick("inc")} >increment</button>
        <button onClick={() => handleClick("dec")} >decrement</button>
      </ButtonGroup>
    </Container>
  );
}

export default App;
