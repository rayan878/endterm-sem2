import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      {/* Hero */}
      <section style={{
        minHeight: 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Grid background */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
          pointerEvents: 'none',
        }} />

        <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'block', width: 32, height: 1, background: 'var(--accent)' }} />
          Est. 2024 · Creative Studio
        </p>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(3rem, 8vw, 6.5rem)', lineHeight: 1.05, fontWeight: 700, maxWidth: 800, position: 'relative' }}>
          Craft that <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>speaks</em><br />before you do.
        </h1>

        <p style={{ marginTop: 28, fontSize: '1.05rem', color: 'var(--muted)', maxWidth: 460, lineHeight: 1.7, position: 'relative' }}>
          We design digital experiences with obsessive precision — where every detail is intentional, every interaction purposeful.
        </p>

        <div style={{ display: 'flex', gap: 16, marginTop: 48, position: 'relative' }}>
          <Link to="/about" className="btn btn-primary">Our Story →</Link>
          <Link to="/contact" className="btn btn-ghost">Get In Touch</Link>
        </div>
      </section>

      {/* Stats */}
      <div style={{ display: 'flex', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        {[
          { num: '120+', label: 'Projects Delivered' },
          { num: '98%',  label: 'Client Satisfaction' },
          { num: '7',    label: 'Years of Excellence' },
          { num: '40+',  label: 'Global Clients' },
        ].map((s, i, arr) => (
          <div key={s.label} style={{ flex: 1, padding: '48px', borderRight: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '3rem', color: 'var(--accent)' }}>{s.num}</div>
            <div style={{ fontSize: '0.8rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Intro section */}
      <section className="section">
        <p className="section-tag">What We Do</p>
        <h2>Design beyond the <em>obvious.</em></h2>
        <p>From brand identity to digital products, we partner with ambitious founders and established brands to create work that endures. Our process is deliberate, our standards uncompromising.</p>
      </section>

      <footer>
        <span>© 2024 Atelier Studio</span>
        <span>Designed with intention.</span>
      </footer>
    </div>
  );
}

export default Home;
