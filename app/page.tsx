"use client";
import { useState, useEffect } from "react";

const FloatingOrb = ({ size, color, top, left, delay }: { size: string; color: string; top: string; left: string; delay: number }) => (
  <div
    style={{
      position: "absolute",
      width: size,
      height: size,
      borderRadius: "50%",
      background: color,
      top,
      left,
      filter: "blur(60px)",
      opacity: 0.35,
      animation: `float ${3 + delay}s ease-in-out infinite alternate`,
      animationDelay: `${delay}s`,
    }}
  />
);

const FeatureCard = ({ icon, title, desc, delay }: { icon: string; title: string; desc: string; delay: string }) => (
  <div
    style={{
      background: "rgba(255,255,255,0.07)",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: "20px",
      padding: "28px 24px",
      backdropFilter: "blur(12px)",
      animation: `slideUp 0.6s ease forwards`,
      animationDelay: delay,
      opacity: 0,
      transform: "translateY(30px)",
    }}
  >
    <div style={{ fontSize: "40px", marginBottom: "14px" }}>{icon}</div>
    <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 700, marginBottom: "8px", fontFamily: "'Nunito', sans-serif" }}>{title}</h3>
    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif" }}>{desc}</p>
  </div>
);

const StatBadge = ({ value, label }: { value: string; label: string }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "32px", fontWeight: 900, color: "#fff", fontFamily: "'Nunito', sans-serif", lineHeight: 1 }}>{value}</div>
    <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)", marginTop: "4px", fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.5px" }}>{label}</div>
  </div>
);

const APK_URL = "https://pylknjkzuhtyrgzvomfc.supabase.co/storage/v1/object/public/files/app-debug.apk"; // <-- APK linkini shu yerga qo'y

