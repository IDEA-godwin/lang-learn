import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
   component: RootComponent,
})

function RootComponent() {
   return (
      <React.Fragment>
         <div className='w-full h-screen flex justify-center items-center'>
            <Outlet />
         </div>
      </React.Fragment>
   )
}
