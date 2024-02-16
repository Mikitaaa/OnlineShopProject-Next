import React from 'react'
import Head from 'next/head'

import Header1 from '../components/header1'
import Futer from '../components/futer'

const Feedback = (props) => {
  return (
    <>
      <div className="feedback-container">
        <Head>
          <title>Feedback - ground shop</title>
          <meta property="og:title" content="Feedback - ground shop" />
        </Head>
        <Header1 rootClassName="header1-root-class-name5"></Header1>
        <div className="feedback-infoform">
          <div className="feedback-infomation">
            <h1 className="feedback-text">Обратная связь</h1>
            <span className="feedback-text1">
              <span>
                Если у вас есть вопросы о наших товарах или вы хотите оформить
                заказ, вы можете заполнить форму
              </span>
              <br></br>
              <br></br>
              <span>Мы свяжемся с вами в ближайшее время!</span>
            </span>
            <div className="feedback-picture">
              <img
                alt="image"
                src="/Feedback/950299-600w.png"
                className="feedback-image"
              />
              <img
                alt="image"
                src="/Feedback/1393630-600w.png"
                className="feedback-people"
              />
            </div>
          </div>
          <div className="feedback-order-form">
            <form className="feedback-form">
              <div className="feedback-name">
                <div className="feedback-container1">
                  <svg viewBox="0 0 1024 1024" className="feedback-icon">
                    <path d="M470 854l170-172h256v172h-426zM264 768l370-370-52-52-368 370v52h50zM786 248q26 26 26 60t-26 60l-486 486h-172v-174q480-478 486-484 26-26 60-26t60 26z"></path>
                  </svg>
                  <span className="feedback-text6">Имя</span>
                </div>
                <input
                  type="text"
                  name="Поле для имени"
                  required
                  className="feedback-textinput input"
                />
              </div>
              <div className="feedback-telephone-num">
                <div className="feedback-container2">
                  <svg viewBox="0 0 1024 1024" className="feedback-icon2">
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                  <span className="feedback-text7">Номер телефона</span>
                </div>
                <input
                  type="text"
                  name="строка для телефона"
                  required
                  className="feedback-textinput1 input"
                />
              </div>
              <div className="feedback-comment">
                <div className="feedback-container3">
                  <svg viewBox="0 0 1024 1024" className="feedback-icon4">
                    <path d="M402.286 219.429c-178.286 0-329.143 100.571-329.143 219.429 0 62.857 42.286 123.429 115.429 165.714l55.429 32-20 48c12-6.857 24-14.286 35.429-22.286l25.143-17.714 30.286 5.714c28.571 5.143 57.714 8 87.429 8 178.286 0 329.143-100.571 329.143-219.429s-150.857-219.429-329.143-219.429zM402.286 146.286c222.286 0 402.286 130.857 402.286 292.571s-180 292.571-402.286 292.571c-34.857 0-68.571-3.429-100.571-9.143-47.429 33.714-101.143 58.286-158.857 73.143-15.429 4-32 6.857-49.143 9.143h-1.714c-8.571 0-16.571-6.857-18.286-16.571v0c-2.286-10.857 5.143-17.714 11.429-25.143 22.286-25.143 47.429-47.429 66.857-94.857-92.571-53.714-152-136.571-152-229.143 0-161.714 180-292.571 402.286-292.571zM872 814.286c19.429 47.429 44.571 69.714 66.857 94.857 6.286 7.429 13.714 14.286 11.429 25.143v0c-2.286 10.286-10.857 17.714-20 16.571-17.143-2.286-33.714-5.143-49.143-9.143-57.714-14.857-111.429-39.429-158.857-73.143-32 5.714-65.714 9.143-100.571 9.143-103.429 0-198.286-28.571-269.714-75.429 16.571 1.143 33.714 2.286 50.286 2.286 122.857 0 238.857-35.429 327.429-99.429 95.429-69.714 148-164 148-266.286 0-29.714-4.571-58.857-13.143-86.857 96.571 53.143 159.429 137.714 159.429 233.143 0 93.143-59.429 175.429-152 229.143z"></path>
                  </svg>
                  <span className="feedback-text8">Комментарий</span>
                </div>
                <textarea
                  name="Поле для комментария"
                  placeholder="Оставьте комментарий"
                  className="feedback-textarea"
                ></textarea>
              </div>
              <div className="feedback-container4">
                <input
                  type="checkbox"
                  name="Agreement"
                  required
                  className="feedback-checkbox button"
                />
                <span className="feedback-privaty-policy-text">
                  Согласен с Политикой обработки персональных данных
                </span>
              </div>
              <button
                type="submit"
                className="feedback-send-order-button button"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
        <Futer rootClassName="futer-root-class-name7"></Futer>
      </div>
      <style jsx>
        {`
          .feedback-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .feedback-infoform {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: space-between;
          }
          .feedback-infomation {
            flex: 0 0 auto;
            width: 50%;
            cursor: default;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            position: relative;
            flex-direction: column;
            justify-content: flex-end;
          }
          .feedback-text {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-oneandhalfunits);
            font-size: 40px;
            margin-bottom: var(--dl-space-space-unit);
          }
          .feedback-text1 {
            color: var(--dl-color-gray-2);
            width: 100%;
            padding: var(--dl-space-space-oneandhalfunits);
            font-size: 30px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .feedback-picture {
            width: 100%;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            margin-top: var(--dl-space-space-twounits);
            align-items: flex-end;
            justify-content: flex-start;
          }
          .feedback-image {
            width: 33%;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
            margin-right: 23%;
          }
          .feedback-people {
            width: 33%;
            padding: var(--dl-space-space-unit);
            object-fit: cover;
          }
          .feedback-order-form {
            flex: 0 0 auto;
            width: 40%;
            height: 100%;
            display: flex;
            align-self: center;
            flex-direction: column;
          }
          .feedback-form {
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .feedback-name {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .feedback-container1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .feedback-icon {
            width: 30px;
            height: 30px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .feedback-text6 {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 25px;
            margin-bottom: 0px;
          }
          .feedback-textinput {
            color: var(--dl-color-primary-100);
            width: 75%;
            cursor: default;
            height: 50%;
            font-size: 20px;
            transition: 0.3s;
            border-color: var(--dl-color-gray-2);
            border-radius: 0px;
            background-color: var(--dl-color-gray-white);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .feedback-textinput:focus {
            outline: none;
            border-color: #d2a770;
          }
          .feedback-telephone-num {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .feedback-container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .feedback-icon2 {
            fill: var(--dl-color-gray-2);
            width: 30px;
            height: 30px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .feedback-text7 {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 25px;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .feedback-textinput1 {
            color: var(--dl-color-primary-100);
            width: 75%;
            cursor: default;
            height: 50%;
            font-size: 20px;
            transition: 0.3s;
            border-color: var(--dl-color-gray-2);
            border-width: 2px;
            border-radius: 0px;
            background-color: var(--dl-color-gray-white);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .feedback-textinput1:focus {
            outline: none;
            border-color: #d2a770;
          }
          .feedback-comment {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
          }
          .feedback-container3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .feedback-icon4 {
            fill: var(--dl-color-gray-2);
            width: 30px;
            height: 30px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .feedback-text8 {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 25px;
          }
          .feedback-textarea {
            color: var(--dl-color-primary-100);
            width: 75%;
            cursor: default;
            height: 172px;
            padding: 0.5rem;
            font-size: 20px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            border-color: var(--dl-color-gray-2);
            border-width: 2px;
            border-radius: 4px;
            background-color: var(--dl-color-gray-white);
          }
          .feedback-textarea:focus {
            outline: none;
            border-color: #d2a770;
          }
          .feedback-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .feedback-checkbox {
            width: 25px;
            height: 25px;
            align-self: center;
            margin-left: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-white);
          }
          .feedback-privaty-policy-text {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 20px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-right: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .feedback-send-order-button {
            color: var(--dl-color-gray-2);
            cursor: pointer;
            font-size: 30px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-2);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-unit);
            background-color: #f1dbbc;
          }
          .feedback-send-order-button:hover {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-2);
          }
          @media (max-width: 1200px) {
            .feedback-picture {
              margin-top: 0px;
            }
            .feedback-image {
              width: 35%;
            }
            .feedback-people {
              width: 35%;
            }
            .feedback-order-form {
              width: 45%;
              height: 100%;
            }
            .feedback-form {
              height: 75%;
              position: relative;
            }
            .feedback-name {
              width: 428px;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .feedback-icon {
              width: 22px;
              height: 22px;
            }
            .feedback-text6 {
              font-size: 17px;
            }
            .feedback-textinput {
              width: 79%;
            }
            .feedback-telephone-num {
              width: 432px;
            }
            .feedback-icon2 {
              width: 22px;
              height: 22px;
            }
            .feedback-text7 {
              font-size: 17px;
            }
            .feedback-textinput1 {
              width: 79%;
              height: 50%;
            }
            .feedback-container4 {
              width: 424px;
              justify-content: flex-start;
            }
            .feedback-checkbox {
              width: 22px;
              height: 22px;
            }
            .feedback-privaty-policy-text {
              font-size: 17px;
            }
            .feedback-send-order-button {
              width: 35%;
              height: 10%;
              font-size: 25px;
            }
          }
          @media (max-width: 991px) {
            .feedback-picture {
              width: auto;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .feedback-image {
              width: 40%;
              margin-right: 17%;
            }
            .feedback-people {
              width: 40%;
            }
            .feedback-order-form {
              width: 50%;
            }
            .feedback-form {
              height: auto;
            }
            .feedback-name {
              width: 80%;
            }
            .feedback-textinput {
              width: 100%;
            }
            .feedback-telephone-num {
              width: 80%;
            }
            .feedback-textinput1 {
              width: 100%;
            }
            .feedback-comment {
              width: 90%;
            }
            .feedback-textarea {
              width: 100%;
            }
            .feedback-container4 {
              width: 100%;
            }
            .feedback-checkbox {
              width: 25px;
              height: 25px;
            }
            .feedback-send-order-button {
              width: 40%;
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .feedback-infoform {
              height: 100%;
              flex-direction: column;
            }
            .feedback-infomation {
              width: 100%;
            }
            .feedback-picture {
              justify-content: space-between;
            }
            .feedback-image {
              width: 33%;
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: 0px;
            }
            .feedback-people {
              width: 33%;
              margin-right: var(--dl-space-space-oneandhalfunits);
            }
            .feedback-order-form {
              width: 100%;
              height: 100%;
              position: static;
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .feedback-form {
              width: auto;
              height: 100%;
            }
            .feedback-name {
              width: 75%;
            }
            .feedback-icon {
              width: 30px;
              height: 30px;
            }
            .feedback-text6 {
              font-size: 25px;
            }
            .feedback-telephone-num {
              width: 75%;
            }
            .feedback-icon2 {
              width: 30px;
              height: 30px;
            }
            .feedback-text7 {
              font-size: 25px;
            }
            .feedback-container4 {
              width: 75%;
            }
            .feedback-checkbox {
              width: 30px;
              height: 30px;
            }
            .feedback-send-order-button {
              width: 30%;
              margin-left: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .feedback-image {
              width: 40%;
              padding: 0px;
              margin-left: 0px;
            }
            .feedback-people {
              width: 40%;
              padding: 0px;
              margin-right: 0px;
            }
            .feedback-order-form {
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .feedback-form {
              height: auto;
            }
            .feedback-name {
              width: auto;
            }
            .feedback-telephone-num {
              width: auto;
            }
            .feedback-comment {
              width: 100%;
            }
            .feedback-container4 {
              width: 291px;
            }
            .feedback-send-order-button {
              width: 40%;
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Feedback
