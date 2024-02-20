import React from 'react';

class HomeOrderForm extends React.Component {
  handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements['Поле для имени'].value;
    const phone = event.target.elements['строка для телефона'].value;

    event.target.elements['Agreement'].checked = false;

    try {
      const response = await fetch('api/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('GroundshopSite' + ':-]S8.xj4@-4m.9W)d9:C:G@aVg=8.F')
        },
        body: JSON.stringify({
          name: name,
          phone: phone,
          comment: '',
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      alert('Сообщение отправлено, мы свяжемся с вами в ближайшее время');
      event.target.elements['Поле для имени'].value = '';
      event.target.elements['строка для телефона'].value = '';
    } catch (error) {
      alert('Отправка временно недоступна, попробуйте позже');
    }
  };
  
    render() {
      return (
        <>
        <div className="home-order-form">
            <div className="home-order-title">
              <h1 className="home-text16">Оформить заказ, консультацию</h1>
            </div>
            <form className="home-form" onSubmit={this.handleSubmit}>
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
          <style jsx>
        {`
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
      );
    }
  }
  
  export default HomeOrderForm

  