export default function GreenTechHorizonsLanding() {
  const [downloaded, setDownloaded] = useState(false);
  const [particles, setParticles] = useState<{id: number; x: number; y: number; size: number; delay: number; speed: number}[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      delay: Math.random() * 4,
      speed: Math.random() * 3 + 2,
    }));
    setParticles(p);
  }, []);

  const handleDownload = () => {
    setDownloaded(true);
    const link = document.createElement("a");
    link.href = APK_URL;
    link.download = "GreenTechHorizons.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        @keyframes float {
          from { transform: translateY(0px) scale(1); }
          to   { transform: translateY(-30px) scale(1.05); }
        }
        @keyframes slideUp {
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(82,183,136,0.4); }
          50% { transform: scale(1.03); box-shadow: 0 0 0 18px rgba(82,183,136,0); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes particleDrift {
          0%   { transform: translateY(0) rotate(0deg); opacity: 0.6; }
          100% { transform: translateY(-120vh) rotate(360deg); opacity: 0; }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-12px) rotate(3deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .btn-download {
          display: flex; align-items: center; justify-content: center; gap: 12px;
          background: linear-gradient(135deg, #52b788, #2d6a4f);
          color: #ffffff;
          font-family: 'Nunito', sans-serif;
          font-size: 18px; font-weight: 900;
          padding: 20px 48px;
          border-radius: 100px;
          border: none; cursor: pointer;
          animation: pulse 2.5s infinite;
          transition: all 0.3s;
          width: 100%; max-width: 360px;
          letter-spacing: 0.3px;
          position: relative;
          overflow: hidden;
        }
        .btn-download::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        .btn-download:hover { transform: scale(1.05) !important; filter: brightness(1.1); }
        .btn-download.done {
          background: linear-gradient(135deg, #95d5b2, #52b788);
          animation: none;
        }

        .screen-mockup {
          animation: logoFloat 4s ease-in-out infinite;
        }

        html, body { height: 100%; }
      `}</style>

      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #071a0f 0%, #0d2b1a 40%, #0a1f2e 100%)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'DM Sans', sans-serif",
      }}>

        {/* Background orbs */}
        <FloatingOrb size="500px" color="#2d6a4f" top="-150px" left="-100px" delay={0} />
        <FloatingOrb size="400px" color="#1b4332" top="30%" left="60%" delay={1.5} />
        <FloatingOrb size="350px" color="#52b788" top="70%" left="-80px" delay={0.8} />
        <FloatingOrb size="300px" color="#0ea5e9" top="10%" left="70%" delay={2} />

        {/* Floating particles */}
        {particles.map(p => (
          <div key={p.id} style={{
            position: "absolute",
            left: `${p.x}%`,
            bottom: 0,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: "rgba(149,213,178,0.6)",
            animation: `particleDrift ${p.speed + 4}s linear infinite`,
            animationDelay: `${p.delay}s`,
          }} />
        ))}

        <div style={{
          position: "relative", zIndex: 10,
          maxWidth: "480px",
          margin: "0 auto",
          padding: "0 20px 60px",
          animation: "fadeIn 0.8s ease forwards",
        }}>

          {/* Top bar */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "20px 0",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "8px",
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: "10px",
                background: "linear-gradient(135deg, #52b788, #2d6a4f)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "18px",
              }}>🌿</div>
              <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", fontFamily: "'Nunito', sans-serif", fontWeight: 600 }}>
                GreenTech Horizons
              </span>
            </div>
            <div style={{
              background: "rgba(82,183,136,0.15)",
              border: "1px solid rgba(82,183,136,0.4)",
              borderRadius: "100px",
              padding: "5px 14px",
              fontSize: "12px", color: "#52b788",
              fontWeight: 600, fontFamily: "'Nunito', sans-serif",
            }}>
              ● LIVE
            </div>
          </div>

          {/* Hero App Mockup */}
          <div style={{ textAlign: "center", padding: "32px 0 20px" }}>
            <div className="screen-mockup" style={{
              display: "inline-flex", flexDirection: "column", alignItems: "center",
              background: "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.04))",
              border: "1.5px solid rgba(255,255,255,0.2)",
              borderRadius: "32px",
              padding: "24px 28px 20px",
              backdropFilter: "blur(20px)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}>
              {/* Fake phone screen */}
              <div style={{
                width: 160, height: 280,
                background: "linear-gradient(180deg, #0d2b1a 0%, #071a0f 100%)",
                borderRadius: "24px",
                border: "3px solid rgba(255,255,255,0.1)",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
              }}>
                {/* Status bar */}
                <div style={{ background: "#071a0f", height: "22px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 12px" }}>
                  <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.6)", fontFamily: "monospace" }}>9:41</span>
                  <div style={{ display: "flex", gap: "4px" }}>
                    {[4,6,8,10].map(h => <div key={h} style={{ width: 3, height: h, background: "rgba(255,255,255,0.5)", borderRadius: 2 }} />)}
                  </div>
                </div>
                {/* App header */}
                <div style={{ padding: "14px 14px 8px", background: "linear-gradient(180deg, #1b4332, transparent)" }}>
                  <div style={{ fontSize: "11px", fontWeight: 800, color: "#52b788", fontFamily: "'Nunito', sans-serif" }}>GreenTech Horizons</div>
                  <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Active Contests →</div>
                </div>
                {/* Contest card */}
                <div style={{ margin: "8px 10px", background: "rgba(82,183,136,0.12)", borderRadius: "12px", padding: "10px", border: "1px solid rgba(82,183,136,0.25)" }}>
                  <div style={{ fontSize: "9px", color: "#52b788", fontWeight: 700, marginBottom: 6 }}>🌳 TREE PLANTING</div>
                  <div style={{ fontSize: "10px", color: "#fff", fontWeight: 600, marginBottom: 8 }}>Chirchiq Daryosi Tozalash</div>
                  {["📍 Toshkent", "⏱ 3 kun qoldi", "🏅 150 ball"].map((opt, i) => (
                    <div key={i} style={{
                      background: i === 0 ? "rgba(82,183,136,0.2)" : "rgba(255,255,255,0.06)",
                      border: `1px solid ${i === 0 ? "rgba(82,183,136,0.4)" : "rgba(255,255,255,0.1)"}`,
                      borderRadius: "8px", padding: "4px 8px",
                      fontSize: "9px", color: i === 0 ? "#95d5b2" : "rgba(255,255,255,0.6)",
                      marginBottom: 4, fontWeight: i === 0 ? 700 : 400,
                    }}>{opt}</div>
                  ))}
                </div>
                {/* Points bar */}
                <div style={{ margin: "6px 10px", display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{ width: "65%", height: "100%", background: "linear-gradient(90deg, #52b788, #95d5b2)", borderRadius: 4 }} />
                  </div>
                  <span style={{ fontSize: "9px", color: "#52b788", fontWeight: 700 }}>320 ball</span>
                </div>
                {/* Bottom nav */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#071a0f", height: 36, display: "flex", justifyContent: "space-around", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  {["🏠", "🔍", "🔔", "👤"].map((ic, i) => (
                    <div key={i} style={{ fontSize: i === 0 ? "14px" : "12px", opacity: i === 0 ? 1 : 0.4 }}>{ic}</div>
                  ))}
                </div>
              </div>

              {/* App name below mockup */}
              <div style={{ marginTop: 16, textAlign: "center" }}>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontFamily: "'DM Sans', sans-serif" }}>AVAILABLE NOW</div>
                <div style={{ display: "flex", gap: 6, marginTop: 6, justifyContent: "center" }}>
                  {["Android"].map(p => (
                    <span key={p} style={{
                      background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                      borderRadius: "6px", padding: "3px 10px", fontSize: "10px", color: "rgba(255,255,255,0.7)",
                      fontFamily: "'Nunito', sans-serif", fontWeight: 600,
                    }}>{p}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main headline */}
          <div style={{ textAlign: "center", padding: "28px 0 0" }}>
            <div style={{
              display: "inline-block",
              background: "linear-gradient(135deg, rgba(82,183,136,0.15), rgba(27,67,50,0.15))",
              border: "1px solid rgba(82,183,136,0.3)",
              borderRadius: "100px", padding: "6px 20px",
              fontSize: "12px", color: "#52b788",
              fontFamily: "'Nunito', sans-serif", fontWeight: 700,
              letterSpacing: "1px", marginBottom: "20px",
            }}>
              🌿 ECO VOLUNTEER PLATFORM
            </div>

            <h1 style={{
              fontSize: "clamp(36px, 9vw, 50px)",
              fontWeight: 900,
              fontFamily: "'Nunito', sans-serif",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              background: "linear-gradient(135deg, #ffffff 0%, #95d5b2 50%, #52b788 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "18px",
            }}>
              Eco Contestlarga<br />Qo'shil, O'zgarish Qil! 🌍
            </h1>

            <p style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "16px",
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
              maxWidth: "360px",
              margin: "0 auto 32px",
            }}>
              <strong style={{ color: "rgba(255,255,255,0.9)" }}>GreenTech Horizons</strong> — volontyorlar va ekologik tashkilotlarni bog'lovchi platforma. Contestlarda qatnash, ball to'pla, sertifikat ol!
            </p>

            {/* Stats */}
            <div style={{
              display: "flex", justifyContent: "center", gap: "40px",
              padding: "20px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              marginBottom: "36px",
            }}>
              <StatBadge value="1K+" label="Volontyorlar" />
              <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
              <StatBadge value="200+" label="Contestlar" />
              <div style={{ width: 1, background: "rgba(255,255,255,0.1)" }} />
              <StatBadge value="50+" label="Tashkilotlar" />
            </div>

            {/* Download button */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px" }}>
              <button className={`btn-download ${downloaded ? "done" : ""}`} onClick={handleDownload}>
                {downloaded ? (
                  <><span style={{ fontSize: "22px" }}>✅</span> Yuklanmoqda!</>
                ) : (
                  <><span style={{ fontSize: "22px" }}>📲</span> GreenTech Horizons Yuklab Ol</>
                )}
              </button>
              <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', sans-serif" }}>
                Bepul • Reklamasiz • Android
              </span>
            </div>
          </div>

          {/* Features */}
          <div style={{ marginTop: "52px" }}>
            <h2 style={{
              fontSize: "22px", fontWeight: 800,
              color: "rgba(255,255,255,0.9)",
              fontFamily: "'Nunito', sans-serif",
              textAlign: "center", marginBottom: "24px",
              letterSpacing: "-0.5px",
            }}>Nima uchun GreenTech? 🌱</h2>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
              <FeatureCard icon="🏆" title="Eco Contestlar" desc="Daryo tozalash, daraxt ekish va boshqa eco tadbirlarga qo'shil." delay="0.1s" />
              <FeatureCard icon="🎖️" title="Sertifikatlar" desc="Har bir muvaffaqiyatli contest uchun rasmiy sertifikat ol." delay="0.2s" />
              <FeatureCard icon="📊" title="Profil & Ball" desc="Ballaringni ko'r, tarixingni kuzat, top volontyor bo'l." delay="0.3s" />
              <FeatureCard icon="🔔" title="Yangi Contestlar" desc="Shahringizdagi eng so'nggi eco tadbirlardan xabardor bo'l." delay="0.4s" />
            </div>
          </div>

          {/* For Organizations section */}
          <div style={{
            marginTop: "40px",
            background: "linear-gradient(135deg, rgba(27,67,50,0.4), rgba(82,183,136,0.1))",
            border: "1px solid rgba(82,183,136,0.35)",
            borderRadius: "24px",
            padding: "28px 24px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "36px", marginBottom: "12px" }}>🏢</div>
            <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: 800, fontFamily: "'Nunito', sans-serif", marginBottom: "10px" }}>Tashkilotlar uchun</h3>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "14px", lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: "20px" }}>
              Contest yarating, volontyorlarni boshqaring, topshiriqlarni baholang va ekologik faoliyatingizni kuchaytiring.
            </p>
            <button style={{
              background: "rgba(45,106,79,0.4)", border: "1px solid rgba(82,183,136,0.5)",
              color: "#95d5b2", padding: "12px 28px", borderRadius: "12px",
              fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "14px",
              cursor: "pointer", transition: "all 0.3s",
            }}>
              Tashkilot sifatida ro'yxatdan o'tish →
            </button>
          </div>

          {/* Testimonial */}
          <div style={{
            marginTop: "28px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "20px",
            padding: "24px",
          }}>
            <div style={{ fontSize: "24px", color: "#52b788", fontFamily: "'Nunito', sans-serif", fontWeight: 900, lineHeight: 1, marginBottom: "12px" }}>"</div>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "14px", lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", fontStyle: "italic" }}>
              GreenTech Horizons orqali 5 ta eco contestda qatnashdim. Har bir loyiha uchun sertifikat oldim va hozir eng faol volontyor reytingida 3-o'rindaman!
            </p>
            <div style={{ marginTop: "16px", display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{
                width: 38, height: 38, borderRadius: "50%",
                background: "linear-gradient(135deg, #52b788, #2d6a4f)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "18px",
              }}>🌿</div>
              <div>
                <div style={{ fontSize: "13px", fontWeight: 700, color: "#fff", fontFamily: "'Nunito', sans-serif" }}>Kamola N.</div>
                <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)", fontFamily: "'DM Sans', sans-serif" }}>Eco Volunteer, Toshkent</div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: "48px", textAlign: "center",
            paddingTop: "28px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}>
            <div style={{ fontSize: "28px", marginBottom: "10px" }}>🌿</div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontFamily: "'Nunito', sans-serif", fontWeight: 700, marginBottom: "4px" }}>
              GreenTech Horizons
            </div>
            <div style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", fontFamily: "'DM Sans', sans-serif", marginBottom: "20px" }}>
              Uzbekistan · Eco Volunteer Platform
            </div>
            <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
              {["Maxfiylik", "Bog'lanish", "Yordam"].map(link => (
                <a key={link} href="#" style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", fontFamily: "'DM Sans', sans-serif", textDecoration: "none" }}>{link}</a>
              ))}
            </div>
            <div style={{ marginTop: "24px", color: "rgba(255,255,255,0.2)", fontSize: "11px", fontFamily: "'DM Sans', sans-serif" }}>
              © 2025 GreenTech Horizons. All rights reserved.
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
