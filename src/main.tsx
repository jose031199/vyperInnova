import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
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
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>

)
