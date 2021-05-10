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
      <div className='footerContent'>
        <div className='explore-us foot-section'>
          <div className='heading'>
            <span style={{ borderColor: accentColor }}>Explore Us</span>
          </div>
          <div className='footer-links'>
            <span>
              <a href='/accelerons'>Team Accelerons</a>
            </span>
            <a href='/nitrox'>Team Nitrox</a>
            <a href='/autokriti'>Autokriti</a>
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
            <span style={{ borderColor: accentColor }}>Contact Us</span>
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
            <span style={{ borderColor: accentColor }}>
              Join Our Newsletter
            </span>
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
      </div>
    </section>
  );
};

export default Footer;
