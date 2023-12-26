import React from 'react';

const ConditionalComponent = ({ condition }) => {
  return (
    <div>
      {condition ? <p>True</p> : <p>False</p>}
    </div>
  );
};

export default ConditionalComponent;
