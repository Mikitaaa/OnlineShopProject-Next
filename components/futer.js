import React from 'react'

import PropTypes from 'prop-types'

const Futer = (props) => {
  return (
    <>
      <div className={`futer-container ${props.rootClassName} `}>
        <div className="futer-policy">
          <div className="futer-name-logo">
            <h1 className="futer-text">{props.heading}</h1>
            <img
              alt={props.imageAlt}
              src={props.imageSrc1}
              className="futer-image"
            />
          </div>
          <span className="futer-text1">{props.text4}</span>
          <span className="futer-text2">{props.text5}</span>
        </div>
        <div className="futer-contacts">
          <div className="futer-contactshead">
            <h1 className="futer-headtext">{props.contacts}</h1>
          </div>
          <div className="futer-contacts1">
            <div className="futer-firstcontact">
              <span className="futer-firstphonenum">{props.phoneNum}</span>
              <a
                href="https://telegram.im/@p_miita"
                target="_blank"
                rel="noreferrer noopener"
                className="futer-link"
              >
                <img
                  alt={props.imageAlt11}
                  src={props.viberIcn1}
                  className="futer-vibericn"
                />
              </a>
            </div>
            <div className="futer-secondcontact">
              <span className="futer-secphonenum">+375 (29) 619-43-22</span>
              <div className="futer-contacticns">
                <a
                  href="https://telegram.im/@p_miita"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="futer-link1"
                >
                  <img
                    alt={props.imageAlt1}
                    src={props.viberIcn}
                    className="futer-vibericn1"
                  />
                </a>
                <a
                  href="https://telegram.im/@p_miita"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="futer-link2"
                >
                  <svg viewBox="0 0 1024 1024" className="futer-telegramicn">
                    <path d="M679.429 746.857l84-396c7.429-34.857-12.571-48.571-35.429-40l-493.714 190.286c-33.714 13.143-33.143 32-5.714 40.571l126.286 39.429 293.143-184.571c13.714-9.143 26.286-4 16 5.143l-237.143 214.286-9.143 130.286c13.143 0 18.857-5.714 25.714-12.571l61.714-59.429 128 94.286c23.429 13.143 40 6.286 46.286-21.714zM1024 512c0 282.857-229.143 512-512 512s-512-229.143-512-512 229.143-512 512-512 512 229.143 512 512z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="futer-emailcontact">
              <span className="futer-email">{props.text}</span>
              <svg viewBox="0 0 1024 1024" className="futer-mailicn">
                <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="futer-delivery">
          <div className="futer-deliveryhead">
            <h1 className="futer-deliveryhead1">{props.delivery}</h1>
          </div>
          <span className="futer-addr">{props.addr}</span>
        </div>
      </div>
      <style jsx>
        {`
          .futer-container {
            width: 100%;
            cursor: default;
            height: 30%;
            display: flex;
            position: relative;
            align-items: flex-start;
            justify-content: space-between;
            background-color: #efdba6;
          }
          .futer-policy {
            width: 33%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .futer-name-logo {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: flex-start;
          }
          .futer-text {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            align-self: center;
          }
          .futer-image {
            width: 40px;
            height: auto;
            margin-left: var(--dl-space-space-halfunit);
          }
          .futer-text1 {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-halfunit);
            font-size: 20px;
            transition: 0.3s;
          }
          .futer-text1:hover {
            color: #9f705a;
          }
          .futer-text2 {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-halfunit);
            font-size: 20px;
            transition: 0.3s;
          }
          .futer-text2:hover {
            color: #9f705a;
          }
          .futer-contacts {
            width: 33%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            flex-direction: column;
          }
          .futer-contactshead {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-unit);
            justify-content: center;
          }
          .futer-headtext {
            color: var(--dl-color-gray-2);
            width: 100%;
            font-size: 25px;
            text-align: center;
          }
          .futer-contacts1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
          }
          .futer-firstcontact {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .futer-firstphonenum {
            color: var(--dl-color-gray-2);
            font-size: 20px;
            align-self: center;
          }
          .futer-link {
            display: contents;
          }
          .futer-vibericn {
            width: 30px;
            height: 30px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .futer-vibericn:hover {
            fill: #9f705a;
            transition: filter 0.3s ease;
          }
          .futer-secondcontact {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .futer-secphonenum {
            color: var(--dl-color-gray-2);
            font-size: 20px;
            align-self: center;
          }
          .futer-contacticns {
            width: auto;
            height: auto;
            display: flex;
          }
          .futer-link1 {
            display: contents;
          }
          .futer-vibericn1 {
            width: 30px;
            height: 30px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .futer-vibericn1:hover {
            fill: green;
          }
          .futer-link2 {
            display: contents;
          }
          .futer-telegramicn {
            fill: var(--dl-color-gray-2);
            width: 30px;
            height: 30px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .futer-telegramicn:hover {
            fill: #9f705a;
          }
          .futer-emailcontact {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .futer-email {
            color: var(--dl-color-gray-2);
            font-size: 20px;
            align-self: center;
          }
          .futer-mailicn {
            fill: var(--dl-color-gray-2);
            width: 30px;
            height: 30px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-halfunit);
          }
          .futer-mailicn:hover {
            fill: #9f705a;
          }
          .futer-delivery {
            width: 33%;
            height: 100%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-end;
            flex-direction: column;
          }
          .futer-deliveryhead {
            width: auto;
            height: auto;
            padding: var(--dl-space-space-unit);
          }
          .futer-deliveryhead1 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
          }
          .futer-addr {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-halfunit);
            font-size: 20px;
            text-align: right;
            line-height: 1.5;
          }
          .futer-root-class-name {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }
          .futer-root-class-name1 {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }
          .futer-root-class-name2 {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }
          .futer-root-class-name3 {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }
          .futer-root-class-name4 {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }
          .futer-root-class-name5 {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }

          .futer-root-class-name9 {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }
          .futer-root-class-name10 {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }
          .futer-root-class-name11 {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }

          .futer-root-class-name15 {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }
          .futer-root-class-name16 {
            flex: 1;
            width: 100%;
            height: auto;
            margin-top: 0px;
          }

          @media (max-width: 1200px) {
            .futer-text {
              font-size: 20;
            }
            .futer-text1 {
              font-size: 18px;
            }
            .futer-text2 {
              font-size: 18px;
            }
            .futer-headtext {
              font-size: 20;
            }
            .futer-firstphonenum {
              font-size: 18px;
            }
            .futer-vibericn {
              width: 28px;
              height: 28px;
            }
            .futer-secphonenum {
              font-size: 18px;
            }
            .futer-vibericn1 {
              width: 28px;
              height: 28px;
            }
            .futer-telegramicn {
              width: 28px;
              height: 28px;
            }
            .futer-email {
              font-size: 18px;
            }
            .futer-mailicn {
              width: 28px;
              height: 28px;
            }
            .futer-deliveryhead1 {
              font-size: 20;
            }
            .futer-addr {
              font-size: 18px;
            }
            .futer-root-class-name {
              margin-top: 0px;
            }
            .futer-root-class-name1 {
              margin-top: 0px;
            }
            .futer-root-class-name2 {
              margin-top: 0px;
            }
            .futer-root-class-name3 {
              margin-top: 0px;
            }
            .futer-root-class-name4 {
              margin-top: 0px;
            }
            .futer-root-class-name5 {
              margin-top: 0px;
            }
            .futer-root-class-name9 {
              margin-top: 0px;
            }
            .futer-root-class-name10 {
              margin-top: 0px;
            }
            .futer-root-class-name11 {
              margin-top: 0px;
            }
            .futer-root-class-name15 {
              margin-top: 0px;
            }
            .futer-root-class-name16 {
              margin-top: 0px;
            }
          }
          @media (max-width: 991px) {
            .futer-text {
              font-size: 18;
            }
            .futer-image {
              width: 25px;
              height: 25px;
            }
            .futer-text1 {
              font-size: 16px;
            }
            .futer-text2 {
              font-size: 16px;
            }
            .futer-contacts {
              width: 40%;
            }
            .futer-headtext {
              font-size: 18;
            }
            .futer-firstphonenum {
              font-size: 16px;
            }
            .futer-vibericn {
              width: 25px;
            }
            .futer-secphonenum {
              color: var(--dl-color-gray-2);
              font-size: 16px;
            }
            .futer-vibericn1 {
              width: 25px;
            }
            .futer-telegramicn {
              width: 25px;
              height: 25px;
            }
            .futer-email {
              font-size: 16px;
            }
            .futer-mailicn {
              width: 25px;
              height: 25px;
            }
            .futer-delivery {
              width: 30%;
            }
            .futer-deliveryhead1 {
              font-size: 18;
            }
            .futer-addr {
              font-size: 16px;
            }
            .futer-root-class-name {
              margin: 0px;
            }
            .futer-root-class-name1 {
              margin: 0px;
            }
            .futer-root-class-name2 {
              margin: 0px;
            }
            .futer-root-class-name3 {
              margin: 0px;
            }
            .futer-root-class-name4 {
              margin: 0px;
            }
            .futer-root-class-name5 {
              margin: 0px;
            }
            .futer-root-class-name9 {
              margin: 0px;
            }
            .futer-root-class-name10 {
              margin: 0px;
            }
            .futer-root-class-name11 {
              margin: 0px;
            }
            .futer-root-class-name15 {
              margin: 0px;
            }
            .futer-root-class-name16 {
              margin: 0px;
            }
          }
          @media (max-width: 767px) {
            .futer-name-logo {
              padding: var(--dl-space-space-halfunit);
            }
            .futer-text {
              font-size: 14px;
            }
            .futer-image {
              width: 20px;
              height: 20px;
            }
            .futer-text1 {
              font-size: 11px;
            }
            .futer-text2 {
              font-size: 11px;
            }
            .futer-contacts {
              padding-left: var(--dl-space-space-halfunit);
              padding-right: var(--dl-space-space-halfunit);
            }
            .futer-contactshead {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .futer-headtext {
              font-size: 14px;
            }
            .futer-firstphonenum {
              font-size: 11px;
            }
            .futer-vibericn {
              width: 18px;
              height: 18px;
              margin-left: 5px;
            }
            .futer-secphonenum {
              font-size: 11px;
            }
            .futer-vibericn1 {
              width: 18px;
              height: 18px;
              margin-left: 5px;
            }
            .futer-telegramicn {
              width: 18px;
              height: 18px;
              margin-left: 5px;
            }
            .futer-email {
              font-size: 11px;
            }
            .futer-mailicn {
              width: 18px;
              height: 18px;
            }
            .futer-deliveryhead {
              padding: var(--dl-space-space-halfunit);
            }
            .futer-deliveryhead1 {
              font-size: 14px;
            }
            .futer-addr {
              font-size: 11px;
              padding-right: var(--dl-space-space-halfunit);
            }
            .futer-root-class-name6 {
              width: 100%;
              height: auto;
              position: 0px;
              align-self: flex-end;
            }
            .futer-root-class-name7 {
              width: 100%;
              height: auto;
              position: 0px;
              align-self: flex-end;
            }
            .futer-root-class-name12 {
              width: 100%;
              height: auto;
              position: 0px;
              align-self: flex-end;
            }
            .futer-root-class-name13 {
              width: 100%;
              height: auto;
              position: 0px;
              align-self: flex-end;
            }
            .futer-root-class-name14 {
              width: 100%;
              height: auto;
              position: 0px;
              align-self: flex-end;
            }
          }
          @media (max-width: 479px) {
            .futer-policy {
              width: 30%;
              padding: var(--dl-space-space-halfunit);
            }
            .futer-text {
              font-size: 9px;
            }
            .futer-image {
              width: 12px;
              height: 12px;
              margin-left: 3px;
            }
            .futer-text1 {
              font-size: 8px;
            }
            .futer-text2 {
              font-size: 8px;
            }
            .futer-contacts {
              padding: var(--dl-space-space-halfunit);
            }
            .futer-contactshead {
              justify-content: flex-end;
            }
            .futer-headtext {
              font-size: 9;
            }
            .futer-contacts1 {
              width: 125px;
              align-items: flex-start;
              justify-content: center;
            }
            .futer-firstcontact {
              padding: var(--dl-space-space-halfunit);
            }
            .futer-firstphonenum {
              font-size: 8px;
            }
            .futer-vibericn {
              width: 13px;
              height: 13px;
              margin-left: 2px;
            }
            .futer-secondcontact {
              padding-top: 0px;
              padding-bottom: 0px;
            }
            .futer-secphonenum {
              font-size: 8px;
            }
            .futer-vibericn1 {
              width: 13px;
              height: 13px;
              margin-left: 2px;
            }
            .futer-telegramicn {
              width: 13px;
              height: 13px;
              margin-left: 2px;
            }
            .futer-email {
              font-size: 8px;
            }
            .futer-mailicn {
              width: 13px;
              height: 13px;
            }
            .futer-delivery {
              width: 30%;
              align-items: center;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: 0px;
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: 0px;
            }
            .futer-deliveryhead {
              align-self: flex-end;
            }
            .futer-deliveryhead1 {
              font-size: 9px;
            }
            .futer-addr {
              font-size: 8px;
              text-align: right;
            }
            .futer-root-class-name {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .futer-root-class-name1 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .futer-root-class-name2 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .futer-root-class-name3 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .futer-root-class-name4 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .futer-root-class-name5 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .futer-root-class-name6 {
              align-self: flex-end;
            }
            .futer-root-class-name7 {
              align-self: flex-end;
            }
            .futer-root-class-name9 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .futer-root-class-name10 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .futer-root-class-name11 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .futer-root-class-name12 {
              align-self: flex-end;
            }
            .futer-root-class-name13 {
              align-self: flex-end;
            }
            .futer-root-class-name14 {
              align-self: flex-end;
            }
            .futer-root-class-name15 {
              flex: 1;
              width: 100%;
              height: auto;
            }
            .futer-root-class-name16 {
              flex: 1;
              width: 100%;
              height: auto;
            }
          }
        `}
      </style>
    </>
  )
}

