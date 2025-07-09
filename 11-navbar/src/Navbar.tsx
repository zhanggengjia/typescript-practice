import React, { useState, useRef, type ReactElement } from 'react';
import { links, social } from './data';
import logo from './logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = (): ReactElement => {
  const [showLinks, setShowLinks] = useState<boolean>(false);
  const linksContainerRef = useRef<HTMLDivElement | null>(null);
  const linksRef = useRef<HTMLUListElement | null>(null);

  const toggleLinks = (): void => {
    console.log(linksRef.current?.getBoundingClientRect());
    setShowLinks(!showLinks);
  };

  const linkStyles: React.CSSProperties = {
    height:
      showLinks && linksRef.current
        ? `${linksRef.current?.getBoundingClientRect().height}px`
        : '0px',
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
