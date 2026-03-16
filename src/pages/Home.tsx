
function Home() {
  return (
    <main className="flex-1 px-4 pb-32 space-y-8">
      {/* <!-- Daily Progress Section (Asymmetric Bento) --> */}
      <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* <!-- Progress Orb Card --> */}
        <div
          className="md:col-span-2 bg-surface-container-low rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between overflow-hidden relative">

          <div className="space-y-4 md:space-y-2 z-10 w-full">
            <div>
              <span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">Daily Goal</span>
              <h2 className="font-headline text-3xl font-extrabold text-primary">Keep the streak!</h2>
            </div>

            <div className="flex items-center gap-4">
              {/* Mobile Orb: Left of text */}
              <div className="relative flex items-center justify-center md:hidden shrink-0">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                  <circle className="text-tertiary-container" cx="32" cy="32" fill="transparent" r="28"
                    stroke="currentColor" strokeWidth="8"></circle>
                  <circle className="text-tertiary" cx="32" cy="32" fill="transparent" r="28" stroke="currentColor"
                    strokeDasharray="175.93" strokeDashoffset="52.78" strokeLinecap="round" strokeWidth="8"></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-headline text-sm font-bold">70%</span>
                </div>
              </div>

              <p className="font-body text-sm md:text-base text-on-surface-variant max-w-[200px]">
                You are only 12 words away from your daily target.
              </p>
            </div>

            <button
              className="mt-2 md:mt-4 bg-primary text-on-primary font-label px-6 py-2.5 rounded-full font-semibold hover:bg-primary-dim transition-all shadow-sm">
              Continue Session
            </button>
          </div>

          {/* Desktop Orb: Floating right */}
          <div className="hidden md:flex relative items-center justify-center p-4">
            {/* <!-- Progress Orb (Custom Component) --> */}
            <svg className="w-32 h-32 md:w-40 md:h-40 transform -rotate-90">
              <circle className="text-tertiary-container" cx="50%" cy="50%" fill="transparent" r="45%"
                stroke="currentColor" strokeWidth="12"></circle>
              <circle className="text-tertiary" cx="50%" cy="50%" fill="transparent" r="45%" stroke="currentColor"
                strokeDasharray="282.6" strokeDashoffset="84" strokeLinecap="round" strokeWidth="12"></circle>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-headline text-2xl font-bold">70%</span>
              <span className="font-label text-[10px] uppercase font-bold text-on-surface-variant">Done</span>
            </div>
          </div>

          {/* <!-- Subtle Decorative Gradient --> */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl pointer-events-none"></div>
        </div>
        {/* <!-- Mini Stats Card --> */}
        <div
          className="bg-surface-container-highest rounded-lg p-6 flex flex-col justify-center gap-4 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="bg-primary-container p-3 rounded-full">
              <span className="material-symbols-outlined text-on-primary-container" data-icon="local_fire_department"
                style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            </div>
            <div>
              <div className="font-headline text-2xl font-bold">14 Days</div>
              <div className="font-label text-xs text-on-surface-variant">Current Streak</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-tertiary-container p-3 rounded-full">
              <span className="material-symbols-outlined text-on-tertiary-container" data-icon="military_tech"
                style={{ fontVariationSettings: "'FILL' 1" }}>military_tech</span>
            </div>
            <div>
              <div className="font-headline text-2xl font-bold">Master</div>
              <div className="font-label text-xs text-on-surface-variant">Current Rank</div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Search Bar --> */}
      <section>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline"
            data-icon="search">search</span>
          <input
            className="w-full bg-surface-container-lowest border-none border-b-2 border-outline focus:ring-0 focus:border-primary rounded-t-lg px-12 py-4 font-body text-on-surface transition-all"
            placeholder="Search vocabulary or sets" type="text" />
        </div>
      </section>
      {/* <!-- Featured Carousel --> */}
      <section className="space-y-4">
        <div className="flex items-end justify-between">
          <h3 className="font-headline text-lg md:text-2xl font-bold px-1">Featured Flashcard Sets</h3>
          <a className="font-label text-sm font-semibold text-primary hover:underline" href="#">View all</a>
        </div>
        <div className="flex overflow-x-auto gap-6 pb-4 hide-scrollbar -mx-4 px-4">
          {/* <!-- Carousel Card 1 --> */}
          <div className="flex-none w-72 group">
            <div className="h-44 w-full rounded-lg bg-cover bg-center mb-3 relative overflow-hidden"
              data-alt="Aeroplane and passport on world map"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBaEcBjfFlzByPiYClmj-iT2h_NhXjHHC9ODOZPzN2JGOTOCtqfn6G0crGpGidJxCtmAQa-6JU3LTttqGyX08ePVdcaOwYel_G1kKSso3HAFxkuc96zYgpMJDEbuVUNrnC7Z__8jtAwur5jT6N6LiPBaz8elnhS6ujVZWqkmBL6i3KIkeXt4H0P4a93NL-RtgFtRW8dLlkxDfQP8qqVnRmIPiwJJnLo4axJIx7SpECKmqmkEeNy2sga9eF3unT6O7fX3zlzsMYlmTE')" }}>
              <div className="absolute inset-0 bg-linear-to-t from-on-background/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span
                  className="bg-primary text-on-primary text-[10px] font-bold uppercase px-2 py-1 rounded">Popular</span>
              </div>
            </div>
            <h4 className="font-headline font-bold text-lg leading-tight group-hover:text-primary transition-colors">
              Essential Travel Phrases</h4>
            <p className="font-body text-sm text-on-surface-variant">Navigate any airport like a local</p>
          </div>
          {/* <!-- Carousel Card 2 --> */}
          <div className="flex-none w-72 group">
            <div className="h-44 w-full rounded-lg bg-cover bg-center mb-3 relative overflow-hidden"
              data-alt="Platter of gourmet international food dishes"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCopEHno3mt2eBLTj5tVMzchXUQXnubdkUBn1G6hRbGNS-MTTeztmmyeYn1LFYtDjB7eGg46UC4ZLfy4TWWFLfBGE-YWahuTGmNwPaGrEp_W7WD9tPJBh6UYxuiO1JwI8Bw1KoNC0JRSvNLQhVRfY3deT61SL3Jc2rRb9IRgd9fL5bo0qja4VZCOaaFpZ0RsjmIi6fsVfaOVD23JskyVbG-0T4CihGkmiwVr-rMm9EZO76VFGNiSeg2anN-iQ1hO8p3GCD-95LxTzg')" }}>
              <div className="absolute inset-0 bg-linear-to-t from-on-background/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 flex gap-2">
                <span
                  className="bg-tertiary text-on-tertiary text-[10px] font-bold uppercase px-2 py-1 rounded">New</span>
              </div>
            </div>
            <h4 className="font-headline font-bold text-lg leading-tight group-hover:text-primary transition-colors">Food
              &amp; Dining</h4>
            <p className="font-body text-sm text-on-surface-variant">Master the menu and order with ease</p>
          </div>
          {/* <!-- Carousel Card 3 --> */}
          <div className="flex-none w-72 group">
            <div className="h-44 w-full rounded-lg bg-cover bg-center mb-3 relative overflow-hidden"
              data-alt="Modern office meeting room setting"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAAPAvB7almgvM1sscWdWs-37VcXZ8UViKCuYpgST-bECnuZLK8INKSy-VMurGtAOsolNS9Sthyht8m-iQRROoAQxJau1NHq1iXQoX_KUFJpamSzYK447dQnjDACbLWUn2ASP5lyZxUrKcDYlEO8UER2J_UAKLzPAyRTCsM2alavPuTcpAD03LeVgAGYdjW76h2uKKhPE9P2ClNzApCNXmWbpZTUQDVP5Jy0qgRXfvQEXmEk4ENsSg5Jp9-ozSkVLj1tqejq7zCI7Q')" }}>
              <div className="absolute inset-0 bg-linear-to-t from-on-background/60 to-transparent"></div>
            </div>
            <h4 className="font-headline font-bold text-lg leading-tight group-hover:text-primary transition-colors">
              Business Etiquette</h4>
            <p className="font-body text-sm text-on-surface-variant">Formal vocabulary for global careers</p>
          </div>
        </div>
      </section>
      {/* <!-- Main Content: Vocabulary Sets (Vertical List Style Cards) --> */}
      <section className="space-y-4">
        <h3 className="font-headline text-xl md:text-2xl font-bold px-1">Your Vocabulary Sets</h3>
        <div className="grid grid-cols-1 gap-4">
          {/* <!-- Vocab Set Card 1 --> */}
          <div
            className="bg-surface-container-low px-3 py-5 flex flex-col items-start md:flex-row md:items-center gap-5 md:justify-between rounded-lg group hover:bg-surface-container transition-all">
            <div className="w-full flex items-center gap-5">
              <div
                className="w-14 h-14 bg-surface-container-lowest rounded-lg flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-3xl" data-icon="translate">translate</span>
              </div>
              <div className="w-full">
                <h4 className="font-headline font-bold text-lg">German Basics A1</h4>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="font-body text-sm text-on-surface-variant whitespace-nowrap">50 cards</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span className="font-body text-sm text-primary font-medium whitespace-nowrap">85% Mastered</span>
                </div>
              </div>
            </div>
            <button
              className="self-end md:self-auto bg-secondary-container text-on-secondary-container font-label px-5 py-2 rounded-full font-bold text-sm hover:bg-secondary-fixed transition-all shrink-0">
              Start Learning
            </button>
          </div>
          {/* <!-- Vocab Set Card 2 --> */}
          <div
            className="bg-surface-container-low px-3 py-5 flex flex-col items-start md:flex-row md:items-center gap-5 md:justify-between rounded-lg group hover:bg-surface-container transition-all">
            <div className="w-full flex items-center gap-5">
              <div
                className="w-14 h-14 bg-surface-container-lowest rounded-lg flex items-center justify-center text-tertiary shrink-0">
                <span className="material-symbols-outlined text-3xl" data-icon="history_edu">history_edu</span>
              </div>
              <div className="w-full">
                <h4 className="font-headline font-bold text-lg">Academic Verbs</h4>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="font-body text-sm text-on-surface-variant whitespace-nowrap">120 cards</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span className="font-body text-sm text-on-surface-variant whitespace-nowrap">New Set</span>
                </div>
              </div>
            </div>
            <button
              className="self-end md:self-auto bg-secondary-container text-on-secondary-container font-label px-5 py-2 rounded-full font-bold text-sm hover:bg-secondary-fixed transition-all shrink-0">
              Start Learning
            </button>
          </div>
          {/* <!-- Vocab Set Card 3 --> */}
          <div
            className="bg-surface-container-low px-3 py-5 flex flex-col items-start md:flex-row md:items-center gap-5 md:justify-between rounded-lg group hover:bg-surface-container transition-all">
            <div className="w-full flex items-center gap-5">
              <div
                className="w-14 h-14 bg-surface-container-lowest rounded-lg flex items-center justify-center text-error shrink-0">
                <span className="material-symbols-outlined text-3xl"
                  data-icon="medical_services">medical_services</span>
              </div>
              <div className="w-full">
                <h4 className="font-headline font-bold text-lg">Medical Terminology</h4>
                <div className="flex items-center gap-2 mt-1 flex-wrap">
                  <span className="font-body text-sm text-on-surface-variant whitespace-nowrap">75 cards</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full"></span>
                  <span className="font-body text-sm text-primary font-medium whitespace-nowrap">32% Mastered</span>
                </div>
              </div>
            </div>
            <button
              className="self-end md:self-auto bg-secondary-container text-on-secondary-container font-label px-5 py-2 rounded-full font-bold text-sm hover:bg-secondary-fixed transition-all shrink-0">
              Start Learning
            </button>
          </div>
        </div>
        {/* <!-- Create New Floating-style Call to Action --> */}
        <button
          className="w-full mt-2 border-2 border-dashed border-outline-variant py-4 rounded-lg flex items-center justify-center gap-2 text-on-surface-variant hover:bg-surface-container-low hover:border-primary transition-all group">
          <span className="material-symbols-outlined text-lg group-hover:text-primary" data-icon="add">add</span>
          <span className="font-label font-bold text-sm">Create New Set</span>
        </button>
      </section>
    </main>
  )
}

export default Home


