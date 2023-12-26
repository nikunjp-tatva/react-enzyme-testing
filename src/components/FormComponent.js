import React, { useState } from 'react';

const FormComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Typed value: {inputValue}</p>
    </div>
  );
};

export default FormComponent;
