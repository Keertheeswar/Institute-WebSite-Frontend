import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StudentContextProvider } from './providers/StudentContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <StudentContextProvider>
    <App />
    </StudentContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)
