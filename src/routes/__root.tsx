import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { FooterNav } from '@/components/footer-nav'

export const Route = createRootRoute({
   component: RootComponent,
})

function RootComponent() {
   return (
      <React.Fragment>
         <div className="w-full lg:max-w-3xl mx-auto">
            <Outlet />
            <FooterNav />
         </div>
      </React.Fragment>
   )
}
