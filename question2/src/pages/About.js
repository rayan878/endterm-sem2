import React from 'react';

const values = [
  { n: '01', title: 'Obsessive Craft',    desc: 'The details no one notices are the ones everyone feels. We sweat every pixel, every word, every interaction.' },
  { n: '02', title: 'Radical Honesty',    desc: 'We tell clients what they need to hear, not what they want to. Good partnerships are built on truth.' },
  { n: '03', title: 'Considered Risk',    desc: 'Safe design is forgettable design. We push boundaries within the context of what is strategically sound.' },
  { n: '04', title: 'Long-term Thinking', desc: 'Trends fade. We build with endurance in mind — aesthetics and systems that age with dignity.' },
];

function About() {
  return (
    <div className="page">
      <section className="section">
        <p className="section-tag">Our Story</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div>
            <h2>We build things <em>worth remembering.</em></h2>
            <p style={{ marginTop: 20 }}>
              Founded in 2017, Atelier began as a two-person studio obsessed with the intersection of form and function.
              Today we are a carefully curated team of designers, strategists, and engineers united by a singular belief:
              great work is never accidental.
            </p>
            <p style={{ marginTop: 16, color: 'var(--muted)', lineHeight: 1.8 }}>
              We work with a selective roster of clients — not because we are exclusionary, but because depth of
              partnership produces better outcomes than volume ever could.
            </p>
          </div>

          {/* Decorative visual */}
          <div style={{
            aspectRatio: '4/5',
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.015) 20px, rgba(255,255,255,0.015) 21px)',
            }} />
            <div style={{
              width: '70%', height: '70%',
              border: '1px solid rgba(200,169,110,0.2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Playfair Display', serif",
              fontSize: '6rem', color: 'var(--accent)', opacity: 0.3,
            }}>A</div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', margin: '0 80px 80px' }}>
        {values.map((v) => (
          <div key={v.n} style={{ background: 'var(--bg)', padding: 40, transition: 'background 0.3s', cursor: 'default' }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--bg)'}
          >
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: 'var(--accent)', opacity: 0.6, marginBottom: 16 }}>{v.n}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', marginBottom: 10 }}>{v.title}</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.7 }}>{v.desc}</p>
          </div>
        ))}
      </div>

      <footer>
        <span>© 2024 Atelier Studio</span>
        <span>Designed with intention.</span>
      </footer>
    </div>
  );
}

export default About;
