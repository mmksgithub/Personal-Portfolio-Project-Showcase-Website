import React from 'react'

const Footer = () => {
  return (
<footer id="footer" className="footer dark-background">
    <div className="container">
      <div className="copyright">
        <span>Copyright </span>{" "}
        <strong className="px-1 sitename">© moinkhan.co.in</strong>{" "}
        <span>All Rights Reserved</span>
      </div>
      <div className="credits">
        {/* All the links in the footer should remain intact. */}
        {/* You can delete the links only if you've purchased the pro version. */}
        {/* Licensing information: https://bootstrapmade.com/license/ */}
        {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
        Designed by <a href="https://moinkhan.co.in">moinkhan</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer;