import { Link } from '@tanstack/react-router'

function WordList() {
   return (
      <>
         {/* TopAppBar */}
         <header className="w-full top-0 sticky z-40 bg-background">
            <div className="flex items-center justify-between px-6 h-16 w-full max-w-7xl mx-auto">
               <div className="flex items-center gap-4">
                  <Link
                     to="/"
                     className="text-primary active:scale-95 duration-200 p-2 rounded-full hover:bg-surface-container-low transition-colors"
                  >
                     <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
                  </Link>
                  <h1 className="font-headline font-bold text-xl text-primary tracking-tight">
                     German Basics A1
                  </h1>
               </div>
               <div className="flex items-center gap-2">
                  <button className="text-on-surface-variant hover:bg-surface-container-low p-2 rounded-full transition-colors active:scale-95 duration-200">
                     <span className="material-symbols-outlined" data-icon="search">search</span>
                  </button>
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border-2 border-primary-container">
                     <img
                        alt="User"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIGYJjiDeKCVujRQzqHH7T2IpSaUWMudLD03efrHKNuwPO1bmZdAaehKa-mHq9SeMYPAbdYtHvgp4mg6T5TaSolIryj2r0qZCRQdm8MxQZdBHt9FfqfcRrsc_gd11JjbX6YHRefd-c1VtnL6r9LvK_jDViws0Yw7dtqPE--9vqo-Oaiy5TmOYwmQ2RgP8EOS_Zx2SrLyIX5YUHxm6ZqphfMORKZm75rkL44RUJrqddYj7bia0zKdhOfVWUEwrMMcQRUFJiCg6u-KA"
                     />
                  </div>
               </div>
            </div>
         </header>

         <main className="px-6 pt-8 pb-32">
            {/* Hero Header Section */}
            <section className="relative bg-surface-container-low rounded-lg p-8 mb-12 flex flex-col md:flex-row gap-8 items-center overflow-hidden">
               {/* Decorative background element */}
               <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
               <div className="relative w-32 h-32 bg-surface-container-highest rounded-xl flex items-center justify-center shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="material-symbols-outlined text-primary text-6xl" data-icon="auto_stories">auto_stories</span>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-lg flex items-center gap-1 shadow-md">
                     <span
                        className="material-symbols-outlined text-sm"
                        data-icon="flag"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                     >flag</span>
                  </div>
               </div>
               <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-2">
                     <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold font-label tracking-wider uppercase">
                        Level A1
                     </span>
                     <span className="px-3 py-1 bg-tertiary/10 text-tertiary rounded-full text-xs font-bold font-label tracking-wider uppercase">
                        120 Words
                     </span>
                  </div>
                  <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-on-background mb-4 tracking-tight leading-tight">
                     Essential Phrases
                  </h2>
                  <div className="flex flex-col sm:flex-row items-center gap-6 mt-6">
                     {/* Custom Progress Orb */}
                     <div className="flex items-center gap-4 bg-surface-container-lowest/60 backdrop-blur-xl px-5 py-3 rounded-full shadow-sm">
                        <div className="relative w-12 h-12 flex items-center justify-center">
                           <svg className="w-full h-full transform -rotate-90">
                              <circle className="text-tertiary-container" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeWidth="4"></circle>
                              <circle className="text-tertiary" cx="24" cy="24" fill="transparent" r="20" stroke="currentColor" strokeDasharray="125.6" strokeDashoffset="18.8" strokeWidth="4"></circle>
                           </svg>
                           <span className="absolute text-[10px] font-bold font-label">85%</span>
                        </div>
                        <div>
                           <p className="text-on-surface-variant text-xs font-semibold font-label">Mastery Progress</p>
                           <p className="text-on-background font-bold">102 / 120 Words</p>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            {/* Flashcard List */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
               {/* Header Label for Grid */}
               <div className="col-span-full flex items-center justify-between mb-2">
                  <h3 className="font-headline font-bold text-xl text-on-background">Vocabulary List</h3>
                  <div className="flex gap-2">
                     <button className="p-2 rounded-lg bg-surface-container-low text-primary-dim hover:bg-surface-container-highest transition-colors">
                        <span className="material-symbols-outlined" data-icon="filter_list">filter_list</span>
                     </button>
                     <button className="p-2 rounded-lg bg-surface-container-low text-primary-dim hover:bg-surface-container-highest transition-colors">
                        <span className="material-symbols-outlined" data-icon="sort_by_alpha">sort_by_alpha</span>
                     </button>
                  </div>
               </div>

               {/* Card 1: Mastered */}
               <div className="group bg-surface-container-lowest rounded-lg p-6 shadow-[0_4px_20px_rgba(0,52,65,0.04)] hover:shadow-[0_20px_40px_rgba(0,52,65,0.08)] transition-all duration-300 flex flex-col justify-between border-b-4 border-transparent hover:border-primary">
                  <div className="flex justify-between items-start mb-4">
                     <div className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-extrabold rounded-full font-label tracking-widest uppercase">
                        Mastered
                     </div>
                     <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="volume_up">volume_up</span>
                     </button>
                  </div>
                  <div>
                     <h4 className="font-headline font-bold text-2xl text-on-background mb-1">Das Haus</h4>
                     <p className="text-on-surface-variant text-lg font-body">The House</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                     <span className="material-symbols-outlined text-primary/30 group-hover:text-primary transition-colors" data-icon="check_circle">check_circle</span>
                  </div>
               </div>

               {/* Card 2: Learning */}
               <div className="group bg-surface-container-lowest rounded-lg p-6 shadow-[0_4px_20px_rgba(0,52,65,0.04)] hover:shadow-[0_20px_40px_rgba(0,52,65,0.08)] transition-all duration-300 flex flex-col justify-between border-b-4 border-transparent hover:border-tertiary">
                  <div className="flex justify-between items-start mb-4">
                     <div className="px-3 py-1 bg-tertiary/5 text-tertiary text-[10px] font-extrabold rounded-full font-label tracking-widest uppercase">
                        Learning
                     </div>
                     <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="volume_up">volume_up</span>
                     </button>
                  </div>
                  <div>
                     <h4 className="font-headline font-bold text-2xl text-on-background mb-1">Der Apfel</h4>
                     <p className="text-on-surface-variant text-lg font-body">The Apple</p>
                  </div>
                  <div className="mt-6">
                     <div className="h-1.5 w-full bg-tertiary-container/30 rounded-full overflow-hidden">
                        <div className="h-full w-3/5 bg-tertiary rounded-full"></div>
                     </div>
                  </div>
               </div>

               {/* Card 3: New */}
               <div className="group bg-surface-container-lowest rounded-lg p-6 shadow-[0_4px_20px_rgba(0,52,65,0.04)] hover:shadow-[0_20px_40px_rgba(0,52,65,0.08)] transition-all duration-300 flex flex-col justify-between border-b-4 border-transparent hover:border-outline">
                  <div className="flex justify-between items-start mb-4">
                     <div className="px-3 py-1 bg-outline/10 text-on-surface-variant text-[10px] font-extrabold rounded-full font-label tracking-widest uppercase">
                        New
                     </div>
                     <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="volume_up">volume_up</span>
                     </button>
                  </div>
                  <div>
                     <h4 className="font-headline font-bold text-2xl text-on-background mb-1">Die Brücke</h4>
                     <p className="text-on-surface-variant text-lg font-body">The Bridge</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                     <span className="material-symbols-outlined text-outline/30" data-icon="circle">circle</span>
                  </div>
               </div>

               {/* Card 4: Mastered */}
               <div className="group bg-surface-container-lowest rounded-lg p-6 shadow-[0_4px_20px_rgba(0,52,65,0.04)] hover:shadow-[0_20px_40px_rgba(0,52,65,0.08)] transition-all duration-300 flex flex-col justify-between border-b-4 border-transparent hover:border-primary">
                  <div className="flex justify-between items-start mb-4">
                     <div className="px-3 py-1 bg-primary/5 text-primary text-[10px] font-extrabold rounded-full font-label tracking-widest uppercase">
                        Mastered
                     </div>
                     <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="volume_up">volume_up</span>
                     </button>
                  </div>
                  <div>
                     <h4 className="font-headline font-bold text-2xl text-on-background mb-1">Das Frühstück</h4>
                     <p className="text-on-surface-variant text-lg font-body">The Breakfast</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                     <span className="material-symbols-outlined text-primary/30 group-hover:text-primary transition-colors" data-icon="check_circle">check_circle</span>
                  </div>
               </div>

               {/* Card 5: Learning */}
               <div className="group bg-surface-container-lowest rounded-lg p-6 shadow-[0_4px_20px_rgba(0,52,65,0.04)] hover:shadow-[0_20px_40px_rgba(0,52,65,0.08)] transition-all duration-300 flex flex-col justify-between border-b-4 border-transparent hover:border-tertiary">
                  <div className="flex justify-between items-start mb-4">
                     <div className="px-3 py-1 bg-tertiary/5 text-tertiary text-[10px] font-extrabold rounded-full font-label tracking-widest uppercase">
                        Learning
                     </div>
                     <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="volume_up">volume_up</span>
                     </button>
                  </div>
                  <div>
                     <h4 className="font-headline font-bold text-2xl text-on-background mb-1">Guten Morgen</h4>
                     <p className="text-on-surface-variant text-lg font-body">Good Morning</p>
                  </div>
                  <div className="mt-6">
                     <div className="h-1.5 w-full bg-tertiary-container/30 rounded-full overflow-hidden">
                        <div className="h-full w-1/4 bg-tertiary rounded-full"></div>
                     </div>
                  </div>
               </div>

               {/* Card 6: New */}
               <div className="group bg-surface-container-lowest rounded-lg p-6 shadow-[0_4px_20px_rgba(0,52,65,0.04)] hover:shadow-[0_20px_40px_rgba(0,52,65,0.08)] transition-all duration-300 flex flex-col justify-between border-b-4 border-transparent hover:border-outline">
                  <div className="flex justify-between items-start mb-4">
                     <div className="px-3 py-1 bg-outline/10 text-on-surface-variant text-[10px] font-extrabold rounded-full font-label tracking-widest uppercase">
                        New
                     </div>
                     <button className="text-outline hover:text-primary transition-colors">
                        <span className="material-symbols-outlined" data-icon="volume_up">volume_up</span>
                     </button>
                  </div>
                  <div>
                     <h4 className="font-headline font-bold text-2xl text-on-background mb-1">Entschuldigung</h4>
                     <p className="text-on-surface-variant text-lg font-body">Excuse Me / Sorry</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                     <span className="material-symbols-outlined text-outline/30" data-icon="circle">circle</span>
                  </div>
               </div>
            </section>
         </main>

         {/* Floating Action Button */}
         <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50">
            <button className="group bg-primary hover:bg-primary-dim text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-[0_20px_40px_rgba(0,101,115,0.3)] hover:shadow-[0_25px_50px_rgba(0,101,115,0.4)] transition-all duration-300 transform active:scale-95">
               <span
                  className="material-symbols-outlined"
                  data-icon="play_circle"
                  style={{ fontVariationSettings: "'FILL' 1" }}
               >play_circle</span>
               <span className="font-headline font-bold text-lg tracking-tight">Study Now</span>
               <div className="bg-white/20 px-2 py-0.5 rounded text-xs font-label">12 words</div>
            </button>
         </div>
      </>
   )
}

export default WordList