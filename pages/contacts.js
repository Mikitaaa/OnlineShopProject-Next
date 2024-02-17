import React from 'react'
import Head from 'next/head'

import Header1 from '../components/header1'
import Futer from '../components/futer'
import Map from '../components/map'

const Contacts = (props) => {
  return (
    <>
      <div className="contacts-container">
        <Head>
          <title>Contacts - ground shop</title>
          <meta property="og:title" content="Contacts - ground shop" />
        </Head>
        <Header1 rootClassName="header1-root-class-name3"></Header1>
        <div className="contacts-ourcontacts">
          <h1 className="contacts-text">
            <span>Наши контакты</span>
            <br></br>
          </h1>
        </div>
        <div className="contacts-firstinfo">
          <div className="contacts-mobilephone">
            <div className="contacts-contentsmobile">
              <svg viewBox="0 0 1024 1024" className="contacts-phoneicon">
                <path d="M640 512q0-52-38-90t-90-38v-86q88 0 151 63t63 151h-86zM810 512q0-124-87-211t-211-87v-86q160 0 272 112t112 272h-86zM854 662q18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30v2q0 82 24 150 4 8 4 14 0 20-14 30l-94 94q40 76 123 159t159 123l94-94q14-14 30-14 6 0 14 4 72 24 152 24z"></path>
              </svg>
              <h1 className="contacts-text03">Мобильная связь</h1>
            </div>
            <span className="contacts-n-ame">Владимир Владимирович</span>
            <a href="tel:+375 (29) 619-43-22" className="contacts-firstnumber">
              +375 (29) 619-43-22
            </a>
            <span className="contacts-name">Денис Валерьевич</span>
            <a href="tel:+375 (44) 702-28-30" className="contacts-secondnumber">
              +375 (44) 702-28-30
            </a>
          </div>
          <div className="contacts-socialmedia">
            <div className="contacts-socialcontents">
              <svg viewBox="0 0 1024 1024" className="contacts-mediaicon">
                <path d="M864 704c-45.16 0-85.92 18.738-115.012 48.83l-431.004-215.502c1.314-8.252 2.016-16.706 2.016-25.328s-0.702-17.076-2.016-25.326l431.004-215.502c29.092 30.090 69.852 48.828 115.012 48.828 88.366 0 160-71.634 160-160s-71.634-160-160-160-160 71.634-160 160c0 8.622 0.704 17.076 2.016 25.326l-431.004 215.504c-29.092-30.090-69.852-48.83-115.012-48.83-88.366 0-160 71.636-160 160 0 88.368 71.634 160 160 160 45.16 0 85.92-18.738 115.012-48.828l431.004 215.502c-1.312 8.25-2.016 16.704-2.016 25.326 0 88.368 71.634 160 160 160s160-71.632 160-160c0-88.364-71.634-160-160-160z"></path>
              </svg>
              <h1 className="contacts-text04">Социальные сети</h1>
            </div>
            <div className="contacts-media">
              <a
                href="https://telegram.im/@p_miita"
                target="_blank"
                rel="noreferrer noopener"
                className="contacts-link"
              >
                <div className="contacts-telegram">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="contacts-telegramicon"
                  >
                    <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
                  </svg>
                  <span className="contacts-text05">
                    <span>+375 (29) 619-43-22</span>
                    <br></br>
                  </span>
                </div>
              </a>
              <a
                href="viber://chat?number=%2B375445871336"
                target="_blank"
                rel="noreferrer noopener"
                className="contacts-link1"
              >
                <div className="contacts-viberfirst">
                  <img
                    alt="image"
                    src="/Icons/viber-200h.png"
                    className="contacts-image"
                  />
                  <span className="contacts-text08">
                    <span>+375 (29) 619-43-22</span>
                    <br></br>
                  </span>
                </div>
              </a>
              <a
                href="viber://chat?number=%2B375447022830"
                target="_blank"
                rel="noreferrer noopener"
                className="contacts-link2"
              >
                <div className="contacts-vibersec">
                  <img
                    alt="image"
                    src="/Icons/viber-200h.png"
                    className="contacts-image1"
                  />
                  <span className="contacts-text11">+375 (44) 702-28-30</span>
                </div>
              </a>
            </div>
          </div>
          <div className="contacts-mailcontaner">
            <div className="contacts-mail">
              <svg viewBox="0 0 1024 1024" className="contacts-mailicon">
                <path d="M512 470l342-214h-684zM854 768v-426l-342 212-342-212v426h684zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
              </svg>
              <h1 className="contacts-text12">Электронная почта</h1>
            </div>
            <div className="contacts-mailtext">
              <a
                href="https://telegram.im/@p_miita"
                target="_blank"
                rel="noreferrer noopener"
                className="contacts-link3"
              >
                ground_shop@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="contacts-secondinfo">
          <div className="contacts-warehouse">
            <div className="contacts-address">
              <svg viewBox="0 0 1024 1024" className="contacts-addressicon">
                <path d="M938.667 426.667c0-117.803-47.787-224.555-124.971-301.696s-183.893-124.971-301.696-124.971-224.555 47.787-301.696 124.971-124.971 183.893-124.971 301.696c0 24.277 2.261 48.128 6.4 71.509 11.691 66.048 38.357 128.171 71.765 184.32 116.565 195.883 324.821 334.336 324.821 334.336 14.123 9.259 32.64 9.771 47.317 0 0 0 208.299-138.453 324.821-334.336 33.408-56.149 60.075-118.272 71.765-184.32 4.181-23.381 6.443-47.232 6.443-71.509zM853.333 426.667c0 18.944-1.749 37.845-5.077 56.661-9.429 53.333-31.445 105.728-61.099 155.563-83.285 139.947-220.416 249.643-275.157 290.091-54.784-40.448-191.872-150.144-275.157-290.091-29.653-49.835-51.669-102.229-61.099-155.563-3.328-18.816-5.077-37.717-5.077-56.661 0-94.251 38.144-179.541 99.968-241.365s147.115-99.968 241.365-99.968 179.541 38.144 241.365 99.968 99.968 147.115 99.968 241.365zM682.667 426.667c0-47.104-19.157-89.856-50.005-120.661s-73.557-50.005-120.661-50.005-89.856 19.157-120.661 50.005-50.005 73.557-50.005 120.661 19.157 89.856 50.005 120.661 73.557 50.005 120.661 50.005 89.856-19.157 120.661-50.005 50.005-73.557 50.005-120.661zM597.333 426.667c0 23.595-9.515 44.843-25.003 60.331s-36.736 25.003-60.331 25.003-44.843-9.515-60.331-25.003-25.003-36.736-25.003-60.331 9.515-44.843 25.003-60.331 36.736-25.003 60.331-25.003 44.843 9.515 60.331 25.003 25.003 36.736 25.003 60.331z"></path>
              </svg>
              <h1 className="contacts-text13">Склады</h1>
            </div>
            <div className="contacts-warehouseadress">
              <span className="contacts-text14">
                Г.п Радошкович, ул. Серебрянка 43А
              </span>
              <span className="contacts-text15">
                Минский район, Щомыслицкий с/с, район аг. Озерцо
              </span>
            </div>
          </div>
          <div className="contacts-mapconteiner">
            <Map />
          </div>
        </div>
        <Futer rootClassName="futer-root-class-name14"></Futer>
      </div>
      <style jsx>
        {`
          .contacts-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contacts-ourcontacts {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: center;
            justify-content: flex-start;
          }
          .contacts-text {
            color: var(--dl-color-gray-2);
            cursor: default;
            padding: var(--dl-space-space-unit);
            font-size: 60px;
            align-self: flex-start;
            padding-top: 16px;
            margin-bottom: 0px;
          }
          .contacts-firstinfo {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            justify-content: space-between;
          }
          .contacts-mobilephone {
            flex: 0 0 auto;
            width: auto;
            cursor: default;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            position: relative;
            align-items: flex-start;
            margin-left: 0px;
            flex-direction: column;
            justify-content: space-between;
          }
          .contacts-contentsmobile {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contacts-phoneicon {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            margin-right: var(--dl-space-space-unit);
          }
          .contacts-text03 {
            color: var(--dl-color-gray-2);
            font-size: 30px;
          }
          .contacts-n-ame {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-unit);
            font-size: 23px;
            margin-bottom: 6px;
          }
          .contacts-firstnumber {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-unit);
            font-size: 23px;
            transition: 0.3s;
            margin-bottom: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .contacts-firstnumber:hover {
            transform: translateY(-10px);
            border-color: var(--dl-color-gray-2);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contacts-name {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-unit);
            font-size: 23px;
            margin-bottom: 6px;
          }
          .contacts-secondnumber {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-unit);
            font-size: 23px;
            transition: 0.3s;
            text-decoration: none;
          }
          .contacts-secondnumber:hover {
            transform: translateY(-10px);
            border-color: var(--dl-color-gray-2);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contacts-socialmedia {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .contacts-socialcontents {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            margin-top: 0%;
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .contacts-mediaicon {
            fill: var(--dl-color-gray-2);
            width: 45px;
            height: 45px;
            margin-right: var(--dl-space-space-unit);
          }
          .contacts-text04 {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 30px;
          }
          .contacts-media {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .contacts-link {
            display: contents;
          }
          .contacts-telegram {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .contacts-telegram:hover {
            transform: translateY(-10px);
            border-color: var(--dl-color-gray-2);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contacts-telegramicon {
            fill: var(--dl-color-gray-2);
            width: 30px;
            height: 30px;
            transition: 0.3s;
            margin-right: var(--dl-space-space-unit);
          }

          .contacts-text05 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
          }
          .contacts-link1 {
            display: contents;
          }
          .contacts-viberfirst {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            transition: 0.3s;
            align-items: center;
            margin-bottom: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .contacts-viberfirst:hover {
            transform: translateY(-10px);
            border-color: var(--dl-color-gray-2);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contacts-image {
            width: 30px;
            height: 30px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
          }
          .contacts-text08 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
          }
          .contacts-link2 {
            display: contents;
          }
          .contacts-vibersec {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            transform: (0px);
            transition: 0.3s;
            align-items: center;
            text-decoration: none;
          }
          .contacts-vibersec:hover {
            transform: translateY(-10px);
            border-color: var(--dl-color-gray-2);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contacts-image1 {
            width: 30px;
            height: 30px;
            object-fit: cover;
            margin-right: var(--dl-space-space-unit);
          }
          .contacts-text11 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
          }
          .contacts-mailcontaner {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
            flex-direction: column;
          }
          .contacts-mail {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .contacts-mailicon {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            margin-right: var(--dl-space-space-unit);
          }
          .contacts-text12 {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 30px;
          }
          .contacts-mailtext {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
          }
          .contacts-link3 {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-unit);
            font-size: 23px;
            transition: 0.3s;
            text-decoration: none;
          }
          .contacts-link3:hover {
            transform: translateY(-10px);
            border-color: var(--dl-color-gray-2);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .contacts-secondinfo {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
          }
          .contacts-warehouse {
            flex: 0 0 auto;
            width: 50%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
          }
          .contacts-address {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-unit);
            justify-content: flex-start;
          }
          .contacts-addressicon {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            margin-right: var(--dl-space-space-unit);
          }
          .contacts-text13 {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 31px;
          }
          .contacts-warehouseadress {
            flex: 0 0 auto;
            width: auto;
            cursor: default;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .contacts-text14 {
            color: var(--dl-color-gray-2);
            width: auto;
            padding: var(--dl-space-space-halfunit);
            font-size: 23px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .contacts-text15 {
            color: var(--dl-color-gray-2);
            width: auto;
            padding: var(--dl-space-space-halfunit);
            font-size: 23px;
          }
          .contacts-mapconteiner {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }
          .contacts-image2 {
            width: 100%;
            height: 100%;
          }
          @media (max-width: 1200px) {
            .contacts-ourcontacts {
              margin-top: var(--dl-space-space-twounits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .contacts-text {
              font-size: 55px;
            }
            .contacts-firstinfo {
              padding: var(--dl-space-space-unit);
            }
            .contacts-phoneicon {
              width: 45px;
              height: 45px;
            }
            .contacts-text03 {
              font-size: 23px;
            }
            .contacts-n-ame {
              font-size: 18px;
            }
            .contacts-firstnumber {
              font-size: 18px;
            }
            .contacts-name {
              font-size: 18px;
            }
            .contacts-secondnumber {
              font-size: 18px;
            }
            .contacts-text04 {
              font-size: 23px;
            }
            .contacts-telegramicon {
              width: 20px;
              height: 20px;
            }
            .contacts-text05 {
              font-size: 18px;
            }
            .contacts-image {
              width: 20px;
              height: 20px;
            }
            .contacts-text08 {
              font-size: 18px;
            }
            .contacts-image1 {
              width: 20px;
              height: 20px;
            }
            .contacts-text11 {
              font-size: 18px;
            }
            .contacts-mailicon {
              width: 45px;
            }
            .contacts-text12 {
              font-size: 23px;
            }
            .contacts-link3 {
              font-size: 18px;
            }
            .contacts-secondinfo {
              padding: var(--dl-space-space-unit);
            }
            .contacts-addressicon {
              width: 45px;
            }
            .contacts-text13 {
              font-size: 24px;
            }
            .contacts-text14 {
              font-size: 18px;
            }
            .contacts-text15 {
              font-size: 18px;
            }
          }
          @media (max-width: 991px) {
            .contacts-ourcontacts {
              margin-bottom: 0px;
            }
            .contacts-text {
              font-size: 45px;
            }
            .contacts-contentsmobile {
              align-items: flex-start;
            }
            .contacts-phoneicon {
              width: 25px;
              height: 35px;
            }
            .contacts-text03 {
              font-size: 17px;
              align-self: center;
            }
            .contacts-n-ame {
              font-size: 15px;
            }
            .contacts-firstnumber {
              font-size: 15px;
            }
            .contacts-name {
              font-size: 15px;
            }
            .contacts-secondnumber {
              font-size: 15px;
            }
            .contacts-mediaicon {
              width: 25px;
              height: 25px;
            }
            .contacts-text04 {
              font-size: 17px;
              align-self: flex-end;
            }
            .contacts-telegramicon {
              width: 23px;
              height: 23px;
            }
            .contacts-text05 {
              font-size: 15px;
            }
            .contacts-image {
              width: 23px;
              height: 23px;
            }
            .contacts-text08 {
              font-size: 15px;
            }
            .contacts-image1 {
              width: 23px;
              height: 23px;
            }
            .contacts-text11 {
              font-size: 15px;
            }
            .contacts-mailcontaner {
              padding-top: var(--dl-space-space-unit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .contacts-mailicon {
              width: 25px;
              height: 25px;
            }
            .contacts-text12 {
              font-size: 17px;
              align-self: flex-end;
            }
            .contacts-link3 {
              padding: var(--dl-space-space-unit);
              font-size: 15px;
            }
            .contacts-addressicon {
              width: 25px;
              height: 25px;
            }
            .contacts-text13 {
              font-size: 18px;
            }
            .contacts-text14 {
              font-size: 15px;
            }
            .contacts-text15 {
              font-size: 15px;
            }
          }
          @media (max-width: 767px) {
            .contacts-ourcontacts {
              justify-content: flex-start;
            }
            .contacts-text {
              font-size: 55px;
              align-self: center;
              text-align: center;
            }
            .contacts-firstinfo {
              flex-direction: column;
            }
            .contacts-phoneicon {
              width: 35px;
            }
            .contacts-text03 {
              font-size: 30px;
            }
            .contacts-n-ame {
              font-size: 20px;
            }
            .contacts-firstnumber {
              font-size: 20px;
            }
            .contacts-name {
              font-size: 20px;
            }
            .contacts-secondnumber {
              font-size: 20px;
            }
            .contacts-mediaicon {
              width: 35px;
              height: 35px;
            }
            .contacts-text04 {
              font-size: 30px;
            }
            .contacts-telegramicon {
              width: 20px;
              height: 20px;
            }
            .contacts-text05 {
              font-size: 20px;
            }
            .contacts-image {
              width: 20px;
              height: 20px;
            }
            .contacts-text08 {
              font-size: 20px;
            }
            .contacts-image1 {
              width: 20px;
              height: 20px;
            }
            .contacts-text11 {
              font-size: 20px;
            }
            .contacts-mail {
              padding-left: var(--dl-space-space-unit);
            }
            .contacts-mailicon {
              width: 45px;
              height: 45px;
            }
            .contacts-text12 {
              font-size: 30px;
            }
            .contacts-link3 {
              font-size: 20px;
            }
            .contacts-secondinfo {
              flex-direction: column;
            }
            .contacts-warehouse {
              width: 100%;
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .contacts-address {
              padding-left: 0px;
            }
            .contacts-addressicon {
              width: 45px;
              height: 45px;
            }
            .contacts-text13 {
              font-size: 30px;
            }
            .contacts-text14 {
              font-size: 20px;
            }
            .contacts-text15 {
              font-size: 20px;
            }
            .contacts-mapconteiner {
              align-self: center;
            }
          }
          @media (max-width: 479px) {
            .contacts-ourcontacts {
              align-self: center;
              justify-content: flex-start;
            }
            .contacts-text {
              font-size: 32px;
            }
            .contacts-firstinfo {
              flex-direction: column;
            }
            .contacts-phoneicon {
              width: 40px;
              height: 40px;
            }
            .contacts-text03 {
              font-size: 25px;
            }
            .contacts-n-ame {
              font-size: 18px;
            }
            .contacts-firstnumber {
              font-size: 18px;
            }
            .contacts-name {
              font-size: 18px;
            }
            .contacts-secondnumber {
              font-size: 18px;
            }
            .contacts-mediaicon {
              width: 40px;
              height: 40px;
            }
            .contacts-text04 {
              font-size: 25px;
            }
            .contacts-text05 {
              font-size: 18px;
            }
            .contacts-text08 {
              font-size: 18px;
            }
            .contacts-text11 {
              font-size: 18px;
            }
            .contacts-mailcontaner {
              padding: var(--dl-space-space-unit);
            }
            .contacts-mail {
              margin: var(--dl-space-space-unit);
              padding-left: 0px;
            }
            .contacts-mailicon {
              width: 45px;
              height: 45px;
            }
            .contacts-text12 {
              font-size: 25px;
            }
            .contacts-link3 {
              font-size: 18px;
            }
            .contacts-secondinfo {
              flex-direction: column;
            }
            .contacts-warehouse {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .contacts-address {
              padding-left: var(--dl-space-space-unit);
            }
            .contacts-addressicon {
              width: 40px;
              height: 40px;
            }
            .contacts-text13 {
              font-size: 25px;
            }
            .contacts-text14 {
              font-size: 18px;
            }
            .contacts-text15 {
              font-size: 18px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Contacts
