import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: {}
};

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState,
  reducers: {
    setWidgets(state, action) {
      state.categories = action.payload;
    },
    addWidget(state, action) {
      const { category, widget } = action.payload;
      if (!state.categories[category]) {
        state.categories[category] = [];
      }
      state.categories[category].push(widget);
    },
    updateWidgetSelection(state, action) {
      const { category, widgetId, selected } = action.payload;
      const widget = state.categories[category].find(w => w.id == widgetId);
      if (widget) {
        widget.selected = selected;
      }
    },
  }
});

export const { setWidgets, addWidget, updateWidgetSelection } = widgetsSlice.actions;

export default widgetsSlice.reducer;
