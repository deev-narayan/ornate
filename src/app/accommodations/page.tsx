export default function HotelPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory pt-40 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-6">Hotel & Accommodations</p>
        <h1 className="font-serif text-6xl md:text-8xl text-ivory mb-10 leading-[1]">
          Maharaja<br /><span className="italic text-gold">Suites.</span>
        </h1>
        <p className="font-sans font-light text-smoke text-lg leading-relaxed max-w-2xl">
          Experience unmatched hospitality and luxurious comfort at Ornate Lucknow.
          Our accommodations are thoughtfully designed to provide a seamless blend
          of elegance, convenience, and relaxation.
        </p>
      </div>
    </main>
  );
}
