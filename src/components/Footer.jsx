import { Mail, Phone, GitHub, Linkedin, Twitter } from 'react-feather';
import './Footer.css';

const Footer = ({ contact, footer }) => {
  const socialIcons = {
    github: GitHub,
    linkedin: Linkedin,
    twitter: Twitter
  };

  const quickLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Who I Am', href: '#about' },
    { label: 'What I Know', href: '#skills' },
    { label: "What I've Built", href: '#projects' }
  ];

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-container">
        <div className="footer-grid">
          <section className="footer-block footer-block--contact" aria-label="Contact information">
            <h4>Contact</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <Mail size={16} />
                <a href={`mailto:${contact.email}`} className="contact-link">
                  {contact.email}
                </a>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <a href={`tel:${contact.phone}`} className="contact-link">
                  {contact.phone}
                </a>
              </div>
            </div>
          </section>

          <section className="footer-block" aria-label="Quick navigation">
            <h4>Quick links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-block" aria-label="Social profiles">
            <h4>Profile</h4>
            <div className="footer-social">
              {Object.entries(contact.socialLinks).map(([platform, url]) => {
                const IconComponent = socialIcons[platform];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={`Visit ${platform} profile`}
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </section>
        </div>

        <div className="footer-meta">
          <p>{footer.copyright}</p>
          <p>{footer.lastUpdated}</p>
          <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Back to top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
