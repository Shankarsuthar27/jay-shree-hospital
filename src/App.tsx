import { FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
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
  ChevronLeft,
  ChevronRight,
  Clock3,
  Droplets,
  Globe,
  HeartPulse,
  Images,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Microscope,
  MoveRight,
  Phone,
  Pill,
  Quote,
  Radio,
  Scan,
  ShieldCheck,
  Stethoscope,
  Syringe,
  User,
  Users,
  Waves,
  X,
  ZoomIn,
} from 'lucide-react'
import { galleryImages, GalleryItem } from './galleryData'

const MAP_URL =
  'https://www.google.com/maps/place/Jayshree+hospital+jalore/@25.3447214,72.621866,4239m/data=!3m1!1e3!4m6!3m5!1s0x3943010063623da3:0xd778975d9fa48ace!8m2!3d25.3470334!4d72.6258287!16s%2Fg%2F11n3pxg5z9?authuser=0&entry=ttu'
const PHONE = 'tel:+919414895281'
const PHONE_DISPLAY = '+91 94148 95281'
const WHATSAPP_URL = 'https://wa.me/919414895281'
const departments = [
  'Critical Medicine (ICU/CCU)',
  'Cardiology',
  'Neurology',
  'Urology',
  'Orthopedics',
  'Surgery',
  'Dialysis',
  'Investigations & Diagnostics',
]

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="/" className={`logo ${light ? 'logo-light' : ''}`} aria-label="JayShree Hospital home">
      <div className="logo-badge">
        <img
          src="/logo/logo-transparent.png"
          alt="JayShree Hospital Logo"
          className="logo-img"
          width="48"
          height="55"
        />
      </div>
      <span className="logo-copy">
        <b className={light ? 'text-white' : ''}>JayShree Hospital</b>
        <small className={light ? 'text-blue-200/80' : ''}>Your Health, Our Commitment</small>
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
          <div className="utility-group utility-left">
            <a href={MAP_URL} target="_blank" rel="noreferrer" className="utility-location" title="View hospital on Google Maps">
              <MapPin size={12} className="utility-pin-icon" />
              {/* <span className="utility-loc-desktop">Manpura Colony, Shivaji Nagar Colony, Jalore</span> */}
              <span className="utility-loc-mobile">Manpura Colony , Jalore</span>
            </a>
            <span className="utility-hours">
              <Clock3 size={12} className="utility-clock-icon" />
              Open 24 Hours
            </span>
          </div>
          <div className="utility-group utility-right">
            <a href={PHONE} className="emergency-link" title="Call 24/7 Helpline">
              <Phone size={12} className="emergency-phone-icon" />
              <span className="utility-call-text-desktop">24/7 Helpline: </span>
              <span className="utility-call-text-mobile">24/7: </span>
              <strong className="utility-phone-num">+91 94148 95281</strong>
            </a>
            <a href="mailto:info@jayshreehospital.in" className="utility-mail" title="Email hospital">
              <Mail size={12} /> info@jayshreehospital.in
            </a>
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
            <a href={PHONE} className="emergency-button"><Phone size={15} /> Emergency: +91 94148 95281</a>
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
                <a href={PHONE} className="button button-red"><Phone size={18} /> Emergency: +91 94148 95281</a>
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

const heroSlides = [
  {
    image: '/images/main1.jpg',
    mobileImage: '/images/hero-mobile.jpg',
    badge: 'Welcome to JayShree Hospital, Jalore',
    title: (
      <>
        Advanced healthcare.<br />
        <em>Genuine compassion.</em>
      </>
    ),
    text: 'Your Health, Our Commitment — state-of-the-art multispecialty care, advanced diagnostics, and 24/7 emergency support in Shivaji Nagar Colony, Jalore.',
    primaryBtn: { text: 'Book An Appointment', href: '#appointment', isEmergency: false },
  },
  {
    image: '/images/icu.jpg',
    badge: 'Advanced ICU & Critical Care Unit',
    title: (
      <>
        Critical care ready.<br />
        <em>24/7 Life-support ICU.</em>
      </>
    ),
    text: 'Modern intensive care unit with multi-parameter cardiac monitors, ventilators, central oxygen, and continuous critical medicine supervision under Dr. Hemant Jain.',
    primaryBtn: { text: 'Emergency Services', href: '#emergency', isEmergency: true },
  },
  {
    image: '/images/specialties-lounge.jpg',
    badge: 'Cardiology, Neurology, Urology & More',
    title: (
      <>
        Specialist expertise.<br />
        <em>Under one trusted roof.</em>
      </>
    ),
    text: 'Dedicated departments for Critical Medicine, Cardiology, Neurology, Urology, Orthopedics, General Surgery, Nephrology, and Dialysis in Jalore.',
    primaryBtn: { text: 'Explore Specialties', href: '#specialties', isEmergency: false },
  },
  {
    image: '/images/reception-lobby.jpg',
    badge: 'Patient First Reception & Help Desk',
    title: (
      <>
        Your health.<br />
        <em>Our personal commitment.</em>
      </>
    ),
    text: 'Welcoming lobby with 24/7 patient help desk, government health scheme facilitation (Ayushman Bharat, Maa Yojana), and immediate OPD registration.',
    primaryBtn: { text: 'Consult Dr. Hemant Jain', href: '#doctor', isEmergency: false },
  },
  {
    image: '/images/opd-hall.jpg',
    badge: 'Modern Outpatient Department (OPD)',
    title: (
      <>
        Comfortable care.<br />
        <em>Dedicated OPD cabins.</em>
      </>
    ),
    text: 'Air-conditioned consultation chambers and comfortable patient waiting area for hassle-free consultations with Dr. Hemant Jain and specialist consultants.',
    primaryBtn: { text: 'Book OPD Visit', href: '#appointment', isEmergency: false },
  },
  {
    image: '/images/entrance.jpg',
    badge: 'Hospital Entrance & 24/7 Medical Store',
    title: (
      <>
        Modern campus.<br />
        <em>Always open for your family.</em>
      </>
    ),
    text: 'Convenient ground-level entrance with ramp access, wheel-chair assistance, and 24/7 on-site pharmacy (Om Shanti Gurudev Medical Store).',
    primaryBtn: { text: 'Discover Hospital Facilities', href: '#about', isEmergency: false },
  },
  {
    image: '/images/modular-ot.jpg',
    badge: 'Korean Modular Operation Theater',
    title: (
      <>
        Advanced surgical care.<br />
        <em>Korean Modular O.T.</em>
      </>
    ),
    text: 'Ultra-clean sterile surgical suite equipped with advanced C-Arm fluoroscopy, laminar airflow, and precision anesthesia workstation for major and minor surgeries.',
    primaryBtn: { text: 'Explore Surgical Facilities', href: '#specialties', isEmergency: false },
  },
]

