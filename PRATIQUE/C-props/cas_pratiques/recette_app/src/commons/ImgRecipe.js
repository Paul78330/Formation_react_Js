// commons/ImgRecipe.js
import React from 'react';

const ImgRecipe = ({ imageUrl }) => {
  return (
    <img src={imageUrl} alt="Recipe" width="40%" height="60%" />
  );
};

export default ImgRecipe;