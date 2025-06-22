import React from 'react'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router-dom'
import HomeRoutes from './routes/HomeRoutes'
import LandingPage from './pages/LandingPage'
import AboutUs from './pages/AboutUs'
import GetInvolved from './pages/GetInvolved'
import Sermons from './pages/Sermons'
import ContactUs from './pages/ContactUs'

const App = () => {
  const route = createBrowserRouter ([
    {
      path:"/",
      element:<HomeRoutes/>,
      children: [
        {path:"/",element:<LandingPage/>},
        {path:"/aboutus",element:<AboutUs/>},
        {path:"/getinvolved",element:<GetInvolved/>},
        {path:"/sermon",element:<Sermons/>},
        {path:"/contactus",element:<ContactUs/>}
      ]
    },
  ])
  return (
    <RouterProvider router={route}/>
  )
}
export default App