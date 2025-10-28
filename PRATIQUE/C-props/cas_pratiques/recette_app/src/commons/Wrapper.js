// commons/Wrapper.js
import React from 'react';

const Wrapper = ({ children }) => {
  return <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }} className='recipeDiv'>{children}</div>;
};

export default Wrapper;
