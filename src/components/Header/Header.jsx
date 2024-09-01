import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./Header.css";
import logo from "../../assets/logo.png";
import signin from "../../assets/coolicon.png";

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="header">
      <div className="header-right">
        <div className="languages">
          <span onClick={() => handleLanguageChange('en')}>Eng</span>
          <span onClick={() => handleLanguageChange('hy')}>Հայ</span>
          <span onClick={() => handleLanguageChange('ru')}>Рус</span>
        </div>
      </div>
      <div className="header-main">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <nav className="nav-links">
            <Link to="/teachers">{t('teachers')}</Link>
            <Link to="/donors">{t('donors')}</Link>
            <Link to="/about">{t('about_us')}</Link>
            <Link to="/contact">{t('contact_us')}</Link>
            <Link to="/blog">{t('blog')}</Link>
          </nav>
          <span className="sign-in">
            <img src={signin} alt="signin" />
            <Link to="/">{t('sign_in')}</Link>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