function Hero() {
  const [slide, setSlide] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const [touchStartY, setTouchStartY] = useState<number | null>(null)
  const [dragStartX, setDragStartX] = useState<number | null>(null)

  useEffect(() => {
    const id = window.setInterval(() => setSlide((v) => (v + 1) % heroSlides.length), 6500)
    return () => window.clearInterval(id)
  }, [slide])

  const current = heroSlides[slide]
  const prevSlide = () => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)
  const nextSlide = () => setSlide((s) => (s + 1) % heroSlides.length)

  // Touch swipe support (mobile & tablet)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
    setTouchStartY(e.touches[0].clientY)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return
    const touchEndX = e.changedTouches[0].clientX
    const touchEndY = e.changedTouches[0].clientY
    const diffX = touchStartX - touchEndX
    const diffY = touchStartY - touchEndY

    // Trigger only if horizontal swipe dominates vertical movement (preserves smooth scrolling)
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
      if (diffX > 0) {
        // Swiped left -> advance to next slide
        nextSlide()
      } else {
        // Swiped right -> go to previous slide
        prevSlide()
      }
    }
    setTouchStartX(null)
    setTouchStartY(null)
  }

  // Mouse drag swipe support (desktop)
  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a, button')) return
    setDragStartX(e.clientX)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX === null) return
    const diffX = dragStartX - e.clientX
    if (Math.abs(diffX) > 45) {
      if (diffX > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
    setDragStartX(null)
  }

  return (
    <section
      className="hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={current.image}
          className="hero-media-wrap"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1 }}
        >
          <picture className="hero-picture">
            {current.mobileImage && (
              <source media="(max-width: 768px)" srcSet={current.mobileImage} />
            )}
            <img
              src={current.image}
              alt={current.badge}
              className="hero-bg-img"
            />
          </picture>
        </motion.div>
      </AnimatePresence>
      <div className="hero-overlay" />
      <div className="shell hero-inner">
        <motion.div
          key={slide}
          className="hero-content"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-badge"><span /> {current.badge}</div>
          <h1>{current.title}</h1>
          <p>{current.text}</p>
          <div className="hero-buttons">
            <a
              href={current.primaryBtn.href}
              className={`button ${current.primaryBtn.isEmergency ? 'button-red' : ''}`}
            >
              {current.primaryBtn.isEmergency ? <Ambulance size={18} /> : null}
              {current.primaryBtn.text}
              <ArrowRight size={18} />
            </a>
            <a href={MAP_URL} target="_blank" rel="noreferrer" className="button button-glass">
              <MapPin size={18} /> Get Directions
            </a>
          </div>
        </motion.div>
        <div className="hero-controls">
          <button onClick={prevSlide} aria-label="Previous slide"><ArrowLeft /></button>
          <span>0{slide + 1} <i><b style={{ width: `${((slide + 1) / heroSlides.length) * 100}%` }} /></i> 0{heroSlides.length}</span>
          <button onClick={nextSlide} aria-label="Next slide"><ArrowRight /></button>
        </div>
      </div>
    </section>
  )
}

