import MenuListItem from "./menu-list-item";

import "./nav.css";
import "../mobile-menu/mobile-menu.css";

const Nav = ({ data }) => {
  const menuElements = data.map((item) => {
    const { id, ...itemProps } = item;
    return <MenuListItem key={id} {...itemProps} />;
  });

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__wrap">
          <img src="./image/spring-logo.svg" alt="logo" className="logo" />

          <div className="hamb">
            <div className="hamb__field" id="hamb">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
          <nav className="menu-wrap">
            <ul className="menu" id="menu">
              {menuElements}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
