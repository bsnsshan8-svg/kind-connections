import React from "react";
import { ArrowRight, Check, ChevronDown, Clock3, Instagram, Menu, MessageCircle, ShieldCheck, Sparkles, Star, X } from "lucide-react";
import portraitAsset from "./assets/dr-nada-portrait.png.asset.json";
import clinicLogo from "./assets/dr-nada-logo.png";
import problemSkin from "./assets/problem-skin.webp";
import treatmentGallery from "./assets/treatment-gallery.webp";
import reviewUraiza from "./assets/review-uraiza.webp";

const instagramUrl = "https://www.instagram.com/drnadahassan/?hl=en";
const whatsappNumber = "923341111028";
const ebookTitle = "How to Keep Your Skin Hydrated in Winter";

const treatments = [
  { title: "PRP Therapy", category: "Skin rejuvenation", text: "Face PRP focused on skin revitalisation, collagen support, and a healthy-looking glow." },
  { title: "Exosome Therapy", category: "Skin regeneration", text: "An advanced regenerative approach designed to support skin repair, radiance, and the skin barrier." },
  { title: "HydraFacial", category: "Deep cleanse & hydration", text: "Deep cleansing, exfoliation, and hydration for refreshed, smoother-looking skin." },
  { title: "Lip Fillers", category: "Facial contouring", text: "Subtle volume, symmetry, shape refinement, and definition tailored to your features." },
  { title: "Dermal Fillers", category: "Contour & balance", text: "Personalised facial contouring and fine-line care with a balanced aesthetic focus." },
  { title: "Anti-Wrinkle Treatments", category: "Fine-line care", text: "Targeted treatment planning for the appearance of fine lines and facial expression areas." },
  { title: "Hair PRP", category: "Hair & scalp", text: "A targeted treatment approach supporting hair restoration and scalp rejuvenation." },
  { title: "Acne & Breakout Care", category: "Specialised skin", text: "Personalised treatment planning for clearer, smoother-looking skin." },
  { title: "Laser Treatments", category: "Laser care", text: "Laser skin rejuvenation and hair-removal services selected around your needs." }
];

const faqs = [
  ["How do I know which treatment is right for me?", "The consultation is the starting point. We discuss your goals, concerns, skin or hair needs, and the appropriate treatment approach before you proceed."],
  ["Can I book a consultation before choosing a treatment?", "Yes. You can request a consultation and share your main concern. The clinic can then guide you on the next step."],
  ["Will my treatment plan be personalised?", "Treatment planning is centred around your individual goals, features, needs, comfort, and the treatment being considered."],
  ["How do I prepare for my appointment?", "Preparation can vary by treatment. When you request an appointment, mention the treatment you are considering so the clinic can provide relevant guidance."],
  ["How can I ask about pricing?", "Pricing can vary by treatment and individual plan. Request a consultation to discuss the treatment and applicable fees."],
  ["How do I book?", "Use the booking button to submit your details. Your request will continue through WhatsApp with Dr. Nada's Clinic."]
];

const testimonials = [
  { name: "Uraiza Khan", treatment: "Under-eye care & PRP", text: "I got some of my sessions for my under eye and got prp done as well. Their services are incredible. And I genuinely got the results I wanted. Plus their hydra facial is the best in both twin cities. Highly recommended for anyone looking for a great dermatologist.", image: reviewUraiza },
  { name: "Minahil Jamil", treatment: "Clinic experience", text: "I really liked the experience here. The doctor was very professional and nice and the staff was respectful and well trained. 10/10 recommendation." },
  { name: "Haya Shoaib", treatment: "Clinic experience", text: "It was my first time at Dr. Nada’s clinic and it was a great experience. The environment is very nice and the staff is very cooperative." }
];

function Logo({ compact = false }) {
  return (
    <a className={compact ? "brand brand--compact" : "brand"} href="/" aria-label="Dr. Nada's Clinic home">
      <img className="brand-logo" src={clinicLogo} alt="Dr. Nada's Clinic" />
    </a>
  );
}


