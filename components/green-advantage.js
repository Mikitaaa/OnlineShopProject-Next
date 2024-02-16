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
          .green-advantage-root-class-name8 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name9 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name10 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name11 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name12 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name13 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name14 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name15 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name16 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name17 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name18 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name19 {
            margin-top: var(--dl-space-space-threeunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-twounits);
          }
          .green-advantage-root-class-name20 {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0px;
            margin-right: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name21 {
            width: auto;
            height: 100%;
            margin: 0%;
            align-self: flex-start;
          }
          .green-advantage-root-class-name22 {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0%;
            margin-right: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name23 {
            width: auto;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name24 {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0px;
            margin-right: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name25 {
            width: auto;
            height: 100%;
            margin: 0%;
            align-self: flex-start;
          }
          .green-advantage-root-class-name26 {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0%;
            margin-right: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name27 {
            width: auto;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name28 {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0px;
            margin-right: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name29 {
            width: auto;
            height: 100%;
            margin: 0%;
            align-self: flex-start;
          }
          .green-advantage-root-class-name30 {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0%;
            margin-right: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name31 {
            width: auto;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name32 {
            width: auto;
            height: 100%;
            align-self: center;
            margin-top: 0%;
            margin-left: var(--dl-space-space-unit);
            margin-right: 25%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name33 {
            width: auto;
            height: 100%;
            margin: 0%;
            align-self: flex-start;
          }
          .green-advantage-root-class-name34 {
            width: 50%;
            height: 100%;
            align-self: flex-start;
            margin-top: 0%;
            margin-left: 0%;
            margin-right: 0%;
            margin-bottom: 0%;
          }
          .green-advantage-root-class-name35 {
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
            .green-advantage-root-class-name8 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name9 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name10 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name11 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name12 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name13 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name14 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name15 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name16 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name17 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name18 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name19 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name20 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name21 {
              width: 100%;
              height: 100%;
              margin-top: 0px;
            }
            .green-advantage-root-class-name22 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name23 {
              width: 100%;
              height: 100%;
              align-self: flex-start;
            }
            .green-advantage-root-class-name24 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name25 {
              width: 100%;
              height: 100%;
              margin-top: 0px;
            }
            .green-advantage-root-class-name26 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name27 {
              width: 100%;
              height: 100%;
              align-self: flex-start;
            }
            .green-advantage-root-class-name28 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name29 {
              width: 100%;
              height: 100%;
              margin-top: 0px;
            }
            .green-advantage-root-class-name30 {
              width: 100%;
              height: 100%;
            }
            .green-advantage-root-class-name31 {
              width: 100%;
              height: 100%;
              align-self: flex-start;
            }
            .green-advantage-root-class-name32 {
              width: auto;
              height: auto;
              margin-top: 0px;
              margin-right: 13%;
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name33 {
              width: auto;
              height: auto;
              margin-top: 0px;
            }
            .green-advantage-root-class-name34 {
              width: 100%;
              height: 100%;
              margin: 0px;
            }
            .green-advantage-root-class-name35 {
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
            .green-advantage-root-class-name8 {
              width: 290px;
            }
            .green-advantage-root-class-name12 {
              width: 290px;
            }
            .green-advantage-root-class-name16 {
              width: 290px;
            }
            .green-advantage-root-class-name20 {
              width: 290px;
            }
            .green-advantage-root-class-name24 {
              width: 290px;
            }
            .green-advantage-root-class-name28 {
              width: 290px;
            }
            .green-advantage-root-class-name32 {
              width: 40%;
            }
            .green-advantage-root-class-name33 {
              height: 100%;
            }
            .green-advantage-root-class-name34 {
              height: auto;
            }
            .green-advantage-root-class-name35 {
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
            .green-advantage-root-class-name8 {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name10 {
              margin-left: var(--dl-space-space-unit);
            }
            .green-advantage-root-class-name11 {
              margin-right: var(--dl-space-space-unit);
            }
            .green-advantage-root-class-name12 {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name14 {
              margin-left: var(--dl-space-space-unit);
            }
            .green-advantage-root-class-name15 {
              margin-right: var(--dl-space-space-unit);
            }
            .green-advantage-root-class-name16 {
              margin-top: var(--dl-space-space-threeunits);
              margin-left: var(--dl-space-space-threeunits);
              margin-right: var(--dl-space-space-threeunits);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name17 {
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
            }
            .green-advantage-root-class-name18 {
              margin-left: var(--dl-space-space-unit);
            }
            .green-advantage-root-class-name19 {
              margin-right: var(--dl-space-space-unit);
            }
            .green-advantage-root-class-name20 {
              margin: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name21 {
              margin: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name22 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name23 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name24 {
              margin: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name25 {
              margin: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name26 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name27 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name28 {
              margin: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name29 {
              margin: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name30 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name31 {
              margin-top: var(--dl-space-space-twounits);
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name32 {
              width: auto;
              height: auto;
              margin: var(--dl-space-space-twounits);
              align-self: center;
            }
            .green-advantage-root-class-name33 {
              width: auto;
              height: auto;
              margin: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name34 {
              width: 45%;
              height: auto;
              margin-top: 0px;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-twounits);
            }
            .green-advantage-root-class-name35 {
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
              width: 38px;
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
            .green-advantage-root-class-name8 {
              width: 50%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name9 {
              width: 50%;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .green-advantage-root-class-name10 {
              width: 60%;
              height: 100%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name11 {
              width: 50%;
              height: 100%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name12 {
              width: 50%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name13 {
              width: 50%;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .green-advantage-root-class-name14 {
              width: 60%;
              height: 100%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name15 {
              width: 50%;
              height: 100%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name16 {
              width: 50%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-unit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name17 {
              width: 50%;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .green-advantage-root-class-name18 {
              width: 60%;
              height: 100%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name19 {
              width: 50%;
              height: 100%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name20 {
              width: 50%;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name21 {
              width: 50%;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name22 {
              width: 60%;
              height: 100%;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name23 {
              width: 60%;
              height: 100%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name24 {
              width: 50%;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name25 {
              width: 50%;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name26 {
              width: 60%;
              height: 100%;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name27 {
              width: 60%;
              height: 100%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name28 {
              width: 50%;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name29 {
              width: 50%;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name30 {
              width: 60%;
              height: 100%;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name31 {
              width: 60%;
              height: 100%;
              margin-top: 0px;
              margin-left: var(--dl-space-space-halfunit);
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name32 {
              width: auto;
              align-self: center;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name33 {
              width: auto;
              margin-top: var(--dl-space-space-halfunit);
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .green-advantage-root-class-name34 {
              width: auto;
              height: 100%;
              margin-top: 0px;
              margin-left: 0px;
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: 0px;
            }
            .green-advantage-root-class-name35 {
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
