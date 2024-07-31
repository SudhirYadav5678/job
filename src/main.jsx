import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './componets/Home.jsx'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Jobs from './componets/Jobs.jsx'
import Resumes from './componets/Resumes.jsx'
import About from './componets/About.jsx'
import Login from './componets/auth/Login.jsx'
import SignUp from './componets/auth/SignUp.jsx'
import Layout from './Layout.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='/' element={<Home />} />
      <Route path='/jobs' element={<Jobs />} />
      <Route path='/resumes' element={<Resumes />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
    </Route>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>




)