const dedicatedContent = {
  about: {
    eyebrow: "THE CLINIC EXPERIENCE",
    title: "Personalised care, thoughtfully delivered.",
    intro: "A premium clinic experience built around listening, thoughtful treatment planning, and comfortable care.",
    items: [
      ["Personalised consultations", "Your concerns, goals, features, and comfort guide the treatment conversation."],
      ["Skin, hair & aesthetics", "A focused range of services covering facial aesthetics, skin health, hair and scalp care, and laser treatments."],
      ["Calm, considered care", "A premium environment designed to make every stage of your visit feel clear and comfortable."]
    ]
  },
  treatments: {
    eyebrow: "TREATMENTS & SERVICES",
    title: "Advanced treatments, tailored to you.",
    intro: "Explore the clinic's skin, hair, aesthetic, injectable, and laser services. Suitability and treatment planning are discussed during consultation.",
    items: treatments.map((t) => [t.title, t.text])
  },
  specialists: {
    eyebrow: "MEET THE SPECIALIST",
    title: "Expert care with a personal approach.",
    intro: "Dr. Nada's Clinic brings together aesthetic, skin, hair, and scalp services around a consultation-led approach.",
    items: [
      ["Dr. Nada Hassan", "Aesthetic, skin, and hair care services delivered through a personalised patient journey."],
      ["Consultation first", "Your goals and concerns are discussed before deciding on an appropriate treatment approach."],
      ["Individual treatment planning", "Treatment choices are considered around your needs, comfort, and desired outcome."]
    ]
  },
  results: {
    eyebrow: "PATIENT RESULTS & STORIES",
    title: "Real experiences. Individual outcomes.",
    intro: "Selected genuine patient feedback is presented below. Individual treatment outcomes vary and results should always be discussed with a qualified clinician.",
    items: testimonials.map((t) => [t.name, t.text])
  },
  clinic: {
    eyebrow: "THE CLINIC",
    title: "Designed around your comfort.",
    intro: "A calm, considered environment where the clinical experience feels personal, private, and welcoming.",
    items: [
      ["A calm experience", "From consultation to treatment, the experience is designed to feel clear and unhurried."],
      ["Private & professional", "A considered setting for personal conversations, treatment planning, and care."],
      ["Modern treatment options", "Explore a focused menu of skin, hair, aesthetic, and laser services."]
    ]
  },
  faqs: {
    eyebrow: "FREQUENTLY ASKED QUESTIONS",
    title: "Answers before you book.",
    intro: "Find quick answers about consultations, treatment planning, preparation, pricing, and appointments.",
    items: faqs
  }
};

function DedicatedPage({ type }) {
  const data = dedicatedContent[type];
  const [openFaq, setOpenFaq] = React.useState(0);
  if (!data) return null;
  const isFaq = type === "faqs";
  return (
    <div className="dedicated-page">
      <header className="dedicated-header">
        <div className="container dedicated-nav">
          <Logo />
          <nav>
            <a href="/about">About</a><a href="/treatments">Treatments</a><a href="/specialists">Specialists</a>
            <a href="/results">Results</a><a href="/clinic">The Clinic</a><a href="/faqs">FAQs</a>
          </nav>
          <a className="btn btn-primary dedicated-book" href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Dr. Nada's Clinic, I would like to request a consultation.")}`} target="_blank" rel="noreferrer">Book a consultation <ArrowRight size={16}/></a>
        </div>
      </header>
      <main>
        <section className="dedicated-hero">
          <div className="container">
            <p className="section-kicker">{data.eyebrow}</p>
            <h1>{data.title}</h1>
            <p>{data.intro}</p>
          </div>
        </section>
        <section className="section dedicated-content">
          <div className={isFaq ? "container dedicated-faq-list" : "container dedicated-cards"}>
            {data.items.map(([title, text], i) =>
              isFaq ? (
                <article className="dedicated-faq" key={title}>
                  <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{title}</span><ChevronDown size={18}/></button>
                  {openFaq === i && <p>{text}</p>}
                </article>
              ) : (
                <article className="dedicated-card" key={title}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                  <h2>{title}</h2>
                  <p>{text}</p>
                </article>
              )
            )}
          </div>
        </section>
        {type === "results" && (
          <section className="section dedicated-proof">
            <div className="container dedicated-proof-grid">
              <div><img src={reviewUraiza} alt="Patient review supplied for Dr. Nada's Clinic" /></div>
              <div><p className="section-kicker">Genuine patient feedback</p><h2>Real words from a patient.</h2><p>More consented before-and-after material can be added here when genuine clinical documentation and patient permission are available.</p></div>
            </div>
          </section>
        )}
        {type === "clinic" && (
          <section className="section dedicated-proof">
            <div className="container dedicated-proof-grid">
              <div><img src={treatmentGallery} alt="Treatment services at Dr. Nada's Clinic" /></div>
              <div><p className="section-kicker">Treatment environment</p><h2>A considered clinical experience.</h2><p>This gallery uses the approved treatment visuals supplied for the clinic website. Real clinic interior photography can be added when available.</p></div>
            </div>
          </section>
        )}
        {type === "specialists" && (
          <section className="section dedicated-proof">
            <div className="container dedicated-proof-grid">
              <div><img src={portraitAsset.url} alt="Dr. Nada Hassan" /></div>
              <div><p className="section-kicker">Dr. Nada Hassan</p><h2>A consultation-led approach.</h2><p>For current qualifications, certifications, professional memberships, and clinical experience, please request the clinic's verified credentials during your consultation.</p></div>
            </div>
          </section>
        )}
      </main>
      <footer className="footer"><div className="container footer-inner"><Logo compact /><div className="footer-links"><a href="/about">About</a><a href="/treatments">Treatments</a><a href="/faqs">FAQs</a><a href="/">Home</a></div><a className="footer-social" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18}/></a><p>© {new Date().getFullYear()} Dr. Nada's Clinic. All rights reserved.</p></div></footer>
    </div>
  );
}

