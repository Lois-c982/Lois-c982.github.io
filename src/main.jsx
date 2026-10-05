import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

/*
 * Project content is stored in a JavaScript array of objects so it can be easily
 * updated or extended. Each object contains the information for one project.
 */
const projects = [
  {
    number: '01',
    title: 'Indago',
    type: 'UX / UI DESIGN',
    year: 'UNIVERSITY PROJECT',
    summary:
      'A motivational self-care app concept designed to help students manage time and build positive routines.',
    role: 'Interface design, wireframes and prototyping',
    tools: 'Figma · UX design · accessibility',
    details: [
      'Designed the interface and user flows in Figma, moving from wireframes to prototypes.',
      'Considered accessibility and the competing academic and personal responsibilities of the student audience.',
      'Presented the app concept and design rationale to a lecturer.',
    ],
    
    
    visual: 'indago',
images: [
  {
    src: './indago-home.png',
    alt: 'Indago home screen',
  },
 
  {
    src: './indago-login.png',
    alt: 'Indago user login screen',
  },
],

  },
  {
    number: '02',
    title: 'Excitare',
    type: 'WEB APPLICATION',
    year: '2025—26',
    summary:
      'A full-stack alarm management application with reviews and Google Calendar integration.',
    role: 'Frontend, usability testing and integration',
    tools: 'JavaScript · Flask · SQLite · SQLAlchemy',
    details: [
      'Built parts of the frontend covering login, browsing and selecting alarms, reviews, settings and accessibility.',
      'Ran task-based usability testing on key user journeys and addressed navigation and interface consistency issues.',
      'Connected the frontend to a Flask API and integrated Google Calendar functionality.',
    ],
    visual: 'excitare',
    images: [
  {
    src: './Excitare-home.png',
    alt: 'Excitare home screen',
  },
  {
    src: './Excitare-admin.png',
    alt: 'Excitare alarm selection screen',
  },
  {
    src: './Excitare-settings.png',
    alt: 'Excitare calendar integration',
  },
],
  },
  {
    number: '03',
    title: 'Warehouse Management System',
    type: 'SOFTWARE / AI',
    year: '2025—26',
    summary:
      'A database-driven system for products, suppliers and stock, with a robot navigation module.',
    role: 'Database and algorithm development',
    tools: 'SQLite · A* search · deep Q-networks',
    details: [
      'Developed a SQLite-backed system to manage products, suppliers and stock levels.',
      'Combined A* search and a deep Q-network in a grid-based warehouse navigation module.',
      'Brought database design, algorithms and AI techniques into one application.',
    ],
    visual: 'warehouse',

images: [
  {
    src: './WarehouseManagment.png',
    alt: 'AI warehouse managment pic',
  },
  
],

  },
];

/* Navigation items*/
const navigation = [
  ['Work', '#work'],
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
];

