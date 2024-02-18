import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr';

import Header1 from '../components/header1'
import SliderSize from '../components/slider-size'
import Futer from '../components/futer'

const Product1 = (props) => {
  const { data, error } = useSWR('api/prices', (url) =>
    fetch(url).then((res) => res.json()),
  );

  const [price, setPrice] = useState('');

    useEffect(() => {
        if (data) {
            setPrice(data.prod_1_100l + ' руб.');
        }
    }, [data]);

  const handleButtonChange = (value) => {
    if (value === '100л') {
      setPrice(data.prod_1_100l+' руб.');
    } else{
      setPrice(data.prod_2_250l+' руб.');
    }
  };

  let pairs = [
    {first: '../Products/Products_100/Product_1/traven-dlya-golubiki-1-2-1.jpg', second: '../Products/Products_250/peat_1.1_250.jpg'},
    {first: '../Products/Products_100/Product_1/traven-dlya-golubiki-2-1.jpg', second: '../Products/Products_250/peat_1.2_250.jpg'},
    {first: '../Products/Products_100/Product_1/traven-dlya-golubiki-3-1.jpg', second: '../Products/Products_250/peat_1.3_250.jpg'},
    {first: '../Products/Products_100/Product_1/traven-dlya-golubiki-4-1.jpg', second: '../Products/Products_250/peat_1.4_250.jpg'}];

  return (
    <>
      <div className="product1-container">
        <Head>
          <title>Product1 - ground shop</title>
          <meta property="og:title" content="Product1 - ground shop" />
        </Head>
        <Header1 rootClassName="header1-root-class-name6"></Header1>
        <div className="product1-producthead">
          <h1 className="product1-text">
            Субстрат торфяной питательный «Traven» для голубики рН 2,8-4,0 
          </h1>
        </div>
        <div className="product1-main-info">
          <SliderSize onChange={handleButtonChange} imagePaths = {pairs}></SliderSize>
          <div className="product1-compound">
            <h1 className="product1-head-compound">Состав:</h1>
            <span className="product1-compound1">
              <span>- Торф верховой фракции 0-5 мм</span>
              <br></br>
              <span>
                - Содержание питательных элементов (мг/100 г сухого вещества) не
                менее:
              </span>
              <br></br>
              <span>·</span>
              <span> азот (N) - 20-50</span>
              <br></br>
              <span>·</span>
              <span> фосфор (P2O5) - 90-140</span>
              <br></br>
              <span>·</span>
              <span> калий (K2O) - 350-400 </span>
              <br></br>
              <span>- 3MgO+9S</span>
              <br></br>
              <span>- Микроэлементы: B, Mo, Cu, Zn, Mn, Fe</span>
              <br></br>
              <span>- Агроперлит  </span>
              <span>рН 2,8-4,0</span>
            </span>
            <h1 className="product1-price">{price}</h1>
            <Link href="/feedback">
              <a className="product1-link button">Оформить зказ</a>
            </Link>
          </div>
        </div>
        <div className="product1-discription">
          <h1 className="product1-text20">Описание:</h1>
          <span className="product1-text21">
            <span>
              Торфяной субстрат для голубики изготовляется на основе торфа
              верхового типа мелкой фракции (не более 5 мм). Он обогащен
              комплексом удобрений для обеспечения культур биогенными элементами
              (азотом, фосфором, калием). Это источник минералов для высокой
              урожайности, пышного цветения и защиты растений от болезней.
              Субстрат содержит агроперлит для увеличения рыхлости, способности
              пропускать воздух. В интернет-магазине « GroundShop » кислый торф
              для голубики купить можно по низкой цене.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
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
              className="product1-link1"
            >
              здесь
            </a>
            <span>.</span>
          </span>
        </div>
        <Futer rootClassName="futer-root-class-name17"></Futer>
      </div>
      <style jsx>
        {`
          .product1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .product1-producthead {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
          }
          .product1-text {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 48px;
            padding-top: var(--dl-space-space-twounits);
          }
          .product1-main-info {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .product1-compound {
            width: auto;
            cursor: default;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .product1-head-compound {
            color: var(--dl-color-gray-2);
            align-self: flex-start;
          }
          .product1-compound1 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            margin-top: var(--dl-space-space-twounits);
            line-height: 1.5;
          }
          .product1-price {
            color: rgb(208, 2, 2);
            font-size: 32px;
            margin-top: var(--dl-space-space-twounits);
            border-color: rgb(208, 2, 2);
            border-width: 3px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .product1-link {
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
          .product1-link:hover {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-2);
          }
          .product1-discription {
            width: 80%;
            cursor: default;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
            flex-direction: column;
          }
          .product1-text20 {
            color: var(--dl-color-gray-2);
            padding-top: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product1-text21 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            padding-top: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product1-link1 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .product1-link {
              margin-top: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 991px) {
            .product1-text {
              font-size: 42px;
            }
            .product1-main-info {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .product1-discription {
              width: 100%;
            }
            .product1-text20 {
              padding-left: 0px;
            }
            .product1-text21 {
              padding-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .product1-text {
              font-size: 38px;
            }
            .product1-link {
              font-size: 20px;
            }
            .product1-discription {
              padding: var(--dl-space-space-unit);
            }
            .product1-text21 {
              color: var(--dl-color-gray-2);
            }
            .product1-link1 {
              text-decoration: underline;
            }
          }
        `}
      </style>
    </>
  )
}

export default Product1
