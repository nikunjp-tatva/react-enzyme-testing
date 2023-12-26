// MyComponent.js
import React from 'react';

const MyComponent = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => console.log('Button clicked')}>Click here</button>
    </div>
  );
};

export default MyComponent;
