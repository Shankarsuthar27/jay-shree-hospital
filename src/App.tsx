import { FormEvent, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity,
  Ambulance,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Brain,
  Building2,
  CalendarDays,
  Camera,
  Check,
  ChevronRight,
  Clock3,
  Globe,
  HeartPulse,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  MoveRight,
  Phone,
  Pill,
  Quote,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
  X,
} from 'lucide-react'

const MAP_URL =
  'https://www.google.com/maps/place/Jayshree+hospital+jalore/@25.3447214,72.621866,4239m/data=!3m1!1e3!4m6!3m5!1s0x3943010063623da3:0xd778975d9fa48ace!8m2!3d25.3470334!4d72.6258287!16s%2Fg%2F11n3pxg5z9?authuser=0&entry=ttu'
const PHONE = 'tel:+919999999999'
const departments = [
  'General Medicine & Critical Care',
  'Cardiology',
  'Neurology',
  'Orthopedics & Trauma',
  'Urology',
  'General & Laparoscopic Surgery',
  'Advanced Diagnostics',
]

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className="logo" aria-label="JayShree Hospital home">
      <span className="logo-mark">
        <span>JS</span>
        <i>+</i>
      </span>
      <span className="logo-copy">
        <b className={light ? 'text-white' : ''}>JayShree Hospital</b>
        <small>Your Health, Our Commitment</small>
      </span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['Home', '/'],
    ['About Us', '/#about'],
    ['Specialties', '/#specialties'],
    ['Our Doctor', '/#doctor'],
    ['Gallery', '/gallery'],
    ['Contact Us', '/contact'],
  ]
  return (
    <>
      <div className="utility">
        <div className="shell utility-inner">
          <div className="utility-group">
            <a href={MAP_URL} target="_blank" rel="noreferrer">
              <MapPin size={14} /> Shivaji Nagar Colony, Jalore
            </a>
            <span><Clock3 size={14} /> Open 24 Hours</span>
          </div>
          <div className="utility-group utility-right">
            <a href={PHONE} className="emergency-link"><Ambulance size={15} /> 24/7 Emergency & Ambulance</a>
            <a href="mailto:info@jayshreehospital.in"><Mail size={14} /> info@jayshreehospital.in</a>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="shell nav">
          <Logo />
          <nav className="desktop-nav" aria-label="Primary navigation">
            {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          </nav>
          <div className="nav-actions">
            <a href="/#appointment" className="button button-small">Book Appointment</a>
            <a href={PHONE} className="emergency-button"><Phone size={16} /> Emergency</a>
          </div>
          <button className="menu-button" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu /></button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.aside className="mobile-menu" initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 28 }}>
              <div className="mobile-head"><Logo /><button onClick={() => setOpen(false)} aria-label="Close navigation"><X /></button></div>
              <nav>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<ChevronRight size={18} /></a>)}</nav>
              <div className="mobile-actions">
                <a href={PHONE} className="button button-red"><Phone size={18} /> Call Emergency</a>
                <a href={MAP_URL} target="_blank" rel="noreferrer" className="button button-outline"><MapPin size={18} /> Get Directions</a>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`section-title ${center ? 'center' : ''}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

function Hero() {
  const [slide, setSlide] = useState(0)
  const images = ['/images/main1.jpg', '/images/main2.jpg']
  useEffect(() => {
    const id = window.setInterval(() => setSlide((v) => (v + 1) % 2), 6000)
    return () => window.clearInterval(id)
  }, [])
  return (
    <section className="hero">
      <AnimatePresence mode="popLayout">
        <motion.img key={images[slide]} src={images[slide]} alt="JayShree Hospital exterior" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.1 }} />
      </AnimatePresence>
      <div className="hero-overlay" />
      <div className="shell hero-inner">
        <motion.div className="hero-content" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <div className="hero-badge"><span /> Welcome to JayShree Hospital, Jalore</div>
          <h1>Advanced healthcare.<br /><em>Genuine compassion.</em></h1>
          <p>Your Health, Our Commitment — state-of-the-art multispecialty care, advanced diagnostics, and 24/7 emergency support under expert guidance.</p>
          <div className="hero-buttons">
            <a href="#appointment" className="button">Book An Appointment <ArrowRight size={18} /></a>
            <a href={MAP_URL} target="_blank" rel="noreferrer" className="button button-glass"><MapPin size={18} /> Get Directions</a>
          </div>
        </motion.div>
        <div className="hero-controls">
          <button onClick={() => setSlide((slide + 1) % 2)} aria-label="Previous slide"><ArrowLeft /></button>
          <span>0{slide + 1} <i><b style={{ width: `${(slide + 1) * 50}%` }} /></i> 02</span>
          <button onClick={() => setSlide((slide + 1) % 2)} aria-label="Next slide"><ArrowRight /></button>
        </div>
      </div>
    </section>
  )
}

const quickActions = [
  [CalendarDays, 'Book An Appointment', 'Hassle-free OPD scheduling', '#appointment'],
  [Stethoscope, 'Consult Dr. Hemant Jain', 'Expert MD physician care', '#doctor'],
  [Microscope, 'Diagnostic Services', 'Advanced lab & imaging', '#specialties'],
  [Ambulance, '24/7 Emergency & Pharmacy', 'Urgent care, round the clock', PHONE],
]

function QuickActions() {
  return (
    <div className="shell quick-wrap">
      <div className="quick-grid">
        {quickActions.map(([Icon, title, text, href], i) => (
          <a href={href as string} key={title as string} className={i === 3 ? 'urgent' : ''}>
            <span className="quick-icon"><Icon size={26} /></span>
            <span><b>{title as string}</b><small>{text as string}</small></span>
            <ArrowUpRight size={18} className="quick-arrow" />
          </a>
        ))}
      </div>
    </div>
  )
}

function About() {
  const stats = [['24/7', 'Emergency & Pharmacy'], ['7+', 'Core specialties'], ['100%', 'Patient-centered care'], ['1000s', 'Happy patients']]
  return (
    <section className="section about" id="about">
      <div className="shell about-grid">
        <motion.div className="about-images" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img className="about-main" src="/images/DSCF1552.jpg" alt="JayShree Hospital official reception emblem" />
          <img className="about-small" src="/images/main1.jpg" alt="JayShree Hospital modern building" />
          <div className="experience"><b>24</b><span>Hours of care<br />every day</span></div>
        </motion.div>
        <div>
          <SectionTitle eyebrow="About JayShree Hospital" title="Dependable care, closer to home." text="A trusted multispecialty hospital in Jalore, created to make modern, ethical healthcare accessible to every family in our region." />
          <div className="check-list">
            {['Modern infrastructure & advanced diagnostics', 'Ethical practice with transparent guidance', 'Experienced specialist-led medical care', '24/7 emergency, pharmacy & patient support'].map((x) => <span key={x}><Check size={16} /> {x}</span>)}
          </div>
          <p className="body-copy">From accurate diagnosis to recovery, our medical and nursing teams work as one—combining clinical excellence with the kindness every patient deserves.</p>
          <a href="/contact" className="text-link">Discover our approach <MoveRight size={18} /></a>
        </div>
      </div>
      <div className="shell stats">
        {stats.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
      </div>
    </section>
  )
}

const specialties = [
  [Stethoscope, 'General Medicine & Critical Care', 'Diabetes, thyroid, hypertension, infections and comprehensive internal medicine.'],
  [HeartPulse, 'Cardiology & Cardiac Care', 'ECG, 2D Echo, TMT, heart failure and hypertension management.'],
  [Brain, 'Neurology', 'Focused care for stroke, migraine, epilepsy and neurological disorders.'],
  [Activity, 'Orthopedics & Trauma', 'Fracture management, joint pain, arthritis and urgent trauma care.'],
  [Syringe, 'Urology', 'Kidney stone, prostate and urinary tract evaluation and treatment.'],
  [ShieldCheck, 'General & Laparoscopic Surgery', 'Safe elective and emergency surgical procedures with expert oversight.'],
  [Microscope, 'Diagnostics & Pharmacy', 'Pathology, Digital X-Ray, Ultrasound and 24/7 in-house pharmacy.'],
]

function Specialties() {
  return (
    <section className="section specialties" id="specialties">
      <div className="shell">
        <SectionTitle eyebrow="Centres of Excellence" title="Specialist expertise. One trusted address." text="Coordinated medical services designed around your needs, with diagnosis and treatment under one roof." center />
        <div className="specialty-grid">
          {specialties.map(([Icon, title, text], i) => (
            <motion.article key={title as string} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .05 }}>
              <span className="specialty-icon"><Icon size={28} /></span>
              <span className="card-number">0{i + 1}</span>
              <h3>{title as string}</h3>
              <p>{text as string}</p>
              <a href="#appointment">Request consultation <ArrowRight size={16} /></a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Doctor() {
  return (
    <section className="section doctor-section" id="doctor">
      <div className="shell doctor-grid">
        <div className="doctor-photo">
          <img src="/images/doctor.jpg" alt="Dr. Hemant Jain, Senior Consultant Physician" />
          <div className="doctor-badge"><Award /><span><b>Lead Specialist</b>JayShree Hospital, Jalore</span></div>
        </div>
        <div className="doctor-copy">
          <SectionTitle eyebrow="Meet Our Lead Specialist" title="Medicine guided by expertise—and empathy." />
          <h3>Dr. Hemant Jain</h3>
          <span className="credentials">M.D. (Medicine) · Senior Consultant Physician</span>
          <blockquote>
            <Quote size={34} />
            “Our mission is to bring ethical, accessible, and world-class healthcare to the people of Jalore. Every patient deserves accurate diagnosis, transparent guidance, and compassionate care under one roof.”
          </blockquote>
          <div className="timing">
            <Clock3 />
            <span><b>OPD Timings</b>Monday – Saturday: 10:00 AM – 7:00 PM<small>Emergency Services: 24x7</small></span>
          </div>
          <a href="#appointment" className="button">Book consultation <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  )
}

function WhyUs() {
  const items = [
    [Award, 'Specialist leadership', 'Senior physician-led care with an experienced clinical team.'],
    [Microscope, 'Modern diagnostics', 'Accurate testing and imaging for informed treatment decisions.'],
    [Pill, 'Always available', '24/7 emergency support and pharmacy on the hospital premises.'],
    [ShieldCheck, 'Transparent care', 'Clear guidance and accessible treatment without unnecessary complexity.'],
  ]
  return (
    <section className="section why">
      <div className="shell">
        <SectionTitle eyebrow="Why Choose Us" title="A higher standard of everyday care." center />
        <div className="why-grid">{items.map(([Icon, title, text]) => <article key={title as string}><Icon /><h3>{title as string}</h3><p>{text as string}</p></article>)}</div>
      </div>
    </section>
  )
}

function FormFields({ contact = false }: { contact?: boolean }) {
  return (
    <>
      <label><span>Patient name</span><input required name="name" placeholder="Enter full name" /></label>
      <label><span>Phone number</span><input required name="phone" type="tel" placeholder="+91 00000 00000" /></label>
      {contact && <label><span>Email address</span><input name="email" type="email" placeholder="you@example.com" /></label>}
      <label><span>Department</span><select name="department" defaultValue=""><option value="" disabled>Select a specialty</option>{departments.map((x) => <option key={x}>{x}</option>)}</select></label>
      {!contact && <label><span>Preferred date</span><input name="date" type="date" /></label>}
      <label className="field-full"><span>How can we help?</span><textarea name="message" rows={contact ? 5 : 3} placeholder="Share a brief message (optional)" /></label>
    </>
  )
}

function Appointment({ contact = false }: { contact?: boolean }) {
  const [sent, setSent] = useState(false)
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    e.currentTarget.reset()
    setSent(true)
    window.setTimeout(() => setSent(false), 4200)
  }
  return (
    <>
      <form onSubmit={submit} className={`form-grid ${contact ? 'contact-form' : ''}`}>
        <FormFields contact={contact} />
        <button className="button field-full" type="submit">Send appointment request <ArrowRight size={18} /></button>
        <small className="form-note"><ShieldCheck size={14} /> Your information is kept private and secure.</small>
      </form>
      <AnimatePresence>{sent && <motion.div className="toast" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><span><Check /></span><div><b>Request received</b><small>Our care team will contact you shortly.</small></div></motion.div>}</AnimatePresence>
    </>
  )
}

function AppointmentSection() {
  return (
    <section className="section appointment" id="appointment">
      <div className="shell appointment-grid">
        <div className="appointment-copy">
          <span className="eyebrow light">Appointments</span>
          <h2>Your care journey can start today.</h2>
          <p>Tell us what you need. Our team will call to confirm your preferred time and help you prepare for your visit.</p>
          <div className="appointment-contact"><span><Phone /></span><div><small>24/7 patient assistance</small><b>Call our care desk</b></div></div>
        </div>
        <div className="form-card"><h3>Request an appointment</h3><p>Complete the form and our team will get back to you.</p><Appointment /></div>
      </div>
    </section>
  )
}

function Testimonials() {
  const reviews = [
    ['“The hospital is exceptionally clean and the team guided us at every step. We felt genuinely cared for.”', 'Patient family, Jalore'],
    ['“Dr. Hemant Jain listened patiently, explained the diagnosis clearly, and gave us great confidence.”', 'OPD patient, Jalore'],
    ['“Quick diagnostics, supportive nursing staff, and medicines available right on the premises.”', 'Emergency patient family'],
  ]
  return (
    <section className="section testimonials">
      <div className="shell"><SectionTitle eyebrow="Patient Stories" title="Trust built through every interaction." center />
        <div className="review-grid">{reviews.map(([q, by], i) => <article key={by}><div className="stars">★★★★★</div><p>{q}</p><div><span>{i + 1}</span><b>{by}</b></div></article>)}</div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-grid">
        <div><Logo light /><p>Ethical, accessible and compassionate healthcare for Jalore and surrounding communities.</p><div className="socials"><a href="#" aria-label="Website"><Globe /></a><a href="#" aria-label="Photo gallery"><Camera /></a><a href="#" aria-label="WhatsApp"><MessageCircle /></a></div></div>
        <div><h4>Quick links</h4>{[['Home','/'],['About Us','/#about'],['Our Doctor','/#doctor'],['Photo Gallery','/gallery'],['Contact Us','/contact'],['Book Appointment','/#appointment']].map(([x,h])=><a key={x} href={h}>{x}</a>)}</div>
        <div><h4>Our specialties</h4>{['General Medicine','Cardiology','Neurology','Orthopedics','Urology','General Surgery','Diagnostics & Pharmacy'].map(x=><a key={x} href="/#specialties">{x}</a>)}</div>
        <div><h4>Contact & location</h4><p className="footer-contact"><MapPin />Manpura Colony, Shivaji Nagar Colony, Jalore, Rajasthan 343001</p><p className="footer-contact"><Mail />info@jayshreehospital.in</p><a className="map-link" href={MAP_URL} target="_blank" rel="noreferrer">View on Google Maps <ArrowUpRight size={16} /></a></div>
      </div>
      <div className="footer-bottom"><div className="shell"><span>© 2025 JayShree Hospital Jalore. All Rights Reserved.</span><span>Coordinates: 25.3470334, 72.6258287</span></div></div>
    </footer>
  )
}

function PageHero({ title, crumb, image }: { title: string; crumb: string; image: string }) {
  return <section className="page-hero"><img src={image} alt="" /><div className="page-overlay" /><div className="shell"><div className="breadcrumb"><a href="/">Home</a><ChevronRight size={14} /><span>{crumb}</span></div><h1>{title}</h1></div></section>
}

const galleryImages = [
  ['/images/main1.jpg', 'JayShree Hospital modern exterior facade', 'Exterior'],
  ['/images/main2.jpg', 'Hospital entrance and patient access', 'Exterior'],
  ['/images/DSCF0537.jpg', 'Contemporary hospital architecture', 'Exterior'],
  ['/images/DSCF0538.jpg', 'JayShree Hospital building elevation', 'Exterior'],
  ['/images/DSCF0539.jpg', 'Main entrance and ground floor facilities', 'Exterior'],
  ['/images/DSCF1552.jpg', 'Official hospital emblem and reception', 'Reception'],
  ['/images/doctor.jpg', 'Dr. Hemant Jain, Lead Specialist', 'Leadership'],
]

function GalleryPage() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState<number | null>(null)
  const visible = galleryImages.filter((x) => filter === 'All' || x[2] === filter)
  const move = (delta: number) => setActive((a) => a === null ? null : (a + delta + visible.length) % visible.length)
  return (
    <><Header /><main><PageHero image="/images/main1.jpg" crumb="Gallery" title="Inside JayShree Hospital — Infrastructure & Moments" />
      <section className="section gallery-section"><div className="shell">
        <SectionTitle eyebrow="Photo Gallery" title="Spaces created for care." text="Explore our modern hospital, welcoming patient areas, and the people behind JayShree Hospital." center />
        <div className="filters">{[['All','All Photos'],['Exterior','Hospital Building & Exterior'],['Reception','Reception & Branding'],['Leadership','Leadership']].map(([v,l])=><button className={filter===v?'active':''} onClick={()=>setFilter(v)} key={v}>{l}</button>)}</div>
        <motion.div layout className="gallery-grid">{visible.map((img,i)=><motion.button layout key={img[0]} onClick={()=>setActive(i)} className={i===0?'wide':''}><img src={img[0]} alt={img[1]} /><span><small>{img[2]}</small><b>{img[1]}</b></span><i><ArrowUpRight /></i></motion.button>)}</motion.div>
      </div></section>
      <AnimatePresence>{active!==null&&<motion.div className="lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setActive(null)}><button className="lightbox-close" onClick={()=>setActive(null)}><X /></button><button className="lightbox-prev" onClick={(e)=>{e.stopPropagation();move(-1)}}><ArrowLeft /></button><motion.figure key={visible[active][0]} initial={{opacity:0,scale:.96}} animate={{opacity:1,scale:1}} onClick={e=>e.stopPropagation()}><img src={visible[active][0]} alt={visible[active][1]} /><figcaption>{visible[active][1]}<small>{active+1} / {visible.length}</small></figcaption></motion.figure><button className="lightbox-next" onClick={(e)=>{e.stopPropagation();move(1)}}><ArrowRight /></button></motion.div>}</AnimatePresence>
    </main><Footer /></>
  )
}

function ContactPage() {
  const cards = [
    [MapPin, 'Hospital location', 'Manpura Colony, Shivaji Nagar Colony, Jalore, Rajasthan 343001'],
    [Phone, 'Helpline & appointments', '24/7 phone & WhatsApp assistance', 'info@jayshreehospital.in'],
    [Clock3, 'Working hours', 'Emergency & Pharmacy: 24 Hours', 'Dr. Jain OPD: Mon–Sat, 10 AM–7 PM'],
  ]
  return (
    <><Header /><main><PageHero image="/images/main2.jpg" crumb="Contact Us" title="Get In Touch With JayShree Hospital" />
      <section className="section contact-section"><div className="shell">
        <div className="contact-cards">{cards.map(([Icon,title,line1,line2])=><article key={title as string}><span><Icon /></span><div><h3>{title as string}</h3><p>{line1 as string}</p>{line2&&<small>{line2 as string}</small>}</div></article>)}</div>
        <div className="contact-split">
          <div className="contact-form-wrap"><SectionTitle eyebrow="Send An Inquiry" title="How can we help?" text="Share your details and our patient care team will get in touch." /><Appointment contact /></div>
          <div className="map-wrap"><iframe title="JayShree Hospital map" src="https://www.google.com/maps?q=25.3470334,72.6258287&z=16&output=embed" loading="lazy" /><div><span><MapPin /></span><p><b>JayShree Hospital, Jalore</b>Manpura Colony, Shivaji Nagar Colony</p><a href={MAP_URL} target="_blank" rel="noreferrer" className="button">Open in Google Maps <ArrowUpRight size={17} /></a></div></div>
        </div>
      </div></section>
    </main><Footer /></>
  )
}

function HomePage() {
  return <><Header /><main><Hero /><QuickActions /><About /><Specialties /><Doctor /><WhyUs /><AppointmentSection /><Testimonials /></main><Footer /></>
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  useEffect(() => { window.scrollTo(0, 0) }, [path])
  if (path === '/gallery') return <GalleryPage />
  if (path === '/contact') return <ContactPage />
  return <HomePage />
}
