import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const Navigation = (props) => {
  return (
    <>
      <nav className={`navigation-nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="navigation-link">{props.text}</a>
        </Link>
        <Link href="/products">
          <a className="navigation-link1">{props.text5}</a>
        </Link>
        <Link href="/1">
          <a className="navigation-link2">{props.text1}</a>
        </Link>
        <Link href="/contacts">
          <a className="navigation-link3">{props.text3}</a>
        </Link>
        <Link href="/feedback">
          <a className="navigation-link4">{props.text4}</a>
        </Link>
      </nav>
      <style jsx>
        {`
          .navigation-nav {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .navigation-link {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            transition: 0.3s;
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-link:hover {
            color: #9f705a;
          }
          .navigation-link1 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-link1:hover {
            color: #9f705a;
          }
          .navigation-link2 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-link2:hover {
            color: #9f705a;
          }
          .navigation-link3 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .navigation-link3:hover {
            color: #9f705a;
          }
          .navigation-link4 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-twounits);
            padding-top: 0px;
            padding-left: var(--dl-space-space-halfunit);
            padding-right: 0px;
            padding-bottom: 0px;
            text-decoration: none;
          }
          .navigation-link4:hover {
            color: #9f705a;
          }

          .navigation-root-class-name8 {
            flex: 3;
            margin: var(--dl-space-space-unit);
            align-self: center;
          }

          .navigation-root-class-name10 {
            flex: 3;
            width: var(--dl-size-size-small);
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: var(--dl-space-space-unit);
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-root-class-name11 {
            flex: 3;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-root-class-name12 {
            flex: 3;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }

          .navigation-root-class-name15 {
            flex: 3;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }

          .navigation-root-class-name17 {
            flex: 3;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }

          .navigation-root-class-name19 {
            flex: 3;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }

          .navigation-root-class-name21 {
            flex: 3;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-root-class-name22 {
            flex: 3;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }

          .navigation-root-class-name24 {
            flex: 3;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }

          .navigation-root-class-name26 {
            flex: 3;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .navigation-root-class-name27 {
            flex: 3;
            align-self: center;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .navigation-link {
              font-size: 22px;
              padding-left: 0px;
              padding-right: 0px;
            }
            .navigation-link1 {
              font-size: 22px;
              margin-left: var(--dl-space-space-twounits);
            }
            .navigation-link2 {
              font-size: 22px;
              margin-left: var(--dl-space-space-twounits);
            }
            .navigation-link3 {
              font-size: 22px;
            }
            .navigation-link4 {
              font-size: 22px;
              margin-left: var(--dl-space-space-twounits);
            }
            .navigation-root-class-name8 {
              flex: 0 0 auto;
            }
            .navigation-root-class-name10 {
              flex: 0 0 auto;
              margin-right: var(--dl-space-space-halfunit);
            }
            .navigation-root-class-name11 {
              flex: 0 0 auto;
            }
            .navigation-root-class-name12 {
              flex: 0 0 auto;
            }
            .navigation-root-class-name15 {
              flex: 0 0 auto;
            }
            .navigation-root-class-name17 {
              flex: 0 0 auto;
            }
            .navigation-root-class-name19 {
              flex: 0 0 auto;
            }
            .navigation-root-class-name21 {
              flex: 0 0 auto;
            }
            .navigation-root-class-name22 {
              flex: 0 0 auto;
            }
            .navigation-root-class-name24 {
              flex: 0 0 auto;
            }
            .navigation-root-class-name26 {
              flex: 0 0 auto;
            }
            .navigation-root-class-name27 {
              flex: 0 0 auto;
            }
          }
          @media (max-width: 767px) {
            .navigation-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-link {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-link2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-link3 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-link4 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navigation.defaultProps = {
  text3: 'Контакты',
  text: 'Главная',
  text1: 'Доставка',
  text5: 'Продукты',
  rootClassName: '',
  text2: 'Доставка',
  text4: 'Обратная связь',
}

Navigation.propTypes = {
  text3: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
}

export default Navigation
