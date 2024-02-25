import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Header1 from '../components/header1'
import Futer from '../components/futer'

const Products = (props) => {
  return (
    <>
      <div className="products-container">
        <Head>
          <title>Продукция магазина GroundShop</title>
          <meta property="og:title" content="Продукция магазина GroundShop" />
          <meta name="description" content='Большой ассортимент органических товаров. Выбор торфгрунта.'></meta>
          <meta name="keywords" content=''></meta>
        </Head>
        <Header1 rootClassName="header1-root-class-name2"></Header1>
        <div className="products-product">
          <div className="products-product-head">
            <h1 className="products-text">Наша продукция</h1>
          </div>
          <div className="products-products-conteiner">
            <div className="products-products-first-pair">
              <Link href="/product1">
                <a className="products-link">
                  <div className="products-first-product">
                    <img
                      alt="image"
                      src="/Products/Products_100/Product_1/traven-dlya-golubiki-1-2-1.jpg"
                      className="products-product1"
                    />
                    <div className="products-product-description">
                      <h2 className="products-text01">
                        Субстрат торфяной «Traven» для голубики рН 2,8-4,0
                        100л/250л
                      </h2>
                      <div className="products-product-button">
                        <span className="products-text02">Подробнее</span>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="products-details"
                        >
                          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/product2">
                <a className="products-link1">
                  <div className="products-second-product">
                    <img
                      alt="image"
                      src="/Products/Products_100/Product_2/traven-universalnyij-1-2-1.jpg"
                      className="products-product11"
                    />
                    <div className="products-product-discription">
                      <span className="products-text03">
                        Субстрат торфяной «Traven» универсальный рН 5,5-7,0,
                        100л/250л
                      </span>
                      <div className="products-product-button1">
                        <span className="products-text04">Подробнее</span>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="products-details1"
                        >
                          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="products-procucts-second-pair">
              <Link href="/product3">
                <a className="products-link2">
                  <div className="products-thirt-product">
                    <img
                      alt="image"
                      src="/Products/Products_100/Product_3/traven-kislyij-1-2-1.jpg"
                      className="products-product12"
                    />
                    <div className="products-product-discription1">
                      <span className="products-text05">
                        Субстрат торфяной «Traven» кислый рН 2,8-4,0 100л/250л
                      </span>
                      <div className="products-product-button2">
                        <span className="products-text06">Подробнее</span>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="products-details2"
                        >
                          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/product4">
                <a className="products-link3">
                  <div className="products-fourth-product">
                    <img
                      alt="image"
                      src="/Products/Products_100/Product_4/traven-nejtralizovannyij-1-1.jpg"
                      className="products-product13"
                    />
                    <div className="products-product-discription2">
                      <span className="products-text07">
                        Субстрат торфяной «Traven» нейтрализованный рН 5,5-6,5
                        100л/250л
                      </span>
                      <div className="products-product-button3">
                        <span className="products-text08">Подробнее</span>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="products-details3"
                        >
                          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="products-products-thirt-pair">
              <Link href="/product5">
                <a className="products-link4">
                  <div className="products-fifth-product">
                    <img
                      alt="image"
                      src="/Products/Products_100/Product_5/traven-kompost-11.jpg"
                      className="products-product14"
                    />
                    <div className="products-product-discription3">
                      <span className="products-text09">
                        Субстрат торфяной «Traven» компост 100л/250л
                      </span>
                      <div className="products-product-button4">
                        <span className="products-text10">Подробнее</span>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="products-details4"
                        >
                          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
              <Link href="/product6">
                <a className="products-link5">
                  <div className="products-sixth-product">
                    <img
                      alt="image"
                      src="/Products/Products_100/Product_6/traven-gryadki-11.jpg"
                      className="products-product15"
                    />
                    <div className="products-product-discription4">
                      <span className="products-text11">
                        Субстрат торфяной «Traven» высокие грядки 100л/250л
                      </span>
                      <div className="products-product-button5">
                        <span className="products-text12">Подробнее</span>
                        <svg
                          viewBox="0 0 1024 1024"
                          className="products-details5"
                        >
                          <path d="M366 708l196-196-196-196 60-60 256 256-256 256z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="products-advantages">
          <h2 className="products-text13">Преимущества торфяных субстратов</h2>
          <div className="products-advantagesall">
            <span className="products-firstadvan">
              <span className="products-text14">·</span>
              <span className="products-text15"> </span>
              <span>
                Торфяной субстрат обладает отличной способностью удерживать
                воду, что способствует равномерному и эффективному снабжению
                растений влагой.
              </span>
            </span>
            <span className="products-secondadvan">
              <span className="products-text17">·</span>
              <span>
                {' '}
                Стерильность состава, так как почва обеззараживается от
                вредителей, грибков и семян сорняков.
              </span>
            </span>
            <span className="products-fourthadvan">
              <span className="products-text19">·</span>
              <span>
                {' '}
                Дышащие свойства и удержание воздуха. Это важно для дыхания
                корней и хорошего развития рассады.
              </span>
            </span>
            <span className="products-fifthadvan">
              <span className="products-text21">· </span>
              <span>
                Термоустойчивость, он обеспечивает растениям защиту от резких
                колебаний температуры в почве.
              </span>
            </span>
            <span className="products-sixthadvan">
              <span className="products-text23">· </span>
              <span>
                Торфяной субстрат характеризуется хорошей пористостью, что
                обеспечивает доступ кислорода к корням растений и способствует
                их здоровью.
              </span>
            </span>
          </div>
        </div>
        <Futer rootClassName="futer-root-class-name15"></Futer>
      </div>
      <style jsx>
        {`
          .products-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .products-product {
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
          }
          .products-product-head {
            flex: 0 0 auto;
            width: 95%;
            height: auto;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            margin-top: var(--dl-space-space-fourunits);
            margin-left: var(--dl-space-space-twounits);
            margin-right: var(--dl-space-space-twounits);
            margin-bottom: 7%;
            justify-content: center;
          }
          .products-text {
            color: var(--dl-color-gray-2);
            cursor: default;
            font-size: 60px;
          }
          .products-products-conteiner {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .products-products-first-pair {
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .products-link {
            display: contents;
          }
          .products-first-product {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            transform: translateY(0);
            transition: 0.3s;
            align-items: center;
            margin-right: var(--dl-space-space-fiveunits);
            border-radius: 35px;
            justify-content: center;
            text-decoration: none;
            background-color: #ffffff;
          }
          .products-first-product:hover {
            transform: translateY(-20px);
            transition: transform 0.3s ease-in-out;
          }
          .products-product1 {
            width: 50%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .products-product-description {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .products-text01 {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-twounits);
            font-size: 23px;
            font-weight: bold;
          }
          .products-product-button {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .products-text02 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            font-size: 30px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-details {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-link1 {
            display: contents;
          }
          .products-second-product {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            transform: translateY(0);
            transition: 0.3s;
            align-items: center;
            border-radius: 35px;
            justify-content: center;
            text-decoration: none;
            background-color: #ffffff;
          }
          .products-second-product:hover {
            transform: translateY(-20px);
            transition: transform 0.3s ease-in-out;
          }
          .products-product11 {
            width: 50%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .products-product-discription {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .products-text03 {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-twounits);
            font-size: 23px;
            font-weight: bold;
          }
          .products-product-button1 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .products-text04 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            font-size: 30px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-details1 {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-procucts-second-pair {
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .products-link2 {
            display: contents;
          }
          .products-thirt-product {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            transform: translateY(0);
            transition: 0.3s;
            align-items: center;
            margin-right: var(--dl-space-space-fiveunits);
            border-radius: 35px;
            justify-content: center;
            text-decoration: none;
            background-color: #ffffff;
          }
          .products-thirt-product:hover {
            transform: translateY(-20px);
            transition: transform 0.3s ease-in-out;
          }
          .products-product12 {
            width: 50%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .products-product-discription1 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .products-text05 {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-twounits);
            font-size: 23px;
            font-weight: bold;
          }
          .products-product-button2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .products-text06 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            font-size: 30px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-details2 {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-link3 {
            display: contents;
          }
          .products-fourth-product {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            transform: translateY(0);
            transition: 0.3s;
            align-items: center;
            border-radius: 35px;
            justify-content: center;
            text-decoration: none;
            background-color: #ffffff;
          }
          .products-fourth-product:hover {
            transform: translateY(-20px);
            transition: transform 0.3s ease-in-out;
          }
          .products-product13 {
            width: 50%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .products-product-discription2 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .products-text07 {
            color: var(--dl-color-gray-2);
            font-size: 23px;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-twounits);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-twounits);
            font-weight: bold;
          }
          .products-product-button3 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .products-text08 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            font-size: 30px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-details3 {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-products-thirt-pair {
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .products-link4 {
            display: contents;
          }
          .products-fifth-product {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            transform: translateY(0);
            transition: 0.3s;
            align-items: center;
            margin-right: var(--dl-space-space-fiveunits);
            border-radius: 35px;
            justify-content: center;
            text-decoration: none;
            background-color: #ffffff;
          }
          .products-fifth-product:hover {
            transform: translateY(-20px);
            transition: transform 0.3s ease-in-out;
          }
          .products-product14 {
            width: 50%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .products-product-discription3 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .products-text09 {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-twounits);
            font-size: 23px;
            font-weight: bold;
          }
          .products-product-button4 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .products-text10 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            font-size: 30px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-details4 {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-link5 {
            display: contents;
          }
          .products-sixth-product {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            transform: translateY(0);
            transition: 0.3s;
            align-items: center;
            border-radius: 35px;
            justify-content: center;
            text-decoration: none;
            background-color: #ffffff;
          }
          .products-sixth-product:hover {
            transform: translateY(-20px);
            transition: transform 0.3s ease-in-out;
          }
          .products-product15 {
            width: 50%;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .products-product-discription4 {
            flex: 0 0 auto;
            width: 45%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .products-text11 {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-twounits);
            font-size: 23px;
            font-weight: bold;
          }
          .products-product-button5 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: flex-end;
            align-items: flex-start;
            justify-content: flex-end;
          }
          .products-text12 {
            top: -2px;
            left: -159px;
            color: var(--dl-color-gray-2);
            font-size: 30px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: 0px;
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-details5 {
            fill: var(--dl-color-gray-2);
            width: 50px;
            height: 50px;
            align-self: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: 0px;
            padding-right: var(--dl-space-space-halfunit);
            padding-bottom: var(--dl-space-space-halfunit);
          }
          .products-advantages {
            width: 100%;
            cursor: default;
            height: 100%;
            object-fit: cover;
            border-radius: 35px;
          }
          .products-text13 {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-oneandhalfunits);
            font-size: 40px;
          }
          .products-advantagesall {
            flex: 0 0 auto;
            width: 80%;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .products-firstadvan {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-unit);
            font-size: 25px;
          }
          .products-text14 {
            color: var(--dl-color-gray-2);
            font-size: 45px;
          }
          .products-text15 {
            color: var(--dl-color-gray-2);
            font-size: 35px;
          }
          .products-secondadvan {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-unit);
            font-size: 25px;
          }
          .products-text17 {
            font-size: 35px;
          }
          .products-fourthadvan {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-unit);
            font-size: 25px;
          }
          .products-text19 {
            font-size: 35px;
          }
          .products-fifthadvan {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-unit);
            font-size: 25px;
          }
          .products-sixthadvan {
            color: var(--dl-color-gray-2);
            padding: var(--dl-space-space-unit);
            font-size: 25px;
          }
          .products-text23 {
            font-size: 35px;
          }
          @media (max-width: 1200px) {
            .products-product-head {
              margin-left: var(--dl-space-space-oneandhalfunits);
              margin-right: var(--dl-space-space-oneandhalfunits);
              margin-bottom: var(--dl-space-space-oneandhalfunits);
              justify-content: center;
            }
            .products-text {
              color: var(--dl-color-gray-2);
              font-size: 40px;
            }
            .products-products-first-pair {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .products-text01 {
              font-size: 17px;
            }
            .products-text02 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .products-details {
              width: 45px;
              height: 45px;
            }
            .products-text03 {
              width: auto;
              font-size: 17px;
            }
            .products-text04 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .products-details1 {
              width: 45px;
              height: 45px;
            }
            .products-procucts-second-pair {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .products-text05 {
              font-size: 17px;
            }
            .products-text06 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .products-details2 {
              width: 45px;
              height: 45px;
            }
            .products-text07 {
              font-size: 17px;
            }
            .products-text08 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .products-details3 {
              width: 45px;
              height: 45px;
            }
            .products-products-thirt-pair {
              padding: var(--dl-space-space-oneandhalfunits);
            }
            .products-text09 {
              font-size: 17px;
            }
            .products-product-button4 {
              padding-top: 0px;
            }
            .products-text10 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .products-details4 {
              width: 45px;
              height: 45px;
            }
            .products-text11 {
              font-size: 17px;
            }
            .products-text12 {
              top: 0px;
              left: -138px;
              font-size: 25px;
            }
            .products-details5 {
              width: 45px;
              height: 45px;
            }
            .products-advantages {
              width: 100%;
              height: 80%;
              align-self: flex-start;
            }
            .products-advantagesall {
              width: 100%;
            }
          }
          @media (max-width: 991px) {
            .products-products-first-pair {
              padding: 0px;
              align-items: center;
              margin-bottom: 0px;
              flex-direction: column;
            }
            .products-first-product {
              width: 80%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .products-text01 {
              font-size: 25px;
            }
            .products-text02 {
              top: -1px;
              left: -132px;
            }
            .products-second-product {
              width: 80%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .products-text03 {
              font-size: 25px;
            }
            .products-text04 {
              top: -1px;
              left: -132px;
            }
            .products-procucts-second-pair {
              padding: 0px;
              align-items: center;
              margin-bottom: 0px;
              flex-direction: column;
            }
            .products-thirt-product {
              width: 80%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .products-text05 {
              font-size: 25px;
            }
            .products-text06 {
              top: -1px;
              left: -132px;
            }
            .products-fourth-product {
              width: 80%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .products-text07 {
              font-size: 25px;
            }
            .products-text08 {
              top: -1px;
              left: -132px;
            }
            .products-products-thirt-pair {
              padding: 0px;
              align-items: center;
              margin-bottom: 0px;
              flex-direction: column;
            }
            .products-fifth-product {
              width: 80%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .products-text09 {
              font-size: 25px;
            }
            .products-text10 {
              top: -1px;
              left: -132px;
            }
            .products-sixth-product {
              width: 80%;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-threeunits);
            }
            .products-text11 {
              font-size: 25px;
            }
            .products-text12 {
              top: -1px;
              left: -132px;
            }
          }
          @media (max-width: 767px) {
            .products-product-head {
              margin-left: var(--dl-space-space-halfunit);
              margin-right: var(--dl-space-space-halfunit);
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .products-products-first-pair {
              height: 50%;
              margin-top: var(--dl-space-space-twounits);
            }
            .products-first-product {
              width: 90%;
            }
            .products-text01 {
              font-size: 17px;
            }
            .products-text02 {
              font-size: 17px;
            }
            .products-details {
              width: 38px;
              height: 38px;
            }
            .products-second-product {
              width: 90%;
            }
            .products-text03 {
              font-size: 17px;
            }
            .products-text04 {
              font-size: 17px;
            }
            .products-details1 {
              width: 38px;
            }
            .products-procucts-second-pair {
              height: 50%;
            }
            .products-thirt-product {
              width: 90%;
            }
            .products-text05 {
              font-size: 17px;
            }
            .products-text06 {
              font-size: 17px;
            }
            .products-details2 {
              width: 38px;
              height: 38px;
            }
            .products-fourth-product {
              width: 90%;
            }
            .products-text07 {
              font-size: 17px;
            }
            .products-text08 {
              font-size: 17px;
            }
            .products-details3 {
              width: 38px;
              height: 38px;
            }
            .products-products-thirt-pair {
              height: 50%;
            }
            .products-fifth-product {
              width: 90%;
            }
            .products-text09 {
              font-size: 17px;
            }
            .products-text10 {
              font-size: 17px;
            }
            .products-details4 {
              width: 38px;
              height: 38px;
            }
            .products-sixth-product {
              width: 90%;
            }
            .products-text11 {
              font-size: 17px;
            }
            .products-text12 {
              font-size: 17px;
            }
          }
          @media (max-width: 479px) {
            .products-products-first-pair {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .products-first-product {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
            .products-product1 {
              width: 100%;
            }
            .products-product-description {
              width: 100%;
            }
            .products-text01 {
              font-size: 23px;
              text-align: center;
            }
            .products-text02 {
              font-size: 30px;
            }
            .products-details {
              width: 50px;
              height: 50px;
            }
            .products-second-product {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
            .products-product11 {
              width: 100%;
            }
            .products-product-discription {
              width: 100%;
            }
            .products-text03 {
              font-size: 23px;
              text-align: center;
            }
            .products-text04 {
              font-size: 30px;
            }
            .products-details1 {
              width: 50px;
              height: 50px;
            }
            .products-procucts-second-pair {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .products-thirt-product {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
            .products-product12 {
              width: 100%;
            }
            .products-product-discription1 {
              width: 100%;
            }
            .products-text05 {
              font-size: 23px;
              text-align: center;
            }
            .products-text06 {
              font-size: 30px;
            }
            .products-details2 {
              width: 50px;
              height: 50px;
            }
            .products-fourth-product {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
            .products-product13 {
              width: 100%;
            }
            .products-product-discription2 {
              width: 100%;
            }
            .products-text07 {
              padding: var(--dl-space-space-twounits);
              font-size: 23px;
              text-align: center;
            }
            .products-text08 {
              font-size: 30px;
            }
            .products-details3 {
              width: 50px;
              height: 50px;
            }
            .products-products-thirt-pair {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .products-fifth-product {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
            .products-product14 {
              width: 100%;
            }
            .products-product-discription3 {
              width: 100%;
            }
            .products-text09 {
              font-size: 23px;
              text-align: center;
            }
            .products-text10 {
              font-size: 30px;
            }
            .products-details4 {
              width: 50px;
              height: 50px;
            }
            .products-sixth-product {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
            .products-product15 {
              width: 100%;
            }
            .products-product-discription4 {
              width: 100%;
            }
            .products-text11 {
              font-size: 23px;
              text-align: center;
            }
            .products-text12 {
              font-size: 30px;
            }
            .products-details5 {
              width: 50px;
              height: 50px;
            }
            .products-advantagesall {
              padding: var(--dl-space-space-unit);
            }
            .products-fifthadvan {
              color: var(--dl-color-gray-2);
              font-size: 25px;
            }
            .products-text21 {
              font-size: 35px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Products
