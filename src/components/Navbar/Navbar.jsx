import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const user = true;
const Navbar = () => {
  const [showMenu, setShowMenu] = useState();
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <a href="/" className="navbar__logo">
          <img src="/logo.png" alt="" />
          <span>Real Estate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="navbar__right">
        {user ? (
          <div className="user">
            <img
              src="https://i.pinimg.com/originals/81/c0/9d/81c09d9aeb9635ef70e89828956827e1.jpg"
              alt="user__img"
            />
            <span>John Doe</span>

            <Link to="/profile" className="profile__btn">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setShowMenu((prev) => !prev)}
          />
        </div>

        <div className={showMenu ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
