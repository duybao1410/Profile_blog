import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from '../../styles/Navbar.module.css';

// https://docs-v4.strapi.io/dev-docs/api/rest?utm_term=strapi&utm_campaign=GR+-+Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=3400298539&hsa_cam=20738936303&hsa_grp=155973929915&hsa_ad=679399336250&hsa_src=g&hsa_tgt=kwd-818385460039&hsa_kw=strapi&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gad_source=1&gad_campaignid=20738936303&gclid=Cj0KCQjw_vnQBhCxARIsADcZyxJIG9uJGcvB6NLW56y8jN5camieP4XAWYEshgscTz_pUYbuI1gBeZgaAj1dEALw_wcB
/**
 * Navbar Component - Sử dụng CSS Module
 * 
 * Cách lấy CSS:
 * - Import CSS Module: import styles from './Navbar.module.css'
 * - Dùng: className={styles.className}
 */

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'blog', label: 'Blog', path: '/blog' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          MyBlog
        </Link>

        {/* Menu Items */}
        <ul className={styles.navMenu}>
          {navLinks.map((link) => (
            <li key={link.id} className={styles.navItem}>
              <Link
                to={link.path}
                className={classNames(styles.navLink, {
                  [styles.active]: activeLink === link.id
                })}
                onClick={() => setActiveLink(link.id)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side - Auth Buttons */}
        <div className={styles.navRight}>
          <Link to="/login">
            <button className={styles.navBtn}>
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className={classNames(styles.navBtn, styles.logout)}>
              Register
            </button>
          </Link>
        </div>
      </div>
    </nav>
    )
}