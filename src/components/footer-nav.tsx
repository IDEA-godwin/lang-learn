import { Link, useRouterState } from '@tanstack/react-router'
import { useAuth } from '@/contexts/AuthContext'

const baseNavItems = [
   { to: '/' as const, icon: 'home', label: 'Home' },
   { to: '/wordlist' as const, icon: 'auto_stories', label: 'Library' },
]

export function FooterNav() {
   const routerState = useRouterState()
   const currentPath = routerState.location.pathname
   const { user, loading } = useAuth()

   // Dynamic profile link: goes to /profile if signed in, /signin if not
   const profileTo = (!loading && user) ? '/profile' as const : '/signin' as const

   const navItems = [
      ...baseNavItems,
      { to: profileTo, icon: 'person', label: 'Profile' },
   ]

   return (
      <nav
         className="w-full lg:max-w-3xl mx-auto fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-xl border-t border-outline-variant/10 px-4 pt-3 pb-6 flex items-center justify-around z-40 shadow-2xl"
         aria-label="Main navigation"
      >
         {navItems.map((item) => {
            const isActive = currentPath === item.to
            return (
               <Link
                  key={item.label}
                  to={item.to}
                  className={`flex flex-col items-center gap-1 transition-colors ${isActive
                     ? 'text-primary'
                     : 'text-on-surface-variant hover:text-primary'
                     }`}
                  aria-current={isActive ? 'page' : undefined}
               >
                  <span
                     className="material-symbols-outlined"
                     data-icon={item.icon}
                     style={isActive ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >{item.icon}</span>
                  <span className={`font-label text-xs ${isActive ? 'font-bold' : 'font-medium'}`}>
                     {item.label}
                  </span>
               </Link>
            )
         })}
      </nav>
   )
}