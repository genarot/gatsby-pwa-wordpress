import React from "react"
import footerStyles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div className={'container'}><span className='text-muted'>© Gatsby Bootstrap - {new Date().getFullYear()}</span></div>
    </footer>
  )
}

export default Footer
