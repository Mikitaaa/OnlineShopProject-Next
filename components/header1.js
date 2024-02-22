import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

import Navigation from './navigation'

const Header1 = (props) => {
  return (
    <>
      <header
        data-role="Header"
        className={`header1-header ${props.rootClassName} `}
      >
        <header data-thq="thq-navbar" className="header1-navbar-interactive">
          <Link href="/">
            <a className="header1-link">
              <div className="header1-logo">
                <img
                  alt={props.imageAlt2}
                  src={props.imageSrc2}
                  className="header1-logo1"
                />
                <h1 className="header1-text">{props.heading}</h1>
              </div>
            </a>
          </Link>
          <div data-thq="thq-navbar-nav" className="header1-desktop-menu">
            <div className="header1-nav">
              <Navigation rootClassName="rootClassName27"></Navigation>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="header1-burger-menu">
            <svg viewBox="0 0 1024 1024" className="header1-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="header1-mobile-menu">
            <div className="header1-nav1">
              <div className="header1-top">
                <Link href="/">
                  <a className="header1-link1">
                    <h1 className="header1-text1">{props.heading1}</h1>
                  </a>
                </Link>
                <div data-thq="thq-close-menu" className="header1-close-menu">
                  <svg viewBox="0 0 1024 1024" className="header1-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="header1-links">
                <Link href="/">
                  <a className="header1-link2">Главная</a>
                </Link>
                <Link href="/products">
                  <a className="header1-link3">Продукты</a>
                </Link>
                <Link href="/1">
                  <a className="header1-link4">Доставка</a>
                </Link>
                <Link href="/contacts">
                  <a className="header1-link5">Контакты</a>
                </Link>
                <Link href="/feedback">
                  <a className="header1-link6">Обратная связь</a>
                </Link>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .header1-header {
            width: 100%;
            height: 20vh;
            position: relative;
            max-width: 100%;
          }
          .header1-navbar-interactive {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-twounits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
            background-color: #efdba6;
          }
          .header1-link {
            display: contents;
          }
          .header1-logo {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            flex-direction: column;
            justify-content: center;
            text-decoration: none;
          }
          .header1-logo1 {
            width: 65px;
            height: auto;
          }
          .header1-text {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-halfunit);
            font-size: 20px;
          }
          .header1-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .header1-nav {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            position: relative;
            align-self: stretch;
            align-items: stretch;
            justify-content: flex-start;
          }
          .header1-burger-menu {
            display: none;
          }
          .header1-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header1-mobile-menu {
            top: 0px;
            left: 70%;
            width: 30%;
            height: auto;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #efdba6;
          }
          .header1-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header1-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .header1-link1 {
            display: contents;
          }
          .header1-text1 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            align-self: center;
            text-decoration: none;
          }
          .header1-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .header1-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .header1-links {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .header1-link2 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .header1-link2:hover {
            color: #9f705a;
          }
          .header1-link3 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
          }
          .header1-link3:hover {
            color: #9f705a;
          }
          .header1-link4 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .header1-link4:hover {
            color: #9f705a;
          }
          .header1-link5 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .header1-link5:hover {
            color: #9f705a;
          }
          .header1-link6 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-unit);
          }
          .header1-link6:hover {
            color: #9f705a;
          }

          @media (max-width: 991px) {
            .header1-desktop-menu {
              display: none;
            }
            .header1-nav {
              display: none;
            }
            .header1-burger-menu {
              display: flex;
            }
            .header1-mobile-menu {
              left: 65%;
              width: 35%;
            }
            .header1-nav1 {
              width: 100%;
            }
            .header1-text1 {
              color: var(--dl-color-gray-2);
              font-size: 25px;
            }
          }
          @media (max-width: 767px) {
            .header1-header {
              height: 18vh;
              font-size: 22;
            }
            .header1-navbar-interactive {
              padding-right: var(--dl-space-space-twounits);
            }
            .header1-nav {
              display: none;
            }
            .header1-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .header1-mobile-menu {
              left: 50%;
              width: 50%;
            }
            .header1-top {
              position: relative;
            }
            .header1-link2 {
              font-size: 23px;
            }
            .header1-link3 {
              font-size: 23px;
            }
            .header1-link4 {
              font-size: 23px;
            }
            .header1-link5 {
              font-size: 23px;
            }
            .header1-link6 {
              font-size: 23px;
            }
          }
          @media (max-width: 479px) {
            .header1-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .header1-mobile-menu {
              left: 0%;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Header1.defaultProps = {
  imageSrc2: '/Icons/logo-200h.png',
  rootClassName: '',
  imageAlt2: 'logo',
  heading1: 'GroundShop',
  imageSrc: '17b65ba3-853d-4b58-a671-350e290732d8',
  heading: 'GroundShop',
  imageAlt: 'image',
}

Header1.propTypes = {
  imageSrc2: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt2: PropTypes.string,
  heading1: PropTypes.string,
  imageSrc: PropTypes.string,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default Header1
