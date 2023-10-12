import React, { useState } from 'react';

const ColorToggle = () => {
  const [isBlack, setIsBlack] = useState(false);

  const toggleColor = () => {
    setIsBlack(prevIsBlack => !prevIsBlack);
  };

  const bodyStyle = {
    backgroundColor: isBlack ? 'black' : 'white',
    color: isBlack ? 'white' : 'red',
    height: '100vh', // Ensure the color covers the entire screen
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={bodyStyle}>
      <button onClick={toggleColor}>Toggle Color</button>
    </div>
  );
};

export default ColorToggle;