function App() {
  // The selected project appears in the detail panel, null means it is closed.
  const [selected, setSelected] = useState(null);

  // This controls whether the navigation is open on smaller screens.
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    if (!selected) return;

    // Closes the project panel when Escape is pressed.
    function onKeyDown(event) {
      if (event.key === 'Escape') setSelected(null);
    }

    document.addEventListener('keydown', onKeyDown);

    // Prevents the page behind the project panel from scrolling.
    document.body.style.overflow = 'hidden';

    // Clean up when the panel closes
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <>
      {/* Site-wide navigation. The MENU button is visible on narrow screens. */}
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Lois Coughlin, home">
        
        </a>

        <button
          className="menu-button"
          aria-expanded={menu}
          aria-controls="primary-nav"
          onClick={() => setMenu(!menu)}
        >
          {menu ? 'CLOSE' : 'MENU'}{' '}
          <span aria-hidden="true">{menu ? '×' : '+'}</span>
        </button>

        <nav
          id="primary-nav"
          className={menu ? 'open' : ''}
          aria-label="Main navigation"
        >
          {navigation.map(([label, href]) => (
            <a href={href} key={label} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="top">
        {/* CV pic and main introduction. */}
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-art"
            src="./hero-photo.png"
          alt="photo of me for cv"
          />

          <div className="hero-copy">
            <p className="eyebrow">PORTFOLIO · 2026</p>
            <h1 id="hero-title">
              LOIS<br />COUGHLIN
            </h1>
            <div className="hero-baseline">
              <p>
                Computer Science<br />User Experience + Design
              </p>
              <a href="#work" className="underlink">
                EXPLORE WORK <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="hero-footer">
            <span>BASED IN DUNDEE, SCOTLAND</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        {/* maps each object in projects to a clickable row. */}
        <section id="work" className="section work-section">
          <div className="section-heading">
            <span className="index">01 / SELECTED PROJECTS</span>
           
            <p className="section-note">
                 Here are some relavent projects I've worked on.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <button
                className="project-row"
                key={project.number}
                onClick={() => setSelected(project)}
                aria-label={`Read about ${project.title}`}
              >
                <span className="project-number">{project.number}</span>
                <span className="project-title">{project.title}</span>
                <span className="project-type">{project.type}</span>
                <span className="project-arrow" aria-hidden="true">↗</span>
              </button>
            ))}
          </div>
          <p className="section-note">SELECT A PROJECT THAT YOU WOULD LIKE TO READ MORE OF!</p>
        </section>

        {/* introduction, downloadable CV, and a limited skills list. */}
        <section id="about" className="section about-section">
          <span className="index">02 / ABOUT</span>
          <div className="about-grid">
            <h2>
              A bit about
              <br /><em>me.</em>
            </h2>
            <div className="about-copy">
              <p className="lead">
                I’m Lois, a third-year Computer Science (UX + Design) student
                at the University of Dundee.
              </p>
              <p>
                Third-year Computer Science (UX + Design) student at the University of Dundee, seeking a
                year-in-industry placement to apply technical, creative and organisational skils in a
                professional environment. I'm very interested in UX, product and project management.
              </p>
              <p>
                Alongside my studies, I founded the university’s Women in STEM
                Society. It has grown to 60+ members, giving me the chance to
                build a community, lead a committee and connect students with
                industry. Women in STEM is a cause I am very passionate about, 
                and I would love to continue this in any way I can.
              </p>
              {/* The PDF is stored in public/ and is copied into the built site. */}
             <a
                className="underlink" href="./Lois-Coughlin-CV.pdf" download
              >
                DOWNLOAD MY CV <span aria-hidden="true">↗</span>
            </a>
            </div>
          </div>
          
          <div>
          <div className="skills header"></div>
           <h2>
              SKILLS
            </h2>
          </div>
          
          <div className="skills">
            <span>FIGMA</span>
            <span>UX RESEARCH</span>
            <span>WIREFRAMING</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>REACT</span>
            <span>PYTHON</span>
            <span>C</span>
            <span>C++</span>
            <span>JAVA</span>
            <span>JAVASCRIPT</span>
            <span>PROJECT COORDINATION</span>
            <span>ACCESSIBILITY</span>
            <span>WEB DESIGN</span>
            <span>EVENT ORGANISATION</span>
            <span>TEAM LEADERSHIP</span>
          </div>
        </section>

        {/* Experience: leadership and customer-facing work from the CV. */}
        <section id="experience" className="section experience-section">
          <span className="index">03 / BEYOND THE SCREEN</span>
          <h2>
            Some previous<br /> <em>experience.</em>
          </h2>
          <div className="experience-grid">
            <article>
              <span className="small-label">2026 — PRESENT</span>
              <h3>
                Founder &amp; Co-President<br />Women in STEM Society
              </h3>
              <p>
                Founded and lead a 60+ member society at the University of
                Dundee. I coordinate a committee, organise activities, build
                industry relationships, shape our social media and I am currently 
                developing plans for a school outreach program.
              </p>
            </article>
            <article>
              <span className="small-label">MAY 2026 — PRESENT</span>
              <h3>
                Sales Consultant<br />The Body Shop
              </h3>
              <p>
                • Provide customer-focused service by identifying customer needs and recommending
                  appropriate products and solutions.
                <br />
                • Communicate confidently with a wide range of customers and co-workers and adapt
                  communication to different needs and situations.
                <br />
                • Worked with the store team to support the Freshers Stall, helping represent the brand
                  and engage with students.
              </p>
            </article>
          </div>
        </section>

        {/* Contact: email, LinkedIn, and a link back to the top. */}
        <section id="contact" className="contact-section">
          <span className="index">04 / CONTACT</span>
          <p>HAVE A PROJECT OR OPPORTUNITY IN MIND?</p>
          <a className="contact-title" href="mailto:loiscoughlin06@gmail.com">
            Let’s talk<span aria-hidden="true">↗</span>
          </a>
          <div className="contact-bottom">
            <span>LOIS COUGHLIN © 2026</span>
            <a href="mailto:loiscoughlin06@gmail.com">EMAIL</a>
            <a
              href="https://www.linkedin.com/in/lois-coughlin-581150347"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN ↗
            </a>
            <a href="#top">BACK TO TOP ↑</a>
          </div>
        </section>
      </main>

      {/* Render the project panel only while a project is selected. */}
      {selected && (
        <div
          className="modal-backdrop"
          onMouseDown={(event) => {
            // Clicking the dark backdrop closes the panel, clicks inside do not.
            if (event.target === event.currentTarget) setSelected(null);
          }}
        >
          <section
            className="project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              className="close-button"
              onClick={() => setSelected(null)}
              aria-label="Close project"
            >
              CLOSE ×
            </button>
            <span className="index">
              PROJECT {selected.number} / {selected.type}
            </span>
            <h2 id="modal-title">{selected.title}</h2>

            {/* Shows project pictures, if not it shows a place holder*/}
            {selected.images?.length ? (
              <div className="project-gallery">
              {selected.images.map((image) => (
              <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              loading="lazy"
            />
          ))}
          </div>
         ) : (
          <div
         className={`project-visual ${selected.visual}`}
        aria-hidden="true"
        >
        <span>{selected.title}</span>      
        </div>
        )}

            <p className="modal-summary">{selected.summary}</p>
            <div className="modal-meta">
              <div>
                <span className="small-label">MY FOCUS</span>
                <p>{selected.role}</p>
              </div>
              <div>
                <span className="small-label">TOOLS &amp; METHODS</span>
                <p>{selected.tools}</p>
              </div>
            </div>
            <h3>What I worked on</h3>
            <ul>
              {selected.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </>
  );
}

// Mount the React application into the <div id="root"> in index.html.
createRoot(document.getElementById('root')).render(<App />);