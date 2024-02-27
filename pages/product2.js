import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr';

import Header1 from '../components/header1'
import SliderSize from '../components/slider-size'
import Futer from '../components/futer'

const Product2 = (props) => {
  const { data, error } = useSWR('api/prices', (url) =>
    fetch(url).then((res) => res.json()),
  );

  const [price, setPrice] = useState('');

    useEffect(() => {
        if (data) {
            setPrice(data.prod_2_100l + ' руб.');
        }
    }, [data]);

  const handleButtonChange = (value) => {
    if (value === '100л') {
      setPrice(data.prod_2_100l+' руб.');
    } else{
      setPrice(data.prod_2_250l+' руб.');
    }
  };

  let pairs = [
    {first: '../Products/Products_100/Product_2/traven-universalnyij-1-2-1.jpg', second: '../Products/Products_250/peat_1.1_250.jpg'},
    {first: '../Products/Products_100/Product_2/traven-universalnyij-2-1.jpg', second: '../Products/Products_250/peat_1.2_250.jpg'},
    {first: '../Products/Products_100/Product_2/traven-universalnyij-3-1.jpg', second: '../Products/Products_250/peat_1.3_250.jpg'},
    {first: '../Products/Products_100/Product_2/traven-universalnyij-4-1.jpg', second: '../Products/Products_250/peat_1.4_250.jpg'}];

  return (
    <>
      <div className="product2-container">
        <Head>
          <title>Торф универсальный купить Минск</title>
          <meta property="og:title" content="Торф универсальный купить Минск." />
          <meta name="description" content='Торф универсальный купить с доставкой мешки по 100 и 250 литров.'></meta>
          <meta name="keywords" content=''></meta>
        </Head>
        <Header1 rootClassName="header1-root-class-name11"></Header1>
        <div className="product2-producthead">
          <h1 className="product2-text">
            Субстрат торфяной питательный «Traven» универсальный рН 5,5-7,0 
          </h1>
        </div>
        <div className="product2-main-info">
        <SliderSize onChange={handleButtonChange} imagePaths = {pairs}></SliderSize>
          <div className="product2-compound">
            <span className="product2-head-compound">Состав:</span>
            <span className="product2-compound1">
              <span>- Торф верховой фракции 0-5 мм</span>
              <br></br>
              <span>- Увлажнитель FibaZorb (Англия) 0,2 л/м3</span>
              <br></br>
              <span>
                - Содержание питательных элементов (мг/100 г сухого вещества) не
                менее:
              </span>
              <br></br>
              <span>
                · азот (N) - 110-190
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>
                · фосфор (P2O5)
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>- 120-200</span>
              <br></br>
              <span>
                ·
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                калий (K2O)
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>- 220-320</span>
              <br></br>
              <span>- Микроэлементы: B, Mo, Cu, Zn, Mn, Fe</span>
              <br></br>
              <span>
                - Мука доломитовая (известняковая) (мг/100 г сухого вещества) не
                менее 0,03-0,05
              </span>
              <br></br>
              <span>- Агроперлит рН 5,5-7,0</span>
            </span>
            <span className="product2-price">{price}</span>
            <Link href="/feedback">
              <a className="product2-link button">Оформить заказ</a>
            </Link>
          </div>
        </div>
        <div className="product2-discription">
          <span className="product2-text21">Описание:</span>
          <span className="product2-text22">
            <span>
              Торф «Traven» универсальный – это профессиональный торф класс 1
              однородной фракции 0-5 мм, для садовых и комнатных растений.
              Используется для улучшения состава грунта, повышения рыхлости и
              обогащения истощенной почвы питательными веществами. Торф верховой
              купить можно на нашем сайте. Достаточно подобрать субстрат
              торфяной с нужным показателем кислотности (pH) и оформить заявку.
              Мы гарантируем высокое качество продукции. 
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
              className="product2-link1"
            >
              здесь
            </a>
            <span>.</span>
          </span>
        </div>
        <Futer rootClassName="futer-root-class-name23"></Futer>
      </div>
      <style jsx>
        {`
          .product2-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .product2-producthead {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
          }
          .product2-text {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 48px;
            padding-top: var(--dl-space-space-twounits);
          }
          .product2-main-info {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .product2-compound {
            width: auto;
            cursor: default;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .product2-head-compound {
            color: var(--dl-color-gray-2);
            font-size: 32px;
            align-self: flex-start;
            font-weight: bold;
          }
          .product2-compound1 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            margin-top: var(--dl-space-space-twounits);
            line-height: 1.5;
          }
          .product2-price {
            color: rgb(208, 2, 2);
            font-size: 32px;
            margin-top: var(--dl-space-space-twounits);
            font-weight: bold;
            border-color: rgb(208, 2, 2);
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
            border-bottom-width: 3px;
          }
          .product2-link {
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
          .product2-link:hover {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-2);
          }
          .product2-discription {
            width: 80%;
            cursor: default;
            height: auto;
            display: flex;
            align-self: flex-start;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-unit);
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product2-text21 {
            color: var(--dl-color-gray-2);
            font-size: 32px;
            font-weight: bold;
            padding-left: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product2-text22 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            padding-top: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product2-link1 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .product2-link {
              margin-top: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 991px) {
            .product2-text {
              font-size: 42px;
            }
            .product2-main-info {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .product2-discription {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
            }
            .product2-text21 {
              padding-left: 0px;
            }
            .product2-text22 {
              padding-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .product2-producthead {
              width: 100%;
            }
            .product2-text {
              width: 100%;
              font-size: 36px;
            }
            .product2-link {
              font-size: 20px;
            }
            .product2-discription {
              padding: var(--dl-space-space-unit);
            }
            .product2-text22 {
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

export default Product2
