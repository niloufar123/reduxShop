import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound'
import MainLayout from './components/layouts/mainLayout'
import { ToastContainer } from 'react-toastify'
import ProductDetails from './components/ProductDetails'
import CartTable from './components/CartTable'


const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<NotFound />,
  },
  {
    path:"/products/:productId",
    element:(<MainLayout><ProductDetails /></MainLayout>)

  },
  {
    path:"/cart",
    element:(<MainLayout><CartTable></CartTable></MainLayout>)
  }
])

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router} />
    <ToastContainer />
  </Provider>

)
