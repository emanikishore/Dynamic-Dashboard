import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addWidget,removeWidget } from '../../store/dashboardSlice';
import Category from '../Category';
import './index.css';

function Dashboard() {
  const categories = useSelector(state => state.dashboard.categories);
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState('');
  const [newWidgetName, setNewWidgetName] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(1);

  const handleAddWidget = () => {
    dispatch(addWidget({
      categoryId: selectedCategory,
      name: newWidgetName,
      text: newWidgetText,
    }));
    setNewWidgetName('');
    setNewWidgetText('');
  };

  const handleSearch = (e) => setSearchText(e.target.value);

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget => widget.name.toLowerCase().includes(searchText.toLowerCase())),
  }));

  return (
    <div className="dashboard">
      <input
        type="text"
        placeholder="Search Widgets..."
        value={searchText}
        onChange={handleSearch}
        className="search-bar"
      />
      {filteredCategories.map(category => (
        <Category key={category.id} category={category} removeWidget={removeWidget} />
      ))}
      <div className="add-widget">
        <h3>Add New Widget</h3>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(Number(e.target.value))}>
          {categories.map(category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Widget Name"
          value={newWidgetName}
          onChange={(e) => setNewWidgetName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={newWidgetText}
          onChange={(e) => setNewWidgetText(e.target.value)}
        />
        <button onClick={handleAddWidget}>+ Add Widget</button>
      </div>
    </div>
  );
}

export default Dashboard;
