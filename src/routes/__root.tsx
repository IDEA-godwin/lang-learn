import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import Header from '@/components/header'

export const Route = createRootRoute({
   component: RootComponent,
})

function RootComponent() {
   return (
      <React.Fragment>
         <div className=" max-w-5xl mx-auto w-full ">
            <Header />
            <Outlet />
         </div>
      </React.Fragment>
   )
}
