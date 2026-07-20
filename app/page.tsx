"use client";

import Preloader from "./Preloader";

export default function Page() {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.getAttribute("href") === "#projects") {
      e.preventDefault();
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Preloader />
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=JetBrains+Mono:wght@400;700&family=Space+Grotesk:wght@400;500;600&display=swap');

        *{box-sizing:border-box;margin:0;padding:0}
        :root{
          --lime:#CCFF00;
          --black:#000000;
          --white:#FFFFFF;
          --shadow: 5px 5px 0 0 #000;
          --shadow-lg: 8px 8px 0 0 #000;
          --shadow-lime: 5px 5px 0 0 #CCFF00;
        }
        .port{font-family:'Space Grotesk',sans-serif;background:#fff;color:#000;overflow-x:hidden}
        .display{font-family:'Archivo Black',sans-serif;text-transform:uppercase;line-height:.9}
        .mono{font-family:'JetBrains Mono',monospace}
        .border-neo{border:4px solid #000}
        .shadow-neo{box-shadow:var(--shadow)}
        .shadow-neo-lg{box-shadow:var(--shadow-lg)}
        .shadow-lime{box-shadow:var(--shadow-lime)}

        /* NAV */
        .nav{display:flex;justify-content:space-between;align-items:center;padding:24px 40px;border-bottom:4px solid #000;background:#fff;position:sticky;top:0;z-index:100}
        .nav-brand{font-family:'JetBrains Mono',monospace;font-size:12px;text-transform:uppercase;letter-spacing:.15em;padding:8px 14px;background:var(--lime);border:4px solid #000;box-shadow:var(--shadow)}
        .nav-links{display:flex;gap:8px}
        .nav-link{width:36px;height:36px;border:4px solid #000;background:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:var(--shadow);transition:all .15s;font-size:14px;text-decoration:none;color:#000}
        .nav-link:hover{background:var(--lime);transform:translate(-2px,-2px);box-shadow:var(--shadow-lg)}

        /* HERO */
        .hero{padding:60px 40px 60px;display:flex;gap:48px;align-items:center;flex-wrap:wrap;border-bottom:4px solid #000;position:relative;overflow:hidden}
        .hero-bg{position:absolute;inset:0;opacity:.04;background-image:linear-gradient(#000 1px,transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px);background-size:48px 48px;pointer-events:none}
        .hero-left{flex:1;min-width:280px;position:relative;z-index:1}
        .available-badge{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:var(--lime);border:4px solid #000;box-shadow:var(--shadow);margin-bottom:28px;font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:.15em}
        .dot-pulse{width:7px;height:7px;border-radius:50%;background:#000;animation:pulse 1.5s infinite}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
        .hero-h1{font-family:'Archivo Black',sans-serif;font-size:clamp(52px,8vw,88px);text-transform:uppercase;line-height:.88;letter-spacing:-.02em;margin-bottom:16px}
        .hero-h1 .highlight{position:relative;display:inline-block}
        .hero-h1 .highlight::after{content:'';position:absolute;inset:-2px -4px;background:var(--lime);z-index:-1;transform:skewX(-3deg) scaleX(1.05)}
        .hero-h2{font-family:'Archivo Black',sans-serif;font-size:clamp(32px,5vw,58px);text-transform:uppercase;line-height:.9;letter-spacing:-.02em;margin-bottom:24px}
        .hero-desc{font-size:15px;color:#000;opacity:.65;line-height:1.65;max-width:440px;margin-bottom:32px}
        .ctas{display:flex;gap:12px;flex-wrap:wrap}
        .cta-primary{font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:.12em;padding:14px 28px;background:#000;color:var(--lime);border:4px solid #000;box-shadow:var(--shadow-lime);cursor:pointer;transition:all .15s;text-decoration:none}
        .cta-primary:hover{transform:translate(-2px,-2px);box-shadow:8px 8px 0 0 var(--lime)}
        .cta-secondary{font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:.12em;padding:14px 28px;background:var(--lime);color:#000;border:4px solid #000;box-shadow:var(--shadow);cursor:pointer;transition:all .15s;display:flex;align-items:center;gap:8px;text-decoration:none}
        .cta-secondary:hover{transform:translate(-2px,-2px);box-shadow:var(--shadow-lg)}

        /* Photo */
        .hero-photo{position:relative;z-index:1}
        .photo-frame{width:240px;height:300px;background:var(--lime);border:4px solid #000;box-shadow:var(--shadow-lg);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden}
        .photo-frame::before{content:'';font-family:'Archivo Black',sans-serif;font-size:80px;color:#000;opacity:.12;position:absolute;z-index:1}
        .profile-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:0}
        .photo-name{position:absolute;bottom:0;left:0;right:0;padding:16px;background:linear-gradient(transparent,rgba(0,0,0,.7))}
        .photo-name{z-index:2}
        .photo-name p{font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:.15em;color:#fff}
        .photo-name p:first-child{color:var(--lime)}
        .photo-shadow{position:absolute;inset:0;background:#000;transform:translate(10px,10px);z-index:-1}

        /* STATS BAR */
        .stats{background:#000;border-bottom:4px solid #000;display:flex}
        .stat-item{flex:1;padding:28px 32px;border-right:1px solid rgba(255,255,255,.08)}
        .stat-item:last-child{border-right:none}
        .stat-label{font-family:'JetBrains Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:.2em;color:rgba(255,255,255,.35);margin-bottom:8px}
        .stat-value{font-family:'Archivo Black',sans-serif;font-size:clamp(14px,2vw,20px);text-transform:uppercase;color:var(--lime);line-height:1.1}

        /* MARQUEE */
        .marquee-wrap{border-top:4px solid #000;border-bottom:4px solid #000;background:#000;padding:14px 0;overflow:hidden;cursor:default}
        .marquee-track{display:flex;width:max-content;animation:marquee 20s linear infinite}
        .marquee-track:hover{animation-play-state:paused}
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        .marquee-item{display:flex;align-items:center;padding:0 24px;white-space:nowrap}
        .marquee-text{font-family:'JetBrains Mono',monospace;font-size:13px;text-transform:uppercase;letter-spacing:.2em;color:#fff}
        .marquee-dot{color:var(--lime);margin-left:24px;font-size:18px}

        /* PROJECTS */
        .section{padding:64px 40px}
        .section-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:48px}
        .section-label{font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:.2em;color:rgba(0,0,0,.4);margin-bottom:10px}
        .section-title{font-family:'Archivo Black',sans-serif;font-size:clamp(40px,6vw,72px);text-transform:uppercase;line-height:.9}
        .section-icon{width:56px;height:56px;background:var(--lime);border:4px solid #000;box-shadow:var(--shadow);display:flex;align-items:center;justify-content:center;font-family:'Archivo Black',sans-serif;font-size:24px;flex-shrink:0}
        .projects-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px}

        /* PROJECT CARD */
        .card{border:4px solid #000;box-shadow:var(--shadow-lg);transition:all .2s;cursor:pointer;display:flex;flex-direction:column}
        .card:hover{transform:translate(-4px,-4px);box-shadow:12px 12px 0 0 #000}
        .card-white{background:#fff}
        .card-black{background:#000}
        .card-black:hover{box-shadow:12px 12px 0 0 var(--lime)}
        .card-top-bar{height:8px;background:var(--lime)}
        .card-black .card-top-bar{background:#000;border-bottom:4px solid rgba(255,255,255,.1)}
        .card-body{padding:28px 28px 24px;display:flex;flex-direction:column;flex:1}
        .card-header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px}
        .card-icon{width:52px;height:52px;display:flex;align-items:center;justify-content:center;font-size:22px;border:4px solid #000;box-shadow:var(--shadow)}
        .card-white .card-icon{background:#000}
        .card-black .card-icon{background:var(--lime)}
        .card-links{display:flex;gap:6px}
        .card-link{width:34px;height:34px;border:4px solid #000;display:flex;align-items:center;justify-content:center;font-size:13px;transition:all .15s;cursor:pointer}
        .card-white .card-link{background:#000;color:#fff}
        .card-black .card-link{background:var(--lime);color:#000}
        .card-link:hover{transform:scale(1.1)}
        .card-title{font-family:'Archivo Black',sans-serif;font-size:26px;text-transform:uppercase;line-height:.95;margin-bottom:4px}
        .card-white .card-title{color:#000}
        .card-black .card-title{color:var(--lime)}
        .card-sub{font-family:'JetBrains Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:.15em;margin-bottom:14px}
        .card-white .card-sub{color:rgba(0,0,0,.5)}
        .card-black .card-sub{color:rgba(204,255,0,.6)}
        .card-desc{font-size:13px;line-height:1.65;margin-bottom:20px;flex:1}
        .card-white .card-desc{color:rgba(0,0,0,.7)}
        .card-black .card-desc{color:rgba(255,255,255,.75)}
        .tags{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px}
        .tag{font-family:'JetBrains Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:.12em;padding:4px 10px;border:2px solid #000}
        .card-white .tag{background:#000;color:var(--lime)}
        .card-black .tag{background:var(--lime);color:#000}
        .card-cta{font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:.15em;display:flex;align-items:center;gap:8px;transition:gap .15s}
        .card-white .card-cta{color:#000}
        .card-black .card-cta{color:var(--lime)}
        .card:hover .card-cta{gap:16px}

        /* SKILLS */
        .skills-section{background:#000;padding:64px 40px;border-top:4px solid #000}
        .skills-section .section-title{color:#fff}
        .skills-section .section-label{color:rgba(255,255,255,.35)}
        .skills-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));border:4px solid rgba(255,255,255,.08)}
        .skill-col{padding:28px;border-right:4px solid rgba(255,255,255,.08);border-bottom:4px solid rgba(255,255,255,.08);transition:background .2s}
        .skill-col:hover{background:rgba(204,255,0,.05)}
        .skill-col-header{display:flex;align-items:center;gap:10px;margin-bottom:20px}
        .skill-icon{width:30px;height:30px;background:var(--lime);border:2px solid var(--lime);display:flex;align-items:center;justify-content:center;font-size:13px;flex-shrink:0}
        .skill-col-label{font-family:'JetBrains Mono',monospace;font-size:8px;text-transform:uppercase;letter-spacing:.15em;color:var(--lime);line-height:1.3}
        .skill-items{list-style:none;display:flex;flex-direction:column;gap:10px}
        .skill-item{font-family:'JetBrains Mono',monospace;font-size:12px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:8px;transition:color .2s}
        .skill-item::before{content:'';width:4px;height:4px;background:var(--lime);flex-shrink:0}
        .skill-col:hover .skill-item{color:rgba(255,255,255,.9)}

        /* EXPERIENCE */
        .exp-section{padding:64px 40px;border-top:4px solid #000;border-bottom:4px solid #000}
        .exp-card{border:4px solid #000;box-shadow:var(--shadow-lg);padding:40px;background:#fff}
        .exp-top{display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:16px;margin-bottom:28px}
        .exp-role{font-family:'Archivo Black',sans-serif;font-size:clamp(24px,4vw,38px);text-transform:uppercase;line-height:.95;margin-bottom:8px}
        .exp-meta{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
        .exp-company{font-size:16px;font-weight:600}
        .exp-period{font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:rgba(0,0,0,.45)}
        .exp-badge{padding:8px 16px;background:var(--lime);border:4px solid #000;box-shadow:var(--shadow);font-family:'JetBrains Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:.15em;flex-shrink:0}
        .exp-points{list-style:none;display:flex;flex-direction:column;gap:14px;margin-bottom:28px}
        .exp-point{display:flex;align-items:flex-start;gap:14px;font-size:14px;line-height:1.65;color:rgba(0,0,0,.72)}
        .exp-bullet{width:12px;height:12px;background:var(--lime);border:2px solid #000;flex-shrink:0;margin-top:4px}
        .exp-tags{display:flex;flex-wrap:wrap;gap:8px;padding-top:24px;border-top:4px solid #000}
        .exp-tag{font-family:'JetBrains Mono',monospace;font-size:9px;text-transform:uppercase;letter-spacing:.12em;padding:5px 12px;border:2px solid #000;background:#000;color:var(--lime)}

        /* CONTACT */
        .contact-section{background:var(--lime);padding:64px 40px;border-top:4px solid #000}
        .contact-inner{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:40px}
        .contact-h{font-family:'Archivo Black',sans-serif;font-size:clamp(40px,7vw,80px);text-transform:uppercase;line-height:.9}
        .contact-label{font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:.2em;color:rgba(0,0,0,.5);margin-bottom:12px}
        .contact-links{display:flex;flex-direction:column;gap:10px}
        .contact-email{font-family:'JetBrains Mono',monospace;font-size:11px;text-transform:uppercase;letter-spacing:.1em;padding:16px 28px;background:#000;color:var(--lime);border:4px solid #000;box-shadow:var(--shadow);cursor:pointer;display:flex;align-items:center;gap:10px;text-decoration:none;transition:all .15s}
        .contact-email:hover{transform:translate(-2px,-2px);box-shadow:var(--shadow-lg)}
        .contact-socials{display:flex;gap:8px}
        .contact-social{flex:1;padding:14px;border:4px solid #000;background:#fff;display:flex;align-items:center;justify-content:center;gap:6px;font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:.1em;cursor:pointer;text-decoration:none;color:#000;box-shadow:var(--shadow);transition:all .15s}
        .contact-social:hover{transform:translate(-2px,-2px);box-shadow:var(--shadow-lg)}

        /* FOOTER */
        .footer{background:#000;padding:24px 40px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px}
        .footer-text{font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:.1em;color:rgba(255,255,255,.3)}

        /* HIRE ME BADGE */
        .hire-badge-container{display:flex;justify-content:flex-end;padding:0 40px;background:#fff;border-bottom:2px dashed rgba(0,0,0,.1)}
        .hire-badge{display:flex;align-items:center;gap:12px;padding:10px 0;cursor:pointer}
        .hire-ring{width:68px;height:68px;position:relative;flex-shrink:0}
        .hire-ring svg{animation:spin-slow 8s linear infinite}
        @keyframes spin-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        .hire-center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
        .hire-dot{width:32px;height:32px;background:var(--lime);border:4px solid #000;box-shadow:var(--shadow);display:flex;align-items:center;justify-content:center}
        .hire-label{font-family:'JetBrains Mono',monospace;font-size:10px;text-transform:uppercase;letter-spacing:.15em;color:rgba(0,0,0,.5)}

        /* RESPONSIVE DESIGN MEDIA QUERIES */
        @media (max-width: 1024px) {
          .hero {
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 48px 20px;
          }
          .hero-left {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 24px;
          }
          .hero-desc {
            max-width: 100%;
          }
          .ctas {
            justify-content: center;
            width: 100%;
          }
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .skill-col {
            border-right: 4px solid rgba(255,255,255,.08) !important;
            border-bottom: 4px solid rgba(255,255,255,.08) !important;
          }
          .skill-col:nth-child(2n) {
            border-right: none !important;
          }
          .skill-col:nth-child(n+3) {
            border-bottom: none !important;
          }
        }

        @media (max-width: 768px) {
          .nav {
            padding: 16px 20px;
          }
          .section {
            padding: 48px 20px;
          }
          .skills-section {
            padding: 48px 20px;
          }
          .exp-section {
            padding: 48px 20px;
          }
          .contact-section {
            padding: 48px 20px;
          }
          .footer {
            padding: 20px 20px;
            flex-direction: column;
            gap: 12px;
            text-align: center;
            justify-content: center;
          }
          .hire-badge-container {
            padding: 0 20px;
          }
          .hero-h1 {
            font-size: clamp(38px, 9vw, 56px);
          }
          .hero-h2 {
            font-size: clamp(26px, 7vw, 40px);
          }
          .marquee-text {
            font-size: 11px;
          }
          .marquee-dot {
            margin-left: 16px;
            font-size: 14px;
          }
          .marquee-item {
            padding: 0 16px;
          }
          .projects-grid {
            grid-template-columns: 1fr;
          }
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-col {
            border-right: none !important;
            border-bottom: 4px solid rgba(255,255,255,.08) !important;
          }
          .skill-col:last-child {
            border-bottom: none !important;
          }
          .exp-card {
            padding: 24px;
          }
          .contact-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .contact-links {
            width: 100%;
            align-items: center;
          }
          .contact-socials {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hire-badge-container {
            justify-content: center;
          }
          .hero-h1 {
            font-size: clamp(32px, 12vw, 42px);
          }
          .hero-h2 {
            font-size: clamp(22px, 9vw, 30px);
          }
          .ctas {
            flex-direction: column;
            width: 100%;
            align-items: stretch;
          }
          .cta-primary, .cta-secondary {
            display: flex;
            justify-content: center;
            text-align: center;
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>

      <div className="port">
        {/* Hire Me inline (since no fixed) */}
        <div className="hire-badge-container">
          <div className="hire-badge" onClick={() => (window.location.href = "mailto:varun@example.com") }>
            <span className="hire-label">✉ Open to opportunities</span>
            <div className="hire-ring">
              <svg viewBox="0 0 68 68" width="68" height="68">
                <defs>
                  <path id="cp" d="M34,34 m-24,0 a24,24 0 1,1 48,0 a24,24 0 1,1 -48,0" />
                </defs>
                <text fill="#000" fontFamily="JetBrains Mono,monospace" fontSize="7" fontWeight="700" letterSpacing="2" style={{ textTransform: "uppercase" }}>
                  <textPath href="#cp" startOffset="0%">HIRE ME • HIRE ME • HIRE ME •</textPath>
                </text>
              </svg>
              <div className="hire-center"><div className="hire-dot" style={{ fontSize: "12px" }}>↗</div></div>
            </div>
          </div>
        </div>

        {/* NAV */}
        <nav className="nav">
          <span className="nav-brand">VL.DEV</span>
          <div className="nav-links">
            <a href="https://github.com/varunlikhitkar" target="_blank" rel="noopener noreferrer" className="nav-link" title="GitHub">⌥</a>
            <a href="https://www.linkedin.com/in/varun-likhitkar-762067286/" target="_blank" rel="noopener noreferrer" className="nav-link" title="LinkedIn">in</a>
            <a href="mailto:varun@example.com" className="nav-link" title="Email">@</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hero">
          <div className="hero-bg"></div>
          <div className="hero-left">
            <div className="available-badge"><span className="dot-pulse"></span>Available for Opportunities</div>
            <h1 className="hero-h1">GET <span className="highlight">YOUR</span></h1>
            <h2 className="hero-h2">AI ENGINEER</h2>
            <p className="hero-desc">Maximizing development efficiency through an extensive ecosystem of modern AI tools. Specializing in LLM fine-tuning, multimodal GenAI, and autonomous AI orchestration.</p>
            <div className="ctas">
              <a href="#projects" className="cta-primary" onClick={scrollToProjects}>View Projects</a>
              <a href="https://drive.google.com/file/d/1hrWaIoOCVbZJC7_LH6mA3rLV7eM6cMyz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cta-secondary">⬇ Resume</a>
            </div>
          </div>
          <div className="hero-photo">
            <div className="photo-frame">
              <img className="profile-photo" src="/varun-photo.jpg" alt="Varun Likhitkar" />
              <div className="photo-name">
                <p>Varun Likhitkar</p>
                <p style={{ color: "rgba(255,255,255,.65)" }}>AI Engineer</p>
              </div>
            </div>
            <div className="photo-shadow"></div>
          </div>
        </section>

        {/* STATS BAR */}
        <div className="stats">
          <div className="stat-item"><div className="stat-label">Specialization</div><div className="stat-value">AI/ML Specialist</div></div>
          <div className="stat-item"><div className="stat-label">Experience</div><div className="stat-value">Internship: Semester Tech</div></div>
          <div className="stat-item"><div className="stat-label">Education</div><div className="stat-value">B.Tech CSE — AIML</div></div>
        </div>

        {/* MARQUEE */}
        <div className="marquee-wrap" title="Hover to pause">
          <div className="marquee-track" id="marquee">
            <span className="marquee-item"><span className="marquee-text">Python</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">DeepSeek R1</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">LLaMA</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">Gemma 3.4</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">n8n</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">Flux</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">ElevenLabs</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">PyTorch</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">Python</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">DeepSeek R1</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">LLaMA</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">Gemma 3.4</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">n8n</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">Flux</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">ElevenLabs</span><span className="marquee-dot">✦</span></span>
            <span className="marquee-item"><span className="marquee-text">PyTorch</span><span className="marquee-dot">✦</span></span>
          </div>
        </div>

        {/* PROJECTS */}
        <section className="section" id="projects">
          <div className="section-header">
            <div>
              <div className="section-label">Selected Work</div>
              <div className="section-title">PROJECTS</div>
            </div>
            <div className="section-icon">→</div>
          </div>
          <div className="projects-grid">
            {/* Card 1 — Ovyis AI */}
            <div className="card card-white" onClick={() => {}}>
              <div className="card-top-bar" style={{ background: "var(--lime)" }}></div>
              <div className="card-body">
                <div className="card-header">
                  <div className="card-icon" style={{ fontSize: "22px" }}>🤖</div>
                  <div className="card-links">
                    <div className="card-link">⌥</div>
                    <div className="card-link">↗</div>
                  </div>
                </div>
                <div className="card-title">Ovyis AI</div>
                <div className="card-sub">Personal AI Platform</div>
                <div className="card-desc">Engineered a hybrid personal AI platform deploying local LLMs for secure, private task management. Architected a local WLAN deployment model for seamless multi-device accessibility, and integrated global cloud infrastructure for remote access — balancing local data privacy with continuous availability.</div>
                <div className="tags">
                  <span className="tag">Python</span><span className="tag">Local LLMs</span><span className="tag">WLAN</span><span className="tag">Cloud Integration</span>
                </div>
                <div className="card-cta">View Project <span>→</span></div>
              </div>
            </div>
            {/* Card 2 — AirTouch */}
            <div className="card card-black" onClick={() => {}}>
              <div className="card-top-bar" style={{ background: "#000", borderBottom: "3px solid rgba(255,255,255,.1)" }}></div>
              <div className="card-body">
                <div className="card-header">
                  <div className="card-icon" style={{ fontSize: "22px" }}>✋</div>
                  <div className="card-links">
                    <div className="card-link">⌥</div>
                    <div className="card-link">↗</div>
                  </div>
                </div>
                <div className="card-title">AirTouch</div>
                <div className="card-sub">AI Gesture-Controlled Virtual Mouse</div>
                <div className="card-desc">Built an AI-based gesture control system using computer vision and MediaPipe for real-time mouse interaction. Added multi-hand tracking and motion smoothing for precise cursor control, drag-and-drop, and zoom actions. Packaged the Python application as a Windows executable for easy deployment.</div>
                <div className="tags">
                  <span className="tag">Python</span><span className="tag">MediaPipe</span><span className="tag">OpenCV</span><span className="tag">PyAutoGUI</span>
                </div>
                <div className="card-cta">View Project <span>→</span></div>
              </div>
            </div>
            {/* Card 3 — Saha Traditions */}
            <div className="card card-white" onClick={() => {}}>
              <div className="card-top-bar" style={{ background: "var(--lime)" }}></div>
              <div className="card-body">
                <div className="card-header">
                  <div className="card-icon" style={{ fontSize: "22px" }}>🛍️</div>
                  <div className="card-links">
                    <div className="card-link">⌥</div>
                    <div className="card-link">↗</div>
                  </div>
                </div>
                <div className="card-title">Saha Traditions</div>
                <div className="card-sub">Fashion E-Commerce Website</div>
                <div className="card-desc">Built a fashion e-commerce website for Saha Traditions, a seller of salwar suits and sarees. Delivered a smooth shopping experience for browsing and showcasing ethnic wear collections, with a fully responsive client site to strengthen online presence and support sales.</div>
                <div className="tags">
                  <span className="tag">Next.js</span><span className="tag">Tailwind CSS</span><span className="tag">Responsive Design</span><span className="tag">E-Commerce</span>
                </div>
                <div className="card-cta">View Project <span>→</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <div className="skills-section">
          <div className="section-label">Technical Arsenal</div>
          <div className="section-title" style={{ color: "#fff", marginBottom: "40px" }}>SKILLS</div>
          <div className="skills-grid">
            <div className="skill-col">
              <div className="skill-col-header"><div className="skill-icon">🧠</div><div className="skill-col-label">LLMs &amp;<br />Fine-Tuning</div></div>
              <ul className="skill-items">
                <li className="skill-item">DeepSeek R1</li><li className="skill-item">Gemma 3.4</li><li className="skill-item">LLaMA 3.1</li><li className="skill-item">LoRA / QLoRA</li><li className="skill-item">PEFT</li><li className="skill-item">Unsloth</li>
              </ul>
            </div>
            <div className="skill-col">
              <div className="skill-col-header"><div className="skill-icon">⚡</div><div className="skill-col-label">Multimodal<br />GenAI</div></div>
              <ul className="skill-items">
                <li className="skill-item">Flux (Image)</li><li className="skill-item">Kling (Video)</li><li className="skill-item">ElevenLabs TTS</li><li className="skill-item">Whisper STT</li><li className="skill-item">ComfyUI</li><li className="skill-item">SDXL</li>
              </ul>
            </div>
            <div className="skill-col">
              <div className="skill-col-header"><div className="skill-icon">🔧</div><div className="skill-col-label">AI<br />Orchestration</div></div>
              <ul className="skill-items">
                <li className="skill-item">n8n</li><li className="skill-item">LangChain</li><li className="skill-item">OpenAI Codex</li><li className="skill-item">AutoGen</li><li className="skill-item">CrewAI</li><li className="skill-item">FastAPI</li>
              </ul>
            </div>
            <div className="skill-col" style={{ borderRight: "none" }}>
              <div className="skill-col-header"><div className="skill-icon">💻</div><div className="skill-col-label">Core<br />Engineering</div></div>
              <ul className="skill-items">
                <li className="skill-item">Python</li><li className="skill-item">PyTorch</li><li className="skill-item">OpenCV</li><li className="skill-item">MediaPipe</li><li className="skill-item">Git</li><li className="skill-item">Docker</li>
              </ul>
            </div>
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="exp-section">
          <div className="section-label">Work History</div>
          <div className="section-title" style={{ marginBottom: "40px" }}>EXPERIENCE</div>
          <div className="exp-card">
            <div className="exp-top">
              <div>
                <div className="exp-role">AI Engineer Intern</div>
                <div className="exp-meta">
                  <span className="exp-company">Semester Tech</span>
                  <span style={{ width: "4px", height: "4px", background: "rgba(0,0,0,.3)", borderRadius: "50%", display: "inline-block" }}></span>
                  <span className="exp-period">Apr – Aug 2025</span>
                </div>
              </div>
              <div className="exp-badge">Current Role</div>
            </div>
            <ul className="exp-points">
              <li className="exp-point"><span className="exp-bullet"></span>Fine-tuned Gemma 3.4 and DeepSeek R1 using LoRA/QLoRA adapters on domain-specific datasets, achieving 23% improvement in task-specific accuracy.</li>
              <li className="exp-point"><span className="exp-bullet"></span>Built multimodal GenAI pipelines integrating Flux image generation and Kling video synthesis for content automation workflows.</li>
              <li className="exp-point"><span className="exp-bullet"></span>Designed and deployed n8n-based AI orchestration systems, reducing manual workflow time by 60%.</li>
              <li className="exp-point"><span className="exp-bullet"></span>Developed speech-to-speech AI assistant prototypes using Whisper ASR and ElevenLabs TTS with sub-500ms response latency.</li>
            </ul>
            <div className="exp-tags">
              <span className="exp-tag">Gemma 3.4</span><span className="exp-tag">DeepSeek R1</span><span className="exp-tag">LoRA</span><span className="exp-tag">n8n</span><span className="exp-tag">Flux</span><span className="exp-tag">Kling</span><span className="exp-tag">ElevenLabs</span><span className="exp-tag">Python</span>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="contact-section">
          <div className="contact-inner">
            <div>
              <div className="contact-label">Let&apos;s build something</div>
              <div className="contact-h">GET IN<br />TOUCH.</div>
            </div>
            <div className="contact-links">
              <a href="mailto:varunlikhitkar@gmail.com" className="contact-email">@ varunlikhitkar@gmail.com</a>
              <div className="contact-socials">
                <a href="https://github.com/varunlikhitkar" target="_blank" rel="noopener noreferrer" className="contact-social">⌥ GitHub</a>
                <a href="https://www.linkedin.com/in/varun-likhitkar-762067286/" target="_blank" rel="noopener noreferrer" className="contact-social">in LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="footer">
          <span className="footer-text">© 2025 Varun Likhitkar</span>
          <span className="footer-text">Next.js · Tailwind CSS · Framer Motion</span>
        </div>
      </div>
    </>
  );
}
