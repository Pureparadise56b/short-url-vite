import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ErrorPage from './ErrorPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import Profile from './pages/Profile.jsx'
import './index.css'
import DynamicPage from './pages/DynamicPage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Services from './pages/Services.jsx'
import FeedbackPage from './pages/FeedbackPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }, {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/register',
        element: <SignupPage />
      },
      {
        path: '/dashboard',
        element: <Profile />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: '/feedback',
        element: <FeedbackPage />
      }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: '/:shortId',
    element: <DynamicPage />
  },
  {
    path: '/404',
    element: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
