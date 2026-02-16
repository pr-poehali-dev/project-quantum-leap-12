export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            1-НА-1
          </a>
          <div className="flex space-x-8">
            <a href="#problem" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors hidden md:block">
              Зачем
            </a>
            <a href="#format" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors hidden md:block">
              Формат
            </a>
            <a
              href="#buy"
              className="text-sm uppercase tracking-widest bg-red-600 text-white px-4 py-1 hover:bg-red-700 transition-colors"
            >
              Купить
            </a>
          </div>
        </div>
      </nav>

      {/* Screen 1 — Hero */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest mb-6 text-neutral-500">
              28 февраля · 19:00 МСК · Онлайн
            </p>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              КАК
              <br />
              ПРОВОДИТЬ
              <br />
              <span className="text-red-600">1-НА-1</span>
              <br />
              С РУКОВОДИ&shy;ТЕЛЕМ
            </h1>
            <p className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
              За один вечер научитесь управлять встречей one‑to‑one так, чтобы она шла на пользу вашей карьере
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <a
                href="#buy"
                className="inline-block bg-red-600 text-white text-lg font-bold uppercase tracking-wider px-8 py-4 hover:bg-red-700 transition-colors text-center"
              >
                Купить со скидкой
              </a>
              <div>
                <p className="text-2xl font-bold">
                  3 990 ₽ <span className="text-neutral-400 line-through text-lg font-normal ml-1">4 990 ₽</span>
                </p>
                <p className="text-sm text-neutral-500">Цена до 22 февраля</p>
              </div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-center justify-center">
              <span className="text-white text-[120px] md:text-[160px] font-bold leading-none tracking-tighter">
                1:1
              </span>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 2 — Problem */}
      <section id="problem" className="py-16 md:py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-12 max-w-4xl leading-tight">
            Надоело пассивно участвовать в&nbsp;1‑на‑1 и&nbsp;упускать карьерные возможности?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-red-500 mb-6">Обычная схема</h3>
              <div className="space-y-4">
                {[
                  "Вы приходите, нервничая перед неизвестностью",
                  "Начальник задаёт вопросы",
                  "Вы пассивно отвечаете",
                  "Начальник управляет встречей и сам решает, как она пойдёт",
                  "Вы не знаете, чем это закончится",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 border-b border-neutral-800 pb-4">
                    <span className="text-red-600 font-bold text-lg shrink-0">0{i + 1}</span>
                    <p className="text-neutral-300 text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-sm uppercase tracking-widest text-red-500 mb-6">После воркшопа</h3>
                <p className="text-xl leading-relaxed mb-8">
                  На воркшопе мы научим вас проводить встречи так, чтобы инициатива была на вашей стороне.
                </p>
                <p className="text-lg text-neutral-400 leading-relaxed">
                  Поможем составить чек‑лист подготовки и нужные вопросы, чтобы подвести руководителя к&nbsp;вашим карьерным целям.
                </p>
              </div>
              <a
                href="#buy"
                className="mt-10 inline-block border-2 border-white text-white text-lg font-bold uppercase tracking-wider px-8 py-4 hover:bg-white hover:text-black transition-colors text-center"
              >
                Купить воркшоп
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Screen 3 — Format */}
      <section id="format" className="py-16 md:py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-12">
            КАК ПРОЙДЁТ ВСТРЕЧА?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border-2 border-black p-8 md:p-10 group hover:bg-black hover:text-white transition-colors duration-300">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-6xl md:text-7xl font-bold text-red-600">01</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Теория</h3>
              <p className="text-lg leading-relaxed text-neutral-600 group-hover:text-neutral-300 transition-colors">
                Понятный и подробный теоретический блок со стратегиями подготовки и проведения встреч с руководителем.
              </p>
            </div>

            <div className="border-2 border-black p-8 md:p-10 group hover:bg-black hover:text-white transition-colors duration-300">
              <div className="flex items-start gap-4 mb-6">
                <span className="text-6xl md:text-7xl font-bold text-red-600">02</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Практика</h3>
              <p className="text-lg leading-relaxed text-neutral-600 group-hover:text-neutral-300 transition-colors">
                Отработка переговоров: вы вживую прорепетируете реплики, чтобы чувствовать себя уверенно на реальной встрече.
              </p>
            </div>
          </div>

          <div className="mt-8 border-t-2 border-black pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-8">
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">Начало</p>
                <p className="text-2xl font-bold">19:00 МСК</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">Окончание</p>
                <p className="text-2xl font-bold">~23:00 МСК</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-neutral-500 mb-1">Формат</p>
                <p className="text-2xl font-bold">Онлайн</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Buy */}
      <section id="buy" className="py-16 md:py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter mb-6">
            ЗАБРОНИРОВАТЬ МЕСТО
          </h2>
          <p className="text-xl mb-2">28 февраля · 19:00 МСК</p>
          <p className="text-lg mb-10 text-white/80">
            До 22 февраля — <span className="font-bold text-white">3 990 ₽</span>, после — 4 990 ₽
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white text-lg font-bold uppercase tracking-wider px-12 py-5 hover:bg-neutral-900 transition-colors"
          >
            Купить со скидкой — 3 990 ₽
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">© 2025. Все права защищены.</p>
          <p className="text-sm text-neutral-500">Воркшоп «Как проводить встречу 1-на-1 с руководителем»</p>
        </div>
      </footer>
    </main>
  );
}
