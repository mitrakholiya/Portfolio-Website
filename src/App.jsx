import React from "react"
import About from "./Pages/About"
import Books from "./Pages/Books"
import Client from "./Pages/Client"
import Home from "./Pages/Home"
import Blog from "./Pages/Blog"
import { createHashRouter, RouterProvider } from "react-router-dom"
import Portfolio from "./Pages/Portfolio"
import Contact from "./Pages/Contact"
import SubPortfolio from "./Pages/portsub/SubPortfolio"


function App() {

  let r2 = createHashRouter([{
    path: '/',
    element: <Home />
  },
  {
    path:'/blog',
    element:<Blog/>
  },
  {
    path:'/client',
    element:<Client/>
  },
  {
    path:'/books',
    element:<Books/>
  },
  {
    path:'/client',
    element:<Books/>
  },
  {
    path:'/portfolio',
    element:<Portfolio/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/contact',
    element:<Contact/>  
  },
  {
    path:"/portfolio/:id",
    element:<SubPortfolio/>
  }
  // {
  //   path:'/Portfolio/sub',
  //   element:<SubPortfolio/>
  // },
  // {
  //   path:"/portfolio/sub2",
  //   element:<SubFood/>
  // },
  // {
  //   path:"/portfolio/sub3",
  //   element:<SubBaked/>
  // }
  ])
  return (
    <>
    <RouterProvider router={r2}/>
    </>
  )
}

export default App
