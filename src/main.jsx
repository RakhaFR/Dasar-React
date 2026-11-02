import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './part3/tugas3/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)