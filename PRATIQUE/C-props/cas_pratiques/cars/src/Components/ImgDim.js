// ImgDim.js
import React from 'react';

const ImgDim = ({ src, alt }) => {
  return (
    <img src={src} alt={alt} style={{ width: '80%', height: '50%' }} />
  );
};

export default ImgDim;