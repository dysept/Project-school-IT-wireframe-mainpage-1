import React, { useEffect, useRef } from "react";

function ParticlesCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}

function KidScopeLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="18" r="18" fill="#FFCA28" />
        <circle cx="18" cy="18" r="12" fill="#FF7043" />
        <circle cx="18" cy="18" r="7" fill="#1565C0" />
        <circle cx="18" cy="18" r="3" fill="#FFFFFF" />
        <circle cx="11" cy="11" r="2.5" fill="#FFCA28" />
      </svg>
      <span
        style={{
          fontFamily: "'Nunito', 'Montserrat', 'Inter', sans-serif",
          fontWeight: 800,
          fontSize: "20px",
          color: "#FFFFFF",
          letterSpacing: "-0.3px",
        }}
      >
        Kid<span style={{ color: "#FFCA28" }}>Scope</span>
      </span>
    </div>
  );
}

function UkrainianFlag() {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="7" fill="#005BBB" />
      <rect y="7" width="20" height="7" fill="#FFD500" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 3C4.5 2.72386 4.72386 2.5 5 2.5H7.5C7.72086 2.5 7.91507 2.65291 7.96953 2.86779L8.96953 6.86779C9.0173 7.05785 8.94404 7.25741 8.78615 7.37172L7.09062 8.57344C7.91407 10.2428 9.25716 11.5859 10.9266 12.4094L12.1283 10.7138C12.2426 10.556 12.4421 10.4827 12.6322 10.5305L16.6322 11.5305C16.8471 11.5849 17 11.7791 17 12V14.5C17 14.7761 16.7761 15 16.5 15H15C8.64873 15 3.5 9.85127 3.5 3.5V2C3.5 1.72386 3.72386 1.5 4 1.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="8" r="4" stroke="white" strokeWidth="1.5" />
      <path d="M3 19C3 15.134 6.58172 12 11 12C15.4183 12 19 15.134 19 19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SunCharacter() {
  return (
    <div
      style={{
        position: "absolute",
        left: "-20px",
        bottom: "60px",
        width: "280px",
        height: "280px",
        zIndex: 1,
        animation: "float 6s ease-in-out infinite",
      }}
    >
      <svg viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#sun-shadow)">
          <circle cx="140" cy="150" r="90" fill="#FFCA28" />
          <circle cx="140" cy="150" r="82" fill="#FFD740" />
          {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 140 + 88 * Math.cos(rad);
            const y1 = 150 + 88 * Math.sin(rad);
            const x2 = 140 + 110 * Math.cos(rad);
            const y2 = 150 + 110 * Math.sin(rad);
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                stroke="#FFCA28" strokeWidth="8" strokeLinecap="round" />
            );
          })}
          <ellipse cx="124" cy="142" rx="10" ry="13" fill="#3E2723" />
          <ellipse cx="156" cy="142" rx="10" ry="13" fill="#3E2723" />
          <circle cx="127" cy="139" r="4" fill="white" />
          <circle cx="159" cy="139" r="4" fill="white" />
          <path d="M125 162 Q140 174 155 162" stroke="#3E2723" strokeWidth="4" strokeLinecap="round" fill="none" />
          <ellipse cx="115" cy="158" rx="8" ry="6" fill="#FFB300" opacity="0.7" />
          <ellipse cx="165" cy="158" rx="8" ry="6" fill="#FFB300" opacity="0.7" />
        </g>
        <defs>
          <filter id="sun-shadow" x="0" y="0" width="280" height="280" filterUnits="userSpaceOnUse">
            <feDropShadow dx="4" dy="8" stdDeviation="16" floodColor="#0D2A6E" floodOpacity="0.4" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function PinkShape() {
  return (
    <div
      style={{
        position: "absolute",
        right: "-30px",
        top: "80px",
        width: "260px",
        height: "300px",
        zIndex: 1,
        animation: "float 7s ease-in-out infinite 1s",
      }}
    >
      <svg viewBox="0 0 260 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#pink-shadow)">
          <ellipse cx="130" cy="150" rx="90" ry="110" fill="#F48FB1" />
          <ellipse cx="130" cy="150" rx="80" ry="98" fill="#F06292" />
          <ellipse cx="130" cy="150" rx="64" ry="78" fill="#EC407A" />
          <ellipse cx="115" cy="138" rx="10" ry="12" fill="#1A0030" />
          <ellipse cx="147" cy="138" rx="10" ry="12" fill="#1A0030" />
          <circle cx="118" cy="135" r="4" fill="white" />
          <circle cx="150" cy="135" r="4" fill="white" />
          <path d="M118 162 Q131 172 144 162" stroke="#1A0030" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <ellipse cx="107" cy="155" rx="7" ry="5" fill="#C2185B" opacity="0.7" />
          <ellipse cx="153" cy="155" rx="7" ry="5" fill="#C2185B" opacity="0.7" />
          <ellipse cx="80" cy="100" rx="20" ry="30"
            fill="#F48FB1"
            transform="rotate(-30 80 100)" />
          <ellipse cx="180" cy="100" rx="20" ry="30"
            fill="#F48FB1"
            transform="rotate(30 180 100)" />
        </g>
        <defs>
          <filter id="pink-shadow" x="0" y="0" width="260" height="300" filterUnits="userSpaceOnUse">
            <feDropShadow dx="4" dy="8" stdDeviation="16" floodColor="#0D2A6E" floodOpacity="0.4" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800;900&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-wrapper {
          font-family: 'Nunito', 'Inter', sans-serif;
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #0A1A6E 0%, #0D2B8A 30%, #1040B0 55%, #0A2070 80%, #060E4A 100%);
        }

        .nav-link {
          color: rgba(255,255,255,0.85);
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          white-space: nowrap;
          transition: color 0.2s;
          cursor: pointer;
        }
        .nav-link:hover { color: #FFFFFF; }

        .nav-icon-btn {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 10px;
          padding: 6px 8px;
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .nav-icon-btn:hover { background: rgba(255,255,255,0.2); }

        .cta-btn {
          background: linear-gradient(135deg, #FFCA28, #FFB300);
          color: #1A0A00;
          font-family: 'Nunito', sans-serif;
          font-size: 14px;
          font-weight: 800;
          border: none;
          border-radius: 50px;
          padding: 10px 22px;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 4px 16px rgba(255,179,0,0.4);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 22px rgba(255,179,0,0.55);
        }

        .cta-btn-hero {
          background: linear-gradient(135deg, #FFCA28, #FFB300);
          color: #1A0A00;
          font-family: 'Nunito', sans-serif;
          font-size: 18px;
          font-weight: 800;
          border: none;
          border-radius: 50px;
          padding: 16px 48px;
          cursor: pointer;
          white-space: nowrap;
          box-shadow: 0 6px 28px rgba(255,179,0,0.5);
          transition: transform 0.15s, box-shadow 0.15s;
          display: inline-block;
          margin-top: 36px;
        }
        .cta-btn-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 36px rgba(255,179,0,0.65);
        }
      `}</style>

      <div className="hero-wrapper">
        <ParticlesCanvas />

        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "8%",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(64,115,255,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "5%",
            right: "10%",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(130,80,255,0.15) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <nav
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 60px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(8px)",
          }}
        >
          <KidScopeLogo />

          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <a className="nav-link">Програми навчання</a>
            <a className="nav-link">Набір дітей</a>
            <a className="nav-link">Вартість навчання</a>
            <a className="nav-link">Курси</a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button className="nav-icon-btn" title="Phone">
              <PhoneIcon />
            </button>

            <button className="nav-icon-btn" style={{ gap: "7px" }}>
              <UkrainianFlag />
              <span style={{ color: "white", fontSize: "13px", fontWeight: 600 }}>UA</span>
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button className="nav-icon-btn" title="Profile">
              <ProfileIcon />
            </button>

            <button className="cta-btn">Підібрати навчання</button>
          </div>
        </nav>

        <div
          style={{
            position: "relative",
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "70px 60px 80px",
            minHeight: "calc(100vh - 73px)",
          }}
        >
          <SunCharacter />

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "700px",
              margin: "0 auto",
              zIndex: 5,
              position: "relative",
            }}
          >
            <h1
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "64px",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1.1,
                letterSpacing: "-1px",
                marginBottom: "32px",
                textShadow: "0 4px 24px rgba(0,0,0,0.35)",
                textWrap: "balance",
              } as React.CSSProperties}
            >
              Дитяча школа
              <br />
              програмування
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "60px",
                padding: "10px 24px",
                marginBottom: "28px",
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="16" cy="16" r="16" fill="#FFCA28" />
                <circle cx="16" cy="16" r="10" fill="#FF7043" />
                <circle cx="16" cy="16" r="6" fill="#1565C0" />
                <circle cx="16" cy="16" r="2.5" fill="#FFFFFF" />
                <circle cx="10" cy="10" r="2" fill="#FFCA28" />
              </svg>
              <div style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 900,
                    fontSize: "18px",
                    color: "#FFFFFF",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                  }}
                >
                  Kid<span style={{ color: "#FFCA28" }}>Scope</span>
                </div>
                <div
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 500,
                    fontSize: "11px",
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "3px",
                    textTransform: "lowercase",
                    marginTop: "-2px",
                  }}
                >
                  explore. innovate. lead.
                </div>
              </div>
            </div>

            <p
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.6,
                maxWidth: "520px",
                textShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              Змінюємо дитячий досуг с ігор, YouTube і TikTok
              <br />
              на програмування та розвиток
            </p>

            <button className="cta-btn-hero">Підібрати навчання</button>
          </div>

          <PinkShape />
        </div>
      </div>
    </>
  );
}
