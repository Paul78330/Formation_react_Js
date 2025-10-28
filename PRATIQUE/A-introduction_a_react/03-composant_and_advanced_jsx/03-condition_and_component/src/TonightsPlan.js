import React from 'react';

const fiftyFifty = Math.random() < 0.5;

// New function component starts here:
function TonightsPlan(){

  return (
    <h1>
      Tonight I'm going {fiftyFifty ? "out WOOO" : "to bed WOOO"}
    </h1>
  );

}




export default TonightsPlan;