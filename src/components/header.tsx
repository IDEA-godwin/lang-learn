

export default function Header() {
   return (
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl px-4 py-3 flex items-center justify-center">
         <div className="flex items-center gap-3">
            {/* <button className="mt-2.5 p-2 text-on-background hover:bg-surface-container-low rounded-full transition-colors">
               <span className="material-symbols-outlined" data-icon="menu">menu</span>
            </button> */}
            <h1 className="font-headline font-bold text-xl tracking-tight">VocabBuilder</h1>
         </div>
         {/* <button className="p-2 text-on-background hover:bg-surface-container-low rounded-full transition-colors relative">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
         </button> */}
      </header>
   )
}