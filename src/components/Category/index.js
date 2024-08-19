import React from 'react';
import { useDispatch } from 'react-redux';
import Widget from '../Widget';
import './index.css';

function Category({ category }) {
  const dispatch = useDispatch();

  const handleRemoveWidget = (widgetId) => {
    dispatch({
      type: 'dashboard/removeWidget',
      payload: { categoryId: category.id, widgetId },
    });
  };

  return (
    <div className="category">
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} removeWidget={() => handleRemoveWidget(widget.id)} />
      ))}
    </div>
  );
}

export default Category;
