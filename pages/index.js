import React from 'react'
import Head from 'next/head'

import Header1 from '../components/header1'
import GreenAdvantage from '../components/green-advantage'
import Futer from '../components/futer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>ground shop</title>
          <meta property="og:title" content="ground shop" />
        </Head>
        <Header1
          imageSrc="/Icons/logo-1500h.png"
          imageSrc2="/Icons/logo-1500h.png"
          rootClassName="header1-root-class-name1"
        ></Header1>
        <div className="home-slides">
          <div
            data-thq="slider"
            data-navigation="true"
            data-pagination="true"
            className="home-slider swiper"
          >
            <div data-thq="slider-wrapper" className="swiper-wrapper">
              <div
                data-thq="slider-slide"
                className="home-slider-slide swiper-slide"
              >
                <h1 className="home-text">Природные решения для вашего сада</h1>
              </div>
              <div
                data-thq="slider-slide"
                className="home-slider-slide1 swiper-slide"
              >
                <h1 className="home-text01">Торф для любых растений</h1>
              </div>
              <div
                data-thq="slider-slide"
                className="home-slider-slide2 swiper-slide"
              >
                <h1 className="home-text02">
                  Урожайность без ущерба для кошелька!
                </h1>
              </div>
            </div>
            <div
              data-thq="slider-pagination"
              className="home-slider-pagination swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal"
            >
              <div
                data-thq="slider-pagination-bullet"
                className="home-slider-pagination-bullet swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="home-slider-pagination-bullet1 swiper-pagination-bullet swiper-pagination-bullet-active"
              ></div>
              <div
                data-thq="slider-pagination-bullet"
                className="home-slider-pagination-bullet2 swiper-pagination-bullet swiper-pagination-bullet-active"
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
        </div>
        <div className="home-green-advantages">
          <div className="home-firstgreenad">
            <GreenAdvantage rootClassName="green-advantage-root-class-name4"></GreenAdvantage>
            <GreenAdvantage
              text="Продажа оптом и розницей по вашему желанию"
              heading="В любом количестве"
              imageSrc="/Icons/car-200h.png"
              rootClassName="green-advantage-root-class-name5"
            ></GreenAdvantage>
          </div>
          <div className="home-secondgreenad">
            <GreenAdvantage
              text="Различный ассортимент товаров для сада и огорода"
              heading="Большой ассортимент"
              imageSrc="/Icons/trees-200h.png"
              rootClassName="green-advantage-root-class-name6"
            ></GreenAdvantage>
            <GreenAdvantage
              text="Быстрая и удобная доставка "
              heading="Доставляем сами"
              imageSrc="/Icons/box-200h.png"
              rootClassName="green-advantage-root-class-name7"
            ></GreenAdvantage>
          </div>
        </div>
        <div className="home-product">
          <div className="home-product-head">
            <h1 className="home-text03">Наша продукция</h1>
          </div>
          <div className="home-products-conteiner">
            <div className="home-container01">
              <div className="home-container02">
                <img
                  alt="image"
                  src="/Products/Products_100/Product_1/peat_1-1500w.jpg"
                  className="home-product1"
                />
                <div className="home-product-button">
                  <span className="home-text04">Подробнее</span>
                  <svg viewBox="0 0 1024 1024" className="home-details">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container03">
                <img
                  alt="image"
                  src="/Products/Products_100/Product_2/peat_2-1500w.jpg"
                  className="home-product2"
                />
                <div className="home-product-button1">
                  <span className="home-text05">Подробнее</span>
                  <svg viewBox="0 0 1024 1024" className="home-details1">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container04">
                <img
                  alt="image"
                  src="/Products/Products_100/Product_3/peat_3-1500w.jpg"
                  className="home-product3"
                />
                <div className="home-product-button2">
                  <span className="home-text06">Подробнее</span>
                  <svg viewBox="0 0 1024 1024" className="home-details2">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="home-container05">
              <div className="home-container06">
                <img
                  alt="image"
                  src="/Products/Products_100/Product_4/peat_4-1500w.jpg"
                  className="home-product4"
                />
                <div className="home-product-button3">
                  <span className="home-text07">Подробнее</span>
                  <svg viewBox="0 0 1024 1024" className="home-details3">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container07">
                <img
                  alt="image"
                  src="/Products/Products_100/Product_5/peat_5-1500w.jpg"
                  className="home-product5"
                />
                <div className="home-product-button4">
                  <span className="home-text08">Подробнее</span>
                  <svg viewBox="0 0 1024 1024" className="home-details4">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
              <div className="home-container08">
                <img
                  alt="image"
                  src="/Products/Products_100/Product_6/peat_6-1500w.jpg"
                  className="home-product6"
                />
                <div className="home-product-button5">
                  <span className="home-text09">Подробнее</span>
                  <svg viewBox="0 0 1024 1024" className="home-details5">
                    <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-qa-order">
          <div className="home-qa">
            <div className="home-title">
              <svg viewBox="0 0 1024 1024" className="home-icon06">
                <path d="M726 512q0 18-13 30t-31 12h-426l-170 172v-598q0-18 12-30t30-12h554q18 0 31 12t13 30v384zM896 256q18 0 30 12t12 30v640l-170-170h-470q-18 0-30-12t-12-30v-86h554v-384h86z"></path>
              </svg>
              <h1 className="home-heading">Часто задаваемые вопросы</h1>
            </div>
            <div className="home-question-block">
              <div className="home-question-1">
                <h1 className="home-text10">Какие условия доставки?</h1>
                <span className="home-text11">
                  Мы осуществляем доставку в удобное для вас время и место. Все
                  подробности доставки можно уточнить по телефону.
                </span>
              </div>
              <div className="home-question-2">
                <h1 className="home-text12">Почему люди выбирают нас?</h1>
                <span className="home-text13">
                  У нас годами проверенные поставщики с огромным опытом работы
                  на рынке и довольными клиентами.
                </span>
              </div>
              <div className="home-question-3">
                <h1 className="home-text14">
                  Чем органические продукты отличаются от неорганических?
                </h1>
                <span className="home-text15">
                  Органические продукты производятся без использования
                  синтетических удобрений, пестицидов и генетически
                  модифицированных организмов, что делает их более безопасными
                  для здоровья и окружающей среды. 
                </span>
              </div>
            </div>
          </div>
          <div className="home-order-form">
            <div className="home-order-title">
              <h1 className="home-text16">Оформить заказ, консультацию</h1>
            </div>
            <form className="home-form">
              <div className="home-name">
                <div className="home-container09">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
                    <path d="M470 854l170-172h256v172h-426zM264 768l370-370-52-52-368 370v52h50zM786 248q26 26 26 60t-26 60l-486 486h-172v-174q480-478 486-484 26-26 60-26t60 26z"></path>
                  </svg>
                  <span className="home-text17">Имя</span>
                </div>
                <input
                  type="text"
                  name="Поле для имени"
                  required
                  className="home-textinput input"
                />
              </div>
              <div className="home-telephone-num">
                <div className="home-container10">
                  <svg viewBox="0 0 1024 1024" className="home-icon10">
                    <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
                  </svg>
                  <span className="home-text18">Номер телефона</span>
                </div>
                <input
                  type="text"
                  name="строка для телефона"
                  required
                  className="home-textinput1 input"
                />
              </div>
              <div className="home-container11">
                <input
                  type="checkbox"
                  name="Agreement"
                  required
                  className="home-checkbox button"
                />
                <span className="home-privaty-policy-text">
                  Согласен с Политикой обработки персональных данных
                </span>
              </div>
              <button type="submit" className="home-send-order-button button">
                Отправить
              </button>
            </form>
          </div>
        </div>
        <Futer rootClassName="futer-root-class-name1"></Futer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            z-index: 100;
            overflow: auto;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-slides {
            width: 100%;
            height: 300px;
            display: flex;
            align-self: flex-start;
            align-items: center;
            justify-content: flex-start;
          }
          .home-slider {
            width: 100%;
            height: 300px;
            display: inline-block;
          }
          .home-slider-slide {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/Slides/plants-1500w.jpg');
            background-repeat: repeat;
            background-position: bottom;
          }
          .home-text {
            color: rgb(255, 255, 255);
            width: 70%;
            cursor: default;
            font-size: 350%;
            margin-left: var(--dl-space-space-fourunits);
          }
          .home-slider-slide1 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/Slides/ground-1500w.jpg');
            background-repeat: repeat;
            background-position: bottom;
          }
          .home-text01 {
            color: rgb(255, 255, 255);
            width: 60%;
            cursor: default;
            font-size: 350%;
            margin-left: var(--dl-space-space-fourunits);
          }
          .home-slider-slide2 {
            width: 100%;
            display: flex;
            position: relative;
            align-items: center;
            background-size: cover;
            justify-content: flex-start;
            background-image: url('/Slides/forest-1500w.jpg');
            background-repeat: repeat;
            background-position: bottom;
          }
          .home-text02 {
            color: rgb(255, 255, 255);
            width: 75%;
            cursor: default;
            font-size: 350%;
            margin-left: var(--dl-space-space-fourunits);
          }
          .home-slider-pagination {
            display: block;
          }
          .home-slider-pagination-bullet {
            width: 10px;
            height: 10px;
            background-color: #ffffff;
          }
          .home-slider-pagination-bullet1 {
            width: 10px;
            height: 10px;
            background-color: #ffffff;
          }
          .home-slider-pagination-bullet2 {
            width: 10px;
            height: 10px;
            background-color: #ffffff;
          }
          .home-green-advantages {
            flex: 0 0 auto;
            width: 100%;
            cursor: default;
            display: flex;
            align-self: center;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            justify-content: space-between;
          }
          .home-firstgreenad {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .home-secondgreenad {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            margin-left: 0%;
            justify-content: center;
          }
          .home-product {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-product-head {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            margin-top: var(--dl-space-space-fourunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: center;
          }
          .home-text03 {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 40px;
          }
          .home-products-conteiner {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-container01 {
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-container02 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-fiveunits);
            border-radius: 35px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-product1 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .home-product-button {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .home-text04 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            position: absolute;
            font-size: 30px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-details {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container03 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-fiveunits);
            border-radius: 35px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-product2 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .home-product-button1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .home-text05 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            position: absolute;
            font-size: 30px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-details1 {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container04 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 35px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-product3 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .home-product-button2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: center;
          }
          .home-text06 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            position: absolute;
            font-size: 30px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-details2 {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container05 {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .home-container06 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-fiveunits);
            border-radius: 35px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-product4 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .home-product-button3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: center;
          }
          .home-text07 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            position: absolute;
            font-size: 30px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-details3 {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container07 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            margin-right: var(--dl-space-space-fiveunits);
            border-radius: 35px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-product5 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .home-product-button4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: center;
          }
          .home-text08 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            position: absolute;
            font-size: 30px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-details4 {
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-container08 {
            flex: 0 0 auto;
            width: 25%;
            height: 100%;
            display: flex;
            align-items: center;
            border-radius: 35px;
            flex-direction: column;
            justify-content: center;
            background-color: #ffffff;
          }
          .home-product6 {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .home-product-button5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: center;
            justify-content: flex-end;
          }
          .home-text09 {
            top: -2px;
            left: -158px;
            color: var(--dl-color-gray-2);
            position: absolute;
            font-size: 30px;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-details5 {
            width: 50px;
            height: 50px;
            padding-top: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .home-qa-order {
            width: 100%;
            height: 100%;
            display: flex;
            position: relative;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .home-qa {
            flex: 0 0 auto;
            width: 49%;
            cursor: default;
            height: 100%;
            display: flex;
            margin-left: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-title {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            justify-content: flex-start;
          }
          .home-icon06 {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            padding: var(--dl-space-space-halfunit);
            align-self: flex-start;
            margin-top: var(--dl-space-space-unit);
            margin-left: 0px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-heading {
            color: var(--dl-color-gray-2);
            width: 100%;
            height: 60%;
            padding: 0px;
            font-size: 37px;
          }
          .home-question-block {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-question-1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            margin-top: var(--dl-space-space-unit);
            align-items: flex-start;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text10 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text11 {
            color: var(--dl-color-gray-2);
            font-size: 20px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-question-2 {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            margin-top: var(--dl-space-space-halfunit);
            align-items: flex-start;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text12 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            margin-top: var(--dl-space-space-unit);
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text13 {
            color: var(--dl-color-gray-2);
            font-size: 20px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-question-3 {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-halfunit);
            margin-top: 0px;
            align-items: flex-start;
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: var(--dl-space-space-halfunit);
            flex-direction: column;
            justify-content: center;
          }
          .home-text14 {
            color: var(--dl-color-gray-2);
            font-size: 25px;
            margin-top: var(--dl-space-space-unit);
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text15 {
            color: var(--dl-color-gray-2);
            font-size: 20px;
            margin-left: var(--dl-space-space-unit);
          }
          .home-order-form {
            flex: 0 0 auto;
            right: 0px;
            width: 49%;
            height: 100%;
            margin: auto;
            display: flex;
            position: absolute;
            flex-direction: column;
          }
          .home-order-title {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            justify-content: center;
          }
          .home-text16 {
            color: var(--dl-color-gray-2);
            width: 641px;
            cursor: default;
            margin: var(--dl-space-space-halfunit);
            padding: var(--dl-space-space-halfunit);
            font-size: 37px;
          }
          .home-form {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-name {
            flex: 0 0 auto;
            width: 100%;
            margin: var(--dl-space-space-oneandhalfunits);
            display: flex;
            align-self: center;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .home-container09 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-icon08 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-text17 {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 20px;
            margin-bottom: 0px;
          }
          .home-textinput {
            color: var(--dl-color-primary-100);
            width: 60%;
            cursor: default;
            height: 50%;
            transition: 0.3s;
            border-color: var(--dl-color-gray-2);
            border-width: 0px;
            border-radius: 0px;
            background-color: var(--dl-color-gray-white);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 2px;
          }
          .home-textinput:focus {
            outline: none;
            border-color: #d2a770;
          }
          .home-telephone-num {
            flex: 0 0 auto;
            width: 100%;
            height: 100px;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            padding-right: var(--dl-space-space-unit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-unit);
            justify-content: center;
          }
          .home-container10 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-text18 {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 20px;
            align-self: flex-start;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-textinput1 {
            color: var(--dl-color-primary-100);
            width: 60%;
            cursor: default;
            height: 50%;
            transition: 0.3s;
            border-color: var(--dl-color-gray-2);
            border-width: 2px;
            border-radius: 0px;
            background-color: var(--dl-color-gray-white);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .home-textinput1:focus {
            outline: none;
            border-color: #d2a770;
          }
          .home-container11 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            justify-content: center;
          }
          .home-checkbox {
            width: 25px;
            height: 25px;
            align-self: center;
            margin-left: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-white);
          }
          .home-privaty-policy-text {
            color: var(--dl-color-gray-2);
            cursor: default;
            align-self: flex-start;
            margin-top: var(--dl-space-space-oneandhalfunits);
            margin-left: var(--dl-space-space-oneandhalfunits);
            margin-bottom: var(--dl-space-space-oneandhalfunits);
          }
          .home-send-order-button {
            color: var(--dl-color-gray-2);
            cursor: pointer;
            font-size: 30px;
            align-self: flex-start;
            margin-top: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-2);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-unit);
            background-color: #f1dbbc;
          }
          .home-send-order-button:hover {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-2);
          }
          @media (max-width: 1200px) {
            .home-green-advantages {
              margin-top: var(--dl-space-space-threeunits);
            }
            .home-firstgreenad {
              align-items: center;
            }
            .home-secondgreenad {
              align-items: center;
            }
            .home-product-head {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .home-container01 {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .home-product1 {
              width: 80%;
              height: 80%;
            }
            .home-text04 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .home-details {
              width: 45px;
              height: 45px;
            }
            .home-product2 {
              width: 80%;
              height: 80%;
            }
            .home-text05 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .home-details1 {
              width: 45px;
              height: 45px;
            }
            .home-product3 {
              width: 80%;
              height: 80%;
            }
            .home-text06 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .home-details2 {
              width: 45px;
              height: 45px;
            }
            .home-container05 {
              padding: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .home-product4 {
              width: 80%;
              height: 80%;
            }
            .home-text07 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .home-details3 {
              width: 45px;
              height: 45px;
            }
            .home-product5 {
              width: 80%;
              height: 80%;
            }
            .home-text08 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .home-details4 {
              width: 45px;
              height: 45px;
            }
            .home-product6 {
              width: 80%;
              height: 80%;
            }
            .home-text09 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .home-details5 {
              width: 45px;
              height: 45px;
            }
            .home-qa {
              width: 55%;
              height: 100%;
              margin-left: 0px;
            }
            .home-icon06 {
              margin-right: 0px;
            }
            .home-question-1 {
              height: auto;
              margin-right: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              margin-bottom: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text10 {
              color: var(--dl-color-gray-2);
            }
            .home-text11 {
              color: var(--dl-color-gray-2);
            }
            .home-question-2 {
              padding-left: var(--dl-space-space-unit);
            }
            .home-text12 {
              color: var(--dl-color-gray-2);
              font-size: 23px;
            }
            .home-text13 {
              color: var(--dl-color-gray-2);
            }
            .home-question-3 {
              padding-top: var(--dl-space-space-halfunit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-halfunit);
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-text14 {
              color: var(--dl-color-gray-2);
            }
            .home-order-form {
              width: 45%;
              height: 100%;
            }
            .home-order-title {
              width: 100%;
              height: 20%;
              padding: var(--dl-space-space-unit);
            }
            .home-text16 {
              color: var(--dl-color-gray-2);
              width: 100%;
              height: 100%;
              margin: 0px;
              padding: 0px;
              font-size: 35px;
              align-self: center;
              text-align: center;
            }
            .home-form {
              height: 75%;
              position: relative;
            }
            .home-name {
              width: 428px;
              margin-top: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              margin-left: 0px;
              margin-right: 0px;
            }
            .home-icon08 {
              width: 22px;
              height: 22px;
            }
            .home-text17 {
              color: var(--dl-color-gray-2);
              font-size: 17px;
            }
            .home-textinput {
              width: 79%;
            }
            .home-telephone-num {
              width: 432px;
              align-self: center;
            }
            .home-icon10 {
              width: 22px;
              height: 22px;
            }
            .home-text18 {
              color: var(--dl-color-gray-2);
              font-size: 17px;
            }
            .home-textinput1 {
              width: 79%;
              height: 50%;
            }
            .home-container11 {
              width: 424px;
              align-self: center;
              justify-content: flex-start;
            }
            .home-checkbox {
              width: 22px;
              height: 22px;
            }
            .home-privaty-policy-text {
              color: var(--dl-color-gray-2);
              font-size: 17px;
            }
            .home-send-order-button {
              width: 35%;
              height: 10%;
              font-size: 25px;
              align-self: flex-start;
              margin-left: var(--dl-space-space-fourunits);
            }
          }
          @media (max-width: 991px) {
            .home-slider-slide {
              background-image: url('/Slides/plants-1500w.jpg');
            }
            .home-green-advantages {
              flex-direction: column;
            }
            .home-firstgreenad {
              width: 100%;
              height: auto;
              padding: var(--dl-space-space-unit);
            }
            .home-secondgreenad {
              width: 100%;
              padding: var(--dl-space-space-unit);
              margin-top: var(--dl-space-space-unit);
            }
            .home-container01 {
              margin-bottom: 0px;
            }
            .home-container02 {
              width: 25%;
              height: 75%;
            }
            .home-text04 {
              top: -1px;
              left: -132px;
            }
            .home-container03 {
              width: 25%;
              height: 75%;
            }
            .home-text05 {
              top: 0.1px;
              left: -132px;
            }
            .home-container04 {
              width: 25%;
              height: 75%;
            }
            .home-text06 {
              top: -1px;
              left: -132px;
            }
            .home-container05 {
              margin-bottom: 0px;
            }
            .home-container06 {
              width: 25%;
              height: 75%;
            }
            .home-text07 {
              top: -1px;
              left: -132px;
            }
            .home-container07 {
              width: 25%;
              height: 75%;
            }
            .home-text08 {
              top: -1px;
              left: -132px;
            }
            .home-container08 {
              height: 75%;
            }
            .home-text09 {
              top: -1px;
              left: -132px;
            }
            .home-qa-order {
              height: 1179px;
              margin-bottom: 0px;
              flex-direction: column;
            }
            .home-qa {
              width: 100%;
              height: 50%;
            }
            .home-title {
              align-self: center;
            }
            .home-question-1 {
              height: 30%;
            }
            .home-question-2 {
              height: 30%;
            }
            .home-question-3 {
              height: 30%;
            }
            .home-order-form {
              top: 615px;
              width: 100%;
              height: 50%;
            }
            .home-form {
              align-self: center;
            }
            .home-name {
              width: 65%;
              align-self: flex-start;
            }
            .home-telephone-num {
              width: 65%;
              align-self: flex-start;
            }
            .home-container11 {
              width: 65%;
              align-self: flex-start;
            }
            .home-send-order-button {
              width: 25%;
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .home-text {
              width: 370px;
              font-size: 280%;
            }
            .home-text01 {
              width: 75%;
              font-size: 280%;
            }
            .home-text02 {
              font-size: 280%;
              text-align: center;
            }
            .home-firstgreenad {
              justify-content: space-between;
            }
            .home-secondgreenad {
              margin-top: 0px;
              margin-left: 0px;
              justify-content: space-between;
            }
            .home-product-head {
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-container01 {
              height: 50%;
              margin-top: var(--dl-space-space-twounits);
              align-items: center;
              flex-direction: column;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .home-container02 {
              width: 60%;
              height: 31%;
              margin-right: 0px;
            }
            .home-container03 {
              width: 60%;
              height: 31%;
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-right: 0px;
            }
            .home-container04 {
              width: 60%;
              height: 31%;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-container05 {
              margin-top: var(--dl-space-space-unit);
              align-items: center;
              padding-top: 0px;
              flex-direction: column;
            }
            .home-container06 {
              width: 60%;
              height: 31%;
              margin-right: 0px;
            }
            .home-container07 {
              width: 60%;
              height: 31%;
              margin-top: var(--dl-space-space-oneandhalfunits);
              margin-right: 0px;
            }
            .home-container08 {
              width: 60%;
              height: 31%;
              margin-top: var(--dl-space-space-unit);
            }
            .home-qa-order {
              height: auto;
              justify-content: space-between;
            }
            .home-qa {
              width: 100%;
              height: auto;
            }
            .home-question-1 {
              height: 30%;
              margin-right: 0px;
            }
            .home-question-2 {
              height: 30%;
            }
            .home-order-form {
              bottom: 0px;
              height: auto;
              position: static;
              margin-top: var(--dl-space-space-oneandhalfunits);
            }
            .home-order-title {
              height: auto;
            }
            .home-form {
              height: auto;
            }
            .home-name {
              width: 75%;
            }
            .home-telephone-num {
              width: 75%;
            }
            .home-container11 {
              width: 75%;
            }
            .home-checkbox {
              width: 30px;
              height: 30px;
            }
            .home-send-order-button {
              width: 30%;
              margin-left: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .home-text {
              width: 75%;
              font-size: 200%;
              align-self: center;
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-text01 {
              font-size: 200%;
              text-align: center;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-text02 {
              color: rgb(255, 255, 255);
              font-size: 200%;
              margin-left: var(--dl-space-space-threeunits);
            }
            .home-firstgreenad {
              flex-direction: row;
              justify-content: center;
            }
            .home-secondgreenad {
              flex-direction: row;
              justify-content: space-between;
            }
            .home-container01 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container02 {
              width: 100%;
            }
            .home-container03 {
              width: 100%;
            }
            .home-container04 {
              width: 100%;
            }
            .home-container05 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-container06 {
              width: 100%;
            }
            .home-container07 {
              width: 100%;
            }
            .home-container08 {
              width: 100%;
            }
            .home-title {
              width: 301px;
              height: 157px;
              align-self: flex-start;
            }
            .home-icon06 {
              width: 40%;
              height: 40%%;
              align-self: center;
              padding-left: 0px;
            }
            .home-heading {
              width: 382px;
              height: 120px;
              margin-right: var(--dl-space-space-unit);
            }
            .home-question-1 {
              height: 30%;
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .home-text10 {
              margin-left: 0px;
            }
            .home-text11 {
              margin-left: 0px;
            }
            .home-question-2 {
              height: 32%;
            }
            .home-text12 {
              margin-left: 0px;
            }
            .home-text13 {
              margin-left: 0px;
            }
            .home-text14 {
              width: 100%;
              margin-left: 0px;
            }
            .home-text15 {
              margin-left: 0px;
            }
            .home-order-form {
              bottom: 0px;
              margin-top: var(--dl-space-space-fourunits);
            }
            .home-form {
              height: 507px;
            }
            .home-name {
              width: 295px;
            }
            .home-telephone-num {
              width: 296px;
            }
            .home-container11 {
              width: 291px;
            }
            .home-send-order-button {
              width: 40%;
              font-size: 20px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home