import React from 'react';
import './navbar.scss';
import { link } from '../types';

interface NavbarProps {
  links: link[];
}

const Navbar = ({ links }: NavbarProps) => {
  return (
    <nav>
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;