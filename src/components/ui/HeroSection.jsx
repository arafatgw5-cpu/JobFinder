"use client";

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes"; // Theme Hook

/* ─────────────────────────────────────────
   PREMIUM ANIMATIONS:
   1. Word-by-word 3D reveal (perspective flip up)
   2. Floating orbs – organic drift loops
   3. Rotating conic-gradient search ring
   4. Scan-line shimmer on CTA button
   5. Counting stats with easeOut curve
   6. Card lift on hover
   7. Accent line grow
   8. Staggered fade-ups for every section
   9. Noise + grid texture atmosphere
   10. Breathing glow base
───────────────────────────────────────── */

const KEYFRAMES = `
  @keyframes revealWord {
    from { opacity:0; transform:translateY(60px) rotateX(-28deg); }
    to   { opacity:1; transform:translateY(0)    rotateX(0deg);   }
  }
  @keyframes lineGrow {
    from { transform:scaleX(0); }
    to   { transform:scaleX(1); }
  }
  @keyframes ping {
    0%,100% { transform:scale(1);   opacity:.8; }
    50%     { transform:scale(2.2); opacity:0;  }
  }
  @keyframes orbFloat1 {
    0%,100% { transform:translate(0,0)      scale(1);    }
    33%     { transform:translate(30px,-20px) scale(1.05); }
    66%     { transform:translate(-15px,25px) scale(.96); }
  }
  @keyframes orbFloat2 {
    0%,100% { transform:translate(0,0)       scale(1);    }
    33%     { transform:translate(-25px,20px) scale(1.04); }
    66%     { transform:translate(20px,-30px) scale(.97);  }
  }
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0);    }
  }
  @keyframes fadeIn {
    from { opacity:0; } to { opacity:1; }
  }
  @keyframes scanLine {
    0%   { left:-60%; }
    100% { left:160%; }
  }
  @keyframes glowBreath {
    0%,100% { opacity:.22; transform:translateX(-50%) scale(1);    }
    50%     { opacity:.36; transform:translateX(-50%) scale(1.09); }
  }
  @keyframes borderSpin {
    from { --a:0deg; }
    to   { --a:360deg; }
  }
`;

function useCountUp(target, duration, start) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(ease * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [start, target, duration]);
  return val;
}

