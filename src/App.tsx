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
  ChevronLeft,
  ChevronRight,
  Clock3,
  Droplets,
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
  Radio,
  Scan,
  ShieldCheck,
  Stethoscope,
  Syringe,
  User,
  Users,
  Waves,
  X,
} from 'lucide-react'

const MAP_URL =
  'https://www.google.com/maps/place/Jayshree+hospital+jalore/@25.3447214,72.621866,4239m/data=!3m1!1e3!4m6!3m5!1s0x3943010063623da3:0xd778975d9fa48ace!8m2!3d25.3470334!4d72.6258287!16s%2Fg%2F11n3pxg5z9?authuser=0&entry=ttu'
const PHONE = 'tel:+919999999999'
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
          <div className="utility-group">
            <a href={MAP_URL} target="_blank" rel="noreferrer">
              <MapPin size={14} /> Manpura Colony, Shivaji Nagar Colony, Jalore


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
  useEffect(() => {
    const id = window.setInterval(() => setSlide((v) => (v + 1) % heroSlides.length), 6500)
    return () => window.clearInterval(id)
  }, [])
  const current = heroSlides[slide]
  const prevSlide = () => setSlide((s) => (s - 1 + heroSlides.length) % heroSlides.length)
  const nextSlide = () => setSlide((s) => (s + 1) % heroSlides.length)

  return (
    <section className="hero">
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
      <div className="shell stats">
        {stats.map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
      </div>
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
            <span><b>OPD Timings</b>Monday – Saturday: 10:00 AM – 7:00 PM<small>Emergency Services: 24x7</small></span>
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
  nameHi: string
  degreeHi: string
  degreeEn: string
  department: string
  departmentHi: string
  image: string
  timing: string
  bio: string
}

const otherDoctors: OtherDoctor[] = [
  {
    id: 'dr-gupta',
    nameEn: 'DR. RAJENDRA KUMAR GUPTA',
    nameHi: '',
    degreeHi: 'एम.एस. कन्सल्टींग सर्जन',
    degreeEn: 'M.S. Consulting Surgeon',
    department: 'General & Laparoscopic Surgery',
    departmentHi: 'जनरल एवं लेप्रोस्कोपिक सर्जरी',
    image: '',
    timing: 'Visiting Consultant · Scheduled OPD & Emergency Surgery',
    bio: 'Senior Consulting Surgeon with comprehensive expertise in advanced laparoscopic procedures, abdominal and gastrointestinal surgeries, trauma management, and emergency surgical care for Jalore.',
  },
  {
    id: 'dr-sharma',
    nameEn: 'DR. SATYA PRAKASH SHARMA',
    nameHi: '',
    degreeHi: 'M.D. (पैथोलोजी)',
    degreeEn: 'M.D. (Pathology)',
    department: 'Clinical Pathology & Laboratory Medicine',
    departmentHi: 'पैथोलोजी एवं क्लिनिकल लैब',
    image: '',
    timing: 'Senior Pathologist · Daily Laboratory Diagnostics',
    bio: 'Leading Consultant Pathologist directing diagnostic clinical pathology, histopathology, cytology, automated hematology, and biochemical assays to ensure rapid and accurate laboratory results.',
  },
  {
    id: 'dr-bajaj',
    nameEn: 'DR. RAJENDRA KUMAR BAJAJ',
    nameHi: '',
    degreeHi: 'MBBS, M.D. बच्चों के डॉक्टर (गोल्ड मेडलिस्ट)',
    degreeEn: "MBBS, M.D. Children's Doctor (Gold Medalist)",
    department: 'Pediatrics & Neonatology',
    departmentHi: 'शिशु एवं बाल रोग विभाग',
    image: '',
    timing: 'Gold Medalist Pediatrician · Child & Newborn OPD',
    bio: 'Renowned Gold Medalist Pediatrician providing specialized care for infants, children, and adolescents, including immunization, developmental health monitoring, pediatric infections, and neonatal care.',
  },
  {
    id: 'dr-sarika',
    nameEn: 'DR. SARIKA CHOPRA',
    nameHi: '',
    degreeHi: 'स्त्री एवं प्रसुति रोग व निःसंतान रोग विशेषज्ञ',
    degreeEn: 'Obstetrics, Gynecology & Infertility Specialist',
    department: 'Obstetrics & Gynecology',
    departmentHi: 'स्त्री एवं प्रसूति रोग विभाग',
    image: '',
    timing: 'Women & Maternity Specialist · Dedicated OPD',
    bio: "Experienced Obstetrician, Gynecologist, and Infertility Specialist dedicated to comprehensive women's health, high-risk pregnancy care, painless deliveries, reproductive wellness, and fertility guidance.",
  },
  {
    id: 'dr-vikas',
    nameEn: 'DR. VIKAS KUMAR',
    nameHi: '',
    degreeHi: 'हड्डी रोग एवं जोड़ प्रत्यारोपण विशेषज्ञ',
    degreeEn: 'Orthopedic & Joint Replacement Specialist',
    department: 'Orthopedics & Joint Replacement',
    departmentHi: 'हड्डी एवं जोड़ प्रत्यारोपण विभाग',
    image: '',
    timing: 'Orthopedic Surgeon · Trauma & Joint Clinic',
    bio: 'Senior Orthopedic Surgeon specializing in total knee and hip replacement (arthroplasty), complex trauma fracture care, arthroscopic ligament reconstruction, arthritis treatment, and spine therapy.',
  },
  {
    id: 'dr-satish',
    nameEn: 'DR. SATISH SHAH',
    nameHi: '',
    degreeHi: 'D.M.R.E. (रेडियोलोजिस्ट)',
    degreeEn: 'D.M.R.E. (Radiologist)',
    department: 'Radiology & Medical Imaging',
    departmentHi: 'रेडियोलोजी एवं सोनोग्राफी विभाग',
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
                            alt={`${doc.nameEn} - ${doc.degreeEn}`}
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
                        <p className="doc-degree-value">{doc.degreeHi}</p>
                        <p className="doc-degree-sub">{doc.degreeEn}</p>
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
                      <p className="doc-modal-degree-hi">{selectedDoctor.degreeHi}</p>
                      <p className="doc-modal-degree-en">{selectedDoctor.degreeEn}</p>
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
                        <span>{selectedDoctor.department} ({selectedDoctor.departmentHi})</span>
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
                    <Phone size={15} /> Call Hospital
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
              <Phone size={18} /> Call Ambulance: 24/7 Helpline
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
        <div><h4>Quick links</h4>{[['Home', '/'], ['About Us', '/#about'], ['Our Doctor', '/#doctor'], ['Specialists', '/#doctors-panel'], ['Photo Gallery', '/gallery'], ['Contact Us', '/contact'], ['Book Appointment', '/#appointment']].map(([x, h]) => <a key={x} href={h}>{x}</a>)}</div>
        <div><h4>Our specialties</h4>{['Critical Medicine (ICU/CCU)', 'Cardiology', 'Neurology', 'Urology', 'Orthopedics', 'Surgery', 'Dialysis', 'Investigations'].map(x => <a key={x} href="/#specialties">{x}</a>)}</div>
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
  ['/images/hero-mobile.jpg', 'JayShree Hospital full building architecture & signage', 'Exterior'],
  ['/images/modular-ot.jpg', 'Korean Modular Operation Theater with advanced C-Arm machine', 'Facilities'],
  ['/images/operation-theater.jpg', 'Modern surgical suite with laminar airflow & anesthesia station', 'Facilities'],
  ['/images/icu.jpg', 'State-of-the-art Intensive Care Unit (ICU) & multi-para monitors', 'Facilities'],
  ['/images/specialties-lounge.jpg', 'Illuminated specialties wall & comfortable patient waiting lounge', 'Facilities'],
  ['/images/reception-lobby.jpg', 'Spacious hospital reception lobby & elevator access', 'Reception'],
  ['/images/reception-desk.jpg', '24/7 Patient help desk and registration counter', 'Reception'],
  ['/images/opd-hall.jpg', 'Modern outpatient department (OPD) consultation cabins', 'Facilities'],
  ['/images/entrance.jpg', 'Hospital main entrance & 24/7 medical store', 'Exterior'],
  ['/images/ambulance.jpg', '24/7 JayShree Hospital Emergency Ambulance Unit', 'Exterior'],
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
        <div className="filters">{[['All', 'All Photos'], ['Exterior', 'Hospital Building & Exterior'], ['Facilities', 'ICU & Clinical Facilities'], ['Reception', 'Reception & Lobby'], ['Leadership', 'Leadership']].map(([v, l]) => <button className={filter === v ? 'active' : ''} onClick={() => setFilter(v)} key={v}>{l}</button>)}</div>
        <motion.div layout className="gallery-grid">{visible.map((img, i) => <motion.button layout key={img[0]} onClick={() => setActive(i)} className={i === 0 ? 'wide' : ''}><img src={img[0]} alt={img[1]} /><span><small>{img[2]}</small><b>{img[1]}</b></span><i><ArrowUpRight /></i></motion.button>)}</motion.div>
      </div></section>
      <AnimatePresence>{active !== null && <motion.div className="lightbox" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActive(null)}><button className="lightbox-close" onClick={() => setActive(null)}><X /></button><button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); move(-1) }}><ArrowLeft /></button><motion.figure key={visible[active][0]} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} onClick={e => e.stopPropagation()}><img src={visible[active][0]} alt={visible[active][1]} /><figcaption>{visible[active][1]}<small>{active + 1} / {visible.length}</small></figcaption></motion.figure><button className="lightbox-next" onClick={(e) => { e.stopPropagation(); move(1) }}><ArrowRight /></button></motion.div>}</AnimatePresence>
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
        <div className="contact-cards">{cards.map(([Icon, title, line1, line2]) => <article key={title as string}><span><Icon /></span><div><h3>{title as string}</h3><p>{line1 as string}</p>{line2 && <small>{line2 as string}</small>}</div></article>)}</div>
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
        <SpecialInvestigations />
        <Doctor />
        <OtherDoctors />
        <EmergencySection />
        <WhyUs />
        <AppointmentSection />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  useEffect(() => { window.scrollTo(0, 0) }, [path])
  if (path === '/gallery') return <GalleryPage />
  if (path === '/contact') return <ContactPage />
  return <HomePage />
}
