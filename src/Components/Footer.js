import React from 'react';
import '../Styling/Footer.css';

const Footer = ({ accentColor, bgColor, textColor }) => {
  console.log(accentColor);
  console.log(bgColor);

  return (
    <section
      className='footerArea'
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      <div className='explore-us foot-section'>
        <div className='heading'>
          <span>Explore Us</span>
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
          <span>Social</span>
        </div>
        <div className='footer-links'>
          <span className='indv-social'>
            <span>Team Accelerons</span>
            <span className='social-logo'>
              <i class='fab fa-instagram custom-icon-sizing'></i>
            </span>
            <span className='social-logo'>
              <i class='fab fa-facebook-square custom-icon-sizing'></i>
            </span>
          </span>
          <span className='indv-social'>
            <span>Team Nitrox</span>
            <span className='social-logo'>
              <i class='fab fa-instagram custom-icon-sizing'></i>
            </span>
            <span className='social-logo'>
              <i class='fab fa-facebook-square custom-icon-sizing'></i>
            </span>
          </span>
          <span className='indv-social'>
            <span>Autokriti</span>
            <span className='social-logo'>
              <i class='fab fa-instagram custom-icon-sizing'></i>
            </span>
            <span className='social-logo'>
              <i class='fab fa-facebook-square custom-icon-sizing'></i>
            </span>
          </span>
        </div>
      </div>
      <div className='contact-us foot-section'>
        <div className='heading'>
          <span>Contact Us</span>
        </div>
        <div className='footer-links'>
          <span className='indv-contact'>
            <span className='contact-logo'>
              <i class='fas fa-phone-alt custom-icon-sizing'></i>
            </span>
            <span>(+91) 9650733454</span>
          </span>
          <span className='indv-contact'>
            <span className='contact-logo'>
              <i class='far fa-envelope custom-icon-sizing'></i>
            </span>
            <span className='long-contact' style={{ wordBreak: 'break-all' }}>
              saenitkurukshetra@gmail.com
            </span>
          </span>
          <span className='indv-contact'>
            <span className='contact-logo'>
              <i class='fab fa-linkedin custom-icon-sizing'></i>
            </span>
            <span className='long-contact' style={{ wordBreak: 'break-all' }}>
              linkedin.com/company/sae-nit-kkr/
            </span>
          </span>
        </div>
      </div>
      <div className='news-letter foot-section'>
        <div className='heading'>
          <span>Join Our Newsletter</span>
        </div>
        <div className='footer-links news-letter-area'>
          <span className='news-letter-inp'>
            <input type='text' placeholder='Enter your email... ' />
            <button>Join</button>
          </span>
          <span className='news-letter-checkbox'>
            <input type='checkbox' />
            <p>Yes, I’d like to hear about your updates on my email</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
