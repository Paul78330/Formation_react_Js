import React, { useState } from 'react';

export default function Counter2() {
  const [clickCount, setClickCount] = useState(0);

  // your code here
  

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}