const Hero = () => {
  // Theme Setup
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  
  // Default to dark mode before mounting to avoid flash
  const isDark = !mounted || resolvedTheme === "dark"; 

  const [keyword, setKeyword]     = useState("");
  const [location, setLocation]   = useState("");
  const [cardHover, setCardHover] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const ringRef = useRef(null);
  const rafRef  = useRef(null);
  const angleRef = useRef(0);

  const c1 = useCountUp(2.4, 1400, statsStarted);
  const c2 = useCountUp(18,  1200, statsStarted);
  const c3 = useCountUp(94,  1000, statsStarted);

  useEffect(() => {
    const spin = () => {
      angleRef.current = (angleRef.current + 1.2) % 360;
      if (ringRef.current) {
        ringRef.current.style.setProperty("--a", `${angleRef.current}deg`);
      }
      rafRef.current = requestAnimationFrame(spin);
    };
    rafRef.current = requestAnimationFrame(spin);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setStatsStarted(true), 1600);
    return () => clearTimeout(timer);
  }, []);

  const words = [
    { text: "Find",  delay: "0.18s", grad: false },
    { text: "Your",  delay: "0.28s", grad: false },
    { text: null },
    { text: "Dream", delay: "0.38s", grad: true  },
    { text: "Job",   delay: "0.48s", grad: true  },
    { text: null },
    { text: "Today", delay: "0.58s", grad: false },
  ];

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px 20px 72px",
        background: isDark ? "#030308" : "#f8fafc",
        transition: "background 0.3s ease",
        overflow: "hidden",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <style>{KEYFRAMES}</style>

      {/* Noise overlay */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: isDark ? 0.03 : 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* Grid */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none", opacity: isDark ? 0.028 : 0.05,
        backgroundImage: `linear-gradient(${isDark ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.2)"} .5px,transparent .5px),linear-gradient(90deg,${isDark ? "rgba(255,255,255,.8)" : "rgba(0,0,0,.2)"} .5px,transparent .5px)`,
        backgroundSize: "48px 48px",
        animation: "fadeIn 2s ease both",
      }} />

      {/* Orbs */}
      {[
        { w:600, h:600, top:"-160px", right:"-120px", left:"auto", bottom:"auto", color:"rgba(88,56,250,.26)", anim:"orbFloat1 12s ease-in-out infinite" },
        { w:480, h:480, bottom:"-200px", left:"-80px", top:"auto", right:"auto", color:"rgba(139,92,246,.18)", anim:"orbFloat2 15s ease-in-out infinite" },
        { w:280, h:280, top:"40%", left:"18%", right:"auto", bottom:"auto", color:"rgba(59,130,246,.1)", anim:"orbFloat1 18s 3s ease-in-out infinite" },
      ].map((o, i) => (
        <div key={i} style={{
          position:"absolute", width:o.w, height:o.h, borderRadius:"50%",
          background:`radial-gradient(circle,${o.color} 0%,transparent 70%)`,
          top:o.top, right:o.right, bottom:o.bottom, left:o.left,
          pointerEvents:"none", animation:o.anim,
        }} />
      ))}

      {/* Bottom glow */}
      <div style={{
        position:"absolute", bottom:"-60px", left:"50%", width:"700px", height:"300px",
        borderRadius:"50%", background: isDark ? "#3a18d8" : "#8b5cf6", filter:"blur(100px)", pointerEvents:"none",
        animation:"glowBreath 5s ease-in-out infinite",
      }} />

      {/* ── Content ── */}
      <div style={{ position:"relative", zIndex:10, display:"flex", flexDirection:"column", alignItems:"center", width:"100%", maxWidth:"820px" }}>

        {/* Badge */}
        <div
          style={{
            display:"inline-flex", alignItems:"center", gap:10, padding:"6px 16px 6px 8px",
            borderRadius:999, border:`1px solid ${isDark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)"}`,
            background: isDark ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)", backdropFilter:"blur(16px)",
            marginBottom:32, cursor:"default",
            animation:"fadeUp .6s .05s cubic-bezier(.22,1,.36,1) both",
            transition:"all .3s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "rgba(139,92,246,.5)";
            e.currentTarget.style.background  = "rgba(139,92,246,.08)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.08)";
            e.currentTarget.style.background  = isDark ? "rgba(255,255,255,.04)" : "rgba(0,0,0,.03)";
          }}
        >
          <div style={{
            position:"relative", width:24, height:24, borderRadius:"50%",
            background:"rgba(255,122,0,.1)", border:"1px solid rgba(255,122,0,.25)",
            display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0,
          }}>
            <span style={{
              position:"absolute", inset:3, borderRadius:"50%", background:"rgba(255,122,0,.5)",
              animation:"ping 1.6s ease-in-out infinite",
            }} />
            <span style={{ position:"relative", width:8, height:8, borderRadius:"50%", background:"#ff7a00" }} />
          </div>
          <span style={{ fontSize:10.5, fontWeight:600, letterSpacing:".18em", color: isDark ? "#a1a1aa" : "#52525b", textTransform:"uppercase" }}>
            50,000+ New Jobs This Month
          </span>
        </div>

        {/* Headline – word reveal */}
        <div style={{ perspective:1200, textAlign:"center", marginBottom:20 }}>
          {words.map((w, i) =>
            w.text === null ? <br key={i} style={{ lineHeight:.2 }} /> : (
              <span key={i} style={{ display:"inline-block", overflow:"hidden", verticalAlign:"bottom", margin:"0 5px" }}>
                <span style={{
                  display:"inline-block",
                  fontFamily:"'Syne', sans-serif",
                  fontWeight:900,
                  fontSize:"clamp(40px,5.5vw,64px)",
                  lineHeight:1.05,
                  letterSpacing:"-.03em",
                  color: w.grad ? "transparent" : (isDark ? "#fff" : "#09090b"),
                  ...(w.grad ? {
                    background:"linear-gradient(135deg,#c4b5fd 0%,#8b5cf6 45%,#4328eb 100%)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
                    backgroundClip:"text",
                  } : {}),
                  opacity:0,
                  animation:`revealWord .65s ${w.delay} cubic-bezier(.22,1,.36,1) forwards`,
                }}>
                  {w.text}
                </span>
              </span>
            )
          )}
        </div>

        {/* Accent line */}
        <div style={{
          width:80, height:2,
          background:"linear-gradient(90deg,#8b5cf6,#4328eb)",
          borderRadius:2, margin:"16px auto 28px",
          transformOrigin:"left",
          animation:"lineGrow .8s .9s cubic-bezier(.22,1,.36,1) forwards",
          transform:"scaleX(0)",
        }} />

        {/* Subtitle */}
        <p style={{
          fontSize:15, fontWeight:300, color: isDark ? "#71717a" : "#52525b", textAlign:"center",
          maxWidth:400, lineHeight:1.75, marginBottom:40,
          animation:"fadeUp .7s .7s cubic-bezier(.22,1,.36,1) both",
        }}>
          HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Search */}
        <div style={{ width:"100%", position:"relative", animation:"fadeUp .8s .85s cubic-bezier(.22,1,.36,1) both" }}>
          {/* Spinning conic ring */}
          <div ref={ringRef} style={{
            position:"absolute", inset:-1, borderRadius:18, overflow:"hidden", pointerEvents:"none",
            "--a":"0deg",
          }}>
            <div style={{
              position:"absolute", inset:0,
              background:`conic-gradient(from var(--a),transparent 60%,rgba(139,92,246,.65) 75%,rgba(88,56,250,.9) 85%,rgba(139,92,246,.65) 90%,transparent)`,
              WebkitMask:"linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)",
              WebkitMaskComposite:"xor",
              maskComposite:"exclude",
              padding:1,
              borderRadius:18,
            }} />
          </div>

          <div
            onMouseEnter={() => setCardHover(true)}
            onMouseLeave={() => setCardHover(false)}
            style={{
              position:"relative",
              display:"flex", alignItems:"stretch",
              background: isDark ? "rgba(10,10,16,.95)" : "rgba(255,255,255,.95)",
              border:`1px solid ${cardHover ? "rgba(139,92,246,.3)" : (isDark ? "rgba(255,255,255,.08)" : "rgba(0,0,0,.08)")}`,
              borderRadius:18, overflow:"hidden",
              backdropFilter:"blur(20px)",
              transform: cardHover ? "translateY(-3px)" : "translateY(0)",
              boxShadow: cardHover
                ? `0 0 0 1px rgba(139,92,246,.12),0 24px 70px ${isDark ? "rgba(0,0,0,.65)" : "rgba(0,0,0,.15)"},0 0 80px rgba(88,56,250,.1)`
                : `0 16px 50px ${isDark ? "rgba(0,0,0,.55)" : "rgba(0,0,0,.08)"}`,
              transition:"all .4s cubic-bezier(.22,1,.36,1)",
            }}
          >
            {/* Keyword field */}
            {[
              { value:keyword, set:setKeyword, ph:"Job title, skill or company", icon:"search", right:true },
              { value:location, set:setLocation, ph:"Location or Remote", icon:"pin", right:false },
            ].map(({ value, set, ph, icon, right }) => (
              <div key={ph} style={{
                flex:1, display:"flex", alignItems:"center", gap:10, padding:"0 18px",
                borderRight: right ? `1px solid ${isDark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)"}` : "none",
                minWidth:0,
              }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={isDark ? "#333340" : "#a1a1aa"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink:0 }}>
                  {icon === "search"
                    ? <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>
                    : <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>}
                </svg>
                <input
                  type="text"
                  value={value}
                  onChange={e => set(e.target.value)}
                  placeholder={ph}
                  style={{
                    background:"transparent", border:"none", outline:"none",
                    color: isDark ? "#fff" : "#09090b", width:"100%", fontSize:14,
                    fontFamily:"'Inter',sans-serif", padding:"20px 0",
                  }}
                />
              </div>
            ))}

            {/* Button */}
            <div style={{ padding:8 }}>
              <button
                style={{
                  position:"relative", display:"flex", alignItems:"center",
                  justifyContent:"center", gap:8, overflow:"hidden",
                  background:"linear-gradient(135deg,#7c3aed,#4328eb)",
                  color:"#fff", fontWeight:600, fontSize:13,
                  fontFamily:"'Inter',sans-serif",
                  padding:"14px 26px", borderRadius:12, border:"none",
                  cursor:"pointer", whiteSpace:"nowrap", height:"100%",
                  boxShadow:"0 6px 24px rgba(88,56,250,.45)",
                  transition:"transform .2s, box-shadow .2s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-1px)";
                  e.currentTarget.style.boxShadow = "0 10px 36px rgba(88,56,250,.6)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 24px rgba(88,56,250,.45)";
                }}
                onMouseDown={e => { e.currentTarget.style.transform = "scale(.97)"; }}
                onMouseUp={e   => { e.currentTarget.style.transform = "translateY(-1px)"; }}
              >
                {/* Scan-line shimmer */}
                <span style={{
                  position:"absolute", top:0, bottom:0, width:"60%",
                  background:"linear-gradient(90deg,transparent,rgba(255,255,255,.13),transparent)",
                  animation:"scanLine 2.6s 2s linear infinite",
                  pointerEvents:"none",
                }} />
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                Search Jobs
              </button>
            </div>
          </div>
        </div>

        {/* Trending */}
        <div style={{
          display:"flex", alignItems:"center", gap:8, marginTop:20,
          flexWrap:"wrap", justifyContent:"center",
          animation:"fadeUp .6s 1.1s ease both",
        }}>
          <span style={{ fontSize:12, color: isDark ? "#3f3f46" : "#71717a", fontWeight:500 }}>Trending</span>
          {["Product Designer","UI Engineering","DevOps Engineer"].map(tag => (
            <button
              key={tag}
              style={{
                display:"flex", alignItems:"center", gap:5,
                padding:"5px 12px", borderRadius:999,
                background: isDark ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)",
                border:`1px solid ${isDark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)"}`,
                color: isDark ? "#52525b" : "#71717a", fontSize:12,
                fontFamily:"'Inter',sans-serif", cursor:"pointer",
                transition:"all .25s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color       = isDark ? "#e2e8f0" : "#18181b";
                e.currentTarget.style.borderColor = "rgba(139,92,246,.3)";
                e.currentTarget.style.transform   = "translateY(-2px)";
                e.currentTarget.style.boxShadow   = "0 4px 16px rgba(88,56,250,.15)";
                e.currentTarget.style.background  = "rgba(139,92,246,.08)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color       = isDark ? "#52525b" : "#71717a";
                e.currentTarget.style.borderColor = isDark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)";
                e.currentTarget.style.transform   = "translateY(0)";
                e.currentTarget.style.boxShadow   = "none";
                e.currentTarget.style.background  = isDark ? "rgba(255,255,255,.03)" : "rgba(0,0,0,.03)";
              }}
            >
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="2.5">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
              </svg>
              {tag}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display:"flex", alignItems:"center", marginTop:48,
          border:`1px solid ${isDark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)"}`, borderRadius:16,
          background: isDark ? "rgba(255,255,255,.02)" : "rgba(0,0,0,.02)", backdropFilter:"blur(12px)",
          overflow:"hidden",
          animation:"fadeUp .7s 1.3s cubic-bezier(.22,1,.36,1) both",
        }}>
          {[
            { val:`${c1}M+`, lbl:"Active Candidates" },
            { val:`${c2}K+`, lbl:"Companies Hiring"  },
            { val:`${c3}%`,  lbl:"Placement Rate"    },
          ].map(({ val, lbl }, i) => (
            <div key={lbl} style={{
              flex:1, display:"flex", flexDirection:"column", alignItems:"center",
              padding:"20px 32px", gap:5,
              borderLeft: i > 0 ? `1px solid ${isDark ? "rgba(255,255,255,.06)" : "rgba(0,0,0,.06)"}` : "none",
            }}>
              <span style={{ fontFamily:"'Syne',sans-serif", fontSize:22, fontWeight:800, color: isDark ? "#fff" : "#09090b", letterSpacing:"-.02em" }}>
                {val}
              </span>
              <span style={{ fontSize:11, color: isDark ? "#3f3f46" : "#71717a", letterSpacing:".06em", textTransform:"uppercase", fontWeight:500 }}>
                {lbl}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;