import React from 'react'

const Footer = () => {
    const URLs = {
        linkedin: process.env.REACT_APP_SOCIAL.linkedin,
        github: process.env.REACT_APP_SOCIAL.github,
        facebook: process.env.REACT_APP_SOCIAL.facebook,
        instagram: process.env.REACT_APP_SOCIAL.instagram
    }
  return (
    <footer>
        <div className="footer bg--primary color--white">
            <span className='color-white'>Tienda</span>
            
                <div className="btn-social-desk">

                    {
                        URLs.linkedin &&
                        <a className="btn-social color--white " href={URLs.linkedin} target="blank">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    }
                    {
                        URLs.github &&
                        <a className="btn-social color--white ms--1" href={URLs.github} target="blank">
                            <i className="fab fa-github"></i>
                        </a>
                    }
                    {
                        URLs.facebook &&
                        <a className="btn-social color--white  ms--1" href={URLs.facebook} target="blank">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    }
                    {
                        URLs.instagram &&
                        <a className="btn-social color--white ms--1" href={URLs.instagram} target="blank">
                            <i className="fab fa-instagram"></i>
                        </a>
                    }

                </div>
        </div>
        <div className="faq-footer">
            <p className='faq-footer--text'>
                Made with <span className="corazon"></span> by <a href='https://www.faqtoff.com'>@faqtoff</a><br />
                &copy;2021 - FaqToff_dev
                </p>
        </div>
    </footer>
  )
}

export default Footer