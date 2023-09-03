import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
} from "react-router-dom";
import LoginUser from './pages/login/loginUser.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>

  },
  {
    path:'/login',
    element:<LoginUser/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Routes>
      <RouterProvider router={router}></RouterProvider>
    </Routes>
  </React.StrictMode>

)
