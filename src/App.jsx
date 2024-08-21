import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setWidgets } from './store/widgetsSlice';
import Dashboard from './components/Dashboard';
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('/widgets.json')
      .then(response => response.json())
      .then(data => {
        dispatch(setWidgets(data));
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <Dashboard />
      <ToastContainer />

    </div>
  );
}

export default App;
