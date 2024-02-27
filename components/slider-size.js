import React from 'react'
import { useState } from 'react';

import PropTypes from 'prop-types'

const SliderSize = ({ imagePaths, onChange, ...props }) => {
  const [activeButton, setActiveButton] = useState(props.button);

  const handleClick = (value) => {
    setActiveButton(value);
    onChange(value);
  };

  return (
    <>
      <div className="slider-size-slider-size">
        <div
          data-thq="slider"
          data-navigation="true"
          data-pagination="true"
          className="slider-size-slider swiper"
        >
          <div data-thq="slider-wrapper" className="swiper-wrapper">
            <div
              data-thq="slider-slide"
              className="slider-size-slider-slide swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="slider-size-slider-slide1 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="slider-size-slider-slide2 swiper-slide"
            ></div>
            <div
              data-thq="slider-slide"
              className="slider-size-slider-slide3 swiper-slide"
            ></div>
          </div>
          <div
            data-thq="slider-pagination"
            className="slider-size-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
          >
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet swiper-pagination-bullet-active"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
            <div
              data-thq="slider-pagination-bullet"
              className="swiper-pagination-bullet"
            ></div>
          </div>
          <div
            data-thq="slider-button-prev"
            className="swiper-button-prev"
          ></div>
          <div
            data-thq="slider-button-next"
            className="swiper-button-next"
          ></div>
        </div>
        <div className="slider-size-size">
          <span className="slider-size-text">{props.text}</span>
          <button 
            type="button"
            className={`slider-size-button button ${activeButton === props.button ? 'active' : ''}`} 
            onClick={() => handleClick(props.button)}
          >
          {props.button}
          </button>
          <button 
            type="button"
            className={`slider-size-button1 button ${activeButton === props.button1 ? 'active' : ''}`} 
            onClick={() => handleClick(props.button1)}
          >
          {props.button1}
          </button>
        </div>
      </div>
      <style jsx>
        {`
          .slider-size-slider-size {
            width: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .slider-size-slider {
            width: 500px;
            height: 530px;
            display: inline-block;
            border-radius: 35px;
          }
          .slider-size-slider-slide {
            display: flex;
            background-size: cover;
            background-image: url(${activeButton === props.button ? imagePaths[0].first : imagePaths[0].second});
            background-size: ${activeButton === props.button ? 'cover' : '97%'};
            background-repeat: repeat;
            background-position: center;
          }
          .slider-size-slider-slide1 {
            display: flex;
            background-size: cover;
            background-image: url(${activeButton === props.button ? imagePaths[1].first : imagePaths[1].second});
            background-size: ${activeButton === props.button ? 'cover' : '97%'};
            background-position: center;
          }
          .slider-size-slider-slide2 {
            display: flex;
            background-size: cover;
            background-image: url(${activeButton === props.button ? imagePaths[2].first : imagePaths[2].second});
            background-position: center;
          }
          .slider-size-slider-slide3 {
            display: flex;
            background-size: cover;
            background-image: url(${activeButton === props.button ? imagePaths[3].first : imagePaths[3].second});
            background-size: ${activeButton === props.button ? 'cover' : '97%'};
            background-position: center;
          }
          .slider-size-slider-pagination {
            display: block;
          }
          .slider-size-size {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 0px;
            justify-content: flex-start;
          }
          .slider-size-text {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 25px;
            font-weight: bold;
          }
          .slider-size-button {
            color: var(--dl-color-gray-2);
            font-size: 20px;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-2);
            background-color: rgb(241, 219, 188);
          }
          .slider-size-button1 {
            color: var(--dl-color-gray-2);
            font-size: 20px;
            margin-left: var(--dl-space-space-unit);
            border-color: var(--dl-color-gray-2);
            background-color: rgb(241, 219, 188);
          }
          .active {
            background-color: var(--dl-color-gray-2); /* Darker blue */
            color: white;
          }  
          @media (max-width: 1200px) {
            .slider-size-slider-slide {
              background-position: center;
            }
            .slider-size-slider-slide1 {
              background-position: center;
            }
            .slider-size-slider-slide2 {
              background-position: center;
            }
            .slider-size-slider-slide3 {
              background-position: center;
            }
          }
          @media (max-width: 991px) {
            .slider-size-slider-size {
              padding-left: var(--dl-space-space-twounits);
            }
            .slider-size-slider-slide1 {
              background-position: center;
            }
            .slider-size-slider-slide2 {
              background-position: center;
            }
            .slider-size-slider-slide3 {
              background-position: center;
            }
          }
          @media (max-width: 767px) {
            .slider-size-slider {
              width: 380px;
              height: 430px;
              align-self: center;
            }
            .slider-size-slider-slide {
              background-position: center;
            }
            .slider-size-slider-slide1 {
              background-position: center;
            }
            .slider-size-slider-slide2 {
              background-position: center;
            }
            .slider-size-slider-slide3 {
              background-position: center;
            }
            .slider-size-size {
              align-self: flex-start;
            }
          }
          @media (max-width: 479px) {
            .slider-size-slider-size {
              width: 100%;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .slider-size-slider {
              width: 290px;
              height: 320px;
            }
            .slider-size-slider-slide {
              background-position: center;
            }
            .slider-size-slider-slide1 {
              background-position: center;
            }
            .slider-size-slider-slide2 {
              background-position: center;
            }
            .slider-size-slider-slide3 {
              background-position: center;
            }
            .slider-size-size {
              padding-left: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

SliderSize.defaultProps = {
  button1: '250л',
  button: '100л',
  text: 'Размер:',
}

SliderSize.propTypes = {
  button1: PropTypes.string,
  button: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default SliderSize
