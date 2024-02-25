import React, { useEffect } from 'react';

function Map() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=cadc0f5b-aa00-41e8-a2fe-4c66967b3337&lang=ru_RU";
    script.async = true;
    script.onload = () => {
      window.ymaps.ready(init);
    }
    document.body.appendChild(script);

    function init(){ 
      var myMap = new window.ymaps.Map("map", {
          center: [53.848480856519636,27.40076749999997], // координаты места, которое вы выбрали
          zoom: 10
      });

      // Создаем вторую метку с новыми координатами
      var myPlacemark2 = new window.ymaps.Placemark([53.848480856519636,27.40076749999997], {}, {
          preset: 'islands#redIcon' // стиль метки
      });

      // Добавляем вторую метку
      myMap.geoObjects.add(myPlacemark2);
    }
  }, []);

  return (
      <div id="map" style={{width: '100%', height: '100%'}}></div>
  );
}

export default Map;
