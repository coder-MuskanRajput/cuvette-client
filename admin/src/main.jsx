import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'remixicon/fonts/remixicon.css'
import { store } from './store/store.js'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <BrowserRouter>
    <App />
    <ToastContainer/>
  </BrowserRouter>
    </Provider>
)
