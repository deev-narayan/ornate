export default function ContactPage() {
  return (
    <main className="min-h-screen bg-midnight text-ivory pt-40 px-6">
      <div className="container mx-auto max-w-5xl">
        <p className="font-display text-gold tracking-[0.3em] uppercase text-xs mb-6">Get In Touch</p>
        <h1 className="font-serif text-6xl md:text-8xl text-ivory mb-10 leading-[1]">
          The Front<br /><span className="italic text-gold">Desk.</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16">
          <div>
            <h2 className="font-serif text-2xl text-ivory mb-6">Contact Details</h2>
            <ul className="font-sans font-light text-smoke space-y-4">
              <li><a href="mailto:info@theornate.in" className="hover:text-gold transition-colors">info@theornate.in</a></li>
              <li><a href="tel:+919151209000" className="hover:text-gold transition-colors">+91 9151209000</a></li>
              <li><a href="tel:+919219904134" className="hover:text-gold transition-colors">+91 9219904134</a></li>
              <li><a href="tel:+919236392897" className="hover:text-gold transition-colors">+91 9236392897</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl text-ivory mb-6">Location</h2>
            <address className="font-sans font-light text-smoke not-italic leading-relaxed">
              Sec 6A, Near Akash Enclave,<br />
              Vrindavan Yojana,<br />
              Lucknow, Uttar Pradesh 226029
            </address>
          </div>
        </div>
      </div>
    </main>
  );
}
