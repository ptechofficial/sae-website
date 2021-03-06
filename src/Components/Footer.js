import React from 'react';
import '../Styling/Footer.css';
import { Link } from 'react-router-dom';

const Footer = ({ accentColor1, accentColor2, footerColors }) => {
  const borderStyles = {
    borderImage: `linear-gradient(to right, ${accentColor1}, ${accentColor2})`,
    borderImageSlice: 1,
  };
  const footLinkStyles = {
    color: footerColors.textColor,
    textDecoration: 'none',
  };
  return (
    <section
      className='footerArea'
      style={{
        color: footerColors.textColor,
        backgroundColor: footerColors.bgColor,
      }}
    >
      <div className='footerContent'>
        <div className='explore-us foot-section'>
          <div className='heading'>
            <span style={borderStyles}>Explore Us</span>
          </div>
          <div className='footer-links'>
            <span>
              <Link to='/accelerons' style={footLinkStyles}>
                Team Accelerons
              </Link>
            </span>
            <Link to='/nitrox' style={footLinkStyles}>
              Team Nitrox
            </Link>
            <Link to='/autokriti' style={footLinkStyles}>
              Autokriti
            </Link>
            <span>Support Us</span>
            <span>Gallery</span>
            <span>Sponsors</span>
          </div>
        </div>
        <div className='social-link foot-section'>
          <div className='heading'>
            <span style={borderStyles}>Social</span>
          </div>
          <div className='footer-links'>
            <span className='indv-social'>
              <span>Team Accelerons</span>
              <span className='social-logo'>
                <a href='https://www.instagram.com/accelerons_nitkkr/'>
                  <i
                    className='fab fa-instagram custom-icon-sizing'
                    style={{ color: footerColors.iconColor }}
                  ></i>
                </a>
              </span>
              <span className='social-logo'>
                <a href='https://www.facebook.com/teamaccelerons'>
                  <i
                    className='fab fa-facebook-square custom-icon-sizing'
                    style={{ color: footerColors.iconColor }}
                  ></i>
                </a>
              </span>
            </span>
            <span className='indv-social'>
              <span>Team Nitrox</span>
              <span className='social-logo'>
                <a href='https://www.instagram.com/nitroxteam/'>
                  <i
                    className='fab fa-instagram custom-icon-sizing'
                    style={{ color: footerColors.iconColor }}
                  ></i>
                </a>
              </span>
              <span className='social-logo'>
                <a href='https://www.facebook.com/teamnitrox'>
                  <i
                    className='fab fa-facebook-square custom-icon-sizing'
                    style={{ color: footerColors.iconColor }}
                  ></i>
                </a>
              </span>
            </span>
            <span className='indv-social'>
              <span>Autokriti</span>
              <span className='social-logo'>
                <a href='https://www.instagram.com/autokriti/'>
                  <i
                    className='fab fa-instagram custom-icon-sizing'
                    style={{ color: footerColors.iconColor }}
                  ></i>
                </a>
              </span>
              <span className='social-logo'>
                <a href='https://www.facebook.com/autokriti'>
                  <i
                    className='fab fa-facebook-square custom-icon-sizing'
                    style={{ color: footerColors.iconColor }}
                  ></i>
                </a>
              </span>
            </span>
          </div>
        </div>
        <div className='contact-us foot-section'>
          <div className='heading'>
            <span style={borderStyles}>Contact Us</span>
          </div>
          <div className='footer-links'>
            <span className='indv-contact'>
              <span className='contact-logo'>
                <i
                  className='fas fa-phone-alt custom-icon-sizing'
                  style={{ color: footerColors.iconColor }}
                ></i>
              </span>
              <span>(+91) 9650733454</span>
            </span>
            <span className='indv-contact'>
              <span className='contact-logo'>
                <a href='mailto:saenitkurukshetra@gmail.com'>
                  <i
                    className='far fa-envelope custom-icon-sizing'
                    style={{ color: footerColors.iconColor }}
                  ></i>
                </a>
              </span>
              <span className='long-contact' style={{ wordBreak: 'break-all' }}>
                saenitkurukshetra@gmail.com
              </span>
            </span>
            <span className='indv-contact'>
              <span className='contact-logo'>
                <a href='https://www.linkedin.com/company/sae-nit-kkr/mycompany/'>
                  <i
                    className='fab fa-linkedin custom-icon-sizing'
                    style={{ color: footerColors.iconColor }}
                  ></i>
                </a>
              </span>
              <span className='long-contact' style={{ wordBreak: 'break-all' }}>
                linkedin.com/company/sae-nit-kkr/
              </span>
            </span>
          </div>
        </div>
        <div className='news-letter foot-section'>
          <div className='heading'>
            <span style={borderStyles}>Join Our Newsletter</span>
          </div>
          <div className='footer-links news-letter-area'>
            <span className='news-letter-inp'>
              <input
                type='text'
                style={{ backgroundColor: footerColors.inpBgColor }}
                placeholder='Enter your email... '
              />
              <button
                style={{
                  backgroundImage: `linear-gradient(to right, ${accentColor1}, ${accentColor2})`,
                }}
              >
                Join
              </button>
            </span>
            <span className='news-letter-checkbox'>
              <input
                style={{ color: footerColors.textColor }}
                type='checkbox'
                className='check-box'
              />
              <p style={{ color: footerColors.chkBoxColor }}>
                Yes, I???d like to hear about your updates on my email
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
