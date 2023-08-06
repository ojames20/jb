import React, { useState, useEffect } from 'react';
import './Location.css';

import dubai from '../../images/Dubai.jpg';
import honkong from   '../../images/Honkong.jpg';
import london from '../../images/London.jpg';
import monaco from '../../images/Monaco.jpg';
import madrid from '../../images/Madrid.jpg';
import munich from '../../images/Munich.jpg';

const Location = () => {
  const [data, setData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseMunich = await fetch(
          'https://worldtimeapi.org/api/timezone/Europe/Berlin'
        );
        const dataMunich = await responseMunich.json();

        const responseDubai = await fetch(
          'https://worldtimeapi.org/api/timezone/Asia/Dubai'
        );
        const dataDubai = await responseDubai.json();

        const responseLondon = await fetch(
          'https://worldtimeapi.org/api/timezone/Europe/London'
        );
        const dataLondon = await responseLondon.json();

        const responseMadrid = await fetch(
          'https://worldtimeapi.org/api/timezone/Europe/Madrid'
        );
        const dataMadrid = await responseMadrid.json();

        const responseMonaco = await fetch(
          'https://worldtimeapi.org/api/timezone/Europe/Monaco'
        );
        const dataMonaco = await responseMonaco.json();

        const responseHongKong = await fetch(
          'https://worldtimeapi.org/api/timezone/Asia/Hong_Kong'
        );
        const dataHongKong = await responseHongKong.json();

        setData([
          formatData(dataMunich),
          formatData(dataDubai),
          formatData(dataLondon),
          formatData(dataMadrid),
          formatData(dataMonaco),
          formatData(dataHongKong),
        ]);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [data, currentIndex]);

  const formatData = (response) => {
    const { datetime, timezone } = response;
    const time = datetime.slice(11, 16);
    return {
      timezone,
      time,
    };
  };

  // const getBackgroundColor = (index) => {
  //   const colors = ['#F9A826', '#00B8D9', '#7F00FF', '#FFC0CB', '#FF5630', '#36B37E', '#FFAB00'];
  //   return colors[index % colors.length];
  // };

  const getBackgroundImage = (index) => {
    const images = [munich, dubai, london, madrid, monaco, honkong];
    return `url(${images[index % images.length]})`;
  };

  return (
    <div 
    style={{
      backgroundImage: getBackgroundImage(currentIndex),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '40vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backgroundBlendMode: 'multiply',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
      <div className='time-middle'>
      
      {data.length > 0 ? (
        <div>
          <h2> {data[currentIndex].timezone.split('/')[1]}</h2>
          <p>{data[currentIndex].time}</p>
          <p></p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </div>
    </div>
  );
};

export default Location;
