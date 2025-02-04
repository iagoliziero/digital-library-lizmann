import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  './index.css'
import AddBooks from './pages/AddBooks.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import App from './App.jsx';
import EditBooks from './pages/EditBooks.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: '/biblioteca',
    element: <App /> 
  },
  {
    path: '/adicionarbooks',
    element: <AddBooks />
  },
  {
    path: '/editarbooks',
    element: <EditBooks /> 
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
