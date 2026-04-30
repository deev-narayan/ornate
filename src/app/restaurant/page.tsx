export default function RestaurantPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory pt-40 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-6">Fine Dining</p>
        <h1 className="font-serif text-6xl md:text-8xl text-ivory mb-10 leading-[1]">
          AMRKH<br /><span className="italic text-gold">Restaurant.</span>
        </h1>
        <p className="font-sans font-light text-smoke text-lg leading-relaxed max-w-2xl">
          A curated dining experience where rich Awadhi flavours meet contemporary
          culinary artistry. A feast for all the senses.
        </p>
      </div>
    </main>
  );
}
