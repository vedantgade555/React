const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">

        {/* Top Section */}
        <div className="row">

          {/* Brand + About */}
          <div className="col-md-4 mb-4">
            <h4 className="fw-bold">SocialSphere</h4>
            <p className="small text-secondary">
              Connect with friends, share your moments, and discover trending content
              from around the world. Your digital community starts here.
            </p>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-light fs-5">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" className="text-light fs-5">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase fw-bold">Quick Links</h6>
            <ul className="list-unstyled small mt-3">
              <li><a className="text-secondary text-decoration-none" href="#">Explore</a></li>
              <li><a className="text-secondary text-decoration-none" href="#">Trending</a></li>
              <li><a className="text-secondary text-decoration-none" href="#">Messages</a></li>
              <li><a className="text-secondary text-decoration-none" href="#">Profile</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Support</h6>
            <ul className="list-unstyled small mt-3">
              <li><a className="text-secondary text-decoration-none" href="#">Help Center</a></li>
              <li><a className="text-secondary text-decoration-none" href="#">Account Security</a></li>
              <li><a className="text-secondary text-decoration-none" href="#">Report a Problem</a></li>
              <li><a className="text-secondary text-decoration-none" href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase fw-bold">Contact Us</h6>
            <ul className="list-unstyled small mt-3">
              <li><i className="bi bi-envelope text-secondary me-2"></i> support@socialsphere.com</li>
              <li><i className="bi bi-telephone text-secondary me-2"></i> +91 98765 43210</li>
              <li><i className="bi bi-geo-alt text-secondary me-2"></i> Pune, India</li>
            </ul>
          </div>

        </div>

        <hr className="border-secondary" />

        {/* Bottom strip */}
        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} SocialSphere · All Rights Reserved
        </div>

      </div>
    </footer>
  );
};

export default Footer;
