import React from 'react';
import './index.css';

function Widget({ widget, removeWidget }) {
  return (
    <div className="widget">
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={removeWidget} className="remove-widget">✖</button>
    </div>
  );
}

export default Widget;
