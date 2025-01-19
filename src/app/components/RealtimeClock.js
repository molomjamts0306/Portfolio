import React, { useState, useEffect } from 'react';

const RealtimeClock = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = { weekday: 'short', month: 'short', day: '2-digit' };
      const date = now.toLocaleDateString('en-US', options);
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      const formattedTime = `${date} ${hours}.${minutes} ${period}`;
      setTime(formattedTime);
    };

    const intervalId = setInterval(updateClock, 1000);
    updateClock();

    return () => clearInterval(intervalId);
  }, []);

  return <div>{time}</div>;
};

export default RealtimeClock;
