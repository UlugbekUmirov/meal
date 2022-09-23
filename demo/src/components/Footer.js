import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="page-footer purple darken-1">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text">Footer Content</h5>
              <p className="grey-text text-lighten-4">
                You can use rows and columns here to organize your footer
                content.
              </p>
            </div>
            <div className="col l4 offset-l2 s12 ">
              <h5 className="white-text">Links</h5>
              <ul className="d-flex">
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://t.me/umirovulugbe"
                  >
                    <img src="https://img.icons8.com/ios-filled/20/000000/telegram.png" />
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://instagram.com/um1rov.06/"
                  >
                    <img src="https://img.icons8.com/ios-filled/20/000000/instagram.png" />
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="twitter.com/ulugbekumirov"
                  >
                    <img src="https://img.icons8.com/ios-filled/20/000000/twitter.png" />
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.linkedin.com/in/ulugbek-umirov-b79094231/"
                  >
                    <img src="https://img.icons8.com/ios-filled/20/000000/linkedin.png" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <Link className="grey-text text-lighten-4 right" to="/">
              More Links
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
