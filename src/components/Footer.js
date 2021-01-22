import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div>
                © {new Date().getFullYear()},
               {` `}
                <a href="https://jonellwood.dev">Jon Ellwood</a>
            </div>
    </footer>
  )
}

export default Footer;
