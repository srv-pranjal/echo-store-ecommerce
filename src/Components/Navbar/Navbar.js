import { Link } from "react-router-dom";
import "./Navbar.css"
export const Navbar = () => {
  return (
    <header className="wrapper">
      <Link to="/">
        <em>
          <h2 className="wrapper__title">Echo Store</h2>
        </em>
      </Link>
      <nav className="nav">
        <div className="nav__search-bar">
          <input
            type="text"
            className="input input--outlined"
            placeholder="Search for products"
          />
          <i className="fa fa-search"></i>
        </div>
        <ul className="nav__list">
          <li className="nav__list-item">
            <Link to="/login" className="btn btn--secondary" role="button">
              Login
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/cart">
              <div className="badge">
                <i className="fa fa-shopping-cart"></i>
                <span className="badge__status badge__number">4</span>
              </div>
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/wishlist">
              <div className="badge">
                <i className="fa fa-heart"></i>
                <span className="badge__status badge__number">5</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};