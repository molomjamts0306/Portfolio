import React, { useState } from 'react';
import { Mail, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_w8plq6u', // e.g., "service_xxx"
        'template_zq77159', // e.g., "template_yyy"
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'IRuaK3_zEXNDZvJS7', // e.g., "user_xxx"
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'molomjamts21@gmail.com', href: 'mailto:molomjamts21@gmail.com' },
    { icon: Phone, label: 'Phone', value: '0411933741', href: 'tel:+0411933741' },
    { icon: MapPin, label: 'Location', value: 'Sydney, Australia', href: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/molomjamts0306' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/molomjamts-munkhbayar-84b721267/' },
    { icon: Mail, label: 'Email', href: 'mailto:molomjamts21@example.com' },
  ];

  return (
    <section id="contact" className="section" style={{ backgroundColor: '#1e293b' }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Ready to bring your next project to life? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="row">
          <div className="col-md-6 mb-5">
            <h3 className="mb-4" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#f8fafc' }}>
              Get In Touch
            </h3>

            <div className="mb-5">
              {contactInfo.map((info) => (
                <div key={info.label} className="d-flex align-items-center mb-4">
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem',
                    }}
                  >
                    <info.icon size={20} color="white" />
                  </div>
                  <div>
                    <p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>{info.label}</p>
                    {info.href ? (
                      <a href={info.href} style={{ color: 'white', textDecoration: 'none' }}>
                        {info.value}
                      </a>
                    ) : (
                      <p style={{ margin: 0, color: 'white' }}>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="mb-3" style={{ fontSize: '1.125rem', fontWeight: '600', color: '#64748b' }}>
                Follow Me
              </h4>
              <div className="d-flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#334155',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#64748b',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#475569';
                      e.target.style.color = '#3b82f6';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#334155';
                      e.target.style.color = '#64748b';
                    }}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            {isSubmitted ? (
              <div
                className="card text-center p-4"
                style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)' }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: '#10b981',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}
                >
                  <Send size={32} color="white" />
                </div>
                <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                  Message Sent!
                </h3>
                <p className="text-secondary mb-4">Thank you for reaching out. I'll get back to you soon!</p>
                <button onClick={() => setIsSubmitted(false)} className="btn btn-outline-primary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="form-control"
                    style={{ resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: '100%', fontSize: '1.125rem', padding: '0.75rem', transition: 'all 0.3s ease' }}
                >
                  {isSubmitting ? (
                    <>
                      <div
                        style={{
                          display: 'inline-block',
                          width: '20px',
                          height: '20px',
                          border: '2px solid transparent',
                          borderTop: '2px solid white',
                          borderRadius: '50%',
                          animation: 'spin 1s linear infinite',
                          marginRight: '0.5rem',
                        }}
                      ></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={20} style={{ marginLeft: '0.5rem' }} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
    </section>
  );
}
