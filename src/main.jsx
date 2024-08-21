import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'; 
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import App from './App.jsx'
import './index.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
    </Provider>
  </StrictMode>,
)

// Note on Redux-Persist: If user refreshes page on the main dashboard page, Persisted data will be replaced with data fetched from the widget and category json file.
