import { createSlice } from '@reduxjs/toolkit';

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    categories: [
      {
        id: 1,
        name: 'CSPM Executive Dashboard',
        widgets: [
          { id: 1, name: 'Widget 1', text: 'Random Text 1' },
          { id: 2, name: 'Widget 2', text: 'Random Text 2' },
        ],
      },
      {
        id: 2,
        name: 'Security Dashboard',
        widgets: [
          { id: 1, name: 'Widget A', text: 'Security Text A' },
          { id: 2, name: 'Widget B', text: 'Security Text B' },
        ],
      },
      {
        id: 3,
        name: 'Compliance Dashboard',
        widgets: [
          { id: 1, name: 'Widget X', text: 'Compliance Text X' },
          { id: 2, name: 'Widget Y', text: 'Compliance Text Y' },
        ],
      },
    ],
  },
  reducers: {
    addWidget: (state, action) => {
      const category = state.categories.find(cat => cat.id === action.payload.categoryId);
      if (category) {
        category.widgets.push({
          id: category.widgets.length + 1,
          name: action.payload.name,
          text: action.payload.text,
        });
      }
    },
    removeWidget: (state, action) => {
      const category = state.categories.find(cat => cat.id === action.payload.categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== action.payload.widgetId);
      }
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;

export default dashboardSlice.reducer;
