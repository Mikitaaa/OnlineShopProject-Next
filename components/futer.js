import React from 'react'

import PropTypes from 'prop-types'

const Futer = (props) => {
  return (
    <>
      <div className={`futer-container `}>
        <div className="futer-policy">
          <div className="futer-name-logo">
            <h1 className="futer-text">{props.heading}</h1>
            <img
              alt={props.imageAlt}
              src={props.imageSrc1}
              className="futer-image"
            />
          </div>
              <a
                href="../Documents/Security-policy.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="futer-link2"
              >
                <span className="futer-text1">{props.text4}</span>
              </a>
              <a
                href="../Documents/Terms-agreed.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="futer-link2"
              >
                <span className="futer-text2">{props.text5}</span>
              </a>
        </div>
        <div className="futer-contacts">
          <div className="futer-contactshead">
            <h1 className="futer-headtext">{props.contacts}</h1>
          </div>
          <div className="futer-contacts1">
            <div className="futer-firstcontact">
              <span className="futer-firstphonenum">+375 (44) 702-28-30</span>
              <a
                href="viber://chat?number=%2B375447022830"
                target="_blank"
                rel="noreferrer noopener"
                className="futer-link"
              >
                <svg viewBox="0 0 512.000000 512.000000" className="futer-vibericn">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                  <path d="M2095 5109 c-442 -21 -879 -65 -1023 -104 -436 -117 -765 -456 -873
                  -899 -69 -284 -81 -1772 -19 -2273 54 -433 354 -816 761 -973 88 -34 196 -58
                  329 -75 69 -8 140 -18 158 -21 l32 -5 0 -379 0 -378 628 353 627 352 200 7
                  c492 17 969 63 1154 112 417 110 751 460 852 893 78 335 82 2009 5 2366 -83
                  384 -346 704 -713 864 -120 52 -244 80 -478 105 -524 58 -1146 78 -1640 55z
                  m910 -219 c342 -16 783 -55 919 -81 117 -22 281 -90 382 -159 71 -50 178 -155
                  232 -229 134 -183 180 -326 202 -634 48 -676 26 -1795 -40 -2054 -86 -336
                  -368 -617 -705 -702 -169 -43 -862 -101 -1200 -101 l-133 0 -487 -275 c-269
                  -151 -490 -275 -492 -275 -1 0 -3 130 -3 289 l0 290 -42 5 c-24 4 -129 15
                  -235 26 -273 29 -384 60 -533 150 -254 153 -432 420 -469 705 -66 513 -54
                  1942 20 2235 42 169 130 323 258 451 119 118 256 201 416 252 118 37 449 75
                  845 97 107 6 218 12 245 13 124 8 639 6 820 -3z"/>
                  <path d="M2560 4351 l0 -109 78 -7 c272 -23 459 -81 637 -200 292 -194 470
                  -518 493 -902 l7 -108 109 -3 109 -3 -6 128 c-32 655 -452 1148 -1090 1277
                  -62 13 -263 35 -324 36 -10 0 -13 -28 -13 -109z"/>
                  <path d="M1508 4119 c-94 -15 -156 -53 -263 -162 -108 -110 -162 -192 -197
                  -297 -30 -91 -37 -373 -13 -545 58 -424 237 -787 535 -1085 281 -281 627 -458
                  1030 -526 47 -8 168 -17 270 -20 221 -7 291 4 420 68 70 34 104 60 196 150
                  145 141 169 188 169 328 0 87 -3 101 -33 165 -29 61 -57 93 -211 247 -153 153
                  -188 183 -247 210 -63 30 -78 33 -164 33 -82 0 -102 -4 -150 -26 -30 -15 -82
                  -50 -115 -79 -96 -83 -125 -95 -230 -95 -122 0 -148 15 -316 184 -117 117
                  -139 144 -157 194 -44 117 -24 204 73 321 79 93 99 132 116 215 15 77 1 168
                  -37 243 -29 56 -295 334 -386 403 -86 65 -189 91 -290 74z m102 -219 c51 -14
                  385 -351 395 -398 12 -59 -3 -98 -64 -170 -164 -189 -194 -400 -87 -611 34
                  -65 288 -329 369 -382 92 -60 175 -84 287 -83 143 2 241 42 361 149 65 58 103
                  72 166 60 32 -6 66 -34 206 -173 93 -92 175 -179 183 -194 17 -32 18 -101 3
                  -131 -20 -39 -153 -167 -209 -202 -94 -57 -159 -68 -355 -62 -252 9 -415 44
                  -625 133 -402 171 -733 514 -891 922 -74 193 -109 390 -109 614 0 225 23 287
                  159 429 51 54 89 85 116 94 49 17 51 17 95 5z"/>
                  <path d="M2560 3911 l0 -110 43 -5 c23 -3 69 -8 102 -11 216 -21 407 -133 509
                  -298 72 -117 109 -248 119 -417 l2 -45 109 -3 109 -3 -6 108 c-15 251 -115
                  483 -273 634 -137 131 -351 225 -554 244 -36 3 -86 8 -112 11 l-48 5 0 -110z"/>
                  <path d="M2562 3463 l3 -108 70 -6 c163 -15 236 -88 253 -253 l7 -71 109 -3
                  109 -3 -6 85 c-12 151 -57 255 -145 338 -86 80 -213 128 -340 128 l-63 0 3
                  -107z"/>
                  </g>
                  </svg>
              </a>
            </div>
            <div className="futer-secondcontact">
              <span className="futer-secphonenum">+375 (44) 587-13-36</span>
              <div className="futer-contacticns">
                <a
                  href="viber://chat?number=%2B375445871336"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="futer-link1"
                >
                  <svg viewBox="0 0 512.000000 512.000000" className="futer-vibericn1">
                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" stroke="none">
                  <path d="M2095 5109 c-442 -21 -879 -65 -1023 -104 -436 -117 -765 -456 -873
                  -899 -69 -284 -81 -1772 -19 -2273 54 -433 354 -816 761 -973 88 -34 196 -58
                  329 -75 69 -8 140 -18 158 -21 l32 -5 0 -379 0 -378 628 353 627 352 200 7
                  c492 17 969 63 1154 112 417 110 751 460 852 893 78 335 82 2009 5 2366 -83
                  384 -346 704 -713 864 -120 52 -244 80 -478 105 -524 58 -1146 78 -1640 55z
                  m910 -219 c342 -16 783 -55 919 -81 117 -22 281 -90 382 -159 71 -50 178 -155
                  232 -229 134 -183 180 -326 202 -634 48 -676 26 -1795 -40 -2054 -86 -336
                  -368 -617 -705 -702 -169 -43 -862 -101 -1200 -101 l-133 0 -487 -275 c-269
                  -151 -490 -275 -492 -275 -1 0 -3 130 -3 289 l0 290 -42 5 c-24 4 -129 15
                  -235 26 -273 29 -384 60 -533 150 -254 153 -432 420 -469 705 -66 513 -54
                  1942 20 2235 42 169 130 323 258 451 119 118 256 201 416 252 118 37 449 75
                  845 97 107 6 218 12 245 13 124 8 639 6 820 -3z"/>
                  <path d="M2560 4351 l0 -109 78 -7 c272 -23 459 -81 637 -200 292 -194 470
                  -518 493 -902 l7 -108 109 -3 109 -3 -6 128 c-32 655 -452 1148 -1090 1277
                  -62 13 -263 35 -324 36 -10 0 -13 -28 -13 -109z"/>
                  <path d="M1508 4119 c-94 -15 -156 -53 -263 -162 -108 -110 -162 -192 -197
                  -297 -30 -91 -37 -373 -13 -545 58 -424 237 -787 535 -1085 281 -281 627 -458
                  1030 -526 47 -8 168 -17 270 -20 221 -7 291 4 420 68 70 34 104 60 196 150
                  145 141 169 188 169 328 0 87 -3 101 -33 165 -29 61 -57 93 -211 247 -153 153
                  -188 183 -247 210 -63 30 -78 33 -164 33 -82 0 -102 -4 -150 -26 -30 -15 -82
                  -50 -115 -79 -96 -83 -125 -95 -230 -95 -122 0 -148 15 -316 184 -117 117
                  -139 144 -157 194 -44 117 -24 204 73 321 79 93 99 132 116 215 15 77 1 168
                  -37 243 -29 56 -295 334 -386 403 -86 65 -189 91 -290 74z m102 -219 c51 -14
                  385 -351 395 -398 12 -59 -3 -98 -64 -170 -164 -189 -194 -400 -87 -611 34
                  -65 288 -329 369 -382 92 -60 175 -84 287 -83 143 2 241 42 361 149 65 58 103
                  72 166 60 32 -6 66 -34 206 -173 93 -92 175 -179 183 -194 17 -32 18 -101 3
                  -131 -20 -39 -153 -167 -209 -202 -94 -57 -159 -68 -355 -62 -252 9 -415 44
                  -625 133 -402 171 -733 514 -891 922 -74 193 -109 390 -109 614 0 225 23 287
                  159 429 51 54 89 85 116 94 49 17 51 17 95 5z"/>
                  <path d="M2560 3911 l0 -110 43 -5 c23 -3 69 -8 102 -11 216 -21 407 -133 509
                  -298 72 -117 109 -248 119 -417 l2 -45 109 -3 109 -3 -6 108 c-15 251 -115
                  483 -273 634 -137 131 -351 225 -554 244 -36 3 -86 8 -112 11 l-48 5 0 -110z"/>
                  <path d="M2562 3463 l3 -108 70 -6 c163 -15 236 -88 253 -253 l7 -71 109 -3
                  109 -3 -6 85 c-12 151 -57 255 -145 338 -86 80 -213 128 -340 128 l-63 0 3
                  -107z"/>
                  </g>
                  </svg>
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
              <span className="futer-email">{props.mail}</span>
              <a
                  href="mailto:infogroundshop@gmail.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="futer-link2"
                >
              <svg viewBox="0 0 1024 1024" className="futer-mailicn">
                <path d="M128 337.963l359.552 251.691c14.507 10.027 33.92 10.496 48.939 0l359.509-251.691v430.037c0 11.605-4.693 22.229-12.587 30.080s-18.475 12.587-30.080 12.587h-682.667c-11.605 0-22.229-4.693-30.080-12.587s-12.587-18.475-12.587-30.080zM42.667 256.512v511.488c0 35.328 14.507 67.371 37.547 90.453s55.125 37.547 90.453 37.547h682.667c35.328 0 67.371-14.507 90.453-37.547s37.547-55.125 37.547-90.453v-511.488c0-0.427 0-0.853 0-1.28-0.213-35.029-14.635-66.773-37.547-89.685-23.083-23.040-55.125-37.547-90.453-37.547h-682.667c-35.328 0-67.371 14.507-90.453 37.547-22.912 22.912-37.333 54.656-37.547 89.728 0 0.213 0 0.469 0 0.725zM891.477 236.971l-379.477 265.6-379.477-265.6c2.048-4.096 4.779-7.808 8.021-11.051 7.893-7.893 18.517-12.587 30.123-12.587h682.667c11.605 0 22.229 4.693 30.080 12.587 3.243 3.243 5.973 6.997 8.021 11.051z"></path>
              </svg>
              </a>
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
            fill: var(--dl-color-gray-2);
            width: 30px;
            height: 30px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .futer-vibericn:hover {
            fill: #9f705a;
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
            fill: var(--dl-color-gray-2);
            width: 30px;
            height: 30px;
            transition: 0.3s;
            margin-left: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .futer-vibericn1:hover {
            fill: #9f705a;
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
              height: 25px;
            }
            .futer-secphonenum {
              color: var(--dl-color-gray-2);
              font-size: 16px;
            }
            .futer-vibericn1 {
              width: 25px;
              height: 25px;
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
            .futer-container {
              flex-direction: column;
            }
            .futer-policy {
              width: 100%;
              align-self: flex-start;
            }
            .futer-name-logo {
              padding: var(--dl-space-space-halfunit);
            }
            .futer-text {
              font-size: 23px;
            }
            .futer-image {
              width: 35px;
              height: 35px;
            }
            .futer-text1 {
              font-size: 18px;
            }
            .futer-text2 {
              font-size: 18px;
            }
            .futer-contacts {
              width: 100%;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
            }
            .futer-contactshead {
              align-self: flex-start;
              padding-top: var(--dl-space-space-halfunit);
              padding-left: 0px;
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-halfunit);
            }
            .futer-headtext {
              font-size: 23px;
              text-align: left;
            }
            .futer-contacts1 {
              align-self: flex-start;
            }
            .futer-firstphonenum {
              font-size: 18px;
            }
            .futer-vibericn {
              width: 25px;
              height: 25px;
              margin-left: 5px;
            }
            .futer-secphonenum {
              font-size: 18px;
            }
            .futer-vibericn1 {
              width: 25px;
              height: 25px;
              margin-left: 5px;
            }
            .futer-telegramicn {
              width: 25px;
              height: 25px;
              margin-left: 5px;
            }
            .futer-email {
              font-size: 18px;
            }
            .futer-mailicn {
              width: 25px;
              height: 25px;
            }
            .futer-delivery {
              width: 100%;
            }
            .futer-deliveryhead {
              padding: var(--dl-space-space-halfunit);
              align-self: flex-start;
            }
            .futer-deliveryhead1 {
              font-size: 23px;
            }
            .futer-addr {
              font-size: 18px;
              align-self: flex-start;
              text-align: left;
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
            .futer-contactshead {
              justify-content: flex-end;
            }
            .futer-firstcontact {
              padding: var(--dl-space-space-halfunit);
            }
            .futer-secondcontact {
              padding-top: 0px;
              padding-bottom: 0px;
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
  mail: 'infogroundshop@gmail.com',
  addr: 'Г.п Радошкович, ул. Серебрянка 43А',
  imageSrc1: '/Icons/logo-200h.png',
  contacts: 'Контактная информация',
  imageAlt: 'image',
  text4: 'Политика безопасности',
  text5: 'Условия соглашения',
  delivery: 'Доставка',
  heading: 'GroundShop',
}

Futer.propTypes = {
  mail: PropTypes.string,
  addr: PropTypes.string,
  imageSrc1: PropTypes.string,
  contacts: PropTypes.string,
  imageAlt: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  delivery: PropTypes.string,
  heading: PropTypes.string,
}

export default Futer
