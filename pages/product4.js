import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr';

import Header1 from '../components/header1'
import SliderSize from '../components/slider-size'
import Futer from '../components/futer'

const Product4 = (props) => {
  const { data, error } = useSWR('api/prices', (url) =>
  fetch(url).then((res) => res.json()),
);

const [price, setPrice] = useState('');

  useEffect(() => {
      if (data) {
          setPrice(data.prod_4_100l + ' руб.');
      }
  }, [data]);

const handleButtonChange = (value) => {
  if (value === '100л') {
    setPrice(data.prod_4_100l+' руб.');
  } else{
    setPrice(data.prod_4_250l+' руб.');
  }
};

  let pairs = [
    {first: '../Products/Products_100/Product_4/traven-nejtralizovannyij-1-1.jpg', second: '../Products/Products_250/peat_1.1_250.jpg'},
    {first: '../Products/Products_100/Product_4/traven-nejtralizovannyij-2-1.jpg', second: '../Products/Products_250/peat_1.2_250.jpg'},
    {first: '../Products/Products_100/Product_4/traven-nejtralizovannyij-3-1.jpg', second: '../Products/Products_250/peat_1.3_250.jpg'},
    {first: '../Products/Products_100/Product_4/traven-nejtralizovannyij-4-1.jpg', second: '../Products/Products_250/peat_1.4_250.jpg'}];

  return (
    <>
      <div className="product4-container">
        <Head>
          <title>Product4 - ground shop</title>
          <meta property="og:title" content="Product4 - ground shop" />
        </Head>
        <Header1 rootClassName="header1-root-class-name14"></Header1>
        <div className="product4-producthead">
          <h1 className="product4-text">
            Субстрат торфяной «Traven» нейтрализованный рН 5,5-6,5
          </h1>
        </div>
        <div className="product4-main-info">
        <SliderSize onChange={handleButtonChange} imagePaths = {pairs}></SliderSize>
          <div className="product4-compound">
            <h2 className="product4-head-compound">Состав:</h2>
            <span className="product4-compound1">
              <span>- Торф верховой фракции 0-5 мм</span>
              <br></br>
              <span>
                - Мука доломитовая (известняковая) (мг/100 г сухого вещества) не
                менее 0,03-0,05
              </span>
              <br></br>
              <span>- рН 5,5-6,5</span>
            </span>
            <h3 className="product4-price">{price}</h3>
            <Link href="/feedback">
              <a className="product4-link button">Оформить заказ</a>
            </Link>
          </div>
        </div>
        <div className="product4-discription">
          <h4 className="product4-text06">Описание:</h4>
          <span className="product4-text07">
            <span>
              Торф верховой нейтрализованный – идеальная основа для выращивания
              различных растений. Благодаря сбалансированной кислотности и
              содержанию необходимых микроэлементов, создается оптимальную среду
              для развития корневой системы всех культур. Чтобы получить такой
              субстрат, верховой торф смешивают с доломитовой мукой, которая
              повышает рН до нейтрального уровня. Субстрат готов к
              использованию, в него не нужно вносить другие добавки для
              улучшения свойств почвы. 
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
              className="product4-link1"
            >
              здесь
            </a>
            <span>.</span>
          </span>
        </div>
        <Futer rootClassName="futer-root-class-name26"></Futer>
      </div>
      <style jsx>
        {`
          .product4-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .product4-producthead {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
          }
          .product4-text {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 48px;
            padding-top: var(--dl-space-space-twounits);
          }
          .product4-main-info {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .product4-compound {
            width: auto;
            cursor: default;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .product4-head-compound {
            color: var(--dl-color-gray-2);
            align-self: flex-start;
          }
          .product4-compound1 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            margin-top: var(--dl-space-space-twounits);
            line-height: 1.5;
          }
          .product4-price {
            color: rgb(208, 2, 2);
            font-size: 32px;
            margin-top: var(--dl-space-space-twounits);
            border-color: rgb(208, 2, 2);
            border-width: 3px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .product4-link {
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
          .product4-link:hover {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-2);
          }
          .product4-discription {
            width: 80%;
            cursor: default;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
            flex-direction: column;
          }
          .product4-text06 {
            color: var(--dl-color-gray-2);
            padding-top: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product4-text07 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            padding-top: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product4-link1 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .product4-link {
              margin-top: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 991px) {
            .product4-text {
              font-size: 42px;
            }
            .product4-main-info {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .product4-discription {
              width: 100%;
            }
            .product4-text06 {
              padding-left: 0px;
            }
            .product4-text07 {
              padding-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .product4-producthead {
              width: 100%;
            }
            .product4-text {
              color: var(--dl-color-gray-2);
              width: 100%;
              font-size: 30px;
            }
            .product4-link {
              font-size: 20px;
            }
            .product4-discription {
              padding: var(--dl-space-space-unit);
            }
            .product4-text07 {
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

export default Product4
