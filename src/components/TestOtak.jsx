import React from 'react';
import { useState } from 'react';

function TestOtak() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>TESTING USESTATE</h1>
      <button onClick={() => setCount(count + 1)}  className='bg-green-300 rounded-xl px-4 py-2 text-xs font-bold'>Click untk tambah</button>
      <button onClick={() => setCount(count - 1)}  className='bg-red-300 rounded-xl px-4 py-2 text-xs font-bold'>Click untuk kurang</button>
      <div>{count}</div>
    </div>
  );
}

export default TestOtak;
