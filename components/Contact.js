'use client';

import { useState } from 'react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState({ text: '', type: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg({ text: '', type: '' });

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatusMsg({
          text: '✅ Message sent successfully! Hitesh will reply to your email soon.',
          type: 'success',
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (err) {
      const name = form.elements.name.value;
      const email = form.elements.email.value;
      const subject = form.elements._subject.value;
      const message = form.elements.message.value;

      const mailtoUrl = `mailto:hiteshvaishnav602@gmail.com?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.location.href = mailtoUrl;

      setStatusMsg({
        text: '✉️ Opening your email app to send message to Hitesh...',
        type: 'success',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section section-pad">
      <div className="section-container">
        <div className="section-tag">Contact</div>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Let's Work Together
        </h2>
        <p className="contact-sub">Have a project in mind? Let's build something amazing together.</p>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="cinfo-item">
              <div className="cinfo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="cinfo-label">Email</p>
                <a href="mailto:hiteshvaishnav602@gmail.com" className="cinfo-val">
                  hiteshvaishnav602@gmail.com
                </a>
              </div>
            </div>
            <div className="cinfo-item">
              <div className="cinfo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.68h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="cinfo-label">Phone</p>
                <a href="tel:+917877613187" className="cinfo-val">
                  +91 7877613187
                </a>
              </div>
            </div>
            <div className="cinfo-item">
              <div className="cinfo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="cinfo-label">Location</p>
                <p className="cinfo-val">Ahmedabad, Gujarat, India</p>
              </div>
            </div>
            <div className="contact-social-row">
              <a
                href="https://github.com/hiteshvaishnav602-tech"
                target="_blank"
                rel="noopener noreferrer"
                className="csocial-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hitesh-vaishnav-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="csocial-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
          <form
            className="contact-form"
            id="contact-form"
            action="https://formsubmit.co/6d460f034a80488b4d95d07a835c2d9c"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="_subject" placeholder="Project Inquiry" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              id="contact-submit-btn"
              className="btn-primary"
              style={{ width: '100%' }}
              disabled={loading}
            >
              {loading ? 'Sending Message... ⏳' : 'Send Message →'}
            </button>
            {statusMsg.text && (
              <div
                id="form-status-msg"
                className={`form-status-msg ${statusMsg.type}`}
                style={{ display: 'block' }}
              >
                {statusMsg.text}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