const quickActions = [
  [CalendarDays, 'Book An Appointment', 'Hassle-free OPD scheduling', '#appointment'],
  [Stethoscope, 'Consult Dr. Hemant Jain', 'Expert MD physician care', '#doctor'],
  [Microscope, 'Diagnostic Services', 'Advanced lab & imaging', '#specialties'],
  [Ambulance, '24/7 Emergency & Pharmacy', 'Emergency: +91 94148 95281', PHONE],
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

function Counter({
  end,
  duration = 1800,
  prefix = '',
  suffix = '',
}: {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    let animationFrameId: number

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Smooth ease-out cubic for realistic counting deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    animationFrameId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}

function About() {
  const stats = [
    { value: 24, suffix: '/7', label: 'Emergency & Pharmacy' },
    { value: 7, suffix: '+', label: 'Core specialties' },
    { value: 100, suffix: '%', label: 'Patient-centered care' },
    { value: 1000, suffix: 's', label: 'Happy patients' },
  ]
  return (
    <section className="section about" id="about">
      <div className="shell about-grid">
        <motion.div className="about-images" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img className="about-main" src="/images/DSCF1552.jpg" alt="JayShree Hospital official reception emblem" />
          <img className="about-small" src="/images/modular-ot.jpg" alt="JayShree Hospital modular operation theater" />
          <div className="experience"><b>24/7</b><span>Emergency &<br />ambulance</span></div>
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
      <motion.div
        className="shell stats"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <strong>
              <Counter end={s.value} suffix={s.suffix} />
            </strong>
            <span>{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

const specialties = [
  [
    Activity,
    'Critical Medicine (ICU/CCU)',
    '24/7 Level-III Intensive Care Unit with advanced mechanical ventilators, multipara monitors, and continuous specialist-led resuscitation.',
  ],
  [
    HeartPulse,
    'Cardiology',
    'Comprehensive cardiac evaluation, ECG, 2D Echocardiography with Color Doppler, TMT, heart failure management, and acute cardiac care.',
  ],
  [
    Brain,
    'Neurology',
    'Specialized neuro-care for acute ischemic stroke, epilepsy, severe migraine, neuro-muscular disorders, and neuro-trauma stabilization.',
  ],
  [
    Syringe,
    'Urology',
    'Advanced treatment for kidney stones, prostate enlargement (BPH), urinary tract infections, and minimally invasive endo-urological procedures.',
  ],
  [
    ShieldCheck,
    'Orthopedics',
    'Comprehensive trauma and accident care, complex fracture management, joint disorders, arthritis relief, and spine stabilization.',
  ],
  [
    Building2,
    'Surgery',
    'Sterile modular operation theater equipped for general, elective, and advanced laparoscopic (keyhole) surgeries with minimal recovery time.',
  ],
  [
    Droplets,
    'Dialysis',
    'Modern hemodialysis unit equipped with state-of-the-art dialysis machines, advanced RO water plant, and dedicated renal nephrology support.',
  ],
]

const specialInvestigations = [
  {
    icon: Scan,
    title: 'CT-ANGIOGRAPHY',
    desc: 'Advanced non-invasive cardiac & peripheral vascular imaging',
  },
  {
    icon: HeartPulse,
    title: 'ECHO-CARDIOGRAPHY WITH DOPPLER',
    desc: 'Precision 2D & Color Doppler cardiac functional analysis',
  },
  {
    icon: Waves,
    title: '4D COLOUR SONOGRAPHY',
    desc: 'High-definition 4D ultrasound, organ Doppler & anomaly scans',
  },
  {
    icon: ShieldCheck,
    title: 'KOREAN MODULAR O.T.',
    desc: 'Ultra-clean zero-infection laminar airflow surgical suites',
  },
  {
    icon: Microscope,
    title: 'HORMONE / TUMOUR MARKER',
    desc: 'Comprehensive endocrine assays, thyroid & cancer markers',
  },
  {
    icon: Radio,
    title: 'PORTABLE BEDSIDE X-RAY',
    desc: 'Instant digital radiography directly in ICU & emergency beds',
  },
  {
    icon: Activity,
    title: 'T.M.T. / E.E.G. / HOLTER / N.C.D.',
    desc: 'Cardiac stress testing, 24-hr Holter & neuro-electrophysiology',
  },
  {
    icon: Droplets,
    title: 'ADVANCED DIALYSIS & RENAL LAB',
    desc: 'High-flux hemodialysis unit with continuous renal monitoring',
  },
]

function Specialties() {
  return (
    <section className="section specialties" id="specialties">
      <div className="shell">
        <SectionTitle
          eyebrow="Specialities"
          title="Specialist expertise. One trusted address."
          text="Coordinated medical services designed around your needs, with diagnosis and treatment under one roof."
          center
        />
        <div className="specialty-grid">
          {specialties.map(([Icon, title, text], i) => (
            <motion.article
              key={title as string}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
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

function SpecialInvestigations() {
  return (
    <section className="section special-investigations" id="investigations">
      <div className="shell">
        <SectionTitle
          eyebrow="Special Investigations & Diagnostics"
          title="SPECIAL INVESTIGATIONS"
          text="Advanced diagnostic technologies, high-precision automated imaging, and ultra-sterile surgical infrastructure at JayShree Hospital."
          center
        />
        <div className="investigations-card-grid">
          {specialInvestigations.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                className="investigation-card"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="investigation-card-icon">
                  <Icon size={34} />
                </div>
                <div className="investigation-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            )
          })}
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
            <span><b>OPD Timings</b>Monday – Saturday: 10:00 AM – 7:00 PM<small>Emergency: 24/7 · <a href={PHONE} style={{ color: 'inherit', textDecoration: 'underline' }}>+91 94148 95281</a></small></span>
          </div>
          <a href="#appointment" className="button">Book consultation <ArrowRight size={18} /></a>
        </div>
      </div>
    </section>
  )
}

interface OtherDoctor {
  id: string
  nameEn: string
  degree: string
  department: string
  image: string
  timing: string
  bio: string
}

const otherDoctors: OtherDoctor[] = [
  {
    id: 'dr-gupta',
    nameEn: 'DR. RAJENDRA KUMAR GUPTA',
    degree: 'M.S. Consulting Surgeon',
    department: 'General & Laparoscopic Surgery',
    image: '',
    timing: 'Visiting Consultant · Scheduled OPD & Emergency Surgery',
    bio: 'Senior Consulting Surgeon with comprehensive expertise in advanced laparoscopic procedures, abdominal and gastrointestinal surgeries, trauma management, and emergency surgical care for Jalore.',
  },
  {
    id: 'dr-sharma',
    nameEn: 'DR. SATYA PRAKASH SHARMA',
    degree: 'M.D. (Pathology)',
    department: 'Clinical Pathology & Laboratory Medicine',
    image: '',
    timing: 'Senior Pathologist · Daily Laboratory Diagnostics',
    bio: 'Leading Consultant Pathologist directing diagnostic clinical pathology, histopathology, cytology, automated hematology, and biochemical assays to ensure rapid and accurate laboratory results.',
  },
  {
    id: 'dr-bajaj',
    nameEn: 'DR. RAJENDRA KUMAR BAJAJ',
    degree: "MBBS, M.D. (Pediatrics) · Gold Medalist",
    department: 'Pediatrics & Neonatology',
    image: '',
    timing: 'Gold Medalist Pediatrician · Child & Newborn OPD',
    bio: 'Renowned Gold Medalist Pediatrician providing specialized care for infants, children, and adolescents, including immunization, developmental health monitoring, pediatric infections, and neonatal care.',
  },
  {
    id: 'dr-sarika',
    nameEn: 'DR. SARIKA CHOPRA',
    degree: 'Obstetrics, Gynecology & Infertility Specialist',
    department: 'Obstetrics & Gynecology',
    image: '',
    timing: 'Women & Maternity Specialist · Dedicated OPD',
    bio: "Experienced Obstetrician, Gynecologist, and Infertility Specialist dedicated to comprehensive women's health, high-risk pregnancy care, painless deliveries, reproductive wellness, and fertility guidance.",
  },
  {
    id: 'dr-vikas',
    nameEn: 'DR. VIKAS KUMAR',
    degree: 'Orthopedic & Joint Replacement Specialist',
    department: 'Orthopedics & Joint Replacement',
    image: '',
    timing: 'Orthopedic Surgeon · Trauma & Joint Clinic',
    bio: 'Senior Orthopedic Surgeon specializing in total knee and hip replacement (arthroplasty), complex trauma fracture care, arthroscopic ligament reconstruction, arthritis treatment, and spine therapy.',
  },
  {
    id: 'dr-satish',
    nameEn: 'DR. SATISH SHAH',
    degree: 'D.M.R.E. (Radiologist)',
    department: 'Radiology & Medical Imaging',
    image: '',
    timing: 'Senior Radiologist · Ultrasonography & Imaging',
    bio: 'Consultant Radiologist with extensive experience in 4D colour Doppler sonography, CT-Angiography review, bedside digital X-ray evaluation, and precision radiological diagnoses for complex cases.',
  },
]

function OtherDoctors() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedDoctor, setSelectedDoctor] = useState<OtherDoctor | null>(null)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedDoctor(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (selectedDoctor) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedDoctor])

  const maxIndex = isMobile ? otherDoctors.length - 1 : otherDoctors.length - 2

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX - touchEndX
    if (diff > 45) {
      handleNext()
    } else if (diff < -45) {
      handlePrev()
    }
    setTouchStartX(null)
  }

  return (
    <section className="section other-doctors-section" id="doctors-panel">
      <div className="shell">
        <SectionTitle
          eyebrow="MEDICAL EXPERTS"
          title="Our Doctors"
          text="Senior consultant surgeons and visiting physicians delivering ethical, specialist-led healthcare across core clinical departments."
          center
        />

        <div className="doc-carousel-wrap">
          {/* Navigation Arrows */}
          <button
            type="button"
            className="doc-nav-btn doc-nav-prev"
            onClick={handlePrev}
            aria-label="Previous Doctor"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            className="doc-nav-btn doc-nav-next"
            onClick={handleNext}
            aria-label="Next Doctor"
          >
            <ChevronRight size={22} />
          </button>

          {/* Carousel Viewport */}
          <div
            className="doc-cards-viewport"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="doc-cards-track"
              style={{
                transform: isMobile
                  ? `translateX(calc(-${currentIndex} * (88% + 16px)))`
                  : `translateX(calc(-${currentIndex} * (50% + 12px)))`,
              }}
            >
              {otherDoctors.map((doc) => (
                <article key={doc.id} className="doc-card">
                  {/* Top Navy Header Bar */}
                  <div className="doc-card-header">
                    <h3 className="doc-card-name">{doc.nameEn}</h3>
                  </div>

                  {/* Card Body */}
                  <div className="doc-card-body">
                    <div className="doc-photo-col">
                      <div className="doc-photo-frame">
                        {doc.image ? (
                          <img
                            src={doc.image}
                            alt={`${doc.nameEn} - ${doc.degree}`}
                            loading="lazy"
                          />
                        ) : (
                          <div className="doc-photo-blank">
                            <User size={46} strokeWidth={1.4} className="doc-blank-icon" />
                          </div>
                        )}
                      </div>
                      <button
                        type="button"
                        className="button button-small doc-view-profile-btn"
                        onClick={() => setSelectedDoctor(doc)}
                      >
                        View Profile <ArrowRight size={14} />
                      </button>
                    </div>

                    <div className="doc-info-col">
                      <div className="doc-degree-block">
                        <span className="doc-degree-label">Degree:</span>
                        <p className="doc-degree-value">{doc.degree}</p>
                      </div>

                      <div className="doc-dept-badge">
                        <Stethoscope size={13} />
                        <span>{doc.department}</span>
                      </div>

                      <div className="doc-timing-box">
                        <Clock3 size={15} />
                        <span>
                          <b>OPD Schedule</b>
                          <small>{doc.timing}</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="doc-carousel-dots">
            {otherDoctors.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`doc-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Doctor Profile Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            className="doc-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedDoctor(null)}
          >
            <motion.div
              className="doc-modal-card"
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="doc-modal-header">
                <div>
                  <span className="doc-modal-eyebrow">{selectedDoctor.department}</span>
                  <h3>{selectedDoctor.nameEn}</h3>
                </div>
                <button
                  type="button"
                  className="doc-modal-close-btn"
                  onClick={() => setSelectedDoctor(null)}
                  aria-label="Close Profile"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="doc-modal-body">
                <div className="doc-modal-profile-grid">
                  <div className="doc-modal-photo">
                    {selectedDoctor.image ? (
                      <img
                        src={selectedDoctor.image}
                        alt={selectedDoctor.nameEn}
                      />
                    ) : (
                      <div className="doc-photo-blank doc-modal-blank">
                        <User size={54} strokeWidth={1.4} className="doc-blank-icon" />
                      </div>
                    )}
                  </div>
                  <div className="doc-modal-details">
                    <div className="doc-modal-item">
                      <b className="doc-modal-label">Specialist Qualifications & Degree</b>
                      <p className="doc-modal-degree">{selectedDoctor.degree}</p>
                    </div>

                    <div className="doc-modal-item">
                      <b className="doc-modal-label">OPD & Consultation Schedule</b>
                      <p className="doc-modal-timing">
                        <Clock3 size={15} />
                        <span>{selectedDoctor.timing}</span>
                      </p>
                    </div>

                    <div className="doc-modal-item">
                      <b className="doc-modal-label">Department / Specialty</b>
                      <p className="doc-modal-dept">
                        <Stethoscope size={15} />
                        <span>{selectedDoctor.department}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="doc-modal-bio">
                  <b className="doc-modal-label">Clinical Overview</b>
                  <p>{selectedDoctor.bio}</p>
                </div>

                <div className="doc-modal-actions">
                  <a
                    href="#appointment"
                    className="button doc-modal-book-btn"
                    onClick={() => setSelectedDoctor(null)}
                  >
                    Book Consultation <ArrowRight size={16} />
                  </a>
                  <a
                    href={PHONE}
                    className="button button-outline doc-modal-call-btn"
                  >
                    <Phone size={15} /> Emergency: +91 94148 95281
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

interface FacilityCardItem {
  id: string
  category: string
  title: string
  image: string
}

const campusHighlights: FacilityCardItem[] = [
  {
    id: 'facade',
    category: 'EXTERIOR',
    title: 'JayShree Hospital modern exterior facade',
    image: '/images/main1.jpg',
  },
  {
    id: 'modular-ot',
    category: 'FACILITIES',
    title: 'Korean Modular Operation Theater with C-Arm',
    image: '/images/facility-modular-ot.jpg',
  },
  {
    id: 'icu-beds',
    category: 'FACILITIES',
    title: 'Intensive Care Unit (ICU) & multi-para monitors',
    image: '/images/facility-icu-beds.jpg',
  },
  {
    id: 'reception-desk',
    category: 'RECEPTION',
    title: '24/7 Patient help desk & registration counter',
    image: '/images/reception-desk.jpg',
  },
  {
    id: 'specialties-lounge',
    category: 'RECEPTION',
    title: 'Illuminated specialties wall & patient lounge',
    image: '/images/specialties-lounge.jpg',
  },
]

const clinicalFacilities: FacilityCardItem[] = [
  {
    id: 'emergency-wing',
    category: 'EMERGENCY',
    title: '24/7 Emergency & trauma center with direct diagnostic access',
    image: '/images/facility-emergency-wing.jpg',
  },
  {
    id: 'modular-ot-sterile',
    category: 'SURGERY',
    title: 'Korean Modular Operation Theater with C-Arm & laminar airflow',
    image: '/images/facility-modular-ot.jpg',
  },
  {
    id: 'icu-monitors',
    category: 'CRITICAL CARE',
    title: 'Level-III Intensive Care Unit (ICU) & multi-para monitors',
    image: '/images/facility-icu-beds.jpg',
  },
  {
    id: 'maternity-suite',
    category: 'MATERNITY',
    title: 'Maternity, Labor & Neonatal Care Suite with specialized monitoring',
    image: '/images/facility-maternity-suite.jpg',
  },
  {
    id: 'icu-ventilators',
    category: 'LIFE SUPPORT',
    title: 'Advanced ICU Ventilators & central medical gas supply',
    image: '/images/facility-icu-ventilator.jpg',
  },
]

function FacilitiesSection() {
  const [activeTab, setActiveTab] = useState<'campus' | 'clinical'>('campus')
  const [activeLightbox, setActiveLightbox] = useState<number | null>(null)

  const activeItems = activeTab === 'campus' ? campusHighlights : clinicalFacilities

  const move = (delta: number) => {
    setActiveLightbox((prev) => {
      if (prev === null) return null
      return (prev + delta + activeItems.length) % activeItems.length
    })
  }

  useEffect(() => {
    if (activeLightbox === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLightbox(null)
      if (e.key === 'ArrowLeft') move(-1)
      if (e.key === 'ArrowRight') move(1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeLightbox, activeItems.length])

  return (
    <section className="section facilities-section" id="facilities">
      <div className="shell">
        <SectionTitle
          eyebrow="CAMPUS & INFRASTRUCTURE"
          title="Inside JayShree Hospital"
          text="Explore real photographs of our modern hospital building, Korean modular operation theater, 24/7 ICU, patient recovery rooms, and welcoming reception lobby."
          center
        />

        <div className="facilities-tabs">
          <button
            type="button"
            className={`facilities-tab-btn ${activeTab === 'campus' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('campus')
              setActiveLightbox(null)
            }}
          >
            Campus Highlights
          </button>
          <button
            type="button"
            className={`facilities-tab-btn ${activeTab === 'clinical' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('clinical')
              setActiveLightbox(null)
            }}
          >
            Clinical Infrastructure
          </button>
        </div>

        <motion.div
          key={activeTab}
          className="facilities-grid"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {activeItems.map((item, idx) => (
            <motion.article
              key={item.id}
              className={`facility-card ${idx < 2 ? 'facility-card-featured' : 'facility-card-standard'}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.45, delay: idx * 0.07 }}
              onClick={() => setActiveLightbox(idx)}
              aria-label={`View ${item.title}`}
            >
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="facility-card-overlay">
                <span className="facility-card-category">{item.category}</span>
                <h3 className="facility-card-title">{item.title}</h3>
              </div>
              <span className="facility-zoom-pill">
                <ZoomIn size={13} /> View
              </span>
            </motion.article>
          ))}
        </motion.div>

        <div className="facilities-footer">
          <p>
            Looking for a complete look into our hospital infrastructure, wards, and patient lounges?
            <small>Browse over 100+ authentic high-resolution photographs in our official photo archive.</small>
          </p>
          <a href="/gallery" className="button button-small">
            Explore All 100+ Photos <ArrowRight size={16} />
          </a>
        </div>
      </div>

      <AnimatePresence>
        {activeLightbox !== null && activeItems[activeLightbox] && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setActiveLightbox(null)}
              aria-label="Close photo view"
            >
              <X />
            </button>
            <button
              className="lightbox-prev"
              onClick={(e) => {
                e.stopPropagation()
                move(-1)
              }}
              aria-label="Previous photo"
            >
              <ArrowLeft />
            </button>
            <motion.figure
              key={activeItems[activeLightbox].id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeItems[activeLightbox].image}
                alt={activeItems[activeLightbox].title}
              />
              <figcaption>
                <div className="lightbox-caption-text">
                  <span className="lightbox-cat-tag">
                    {activeItems[activeLightbox].category}
                  </span>
                  <b>{activeItems[activeLightbox].title}</b>
                </div>
                <small>
                  {activeLightbox + 1} / {activeItems.length}
                </small>
              </figcaption>
            </motion.figure>
            <button
              className="lightbox-next"
              onClick={(e) => {
                e.stopPropagation()
                move(1)
              }}
              aria-label="Next photo"
            >
              <ArrowRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

function EmergencySection() {
  return (
    <section className="section emergency-section" id="emergency">
      <div className="shell emergency-grid">
        <motion.div
          className="emergency-photo-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/images/ambulance.jpg"
            alt="JayShree Hospital 24/7 On-Duty Emergency Ambulance"
          />
          <div className="emergency-photo-badge">
            <span className="pulse-indicator" />
            <div>
              <b>24/7 Rapid Ambulance Service</b>
              <small>On Standby · Jalore & Surrounding Areas</small>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="emergency-info"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionTitle
            eyebrow="24/7 Emergency & Critical Care"
            title="Immediate emergency response when minutes matter most."
            text="JayShree Hospital maintains a dedicated, fully equipped emergency ambulance on hospital premises with trained emergency medical responders, oxygen support, and priority triage."
          />

          <div className="emergency-features">
            <div className="emergency-feature-item">
              <span className="feature-icon"><HeartPulse size={20} /></span>
              <div>
                <h4>Oxygen & Vital Life Support</h4>
                <p>Equipped with emergency oxygen cylinders, patient monitoring, and trauma resuscitation kits.</p>
              </div>
            </div>

            <div className="emergency-feature-item">
              <span className="feature-icon"><Ambulance size={20} /></span>
              <div>
                <h4>Trained Emergency Medical Staff</h4>
                <p>Experienced emergency nursing and paramedic support during transfer for patient stabilization.</p>
              </div>
            </div>

            <div className="emergency-feature-item">
              <span className="feature-icon"><Clock3 size={20} /></span>
              <div>
                <h4>Zero-Wait Hospital Handover</h4>
                <p>Direct pre-arrival communication with on-duty physicians so trauma and critical care teams are ready.</p>
              </div>
            </div>
          </div>

          <div className="emergency-cta-group">
            <a href={PHONE} className="button button-red emergency-call-btn">
              <Phone size={18} /> 24/7 Emergency: +91 94148 95281
            </a>
            <a href={MAP_URL} target="_blank" rel="noreferrer" className="button button-outline">
              <MapPin size={18} /> View Hospital Location
            </a>
          </div>
        </motion.div>
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
  const [patientName, setPatientName] = useState('')

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    const name = (fd.get('name') as string)?.trim() || ''
    const phone = (fd.get('phone') as string)?.trim() || ''
    const email = (fd.get('email') as string)?.trim() || ''
    const department = (fd.get('department') as string)?.trim() || ''
    const date = (fd.get('date') as string)?.trim() || ''
    const message = (fd.get('message') as string)?.trim() || ''

    const lines: string[] = [
      'JayShree Hospital, Jalore',
      contact ? 'Website Inquiry' : 'Appointment Request',
      '',
      `Patient Name: ${name}`,
      `Phone Number: ${phone}`,
    ]

    if (email) {
      lines.push(`Email: ${email}`)
    }
    if (department) {
      lines.push(`Department: ${department}`)
    }
    if (date) {
      lines.push(`Preferred Date: ${date}`)
    }
    if (message) {
      lines.push(`Message: ${message}`)
    }

    const whatsappUrl = `https://wa.me/919414895281?text=${encodeURIComponent(lines.join('\n'))}`

    setPatientName(name)
    setSent(true)
    form.reset()
    window.setTimeout(() => setSent(false), 5500)

    try {
      const win = window.open(whatsappUrl, '_blank')
      if (!win) {
        window.location.href = whatsappUrl
      }
    } catch {
      window.location.href = whatsappUrl
    }
  }

  return (
    <>
      <form onSubmit={submit} className={`form-grid ${contact ? 'contact-form' : ''}`}>
        <FormFields contact={contact} />
        <button className="button field-full" type="submit">
          Send appointment request <ArrowRight size={18} />
        </button>
        <small className="form-note">
          <MessageCircle size={14} /> Details are sent directly to our 24/7 desk on WhatsApp (+91 94148 95281).
        </small>
      </form>
      <AnimatePresence>
        {sent && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span><Check /></span>
            <div>
              <b>Appointment request created {patientName ? `for ${patientName}` : ''}</b>
              <small>Opening WhatsApp to send details to +91 94148 95281...</small>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
          <div className="appointment-contact"><span><Phone /></span><div><small>24/7 Emergency & Appointments</small><b>+91 94148 95281</b></div></div>
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
        <div><Logo light /><p>Ethical, accessible and compassionate healthcare for Jalore and surrounding communities.</p><div className="socials"><a href="#" aria-label="Website"><Globe /></a><a href="/gallery" aria-label="Photo gallery"><Camera /></a><a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="Chat on WhatsApp (+91 94148 95281)"><MessageCircle /></a></div></div>
        <div><h4>Quick links</h4>{[['Home', '/'], ['About Us', '/#about'], ['Our Doctor', '/#doctor'], ['Specialists', '/#doctors-panel'], ['Photo Gallery', '/gallery'], ['Contact Us', '/contact'], ['Book Appointment', '/#appointment']].map(([x, h]) => <a key={x} href={h}>{x}</a>)}</div>
        <div><h4>Our specialties</h4>{['Critical Medicine (ICU/CCU)', 'Cardiology', 'Neurology', 'Urology', 'Orthopedics', 'Surgery', 'Dialysis', 'Investigations'].map(x => <a key={x} href="/#specialties">{x}</a>)}</div>
        <div><h4>Contact & location</h4><p className="footer-contact"><MapPin />Manpura Colony, Shivaji Nagar Colony, Jalore, Rajasthan 343001</p><p className="footer-contact"><Phone /><a href={PHONE}>24/7 Emergency: +91 94148 95281</a></p><p className="footer-contact"><Mail />info@jayshreehospital.in</p><a className="map-link" href={MAP_URL} target="_blank" rel="noreferrer">View on Google Maps <ArrowUpRight size={16} /></a></div>
      </div>
      <div className="footer-bottom"><div className="shell"><span>© 2025 JayShree Hospital Jalore. All Rights Reserved.</span><span>Coordinates: 25.3470334, 72.6258287</span></div></div>
    </footer>
  )
}

function PageHero({ title, crumb, image }: { title: string; crumb: string; image: string }) {
  return <section className="page-hero"><img src={image} alt="" /><div className="page-overlay" /><div className="shell"><div className="breadcrumb"><a href="/">Home</a><ChevronRight size={14} /><span>{crumb}</span></div><h1>{title}</h1></div></section>
}

function GalleryPage() {
  const [filter, setFilter] = useState<'All' | 'Facilities' | 'Reception' | 'Exterior' | 'Wards' | 'Moments'>('All')
  const [active, setActive] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState<number>(30)

  const handleFilterChange = (cat: 'All' | 'Facilities' | 'Reception' | 'Exterior' | 'Wards' | 'Moments') => {
    setFilter(cat)
    setVisibleCount(30)
    setActive(null)
  }

  const allFiltered = useMemo(() => {
    if (filter === 'All') return galleryImages
    return galleryImages.filter((x) => x.category === filter)
  }, [filter])

  const displayedImages = useMemo(() => {
    return allFiltered.slice(0, visibleCount)
  }, [allFiltered, visibleCount])

  const move = (delta: number) => {
    setActive((a) => {
      if (a === null) return null
      return (a + delta + allFiltered.length) % allFiltered.length
    })
  }

  useEffect(() => {
    if (active === null) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowLeft') move(-1)
      if (e.key === 'ArrowRight') move(1)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [active, allFiltered.length])

  const counts = useMemo(() => {
    const c: Record<string, number> = {
      All: galleryImages.length,
      Facilities: 0,
      Reception: 0,
      Exterior: 0,
      Wards: 0,
      Moments: 0,
    }
    galleryImages.forEach((img) => {
      c[img.category] = (c[img.category] || 0) + 1
    })
    return c
  }, [])

  const filterButtons: { key: 'All' | 'Facilities' | 'Reception' | 'Exterior' | 'Wards' | 'Moments'; label: string }[] = [
    { key: 'All', label: `All Photos (${counts.All})` },
    { key: 'Facilities', label: `Facilities & O.T. (${counts.Facilities})` },
    { key: 'Reception', label: `Reception & Lobby (${counts.Reception})` },
    { key: 'Exterior', label: `Building & Exterior (${counts.Exterior})` },
    { key: 'Wards', label: `Inpatient Wards (${counts.Wards})` },
    { key: 'Moments', label: `Hospital Moments (${counts.Moments})` },
  ]

  return (
    <>
      <Header />
      <main>
        <PageHero
          image="/images/icu.jpg"
          crumb="Gallery"
          title="JayShree Hospital — Comprehensive Photo Archive"
        />
        <section className="section gallery-section">
          <div className="shell">
            <SectionTitle
              eyebrow="PHOTO GALLERY"
              title="Modern spaces created for healing."
              text=""
              center
            />
            <div className="filters">
              {filterButtons.map((btn) => (
                <button
                  key={btn.key}
                  className={filter === btn.key ? 'active' : ''}
                  onClick={() => handleFilterChange(btn.key)}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            <motion.div layout className="gallery-grid">
              {displayedImages.map((img, i) => (
                <motion.button
                  layout
                  key={img.id}
                  onClick={() => setActive(i)}
                  className={i % 7 === 0 ? 'wide' : ''}
                  aria-label={`View photo: ${img.title}`}
                >
                  <img src={img.src} alt={img.title} loading="lazy" />
                  <span>
                    <small>{img.category}</small>
                    
                  </span>
                  <i>
                    <ArrowUpRight />
                  </i>
                </motion.button>
              ))}
            </motion.div>

            {visibleCount < allFiltered.length && (
              <div className="gallery-load-more">
                <button
                  className="button"
                  onClick={() => setVisibleCount((prev) => Math.min(prev + 30, allFiltered.length))}
                >
                  Load More Photos ({allFiltered.length - visibleCount} remaining) <ArrowRight size={16} />
                </button>
                <button
                  className="button outline"
                  onClick={() => setVisibleCount(allFiltered.length)}
                >
                  Show All ({allFiltered.length})
                </button>
              </div>
            )}
          </div>
        </section>

        <AnimatePresence>
          {active !== null && allFiltered[active] && (
            <motion.div
              className="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
            >
              <button
                className="lightbox-close"
                onClick={() => setActive(null)}
                aria-label="Close photo view"
              >
                <X />
              </button>
              <button
                className="lightbox-prev"
                onClick={(e) => {
                  e.stopPropagation()
                  move(-1)
                }}
                aria-label="Previous photo"
              >
                <ArrowLeft />
              </button>
              <motion.figure
                key={allFiltered[active].id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={allFiltered[active].src} alt={allFiltered[active].title} />
                <figcaption>
                  <div className="lightbox-caption-text">
                    <span className="lightbox-cat-tag">{allFiltered[active].category}</span>
                    <b>{allFiltered[active].title}</b>
                  </div>
                  <small>
                    {active + 1} / {allFiltered.length}
                  </small>
                </figcaption>
              </motion.figure>
              <button
                className="lightbox-next"
                onClick={(e) => {
                  e.stopPropagation()
                  move(1)
                }}
                aria-label="Next photo"
              >
                <ArrowRight />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}

function ContactPage() {
  const cards = [
    [MapPin, 'Hospital location', 'Manpura Colony, Shivaji Nagar Colony, Jalore, Rajasthan 343001'],
    [Phone, '24/7 Emergency & Helpline', '+91 94148 95281', 'Immediate emergency response & ambulance dispatch'],
    [Clock3, 'Working hours', 'Emergency & Pharmacy: 24 Hours', 'Dr. Jain OPD: Mon–Sat, 10 AM–7 PM'],
  ]
  return (
    <><Header /><main><PageHero image="/images/main2.jpg" crumb="Contact Us" title="Get In Touch With JayShree Hospital" />
      <section className="section contact-section"><div className="shell">
        <div className="contact-cards">
          {cards.map(([Icon, title, line1, line2]) => (
            <article key={title as string}>
              <span><Icon /></span>
              <div>
                <h3>{title as string}</h3>
                {Icon === Phone ? (
                  <p><a href={PHONE} style={{ color: 'var(--blue)', fontWeight: 700 }}>{line1 as string}</a></p>
                ) : (
                  <p>{line1 as string}</p>
                )}
                {line2 && <small>{line2 as string}</small>}
              </div>
            </article>
          ))}
        </div>
        <div className="contact-split">
          <div className="contact-form-wrap"><SectionTitle eyebrow="Send An Inquiry" title="How can we help?" text="Share your details and our patient care team will get in touch." /><Appointment contact /></div>
          <div className="map-wrap"><iframe title="JayShree Hospital map" src="https://www.google.com/maps?q=25.3470334,72.6258287&z=16&output=embed" loading="lazy" /><div><span><MapPin /></span><p><b>JayShree Hospital, Jalore</b>Manpura Colony, Shivaji Nagar Colony</p><a href={MAP_URL} target="_blank" rel="noreferrer" className="button">Open in Google Maps <ArrowUpRight size={17} /></a></div></div>
        </div>
      </div></section>
    </main><Footer /></>
  )
}

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuickActions />
        <About />
        <Specialties />
        <Doctor />
        <OtherDoctors />
        <SpecialInvestigations />
        <FacilitiesSection />
        <EmergencySection />
        <WhyUs />
        <AppointmentSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

function getNormalizedPath(): string {
  // Support hash-based fallback (e.g. #/gallery, #/contact, #gallery, #contact)
  const hash = window.location.hash
  if (hash.startsWith('#/')) {
    const raw = hash.slice(1).replace(/\/$/, '') || '/'
    if (raw === '/gallery' || raw === '/contact') return raw
  }
  if (hash === '#gallery') return '/gallery'
  if (hash === '#contact') return '/contact'

  // Standard pathname
  let p = window.location.pathname.replace(/\/$/, '') || '/'
  p = p.replace(/\/index\.html$/, '') || '/'
  return p
}

export function navigateTo(to: string) {
  if (!to) return
  if (
    to.startsWith('http://') ||
    to.startsWith('https://') ||
    to.startsWith('tel:') ||
    to.startsWith('mailto:')
  ) {
    window.location.href = to
    return
  }

  // Hash anchor on the same page (e.g. /#about or #about)
  if (to.startsWith('#') || to.startsWith('/#')) {
    const hashTarget = to.replace(/^\/?#/, '')
    const current = getNormalizedPath()
    if (current === '/') {
      const el = document.getElementById(hashTarget)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', `/#${hashTarget}`)
        return
      }
    }
  }

  window.history.pushState(null, '', to)
  window.dispatchEvent(new PopStateEvent('popstate'))
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export default function App() {
  const [path, setPath] = useState(getNormalizedPath)

  useEffect(() => {
    const handlePopState = () => {
      setPath(getNormalizedPath())
    }

    const handleGlobalClick = (e: MouseEvent) => {
      // Ignore if not primary left click or if modifier keys held
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return

      const anchor = (e.target as HTMLElement).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      // Don't intercept target="_blank", mailto:, tel:, or absolute external URLs
      if (
        anchor.target === '_blank' ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('//')
      ) {
        return
      }

      // Check if it's an internal route link (/gallery, /contact, /, /#...)
      if (href.startsWith('/') || href.startsWith('#')) {
        e.preventDefault()

        // Handle section scroll on home page
        if (href.startsWith('#') || href.startsWith('/#')) {
          const hashTarget = href.replace(/^\/?#/, '')
          const current = getNormalizedPath()
          if (current === '/') {
            const el = document.getElementById(hashTarget)
            if (el) {
              el.scrollIntoView({ behavior: 'smooth' })
              window.history.pushState(null, '', href)
              return
            }
          }
        }

        window.history.pushState(null, '', href)
        setPath(getNormalizedPath())

        // Scroll to target hash or top
        const targetHash = href.includes('#') ? href.split('#')[1] : null
        if (targetHash) {
          setTimeout(() => {
            const el = document.getElementById(targetHash)
            if (el) el.scrollIntoView({ behavior: 'smooth' })
            else window.scrollTo({ top: 0, behavior: 'smooth' })
          }, 80)
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    window.addEventListener('click', handleGlobalClick)

    return () => {
      window.removeEventListener('popstate', handlePopState)
      window.removeEventListener('click', handleGlobalClick)
    }
  }, [])

  useEffect(() => {
    // Scroll to section if initial load or refresh has hash
    if (window.location.hash && !window.location.hash.startsWith('#/')) {
      const id = window.location.hash.replace(/^#\/?/, '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo(0, 0)
    }
  }, [path])

  if (path === '/gallery') return <GalleryPage />
  if (path === '/contact') return <ContactPage />
  return <HomePage />
}
