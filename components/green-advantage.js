import React from 'react'

import PropTypes from 'prop-types'

const GreenAdvantage = (props) => {
  return (
    <>
      <div className={`green-advantage-container ${props.rootClassName} `}>
        <h1 className="green-advantage-text">{props.heading}</h1>
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="green-advantage-image"
        />
        <span className="green-advantage-text1">{props.text}</span>
      </div>
      <style jsx>
        {`
          .green-advantage-container {
            width: 255px;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            border-color: var(--dl-color-gray-white);
            border-style: dashed;
            border-width: 2px;
            flex-direction: column;
            justify-content: center;
          }
          .green-advantage-text {
            color: #39c139;
            align-self: center;
            text-align: center;
          }
          .green-advantage-image {
            width: 60px;
            object-fit: cover;
            padding-top: var(--dl-space-space-unit);
          }
          .green-advantage-text1 {
            color: var(--dl-color-primary-100);
            font-size: 20px;
            text-align: center;
            font-family: 'Fira Sans';
            font-weight: 300;
            padding-top: var(--dl-space-space-unit);
            padding-bottom: var(--dl-space-space-unit);
          }
          .green-advantage-root-class-name4 {
            width: auto;
            height: 100%;
            align-self: center;
            margin-top: 0%;
            margin-left: var(--dl-space-space-unit);
            margin-right: 25%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name5 {
            width: auto;
            height: 100%;
            margin: 0%;
            align-self: flex-start;
          }
          .green-advantage-root-class-name6 {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0%;
            margin-right: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name7 {
            width: 40%;
            height: auto;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 25%;
            margin-right: var(--dl-space-space-unit);
            margin-bottom: 0%;
          }
          @media (max-width: 1200px) {
            .green-advantage-container {
              margin-top: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name4 {
              width: auto;
              height: auto;
              margin-top: 0px;
              margin-right: 13%;
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name5 {
              width: auto;
              height: auto;
              margin-top: 0px;
            }
            .green-advantage-root-class-name6 {
              width: 100%;
              height: 100%;
              margin: 0px;
            }
            .green-advantage-root-class-name7 {
              width: 100%;
              height: 100%;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: 13%;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 991px) {
            .green-advantage-container {
              width: 292px;
              height: 183px;
            }
            .green-advantage-text {
              width: auto;
            }
            .green-advantage-root-class-name4 {
              width: 40%;
            }
            .green-advantage-root-class-name5 {
              height: 100%;
            }
            .green-advantage-root-class-name6 {
              height: auto;
            }
            .green-advantage-root-class-name7 {
              width: auto;
              height: auto;
              align-self: center;
              margin-right: 0px;
            }
          }
          @media (max-width: 767px) {
            .green-advantage-root-class-name4 {
              width: auto;
              height: auto;
              margin: var(--dl-space-space-twounits);
              align-self: center;
            }
            .green-advantage-root-class-name5 {
              width: auto;
              height: auto;
              margin: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name6 {
              width: 45%;
              height: auto;
              margin-top: 0px;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name7 {
              width: 40%;
              height: auto;
              align-self: center;
              margin-top: 0px;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 479px) {
            .green-advantage-container {
              width: 127px;
            }
            .green-advantage-text {
              font-size: 23px;
            }
            .green-advantage-image {
              width: 41px;
              height: 56px;
            }
            .green-advantage-text1 {
              font-size: 13px;
            }
            .green-advantage-root-class-name4 {
              width: auto;
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name5 {
              width: auto;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name6 {
              width: auto;
              height: 100%;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name7 {
              width: 60%;
              height: 100%;
              align-self: flex-start;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: 0px;
              margin-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

GreenAdvantage.defaultProps = {
  rootClassName: '',
  heading: '100% органика',
  imageAlt: 'image',
  text: 'Экологически чистый и безопасный продукт',
  imageSrc: '/Icons/leaves-200h.png',
}

GreenAdvantage.propTypes = {
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  imageAlt: PropTypes.string,
  text: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default GreenAdvantage
