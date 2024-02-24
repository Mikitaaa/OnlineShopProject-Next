import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Header1 from '../components/header1'
import Futer from '../components/futer'
import FeedbackOrderForm from '../components/FeedbackOrderForm'

const Feedback = (props) => {
  return (
    <>
      <div className="feedback-container">
        <Head>
          <title>Обратная связь магазина GroundShop в Минске</title>
          <meta property="og:title" content="Обратная связь магазина GroundShop в Минске" />
          <meta name="description" content='Обратная связь GroundShop. Получить консультацию онлайн. Заполнить форму консультации. Узнать подбобности заказа.'></meta>
          <meta name="keywords" content=''></meta>
        </Head>
        <Header1 rootClassName="header1-root-class-name5"></Header1>
        <div className="feedback-infoform">
          <div className="feedback-infomation">
            <h1 className="feedback-text">Обратная связь</h1>
            <span className="feedback-text1">
              <span>
                Если у вас есть вопросы о наших товарах или вы хотите оформить
                заказ, вы можете заполнить форму или
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <Link href="/contacts">
                <a className="feedback-link">связаться с нами</a>
              </Link>
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
          <FeedbackOrderForm></FeedbackOrderForm>
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
          .feedback-link {
            color: #12C412;
            transition: 0.3s;
          }
          .feedback-link:hover {
            color: #09DE09;
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
          }
        `}
      </style>
    </>
  )
}

export default Feedback
