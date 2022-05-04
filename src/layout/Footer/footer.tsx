import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="footer-menu d-flex col-12 justify-content-end justify-content-md-start">
            <a href="/terms-condition" className="" target="_blank">
              Terms&Condition
            </a>|
            <a href="/privacy-policy" className="" target="_blank">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;