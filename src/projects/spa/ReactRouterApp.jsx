import React from 'react'
import Header from './pages/Header'
import { Outlet } from 'react-router-dom'


const ReactRouterApp = () => {
  return (
   <>
   <Header/>
 <main>
 <Outlet/>
 </main>
   </>
  )
}

export default ReactRouterApp