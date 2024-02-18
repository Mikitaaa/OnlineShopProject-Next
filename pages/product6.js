import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr';

import Header1 from '../components/header1'
import SliderSize from '../components/slider-size'
import Futer from '../components/futer'

const Product6 = (props) => {
  const { data, error } = useSWR('api/prices', (url) =>
  fetch(url).then((res) => res.json()),
);

const [price, setPrice] = useState('');

  useEffect(() => {
      if (data) {
          setPrice(data.prod_6_100l + ' руб.');
      }
  }, [data]);

const handleButtonChange = (value) => {
  if (value === '100л') {
    setPrice(data.prod_6_100l+' руб.');
  } else{
    setPrice(data.prod_6_250l+' руб.');
  }
};

  let pairs = [
    {first: '../Products/Products_100/Product_6/traven-gryadki-11.jpg', second: '../Products/Products_250/peat_1.1_250.jpg'},
    {first: '../Products/Products_100/Product_6/traven-gryadki-21.jpg', second: '../Products/Products_250/peat_1.2_250.jpg'},
    {first: '../Products/Products_100/Product_6/traven-gryadki-31.jpg', second: '../Products/Products_250/peat_1.3_250.jpg'},
    {first: '../Products/Products_100/Product_6/traven-gryadki-4.jpg', second: '../Products/Products_250/peat_1.4_250.jpg'}];

  return (
    <>
      <div className="product6-container">
        <Head>
          <title>Product6 - ground shop</title>
          <meta property="og:title" content="Product6 - ground shop" />
        </Head>
        <Header1 rootClassName="header1-root-class-name16"></Header1>
        <div className="product6-producthead">
          <h1 className="product6-text">
            Субстрат торфяной питательный «Traven» высокие грядки
          </h1>
        </div>
        <div className="product6-main-info">
        <SliderSize onChange={handleButtonChange} imagePaths = {pairs}></SliderSize>
          <div className="product6-compound">
            <h1 className="product6-head-compound">Состав:</h1>
            <span className="product6-compound1">
              <span>- Торф верховой фракция 5-20 мм (средне крупный)</span>
              <br></br>
              <span>
                - Удобрение пролонгированного действия (6 мес) Osmocote Pro
                Нидерланды
              </span>
              <br></br>
              <span>- Увлажнитель FibaZorb (Англия) 0,2 л/м3</span>
              <br></br>
              <span>
                - Содержание питательных элементов (мг/100 г сухого вещества) не
                менее:
              </span>
              <br></br>
              <span>· азот (N) 170-220</span>
              <br></br>
              <span>· фосфор (P2O5) 70-120</span>
              <br></br>
              <span>· калий (K2O) 80-140</span>
              <br></br>
              <span>- Микроэлементы: B,Mo,Cu,Zn,Mn,Fe</span>
              <br></br>
              <span>
                - Мука известняковая (мг/100гр сухого вещества) не менее
                0,03-0,05
              </span>
              <br></br>
              <span>- PH 5,5-6,5</span>
              <br></br>
              <span>
                - Влажность 50-60%
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <h1 className="product6-price">{price}</h1>
            <Link href="/feedback">
              <a className="product6-link button">Оформить зказ</a>
            </Link>
          </div>
        </div>
        <div className="product6-discription">
          <h1 className="product6-text22">Описание:</h1>
          <span className="product6-text23">
            <span>
              Питательный торфяной субстрат «Traven» высокие грядки – это
              верховой торф средней зернистости, предназначенный для улучшения
              состава грунта. Входящие в состав микроэлементы повышают
              плодородность почвы, ускоряют приживаемость молодых саженцев и
              рассады. Безвреден для окружающей среды. 
            </span>
            <br></br>
            <span>
              Производитель «Traven», все лицензии и сертификаты можно
              посмотреть
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://traven.by/"
              target="_blank"
              rel="noreferrer noopener"
              className="product6-link1"
            >
              здесь
            </a>
            <span>.</span>
          </span>
        </div>
        <Futer rootClassName="futer-root-class-name28"></Futer>
      </div>
      <style jsx>
        {`
          .product6-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .product6-producthead {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
          }
          .product6-text {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 48px;
            padding-top: var(--dl-space-space-twounits);
          }
          .product6-main-info {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .product6-compound {
            width: auto;
            cursor: default;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .product6-head-compound {
            color: var(--dl-color-gray-2);
            align-self: flex-start;
          }
          .product6-compound1 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            margin-top: var(--dl-space-space-twounits);
            line-height: 1.5;
          }
          .product6-price {
            color: rgb(208, 2, 2);
            font-size: 32px;
            margin-top: var(--dl-space-space-twounits);
            border-color: rgb(208, 2, 2);
            border-width: 3px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .product6-link {
            color: var(--dl-color-gray-2);
            font-size: 30px;
            align-self: center;
            margin-top: var(--dl-space-space-oneandhalfunits);
            transition: 0.3s;
            margin-left: var(--dl-space-space-oneandhalfunits);
            border-color: var(--dl-color-gray-2);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: var(--dl-space-space-unit);
            text-decoration: none;
            background-color: rgb(241, 219, 188);
          }
          .product6-link:hover {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-2);
          }
          .product6-discription {
            width: 80%;
            cursor: default;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
            flex-direction: column;
          }
          .product6-text22 {
            color: var(--dl-color-gray-2);
            padding-top: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product6-text23 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            padding-top: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product6-link1 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .product6-link {
              margin-top: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 991px) {
            .product6-text {
              font-size: 42px;
            }
            .product6-main-info {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .product6-discription {
              width: 100%;
            }
            .product6-text22 {
              padding-left: 0px;
            }
            .product6-text23 {
              padding-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .product6-producthead {
              width: 100%;
            }
            .product6-text {
              color: var(--dl-color-gray-2);
              width: 100%;
              font-size: 36px;
            }
            .product6-link {
              font-size: 20px;
            }
            .product6-discription {
              padding: var(--dl-space-space-unit);
            }
            .product6-text23 {
              color: var(--dl-color-gray-2);
              width: auto;
              font-size: 22px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Product6
