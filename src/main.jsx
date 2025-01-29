import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  './index.css'
import AddBooks from './pages/AddBooks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AddBooks />
  </StrictMode>,
)
