import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../store/widgetsSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function generateRandomId() {
  return Math.floor(Math.random() * 1000000); // Generates a random integer between 0 and 999999
}

function isIdUnique(id, categories) {
  for (const category in categories) {
    if (categories[category].some(widget => widget.id === id)) {
      return false;
    }
  }
  return true;
}

function generateUniqueRandomId(categories) {
  let newId;
  do {
    newId = generateRandomId();
  } while (!isIdUnique(newId, categories));
  return newId;
}

function AddWidget({ category }) {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const categories = useSelector(state => state.widgets.categories);

  const handleAdd = () => {
    const newWidget = {
      id: generateUniqueRandomId(categories), // Generate a unique integer ID
      name, 
      text, 
      selected: true, 
    };
    dispatch(addWidget({ category, widget: newWidget }));
    setName('');
    setText('');
    toast.success('Widget added successfully!');
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 mb-2"
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 mb-2"
      />
      <button onClick={handleAdd} className="bg-blue-500 text-white p-2">
        Add Widget
      </button>
    </div>
  );
}

export default AddWidget;
