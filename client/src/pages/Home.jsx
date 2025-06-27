import { useState } from 'react';
import Container, { Count, ButtonGroup } from '../App.styled.js';

function Home() {
  const [count, setCount] = useState(0);

  const handleClick = (type) => {
    setCount(prev => prev + (type === 'inc' ? 1 : -1));
  };

  return (
    <Container>
      <Count>{count}</Count>
      <ButtonGroup>
        <button onClick={() => handleClick('inc')}>increment</button>
        <button onClick={() => handleClick('dec')}>decrement</button>
      </ButtonGroup>
    </Container>
  );
}

export default Home;
