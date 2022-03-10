import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className="footer bg--primary color--white">
            <span className='color-white'>Tienda</span>
            
                <div className="btn-social-desk">

                    <a className="btn-social color--white " href="https://www.linkedin.com/in/faqtoff" target="blank">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a className="btn-social color--white ms--1" href="https://www.linkedin.com/in/faqtoff" target="blank">
                        <i className="fab fa-github"></i>
                    </a>
                    <a className="btn-social color--white  ms--1" href="https://www.linkedin.com/in/faqtoff" target="blank">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    <a className="btn-social color--white ms--1" href="https://www.linkedin.com/in/faqtoff" target="blank">
                        <i className="fab fa-instagram"></i>
                    </a>

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