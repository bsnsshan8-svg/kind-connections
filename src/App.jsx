import React from "react";
import { ArrowRight, Check, Instagram, Menu, Sparkles, Star, X } from "lucide-react";

const instagramUrl = "https://www.instagram.com/drnadahassan/?hl=en";

const services = [
  {
    number: "01",
    title: "Facial Aesthetics & Anti-Aging",
    intro: "Refined treatments designed to revitalise the skin and support a naturally fresh, healthy appearance.",
    items: [
      ["PRP Therapy", "Face PRP for natural rejuvenation, skin revitalisation, collagen support, and a healthy glow."],
      ["Exosome Therapy", "Advanced skin regeneration and repair to boost radiance and restore the skin barrier."],
      ["HydraFacial", "Deep cleansing, exfoliation, and intensive skin hydration."]
    ]
  },
  {
    number: "02",
    title: "Injectables & Contouring",
    intro: "Subtle, personalised enhancements focused on balance, definition, and facial harmony.",
    items: [
      ["Lip Fillers", "Subtle volume enhancement, lip symmetry, shape refinement, and definition."],
      ["Dermal Fillers & Anti-Wrinkle", "Fine-line reduction and facial contouring tailored to your features."]
    ]
  },
  {
    number: "03",
    title: "Hair & Scalp Treatments",
    intro: "Targeted care for healthier-looking hair and a refreshed scalp.",
    items: [
      ["Hair PRP", "A hair-loss treatment supporting hair restoration and scalp rejuvenation."]
    ]
  },
  {
    number: "04",
    title: "Specialised Skin Treatments",
    intro: "Personalised solutions for clearer, smoother, more confident skin.",
    items: [
      ["Acne & Breakout Care", "Targeted, personalised treatment plans for clear, smoother skin."],
      ["Laser Treatments", "Laser skin rejuvenation and hair removal services."]
    ]
  }
];

