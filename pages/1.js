import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header1 from '../components/header1'
import Futer from '../components/futer'

const Delivery = (props) => {
  return (
    <>
      <div className="delivery-container">
        <Head>
          <title>Delivery - ground shop</title>
          <meta property="og:title" content="Delivery - ground shop" />
        </Head>
        <Header1 rootClassName="header1-root-class-name4"></Header1>
        <div className="delivery-maphead">
          <svg viewBox="0 0 1024 1024" className="delivery-icon">
            <path d="M938.667 426.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971-224.555 47.787-301.696 124.971-124.971 183.893-124.971 301.696c0 24.277 2.261 48.128 6.4 71.509 11.691 66.048 38.357 128.171 71.765 184.32 116.565 195.883 324.821 334.336 324.821 334.336 14.123 9.259 32.64 9.771 47.317 0 0 0 208.299-138.453 324.821-334.336 33.408-56.149 60.075-118.272 71.765-184.32 4.181-23.381 6.443-47.232 6.443-71.509zM853.333 426.667c0 18.944-1.749 37.845-5.077 56.661-9.429 53.333-31.445 105.728-61.099 155.563-83.285 139.947-220.416 249.643-275.157 290.091-54.784-40.448-191.872-150.144-275.157-290.091-29.653-49.835-51.669-102.229-61.099-155.563-3.328-18.816-5.077-37.717-5.077-56.661 0-94.251 38.144-179.541 99.968-241.365s147.115-99.968 241.365-99.968 179.541 38.144 241.365 99.968 99.968 147.115 99.968 241.365zM682.667 426.667c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 426.667c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331z"></path>
          </svg>
          <h1 className="delivery-text">
            <span className="delivery-text01">
              Доставка по всему Минску и его районам
            </span>
            <br></br>
          </h1>
        </div>
        <div className="delivery-mainunit">
          <div className="delivery-info">
            <span className="delivery-text03">
              <span className="delivery-text04">
                Мы можем доставить ваш заказ в любое удобное для вас время!
              </span>
              <br className="delivery-text05"></br>
              <br className="delivery-text06"></br>
              <span className="delivery-text07">
                Все детали доставки можно узнать по
              </span>
              <span className="delivery-text08">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link href="/contacts">
                <a className="delivery-link">номеру телефона</a>
              </Link>
              <span className="delivery-text09"> </span>
              <span className="delivery-text10">или</span>
              <span className="delivery-text11">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link href="/feedback">
                <a className="delivery-link1">заполнив форму</a>
              </Link>
              <span className="delivery-text12">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="delivery-text13">на сайте</span>
            </span>
          </div>
          <div className="delivery-pictures">
            <img
              alt="image"
              src="/Delivery/car1-200h.png"
              className="delivery-car"
            />
            <img
              alt="image"
              src="/Delivery/road-300w.png"
              className="delivery-road"
            />
          </div>
        </div>
        <Futer rootClassName="futer-root-class-name6"></Futer>
      </div>
      <style jsx>
        {`
          .delivery-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .delivery-maphead {
            width: 100%;
            height: 194px;
            display: flex;
            align-items: center;
            background-size: cover;
            background-image: url('/Delivery/map_2-1500w.jpg');
            background-position: center;
          }
          .delivery-icon {
            width: 65px;
            height: 65px;
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .delivery-text {
            color: var(--dl-color-gray-2);
            width: 815px;
            cursor: default;
            font-size: 50px;
            text-align: left;
          }
          .delivery-text01 {
            width: 815px;
            text-align: left;
          }
          .delivery-mainunit {
            width: 100%;
            height: 476px;
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }
          .delivery-info {
            width: 50%;
            cursor: default;
            height: 90%;
            padding: var(--dl-space-space-twounits);
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-left: var(--dl-space-space-twounits);
          }
          .delivery-text03 {
            font-size: 38px;
            text-align: left;
            transition: 0.3s;
          }

          .delivery-text04 {
            color: var(--dl-color-gray-2);
          }
          .delivery-text07 {
            color: var(--dl-color-gray-2);
          }
          .delivery-link {
            color: var(--dl-color-primary-selen4);
            font-weight: 400;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .delivery-text10 {
            color: var(--dl-color-gray-2);
          }
          .delivery-link1 {
            color: var(--dl-color-primary-selen4);
          }
          .delivery-text13 {
            color: var(--dl-color-gray-2);
          }
          .delivery-pictures {
            flex: 0 0 auto;
            width: 55%;
            height: 100%;
            display: flex;
            position: relative;
            justify-content: center;
          }
          .delivery-car {
            width: auto;
            height: auto;
            align-self: flex-end;
          }
          .delivery-road {
            width: auto;
            height: auto;
            align-self: flex-end;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
          }
          @media (max-width: 1200px) {
            .delivery-info {
              width: 45%;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .delivery-text03 {
              font-size: 30px;
            }
            .delivery-car {
              width: 180px;
            }
          }
          @media (max-width: 991px) {
            .delivery-text03 {
              font-size: 30px;
            }
            .delivery-text04 {
              color: var(--dl-color-gray-2);
            }
            .delivery-text05 {
              color: var(--dl-color-gray-2);
            }
            .delivery-text06 {
              color: var(--dl-color-gray-2);
            }
            .delivery-text07 {
              color: var(--dl-color-gray-2);
            }
            .delivery-text08 {
              color: var(--dl-color-gray-2);
            }
            .delivery-link {
              color: var(--dl-color-primary-selen4);
              font-family: Fira Sans;
              font-weight: 400;
              line-height: 1.15;
              text-transform: none;
              text-decoration: none;
            }
            .delivery-text09 {
              color: var(--dl-color-gray-2);
            }
            .delivery-text10 {
              color: var(--dl-color-gray-2);
            }
            .delivery-text11 {
              color: var(--dl-color-gray-2);
            }
            .delivery-link1 {
              color: var(--dl-color-primary-selen4);
            }
            .delivery-text12 {
              color: var(--dl-color-gray-2);
            }
            .delivery-text13 {
              color: var(--dl-color-gray-2);
            }
            .delivery-car {
              width: 150px;
            }
            .delivery-road {
              width: 270px;
              margin-left: 0px;
            }
          }
          @media (max-width: 767px) {
            .delivery-maphead {
              background-size: cover;
              background-image: url('/Delivery/map_2-1500w.jpg');
            }
            .delivery-icon {
              height: auto;
              margin-right: var(--dl-space-space-unit);
            }
            .delivery-text {
              font-size: 40px;
            }
            .delivery-mainunit {
              height: 100%;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .delivery-info {
              width: auto;
              height: 25%;
              margin: var(--dl-space-space-oneandhalfunits);
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .delivery-text03 {
              font-size: 30px;
            }
            .delivery-pictures {
              width: 100%;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .delivery-road {
              width: auto;
              margin-right: var(--dl-space-space-unit);
            }
          }
          @media (max-width: 479px) {
            .delivery-icon {
              margin-left: var(--dl-space-space-unit);
            }
            .delivery-info {
              padding-left: 0px;
            }
            .delivery-text03 {
              font-size: 20px;
            }
            .delivery-pictures {
              margin-top: 0px;
            }
            .delivery-car {
              width: 100px;
            }
            .delivery-road {
              width: 200px;
              height: 260px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Delivery