function App({ page = null }) {
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const pageKey = currentPath === "/" ? "home" : currentPath.replace(/^\//, "").replace(/\/$/, "") || "home";
  if (page && page !== "home") return <DedicatedPage type={page} />;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [appointmentOpen, setAppointmentOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState(0);
  const [ebookOpen, setEbookOpen] = React.useState(false);
  const [ebookAutoShown, setEbookAutoShown] = React.useState(false);
  const [ebookSubmitted, setEbookSubmitted] = React.useState(false);
  const [ebookForm, setEbookForm] = React.useState({ name: "", phone: "", email: "", concern: "", details: "" });
  const [form, setForm] = React.useState({ name: "", phone: "", email: "", service: "", comments: "" });

  const closeMenu = () => setMenuOpen(false);
  React.useEffect(() => {
    const timer = window.setTimeout(() => {
      setEbookOpen(true);
      setEbookAutoShown(true);
    }, 5000);
    return () => window.clearTimeout(timer);
  }, []);
  const openAppointment = (event) => {
    event?.preventDefault();
    closeMenu();
    setAppointmentOpen(true);
  };
  const updateField = (field, value) => setForm((current) => ({ ...current, [field]: value }));
  const updateEbookField = (field, value) => setEbookForm((current) => ({ ...current, [field]: value }));
  const submitEbook = (event) => {
    event.preventDefault();
    setEbookSubmitted(true);
  };
  const submitAppointment = (event) => {
    event.preventDefault();
    const message = [
      "Hello Dr. Nada's Clinic,",
      "",
      "I would like to request a private consultation.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Treatment: ${form.service}`,
      `Notes: ${form.comments || "None"}`,
      "",
      "Thank you."
    ].join("\n");
    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className={`site page-${pageKey}`} id="top">
      <header className="header">
        <div className="container nav">
          <Logo />
          <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>
            {[
              ["About", "/about"], ["Treatments", "/treatments"], ["Specialists", "/specialists"],
              ["Results", "/results"], ["The Clinic", "/clinic"], ["FAQs", "/faqs"]
            ].map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
            <a className="nav-book" href="#booking" onClick={openAppointment}>Book a consultation <ArrowRight size={15} /></a>
          </nav>
          <button className="menu-btn" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <button className="ebook-fab" onClick={() => { setEbookSubmitted(false); setEbookOpen(true); }} aria-label="Get our winter skin hydration ebook"><span>FREE EBOOK</span><strong>Winter Skin Guide</strong></button>
      <main>
        <section className="hero">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={14} /> A considered approach to aesthetic care</div>
              <h1>Exceptional care.<br /><em>Designed around you.</em></h1>
              <p>Advanced skin, hair, and aesthetic treatments with thoughtful clinical care and a personalised experience designed around your goals.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#booking" onClick={openAppointment}>Book a private consultation <ArrowRight size={17} /></a>
                <a className="btn btn-ghost" href="#treatments">Explore treatments</a>
              </div>
              <div className="hero-trust">
                <span><ShieldCheck size={15} /> Personalised care</span>
                <span><Sparkles size={15} /> Modern treatments</span>
                <span><Check size={15} /> Natural-looking focus</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-photo"><img src={portraitAsset.url} alt="Dr. Nada Hassan" /></div>
              <div className="hero-caption">
                <span className="caption-line" />
                <div><strong>Dr. Nada's Clinic</strong><small>Skin • Hair • Aesthetics</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="credibility">
          <div className="container credibility-grid">
            {[
              ["01", "Expertise", "Thoughtful treatment planning"],
              ["02", "Advanced Technology", "Modern treatment options"],
              ["03", "Personalised Care", "Plans built around you"],
              ["04", "Exceptional Experience", "Calm, considered care"]
            ].map(([n, title, text]) => (
              <div className="credibility-item" key={title}><span>{n}</span><div><strong>{title}</strong><small>{text}</small></div></div>
            ))}
          </div>
        </section>

        <section className="section about-editorial" id="about">
          <div className="container editorial-grid">
            <div className="editorial-image"><img src={problemSkin} alt="Patient considering her skin in a mirror" /></div>
            <div className="editorial-copy">
              <p className="section-kicker">The clinic experience</p>
              <h2>Care that feels <em>considered.</em></h2>
              <p>At Dr. Nada's Clinic, every journey starts with listening. Your concerns, goals, features, and comfort help shape the treatment conversation.</p>
              <p>Our focus spans facial aesthetics, skin health, hair and scalp treatments, and contouring — with an emphasis on thoughtful choices and a natural, balanced aesthetic.</p>
              <div className="signature"><span>“</span><div><strong>Personalised care, from the first conversation.</strong><small>A calm approach to your individual treatment journey.</small></div></div>
            </div>
          </div>
        </section>

        <section className="section specialist" id="specialists">
          <div className="container specialist-grid">
            <div className="specialist-copy">
              <p className="section-kicker">Meet the doctor</p>
              <h2>Dr. Nada Hassan</h2>
              <p className="specialist-role">Aesthetic • Skin • Hair Care</p>
              <p>Dr. Nada's Clinic brings together aesthetic treatments, skin care, and hair and scalp services in a setting centred around personalised patient care.</p>
              <div className="credentials-note"><ShieldCheck size={19} /><span>For qualifications, certifications, professional memberships, and clinical experience, please request the clinic's current credentials during your consultation.</span></div>
              <a className="text-link purple-link" href="#booking" onClick={openAppointment}>Meet the clinic team <ArrowRight size={17} /></a>
            </div>
            <div className="specialist-photo"><img src={portraitAsset.url} alt="Dr. Nada Hassan" /></div>
          </div>
        </section>

        <section className="section treatments-section" id="treatments">
          <div className="container">
            <div className="section-head">
              <div><p className="section-kicker">Treatments & services</p><h2>Thoughtful treatments.<br /><em>Individual plans.</em></h2></div>
              <p className="section-intro">Explore the clinic's core services. Treatment suitability, duration, recovery, and aftercare can be discussed during your consultation.</p>
            </div>
            <div className="treatment-layout">
              <div className="treatment-feature"><img src={treatmentGallery} alt="Dr. Nada's Clinic treatment gallery" /><div><span>Signature care</span><h3>Skin, hair & aesthetic treatments</h3><a href="#booking" onClick={openAppointment}>Discuss your goals <ArrowRight size={16} /></a></div></div>
              <div className="treatment-list">
                {treatments.map((t, i) => <a className="treatment-row" href="#booking" onClick={openAppointment} key={t.title}><span className="treatment-number">0{i + 1}</span><div><small>{t.category}</small><h3>{t.title}</h3><p>{t.text}</p></div><ArrowRight className="row-arrow" size={17} /></a>)}
              </div>
            </div>
          </div>
        </section>

        <section className="section signature-section">
          <div className="container">
            <div className="section-head"><div><p className="section-kicker">Our signature approach</p><h2>A premium experience,<br /><em>without the noise.</em></h2></div><p className="section-intro">Luxury is in the details: clear guidance, considered design, and care that gives you room to make informed decisions.</p></div>
            <div className="signature-grid">
              {[
                ["01", "Consultation first", "Start with your goals and concerns before deciding on a treatment."],
                ["02", "Natural-looking focus", "A balanced aesthetic approach that keeps your individual features at the centre."],
                ["03", "Modern treatment options", "A focused menu spanning skin, hair, injectables, and laser services."],
                ["04", "Ongoing care", "Keep communication clear through treatment and follow-up conversations."]
              ].map(([n, title, text]) => <div className="signature-card" key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
        </section>

        <section className="results-band" id="results">
          <div className="container results-grid">
            <div><p className="section-kicker">Real results</p><h2>Results should be <em>personal.</em></h2><p>Before-and-after material can be added here when genuine patient consent and suitable clinical documentation are available. We do not use stock or invented results.</p><a className="btn btn-light" href="#booking" onClick={openAppointment}>Ask about results & treatment <ArrowRight size={17} /></a></div>
            <div className="results-placeholder"><Sparkles size={26} /><strong>Patient results gallery</strong><span>Consent-led before & after presentation</span></div>
          </div>
        </section>

        <section className="section technology">
          <div className="container tech-grid">
            <div className="tech-visual"><img src={treatmentGallery} alt="Treatment and skin-care services at the clinic" /></div>
            <div className="tech-copy"><p className="section-kicker">Technology & innovation</p><h2>Advanced technology.<br /><em>Thoughtful care.</em></h2><p>The clinic offers modern treatment options across skin, hair, aesthetics, and laser care. The right approach depends on the individual and is discussed during consultation.</p><div className="tech-points"><div><Check size={15} /><span>Technology selected for the treatment goal</span></div><div><Check size={15} /><span>Clear explanation before treatment</span></div><div><Check size={15} /><span>Individual suitability and aftercare discussion</span></div></div></div>
          </div>
        </section>

        <section className="section clinic-section" id="clinic">
          <div className="container clinic-box">
            <div><p className="section-kicker">The clinic environment</p><h2>Designed around your <em>comfort.</em></h2><p>A premium clinic experience should feel calm, private, and considered. This section is ready for your real reception, waiting-area, treatment-room, and interior photography.</p></div>
            <div className="clinic-detail"><div><Sparkles size={20}/><strong>Calm & considered</strong><span>Replace with approved clinic photography</span></div><div><ShieldCheck size={20}/><strong>Private & professional</strong><span>Show the real patient environment</span></div></div>
          </div>
        </section>

        <section className="section journey">
          <div className="container">
            <div className="section-head"><div><p className="section-kicker">The patient journey</p><h2>A clear path from <em>consultation to care.</em></h2></div></div>
            <div className="journey-grid">{[
              ["01", "Consultation", "Understanding your needs."],
              ["02", "Personalised Plan", "Creating an appropriate treatment approach."],
              ["03", "Treatment", "Expert care in a comfortable environment."],
              ["04", "Follow-Up", "Ongoing care and support."]
            ].map(([n,t,d]) => <div className="journey-step" key={n}><span>{n}</span><div className="journey-line" /><h3>{t}</h3><p>{d}</p></div>)}</div>
          </div>
        </section>

        <section className="section stories" id="stories">
          <div className="container">
            <div className="section-head"><div><p className="section-kicker">Patient stories</p><h2>Real words from <em>real patients.</em></h2></div><p className="section-intro">Selected genuine feedback supplied for the clinic website.</p></div>
            <div className="testimonial-grid">{testimonials.map((t) => <article className="testimonial" key={t.name}>{t.image ? <img src={t.image} alt={`Review from ${t.name}`} /> : <div className="quote-mark">“</div>}<div className="stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><p>“{t.text}”</p><strong>{t.name}</strong><small>{t.treatment}</small></article>)}</div>
          </div>
        </section>

        <section className="section difference">
          <div className="container difference-grid">
            <div><p className="section-kicker">Why choose the clinic</p><h2>The difference is in the <em>details.</em></h2><p>Use this space for substantiated clinic-specific credentials and differentiators — never generic claims that cannot be supported.</p></div>
            <div className="difference-list">{["Experienced specialists", "Personalised treatment plans", "Modern treatment options", "Private, considered environment", "Clear follow-up guidance", "Patient-centred care"].map((x, i) => <div key={x}><span>0{i+1}</span><strong>{x}</strong><Check size={16} /></div>)}</div>
          </div>
        </section>

        <section className="section faq" id="faqs">
          <div className="container faq-grid">
            <div><p className="section-kicker">Frequently asked questions</p><h2>Good care starts with <em>clear answers.</em></h2><p>Have another question? Send it with your consultation request and the clinic can guide you.</p><a className="text-link purple-link" href="#booking" onClick={openAppointment}>Ask a question <ArrowRight size={17} /></a></div>
            <div className="faq-list">{faqs.map(([q,a], i) => <div className={openFaq === i ? "faq-item is-open" : "faq-item"} key={q}><button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}><span>{q}</span><ChevronDown size={18} /></button>{openFaq === i && <p>{a}</p>}</div>)}</div>
          </div>
        </section>

        <section className="instagram">
          <div className="container instagram-box"><div><Instagram size={21} /><p className="section-kicker">Follow the clinic</p><h2>More from <em>Dr. Nada's.</em></h2></div><a className="btn btn-light" href={instagramUrl} target="_blank" rel="noreferrer">Visit Instagram <ArrowRight size={17} /></a></div>
        </section>

        <section className="section booking" id="booking">
          <div className="container booking-box"><div><p className="section-kicker">Private consultation</p><h2>Ready to begin your <em>journey?</em></h2><p>Share what you'd like to improve. We'll continue the conversation on WhatsApp and help you take the next step.</p></div><div className="booking-actions"><a className="btn btn-primary" href="#booking" onClick={openAppointment}>Request a consultation <ArrowRight size={17} /></a><a className="whatsapp-link" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp the clinic</a></div></div>
        </section>

        <section className="location" id="contact"><div className="container location-grid"><div><p className="section-kicker">Contact & location</p><h2>Let's make your visit <em>simple.</em></h2><div className="contact-lines"><div><strong>WhatsApp</strong><span>+92 334 1111028</span></div><div><strong>Instagram</strong><span>@drnadahassan</span></div><div><strong>Appointments</strong><span>By consultation request</span></div></div></div><div className="map-card"><Clock3 size={19} /><strong>Clinic details</strong><p>Add the verified clinic address, opening hours, parking information, and Google Maps link here.</p><a href="#booking" onClick={openAppointment}>Request directions <ArrowRight size={15} /></a></div></div></section>
      </main>

      {ebookOpen && <div className="ebook-overlay" role="presentation" onMouseDown={() => setEbookOpen(false)}><div className="ebook-modal" role="dialog" aria-modal="true" aria-labelledby="ebook-title" onMouseDown={(e) => e.stopPropagation()}>
        <button className="ebook-close" onClick={() => setEbookOpen(false)} aria-label="Close"><X size={19} /></button>
        {!ebookSubmitted ? <>
          <div className="ebook-cover"><div className="ebook-cover-inner"><span>DR. NADA'S CLINIC</span><Sparkles size={23}/><strong>How to Keep<br/><em>Your Skin</em><br/>Hydrated in Winter</strong><small>A practical winter skin-care guide</small></div></div>
          <div className="ebook-content"><p className="section-kicker">Complimentary guide</p><h2>Healthy-looking skin, even in <em>winter.</em></h2><p>We've written a practical ebook to help you understand winter dryness and build a simple hydration-focused routine.</p><p className="ebook-note">Fill in the form below and we'll send the ebook to your email.</p>
            <form className="ebook-form" onSubmit={submitEbook}>
              <label><span>Full Name <b>*</b></span><input required value={ebookForm.name} onChange={(e) => updateEbookField("name", e.target.value)} placeholder="Your full name"/></label>
              <label><span>Phone Number <b>*</b></span><input required type="tel" value={ebookForm.phone} onChange={(e) => updateEbookField("phone", e.target.value)} placeholder="Your phone number"/></label>
              <label className="ebook-full"><span>Email Address <b>*</b></span><input required type="email" value={ebookForm.email} onChange={(e) => updateEbookField("email", e.target.value)} placeholder="you@example.com"/></label>
              <label className="ebook-full"><span>What is your main skin concern? <b>*</b></span><select required value={ebookForm.concern} onChange={(e) => updateEbookField("concern", e.target.value)}><option value="" disabled>Select your concern</option><option>Dry or dehydrated skin</option><option>Dull or tired-looking skin</option><option>Sensitive or irritated skin</option><option>Acne or breakouts</option><option>Fine lines or signs of ageing</option><option>Uneven skin tone or texture</option><option>Oily / combination skin</option><option>Hair or scalp concern</option><option>General skin-care guidance</option><option>Other</option></select></label>
              <label className="ebook-full"><span>Tell us a little more <small>(optional)</small></span><textarea rows="3" value={ebookForm.details} onChange={(e) => updateEbookField("details", e.target.value)} placeholder="Anything you'd like the clinic to know about your skin..."/></label>
              <button className="btn btn-primary ebook-submit" type="submit">Get the ebook by email <ArrowRight size={16}/></button>
            </form>
          </div>
        </> : <div className="ebook-success"><div className="success-icon"><Check size={28}/></div><p className="section-kicker">Thank you</p><h2>Your ebook request is <em>received.</em></h2><p>Thank you, {ebookForm.name}. Please check <strong>{ebookForm.email}</strong> for your copy of <strong>{ebookTitle}</strong>.</p><p className="ebook-small">If you don't see it shortly, please check your spam or promotions folder.</p><button className="btn btn-primary" onClick={() => setEbookOpen(false)}>Continue exploring the clinic</button></div>}
      </div></div>}

      {appointmentOpen && <div className="appointment-overlay" role="presentation" onMouseDown={() => setAppointmentOpen(false)}><div className="appointment-modal" role="dialog" aria-modal="true" aria-labelledby="appointment-title" onMouseDown={(e) => e.stopPropagation()}><button className="appointment-close" onClick={() => setAppointmentOpen(false)} aria-label="Close"><X size={20} /></button><div className="appointment-heading"><p className="section-kicker">Book a private consultation</p><h2 id="appointment-title">Let's make a plan <em>for you.</em></h2><p>Share your details and continue with the clinic on WhatsApp.</p></div><form className="appointment-form" onSubmit={submitAppointment}><label><span>Full Name <b>*</b></span><input required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Your full name" /></label><label><span>Phone Number <b>*</b></span><input required type="tel" value={form.phone} onChange={(e) => updateField("phone", e.target.value)} placeholder="Your phone number" /></label><label><span>Email Address <b>*</b></span><input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="you@example.com" /></label><label><span>Treatment <b>*</b></span><select required value={form.service} onChange={(e) => updateField("service", e.target.value)}><option value="" disabled>Select a treatment</option>{treatments.map((t) => <option key={t.title}>{t.title}</option>)}<option>General consultation</option></select></label><label className="appointment-full"><span>Notes <small>(optional)</small></span><textarea rows="4" value={form.comments} onChange={(e) => updateField("comments", e.target.value)} placeholder="Tell us about your main concern or goal..." /></label><button className="btn btn-primary appointment-submit" type="submit">Submit & continue to WhatsApp <ArrowRight size={17} /></button></form></div></div>}

      <footer className="footer"><div className="container footer-inner"><Logo compact /><div className="footer-links"><a href="#about">About</a><a href="#treatments">Treatments</a><a href="#faqs">FAQs</a><a href="#contact">Contact</a></div><a className="footer-social" href={instagramUrl} target="_blank" rel="noreferrer"><Instagram size={18} /></a><p>© {new Date().getFullYear()} Dr. Nada's Clinic. All rights reserved.</p></div></footer>
    </div>
  );
}

export default App;