function Logo({ compact=false }) {
  return (
    <a className={compact ? "brand brand--compact" : "brand"} href="#top" aria-label="Dr. Nada's Clinic home">
      <span className="brand-mark"><span></span><span></span><span></span></span>
      <span><strong>Dr. Nada's</strong><small>CLINIC</small></span>
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [appointmentOpen, setAppointmentOpen] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    comments: "",
  });
  const [submitted, setSubmitted] = React.useState(false);

  const closeMenu = () => setMenuOpen(false);

  const openAppointment = (event) => {
    event?.preventDefault();
    closeMenu();
    setSubmitted(false);
    setAppointmentOpen(true);
  };

  const closeAppointment = () => setAppointmentOpen(false);

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitAppointment = (event) => {
    event.preventDefault();

    const message = [
      "Hello Dr. Nada's Clinic,",
      "",
      "I would like to book an appointment.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Service: ${form.service}`,
      `Comments: ${form.comments || "None"}`,
      "",
      "Thank you.",
    ].join("\n");

    setSubmitted(true);
    window.location.href = `https://wa.me/923341111028?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="site" id="top">
      <header className="header">
        <div className="container nav">
          <Logo />
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#treatments" onClick={closeMenu}>Treatments</a>
            <a href="#why-us" onClick={closeMenu}>Why us</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-book" href="#contact" onClick={openAppointment}>Book a consultation <ArrowRight size={16}/></a>
          </nav>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-orb hero-orb--one"></div>
          <div className="hero-orb hero-orb--two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15}/> Aesthetic medicine with a natural touch</div>
              <h1>Confidence, <em>refined.</em><br/>Skin care, thoughtfully personalised.</h1>
              <p>Advanced aesthetic and skin treatments focused on healthy-looking skin, subtle enhancement, and results that feel like you.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact" onClick={openAppointment}>Book a consultation <ArrowRight size={17}/></a>
                <a className="btn btn-ghost" href="#treatments">Explore treatments</a>
              </div>
              <div className="hero-note"><span className="dot"></span> Personalised care • Modern treatments • Natural-looking results</div>
            </div>
            <div className="hero-card-wrap">
              <div className="hero-card">
                <div className="portrait-placeholder">
                  <div className="portrait-glow"></div>
                  <div className="portrait-line portrait-line--1"></div>
                  <div className="portrait-line portrait-line--2"></div>
                  <span>DR. NADA'S<br/><b>CLINIC</b></span>
                </div>
                <div className="floating-card">
                  <Star size={15} fill="currentColor"/>
                  <div><strong>Personalised</strong><small>treatment plans</small></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <div className="container trust-inner">
            <span>FACE</span><i></i><span>SKIN</span><i></i><span>HAIR</span><i></i><span>CONFIDENCE</span>
          </div>
        </section>

        <section className="section about" id="about">
          <div className="container two-col">
            <div>
              <p className="section-kicker">A more considered approach</p>
              <h2>Enhance what makes you <em>you.</em></h2>
            </div>
            <div className="about-copy">
              <p>At Dr. Nada's Clinic, every treatment is selected around your individual goals, skin needs, and natural features. Our approach combines modern aesthetic treatments with a refined, personal experience.</p>
              <p>From skin rejuvenation and injectables to hair and scalp care, the focus is on thoughtful treatment and a result that looks fresh, balanced, and authentically yours.</p>
            </div>
          </div>
        </section>

        <section className="section treatments" id="treatments">
          <div className="container">
            <div className="section-head">
              <div><p className="section-kicker">Our treatments</p><h2>Care that starts with <em>you.</em></h2></div>
              <p className="section-intro">Explore our core aesthetic, skin, hair, and contouring treatments.</p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-top"><span>{service.number}</span><Sparkles size={18}/></div>
                  <h3>{service.title}</h3>
                  <p className="service-intro">{service.intro}</p>
                  <div className="service-items">
                    {service.items.map(([name, text]) => (
                      <div className="service-item" key={name}>
                        <div className="check"><Check size={13}/></div>
                        <div><strong>{name}</strong><p>{text}</p></div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why" id="why-us">
          <div className="container why-grid">
            <div className="why-panel">
              <p className="section-kicker">The Dr. Nada's difference</p>
              <h2>Subtle. Modern. <em>Personal.</em></h2>
              <p>Every face, skin type, and goal is different. We believe the best aesthetic journey starts by listening, understanding, and creating a plan around you.</p>
              <a className="text-link" href="#contact" onClick={openAppointment}>Start your consultation <ArrowRight size={17}/></a>
            </div>
            <div className="why-list">
              {["Personalised treatment planning", "Natural-looking aesthetic focus", "Modern skin, hair & aesthetic treatments", "A calm, premium clinic experience"].map((item, i) => (
                <div className="why-item" key={item}><span>0{i+1}</span><div><strong>{item}</strong><p>Thoughtful care built around your individual goals and comfort.</p></div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="instagram">
          <div className="container instagram-box">
            <div><Instagram size={21}/><p className="section-kicker">Follow the clinic</p><h2>See more of <em>Dr. Nada's</em> work.</h2></div>
            <a className="btn btn-light" href={instagramUrl} target="_blank" rel="noreferrer">Visit Instagram <ArrowRight size={17}/></a>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container contact-box">
            <div>
              <p className="section-kicker">Ready when you are</p>
              <h2>Let's create a plan<br/><em>made for you.</em></h2>
              <p>Book a consultation to discuss your goals and find the right treatment approach for you.</p>
            </div>
            <div className="contact-actions">
              <a className="btn btn-primary" href="#contact" onClick={openAppointment}>Request a consultation <ArrowRight size={17}/></a>
              <a className="contact-instagram" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18}/> @drnadahassan</a>
            </div>
          </div>
        </section>
      </main>

      {appointmentOpen && (
        <div className="appointment-overlay" role="presentation" onMouseDown={closeAppointment}>
          <div
            className="appointment-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="appointment-close" type="button" onClick={closeAppointment} aria-label="Close appointment form">
              <X size={20} />
            </button>
            <div className="appointment-heading">
              <p className="section-kicker">Book an appointment</p>
              <h2 id="appointment-title">Let's make a plan <em>for you.</em></h2>
              <p>Share your details and we'll continue with you on WhatsApp.</p>
            </div>

            <form className="appointment-form" onSubmit={submitAppointment}>
              <label>
                <span>Full Name <b>*</b></span>
                <input
                  type="text"
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  placeholder="Your full name"
                  required
                  autoComplete="name"
                />
              </label>

              <label>
                <span>Phone Number <b>*</b></span>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="Your phone number"
                  required
                  autoComplete="tel"
                />
              </label>

              <label>
                <span>Email Address <b>*</b></span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="you@example.com"
                  required
                  autoComplete="email"
                />
              </label>

              <label>
                <span>Service <b>*</b></span>
                <select
                  value={form.service}
                  onChange={(event) => updateField("service", event.target.value)}
                  required
                >
                  <option value="" disabled>Select a service</option>
                  <option>PRP Therapy (Face)</option>
                  <option>Exosome Therapy</option>
                  <option>HydraFacial</option>
                  <option>Lip Fillers</option>
                  <option>Dermal Fillers</option>
                  <option>Anti-Wrinkle Treatments</option>
                  <option>Hair PRP</option>
                  <option>Acne &amp; Breakout Care</option>
                  <option>Laser Treatments</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="appointment-full">
                <span>Comments <small>(optional)</small></span>
                <textarea
                  value={form.comments}
                  onChange={(event) => updateField("comments", event.target.value)}
                  placeholder="Tell us anything you'd like us to know..."
                  rows="4"
                />
              </label>

              <button className="btn btn-primary appointment-submit" type="submit">
                {submitted ? "Opening WhatsApp..." : "Submit & Continue to WhatsApp"}
                <ArrowRight size={17} />
              </button>
            </form>
          </div>
        </div>
      )}

      <footer className="footer">
        <div className="container footer-inner">
          <Logo compact />
          <p>© {new Date().getFullYear()} Dr. Nada's Clinic. All rights reserved.</p>
          <a href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18}/></a>
        </div>
      </footer>
    </div>
  );
}

export default App;