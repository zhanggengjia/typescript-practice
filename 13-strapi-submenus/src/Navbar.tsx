import React, { type ReactElement } from 'react';
import { useGlobalContext } from './Context';
import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';

const Navbar = (): ReactElement => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e: React.MouseEvent<HTMLElement>) => {
    // console.log(e.target)
    const target = e.target;
    if (target instanceof HTMLElement) {
      if (!target.classList.contains('nav-link')) {
        setPageId(null);
      }
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
