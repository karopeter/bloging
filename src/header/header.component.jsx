import React from 'react';
import './header.component.css';

const Header = ({ currentUser }) => (
    <div className="header">
      <nav>
        <ul>
          <li className="header-primary"><a href="#Header">Home</a></li>
          <li className="header-primary"><a href="#Arena">Vacancies</a></li>
          <li className="header-primary"><a href="#Menu">Traffic Updates</a></li>
          <li className="header-primary"><a href="#Grid">Brain Teasers</a></li>
          <li className="header-primary"><a href="#Stack">Articles</a></li>
          <li className="header-primary"><a href="#Forms">Contact us</a></li>
        </ul>
      </nav>
    </div>
);

export default Header;