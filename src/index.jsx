import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux' // <-- Ajoute cette ligne
import store from './store.js'            // <-- Et celle-ci
import './index.scss';
import App from './components/App.jsx'
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>           {/* Entoure App avec Provider */}
      <App />
    </Provider>
  </StrictMode>,
)