Futer.defaultProps = {
  imageAlt11: 'image',
  viberIcn1: '/Icons/viber-200h.png',
  text: 'ground_shop@gmail.com',
  text3: 'Политика безопасности',
  addr: 'Г.п Радошкович, ул. Серебрянка 43А',
  text4: 'Политика безопасности',
  imageSrc1: '/Icons/logo-200h.png',
  contacts: 'Контактная информация',
  rootClassName: '',
  imageAlt: 'image',
  text5: 'Условия соглашения',
  delivery: 'Доставка',
  viberIcn: '/Icons/viber-200h.png',
  heading: 'GroundShop',
  imageAlt1: 'image',
  text1: 'Политика безопасности',
  phoneNum: '+375 (44) 702-28-30',
}

Futer.propTypes = {
  imageAlt11: PropTypes.string,
  viberIcn1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  addr: PropTypes.string,
  text4: PropTypes.string,
  imageSrc1: PropTypes.string,
  contacts: PropTypes.string,
  rootClassName: PropTypes.string,
  imageAlt: PropTypes.string,
  text5: PropTypes.string,
  delivery: PropTypes.string,
  viberIcn: PropTypes.string,
  heading: PropTypes.string,
  imageAlt1: PropTypes.string,
  text1: PropTypes.string,
  phoneNum: PropTypes.string,
}

export default Futer
