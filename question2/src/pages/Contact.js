import React, { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const submit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle = {
    background: 'var(--surface)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    padding: '14px 18px',
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '0.95rem',
    borderRadius: 2,
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.3s',
  };

  const labelStyle = {
    fontSize: '0.7rem',
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    color: 'var(--muted)',
    display: 'block',
    marginBottom: 8,
  };

  return (
    <div className="page">
      <section className="section">
        <p className="section-tag">Get In Touch</p>
        <h2 style={{ marginBottom: 60 }}>Let's make something <em>extraordinary.</em></h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, alignItems: 'start' }}>

          {/* Contact Info */}
          <div>
            {[
              { icon: '✉', title: 'Email',         text: 'hello@atelier.studio' },
              { icon: '📍', title: 'Location',      text: 'New Delhi, India' },
              { icon: '⏱', title: 'Response Time', text: 'Within 24 hours' },
            ].map((d, i) => (
              <div key={d.title} style={{
                display: 'flex', alignItems: 'flex-start', gap: 20,
                padding: '24px 0',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border)',
              }}>
                <div style={{
                  width: 40, height: 40, border: '1px solid var(--border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', flexShrink: 0, color: 'var(--accent)',
                }}>{d.icon}</div>
                <div>
                  <h4 style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>{d.title}</h4>
                  <p style={{ fontSize: '0.95rem' }}>{d.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              <div>
                <label style={labelStyle}>Your Name</label>
                <input name="name" value={form.name} onChange={handle} placeholder="Jane Smith" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input name="email" type="email" value={form.email} onChange={handle} placeholder="jane@company.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border)'} />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Subject</label>
              <input name="subject" value={form.subject} onChange={handle} placeholder="Project inquiry, collaboration..." style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>

            <div>
              <label style={labelStyle}>Message</label>
              <textarea name="message" value={form.message} onChange={handle}
                placeholder="Tell us about your project..."
                style={{ ...inputStyle, minHeight: 140, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border)'} />
            </div>

            {sent && (
              <div style={{
                background: 'rgba(200,169,110,0.15)',
                border: '1px solid rgba(200,169,110,0.3)',
                color: 'var(--accent)',
                padding: '16px 24px',
                borderRadius: 2,
                fontSize: '0.875rem',
              }}>
                ✓ Message received — we'll be in touch shortly.
              </div>
            )}

            <button className="btn btn-primary" onClick={submit} style={{ alignSelf: 'flex-start' }}>
              Send Message →
            </button>
          </div>
        </div>
      </section>

      <footer>
        <span>© 2024 Atelier Studio</span>
        <span>Designed with intention.</span>
      </footer>
    </div>
  );
}

export default Contact;
