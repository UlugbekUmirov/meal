import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <div className="nav-wrapper purple darken-1 accent-3">
        <Link to="/" className="brand-logo">
          {/* <img src="https://img.icons8.com/parakeet/48/000000/experimental-meal-parakeet.png" /> */}
          Meal
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
