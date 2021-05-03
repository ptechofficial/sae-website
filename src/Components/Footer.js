import React from 'react';
import '../Styling/Footer.css';

const Footer = ({ accentColor, footerColors }) => {
  return (
    <section
      className='footerArea'
      style={{
        color: footerColors.textColor,
        backgroundColor: footerColors.bgColor,
      }}
    >
      <div className='explore-us foot-section'>
        <div className='heading'>
          <span style={{ borderColor: accentColor }}>Explore Us</span>
        </div>
        <div className='footer-links'>
          <span>Team Accelerons</span>
          <span>Team Nitrox</span>
          <span>Autokriti</span>
          <span>Support Us</span>
          <span>Gallery</span>
          <span>Sponsors</span>
        </div>
      </div>
      <div className='social-link foot-section'>
        <div className='heading'>
          <span style={{ borderColor: accentColor }}>Social</span>
        </div>
        <div className='footer-links'>
          <span className='indv-social'>
            <span>Team Accelerons</span>
            <span className='social-logo'>
              <i
                class='fab fa-instagram custom-icon-sizing'
                style={{ color: footerColors.iconColor }}
              ></i>
            </span>
            <span className='social-logo'>
              <i
                class='fab fa-facebook-square custom-icon-sizing'
                style={{ color: footerColors.iconColor }}
              ></i>
            </span>
          </span>
          <span className='indv-social'>
            <span>Team Nitrox</span>
            <span className='social-logo'>
              <i
                class='fab fa-instagram custom-icon-sizing'
                style={{ color: footerColors.iconColor }}
              ></i>
            </span>
            <span className='social-logo'>
              <i
                class='fab fa-facebook-square custom-icon-sizing'
                style={{ color: footerColors.iconColor }}
              ></i>
            </span>
          </span>
          <span className='indv-social'>
            <span>Autokriti</span>
            <span className='social-logo'>
              <i
                class='fab fa-instagram custom-icon-sizing'
                style={{ color: footerColors.iconColor }}
              ></i>
            </span>
            <span className='social-logo'>
              <i
                class='fab fa-facebook-square custom-icon-sizing'
                style={{ color: footerColors.iconColor }}
              ></i>
            </span>
          </span>
        </div>
      </div>
      <div className='contact-us foot-section'>
        <div className='heading'>
          <span style={{ borderColor: accentColor }}>Contact Us</span>
        </div>
        <div className='footer-links'>
          <span className='indv-contact'>
            <span className='contact-logo'>
              <i
                class='fas fa-phone-alt custom-icon-sizing'
                style={{ color: footerColors.iconColor }}
              ></i>
            </span>
            <span>(+91) 9650733454</span>
          </span>
          <span className='indv-contact'>
            <span className='contact-logo'>
              <i
                class='far fa-envelope custom-icon-sizing'
                style={{ color: footerColors.iconColor }}
              ></i>
            </span>
            <span className='long-contact' style={{ wordBreak: 'break-all' }}>
              saenitkurukshetra@gmail.com
            </span>
          </span>
          <span className='indv-contact'>
            <span className='contact-logo'>
              <i
                class='fab fa-linkedin custom-icon-sizing'
                style={{ color: footerColors.iconColor }}
              ></i>
            </span>
            <span className='long-contact' style={{ wordBreak: 'break-all' }}>
              linkedin.com/company/sae-nit-kkr/
            </span>
          </span>
        </div>
      </div>
      <div className='news-letter foot-section'>
        <div className='heading'>
          <span style={{ borderColor: accentColor }}>Join Our Newsletter</span>
        </div>
        <div className='footer-links news-letter-area'>
          <span className='news-letter-inp'>
            <input
              type='text'
              style={{ backgroundColor: footerColors.inpBgColor }}
              placeholder='Enter your email... '
            />
            <button style={{ backgroundColor: accentColor }}>Join</button>
          </span>
          <span className='news-letter-checkbox'>
            <input type='checkbox' className='check-box' />
            <p style={{ color: footerColors.chkBoxColor }}>
              Yes, I’d like to hear about your updates on my email
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
