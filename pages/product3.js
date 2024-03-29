import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import useSWR from 'swr';

import Header1 from '../components/header1'
import SliderSize from '../components/slider-size'
import Futer from '../components/futer'

const Product3 = (props) => {
  const { data, error } = useSWR('api/prices', (url) =>
  fetch(url).then((res) => res.json()),
);

const [price, setPrice] = useState('');

  useEffect(() => {
      if (data) {
          setPrice(data.prod_3_100l + ' руб.');
      }
  }, [data]);

const handleButtonChange = (value) => {
  if (value === '100л') {
    setPrice(data.prod_3_100l+' руб.');
  } else{
    setPrice(data.prod_3_250l+' руб.');
  }
};

  let pairs = [
    {first: '../Products/Products_100/Product_3/traven-kislyij-1-2-1.jpg', second: '../Products/Products_250/peat_1.1_250.jpg'},
    {first: '../Products/Products_100/Product_3/traven-kislyij-2-1.jpg', second: '../Products/Products_250/peat_1.2_250.jpg'},
    {first: '../Products/Products_100/Product_3/traven-kislyij-3-1.jpg', second: '../Products/Products_250/peat_1.3_250.jpg'},
    {first: '../Products/Products_100/Product_3/traven-kislyij-4-1.jpg', second: '../Products/Products_250/peat_1.4_250.jpg'}];

  return (
    <>
    <html lang="ru"></html>
      <div className="product3-container">
        <Head>
          <title>Торф кислый купить Минск</title>
          <meta property="og:title" content="Торф кислый купить Минск." />
          <meta name="description" content='Торф кислый купить с доставкой мешки по 100 и 250 литров.'></meta>
          <meta name="keywords" content=''></meta>
        </Head>
        <Header1 rootClassName="header1-root-class-name13"></Header1>
        <div className="product3-producthead">
          <h1 className="product3-text">
            Субстрат торфяной «Traven» кислый рН 2,8-4,0
          </h1>
        </div>
        <div className="product3-main-info">
        <SliderSize onChange={handleButtonChange} imagePaths = {pairs}></SliderSize>
          <div className="product3-compound">
            <span className="product3-head-compound">Состав:</span>
            <span className="product3-compound1">
              <span>- торф верховой фракции 0-5 мм</span>
              <br></br>
              <span>- рН 2,8-4,0</span>
            </span>
            <span className="product3-price">{price}</span>
            <Link href="/feedback">
              <a className="product3-link button">Оформить заказ</a>
            </Link>
          </div>
        </div>
        <div className="product3-discription">
          <span className="product3-text04">Описание:</span>
          <span className="product3-text05">
            <span>
              Кислый торф «Traven» – натуральное удобрение, которое улучшает
              структуру почвы, повышает ее кислотность, подавляет патогенную
              флору. Субстрат «Traven» – это торф верховой кислый с размером
              частиц до 5 мм и рН 2,8–4,0. Торфяной субстрат используется для
              выращивания цветов и рассады, высаживания саженцев в посадочную
              яму. Подходит для сельскохозяйственных растений, лесных
              насаждений, кустарников на открытых площадках, теплицах, растущих
              в ацидофильной среде. Такие как голубика, азалия, рододендрон,
              гортензия и др. 
            </span>
            <br></br>
            <span>Производитель </span>
            <span>
              «Traven», все лицензии и сертификаты можно посмотреть
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
              className="product3-link1"
            >
              здесь
            </a>
            <span>.</span>
          </span>
        </div>
        <Futer rootClassName="futer-root-class-name25"></Futer>
      </div>
      <style jsx>
        {`
          .product3-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .product3-producthead {
            width: auto;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-self: flex-start;
          }
          .product3-text {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 48px;
            padding-top: var(--dl-space-space-twounits);
          }
          .product3-main-info {
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-top: var(--dl-space-space-twounits);
            justify-content: flex-start;
          }
          .product3-compound {
            width: auto;
            cursor: default;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-twounits);
            align-items: flex-start;
            flex-direction: column;
          }
          .product3-head-compound {
            color: var(--dl-color-gray-2);
            font-size: 32px;
            align-self: flex-start;
            font-weight: bold;
          }
          .product3-compound1 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            margin-top: var(--dl-space-space-twounits);
            line-height: 1.5;
          }
          .product3-price {
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
          .product3-link {
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
          .product3-link:hover {
            color: var(--dl-color-gray-white);
            border-color: var(--dl-color-gray-white);
            background-color: var(--dl-color-gray-2);
          }
          .product3-discription {
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
          .product3-text04 {
            color: var(--dl-color-gray-2);
            font-size: 33px;
            font-weight: bold;
            padding-left: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product3-text05 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            padding-top: 0px;
            padding-left: var(--dl-space-space-twounits);
            padding-bottom: var(--dl-space-space-twounits);
          }
          .product3-link1 {
            text-decoration: underline;
          }
          @media (max-width: 1200px) {
            .product3-link {
              margin-top: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 991px) {
            .product3-text {
              font-size: 42px;
            }
            .product3-main-info {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .product3-discription {
              width: 100%;
              padding-left: var(--dl-space-space-twounits);
            }
            .product3-text04 {
              padding-left: 0px;
            }
            .product3-text05 {
              padding-left: 0px;
            }
          }
          @media (max-width: 479px) {
            .product3-producthead {
              width: 100%;
            }
            .product3-text {
              width: 100%;
              font-size: 38px;
            }
            .product3-link {
              font-size: 20px;
            }
            .product3-discription {
              padding: var(--dl-space-space-unit);
            }
            .product3-text05 {
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

export default Product3
